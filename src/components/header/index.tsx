import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import content from 'src/static-data/content';
import { IoChevronDownOutline } from 'react-icons/io5';
import Button from '../button';
import styles from './styles.module.scss';
import locations from 'src/static-data/content/locations';

const Header: React.FC = () => {
  const { locale, asPath, pathname } = useRouter();
  const { header } = content[locale as keyof typeof content];
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className={classNames('background-black', styles.header)}>
      <div className={classNames('container flex', styles.headerInner)}>
        <div className={styles.logoWrap}>
          <div className={styles.logoImageWrap}>
            <Link href={'/'}>
              <a>
                <Image
                  src={'/images/logo.svg'}
                  width={200}
                  height={101}
                  quality={100}
                  alt="logo"
                />
              </a>
            </Link>
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className={classNames(styles.menuButton, {
              [styles.activeButton]: showMenu,
            })}
          />
        </div>

        <div
          className={classNames(styles.headerMenuWrap, {
            [styles.activeMenu]: showMenu,
          })}
        >
          <ul className={classNames('flex', styles.headerMenu)}>
            {header.menuList.map((item, index) => (
              <li
                className={classNames(
                  item.subItems.length > 0 ? styles.itemWithSubitems : '',
                  {
                    [styles.activeLink]: pathname == item.link,
                  }
                )}
                key={index}
              >
                <Link href={item.link}>
                  <a
                    onClick={() => setShowMenu(false)}
                    target={item.linkType}
                    className={classNames(styles.topLink, 'fs-16')}
                  >
                    {item.name}{' '}
                    {item.subItems.length > 0 && <IoChevronDownOutline />}
                  </a>
                </Link>
                {item.subItems.length > 0 && (
                  <div className={styles.subItemsWrap}>
                    <ul className={styles.subItems}>
                      {item.subItems.map((subItem, index) => (
                        <Link key={index} href={subItem.link}>
                          {subItem.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.emptySpace}></div>
        </div>

        <div className={styles.buttonsWrap}>
          <div className={styles.locationWrap}>
            <Image
              className={styles.currentLocation}
              src={header.location.flag}
              width={30}
              height={30}
              alt={header.location.name}
            />
            <ul className={styles.locationsList}>
              {locations
                .filter((location) => location.name !== header.location.name)
                .map((location, index) => (
                  <Link key={index} href={asPath} locale={location.name}>
                    <a>
                      <Image
                        src={location.flag}
                        width={30}
                        height={30}
                        layout="fixed"
                        alt={location.name}
                      />
                    </a>
                  </Link>
                ))}
            </ul>
          </div>
          <Button
            link={header.loginButton.link}
            type="outlined"
            text={header.loginButton.name}
            target="_blank"
          />
          <Button
            type="outlined"
            className={styles.registrationButton}
            text={header.registrationButton.name}
            link={header.registrationButton.link}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
