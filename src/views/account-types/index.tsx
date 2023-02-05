import classNames from 'classnames';
import { useRouter } from 'next/router';
import content from 'src/static-data/content';
import styles from './styles.module.scss';
import RowWithItems from './rowWithItems';
import Button from 'src/components/button';
import TopBlockWithBgc from 'src/blocks/top-block-with-bgc';
import Head from 'next/head';

const AccountTypesView: React.FC = () => {
  const { locale } = useRouter();
  const { accountTypesPage } = content[locale as keyof typeof content];

  return (
    <>
      <Head>
        <title>{accountTypesPage.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBlockWithBgc title={accountTypesPage.title} />
      <div className={classNames('container', styles.accountTypes)}>
        <div className={styles.table}>
          <RowWithItems
            className="button-line"
            items={accountTypesPage.table.account.items}
          />
          <RowWithItems items={accountTypesPage.table.bonusSystemTitle} />
          <RowWithItems
            className="button-line"
            items={accountTypesPage.table.bonusSystem}
          />
          <RowWithItems items={accountTypesPage.table.supportTitle} />
          <RowWithItems
            className="button-line"
            items={accountTypesPage.table.support}
          />
          <RowWithItems items={accountTypesPage.table.dealsTitle} />
          <RowWithItems
            className="button-line"
            items={accountTypesPage.table.deals}
          />
          <RowWithItems items={accountTypesPage.table.helpAnalystTitle} />
          <RowWithItems
            className="button-line"
            items={accountTypesPage.table.helpAnalyst}
          />
          <RowWithItems items={accountTypesPage.table.creditShoulderTitle} />
          <RowWithItems items={accountTypesPage.table.creditShoulder} />
          <RowWithItems
            className="button-line"
            items={accountTypesPage.table.noRiskDeals}
          />
          <RowWithItems items={accountTypesPage.table.studyTitle} />
          <RowWithItems items={accountTypesPage.table.study} />
          <RowWithItems items={accountTypesPage.table.studyVideo} />
          <div className={styles.buttonsWrap}>
            <div></div>
            <Button
              target={accountTypesPage.buttonsTarget}
              link={accountTypesPage.buttonLink}
              type="outlined"
              text={accountTypesPage.buttonsText}
            />
            <Button
              target={accountTypesPage.buttonsTarget}
              link={accountTypesPage.buttonLink}
              type="outlined"
              text={accountTypesPage.buttonsText}
            />
            <Button
              target={accountTypesPage.buttonsTarget}
              link={accountTypesPage.buttonLink}
              type="outlined"
              text={accountTypesPage.buttonsText}
            />
            <Button
              target={accountTypesPage.buttonsTarget}
              link={accountTypesPage.buttonLink}
              type="outlined"
              text={accountTypesPage.buttonsText}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountTypesView;
