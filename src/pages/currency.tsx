import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';


export default function Home(props) {

  return (
    <MainLayout>
      <Seo />
      <BreadCrunb itemList={[{name: '通貨', path: '/currency'}]} />
      <div>
        <div>
        <div>鋭意製作中...</div>
        </div>
      </div>
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

