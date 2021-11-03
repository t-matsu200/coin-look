import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import CurrencyComponent from '../component/currency';
import SideBar from '../component/sideBar';
import FooterArrow from '../component/footerArrow';
import styles from '../styles/Home.module.scss';


export default function Currency(props) {

  return (
    <MainLayout>
      <Seo pageTitle="【仮想通貨の種類】￤国内の仮想通貨取引所で買える銘柄を紹介！ | CoinLook(コインルック)"
        pageDescription="【仮想通貨の銘柄について解説！】CoinLookは仮想通貨取引に興味のある方・取引を始めたい方に向けた仮想通貨取引の解説サイトです。" />
      <BreadCrunb itemList={[{name: '通貨', path: '/account'}]} />
      <div>
        <div className={styles.display_flex}>
          <CurrencyComponent />
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

