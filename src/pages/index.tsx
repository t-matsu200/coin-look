import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import HomeComponent from '../component/home';


export default function Home(props) {

  return (
    <MainLayout>
      <Seo />
      <BreadCrunb />
      <div>
        <div>
          <HomeComponent />
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

