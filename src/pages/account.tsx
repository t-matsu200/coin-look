import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import AccountComponent from '../component/account';
import SideBar from '../component/sideBar';
import FooterArrow from '../component/footerArrow';
import styles from '../styles/Home.module.scss';


export default function Account(props) {

  return (
    <MainLayout>
      <Seo pageTitle="【初心者向け】仮想通貨／ビットコイン取引所の口座開設方法￤国内の各仮想通貨取引所の口座開設方法を紹介！"
        pageDescription="これから暗号資産(仮想通貨)投資を始めたい初心者向けに、国内の各仮想通貨取引所の口座開設方法・複数取引所を利用するメリットなどを紹介！" />
      <BreadCrunb itemList={[{name: '口座開設', path: '/account'}]} />
      <div>
        <div className={styles.display_flex}>
          <AccountComponent />
          <SideBar />
        </div>
      </div>
      <FooterArrow />
    </MainLayout>
  );
}

export const getStaticProps = async () => {

  return {
    props: {
    },
    revalidate: 60,
  };
};

