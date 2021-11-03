import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import BeginnerComponent from '../component/beginner';
import SideBar from '../component/sideBar';
import FooterArrow from '../component/footerArrow';
import styles from '../styles/Home.module.scss';


export default function Beginner(props) {

  return (
    <MainLayout>
      <Seo pageTitle="【仮想通貨取引の注意点】￤仮想通貨取引初心者が気をつけるべき点を解説！ | CoinLook(コインルック)"
        pageDescription="【仮想通貨取引の注意点を解説！】CoinLookは仮想通貨取引に興味のある方・取引を始めたい方に向けた仮想通貨取引の解説サイトです。" />
      <BreadCrunb itemList={[{name: '初心者の注意点', path: '/beginner'}]} />
      <div>
        <div className={styles.display_flex}>
          <BeginnerComponent />
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
