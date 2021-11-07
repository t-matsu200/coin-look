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
      <Seo pageTitle="【仮想通貨取引に注意点おける注意点とは？】仮想通貨／ビットコイン取引を始めたい初心者が気をつけるべき点を解説！"
        pageDescription="初心者向けが仮想通貨取引を始める際の注意点・税金について分かりやすく解説！" />
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
