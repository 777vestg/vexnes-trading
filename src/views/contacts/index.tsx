import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CardsBlock from 'src/blocks/cards/cards-block';
import TopBlockWithBgc from 'src/blocks/top-block-with-bgc';
import Button from 'src/components/button';
import content from 'src/static-data/content';
import styles from './styles.module.scss';
import Image from 'next/image';

const ContactsView: React.FC = () => {
  const { locale } = useRouter();
  const { contactsPage } = content[locale as keyof typeof content];
  return (
    <>
      <Head>
        <title>{contactsPage.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBlockWithBgc title={contactsPage.title} />
      <div className={classNames('container', styles.contacts)}>
        <h2 className="fs-36-24">{contactsPage.subtitle}</h2>
        <div className={styles.locationWrap}>
          <ul className={styles.rightBlockList}>
            {contactsPage.contactsList.map((item, index) => (
              <li key={index}>
                <div
                  className={styles.icons}
                  dangerouslySetInnerHTML={{ __html: item.image }}
                />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <iframe
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=%D0%94%D0%B5%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%22%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%22%2C%20%D0%9E%D1%85%D0%BE%D1%82%D0%BD%D1%8B%D0%B9%20%D1%80%D1%8F%D0%B4%2C%20%D0%B4.%202&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
            title='Деловой центр "Москва", Охотный ряд, д. 2'
            aria-label='Деловой центр "Москва", Охотный ряд, д. 2'
          />
        </div>
      </div>
    </>
  );
};

export default ContactsView;
