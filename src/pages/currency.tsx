import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import CurrencyComponent from '../component/currency';
import SideBar from '../component/sideBar';
import FooterArrow from '../component/footerArrow';
import styles from '../styles/Home.module.scss';


export default function Currency(props) {
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString();

  return (
    <MainLayout>
      <Seo pageTitle={`【${year}年${month}月最新】仮想通貨のおすすめ銘柄・特徴￤国内の仮想通貨取引所で買える銘柄を紹介！`}
        pageDescription="おすすめの仮想通貨の銘柄や特徴を初心者にも分かりやすく解説しています。" />
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

