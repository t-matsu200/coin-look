import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import ExchangeComponent from '../component/exchange';
import SideBar from '../component/sideBar';
import FooterArrow from '../component/footerArrow';


export default function Exchange(props) {

  return (
    <MainLayout>
      <Seo pageTitle="【仮想通貨取引所の種類】￤初心者にオススメの国内の各仮想通貨取引所を紹介！ | CoinLook(コインルック)"
        pageDescription="【仮想通貨取引所について解説！】CoinLookは仮想通貨取引に興味のある方・取引を始めたい方に向けた仮想通貨取引解説サイトです。" />
      <BreadCrunb itemList={[{name: '取引所', path: '/exchange'}]} />
      <div>
        <div style={{display: 'flex'}}>
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

