import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import CoincheckIEOComponent from '../component/coincheck-ieo';
import SideBar from '../component/sideBar';
import FooterArrow from '../component/footerArrow';
import styles from '../styles/Home.module.scss';


export default function IEOComponent() {

    return (
        <MainLayout>
            <Seo pageTitle="【Coincheck IEO】2022年夏にCoincheckとFINANCIEがIEOによるトークン発行！"
                pageDescription='CoincheckとFINANCIEがIEOに向け契約を締結しました。この記事ではその内容について説明していきます。' />
            <BreadCrunb itemList={[{name: 'IEO', path: '/ieo'}]} />
            <div>
                <div className={styles.display_flex}>
                    <CoincheckIEOComponent />
                    <SideBar />
                </div>
            </div>
            <FooterArrow />
        </MainLayout>
    );
}