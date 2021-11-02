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
      <Seo pageTitle="【仮想通貨取引所の口座開設】￤国内の各仮想通貨取引所の口座開設方法を紹介！ | CoinLook(コインルック)"
        pageDescription="【仮想通貨取引所の口座開設方法について解説！】CoinLookは仮想通貨取引に興味のある方・取引を始めたい方に向けた仮想通貨取引の解説サイトです。" />
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

