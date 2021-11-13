import MainLayout from '../../layouts';
import Seo from '../../component/seo';
import BreadCrunb from '../../component/breadCrumb';
import SideBar from '../../component/sideBar';
import FooterArrow from '../../component/footerArrow';
import ExchangeJp from '../../component/exchange-jp';
import styles from '../../styles/Home.module.scss';


export default function ExchangeJpComponent() {

    return (
        <MainLayout>
            <Seo pageTitle={`【国内取引所】日本国内の仮想通貨／ビットコイン国内取引所を紹介！`}
                pageDescription='国内取引所の一覧ページです。各取引所の比較、メリットなどの確認にお使いください。' />
            <BreadCrunb itemList={[{name: '国内取引所', path: '/exchange-jp'}]} />
            <div>
                <div className={styles.display_flex}>
                    <ExchangeJp />
                    <SideBar />
                </div>
            </div>
            <FooterArrow />
        </MainLayout>
    );
}
