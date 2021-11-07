import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import ExchangeComponent from '../component/exchange';
import SideBar from '../component/sideBar';
import FooterArrow from '../component/footerArrow';
import styles from '../styles/Home.module.scss';


export default function Exchange(props) {

  return (
    <MainLayout>
      <Seo pageTitle="【初心者向けの日本国内取引所は？】仮想通貨／ビットコイン取引所のサービス比較￤初心者にオススメの国内の各仮想通貨取引所を紹介！"
        pageDescription="これから暗号資産(仮想通貨)投資を始めたい初心者向けにおすすめの国内の各仮想通貨取引所サービスを比較！" />
      <BreadCrunb itemList={[{name: '取引所', path: '/exchange'}]} />
      <div>
        <div className={styles.display_flex}>
          <ExchangeComponent />
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

