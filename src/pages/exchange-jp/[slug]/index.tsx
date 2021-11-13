import { useRouter } from 'next/router';
import MainLayout from '../../../layouts';
import Seo from '../../../component/seo';
import BreadCrunb from '../../../component/breadCrumb';
import SideBar from '../../../component/sideBar';
import FooterArrow from '../../../component/footerArrow';
import styles from '../../../styles/Home.module.scss';

import Coincheck from '../../../component/coincheck';
import BitFlyer from '../../../component//bitFlyer';
import GmoCoin from '../../../component/gmocoin';


export default function ExchangeSlugComponent() {
    const router = useRouter();
    const { slug } = router.query;

    function switchExchange() {
        let Component = Coincheck;
        switch (slug) {
            case 'bitFlyer':
                Component = BitFlyer;
                break;
            case 'gmocoin':
                Component = GmoCoin;
                break;
            default:
                break;
        }
        return <>
                    <Component />
               </>
    }

    function getTitle() {
        let title = 'Coincheck';
        switch (slug) {
            case 'bitFlyer':
                title = 'bitFlyer';
                break;
            case 'gmocoin':
                title = 'GMO コイン';
                break;
            default:
                break;
        }
        return title;
    }

    return (
        <MainLayout>
            <Seo pageTitle={`【${getTitle()}】仮想通貨／ビットコイン国内取引所の${getTitle()}を紹介！`}
                pageDescription={`これから暗号資産(仮想通貨)投資を始めたい初心者向けに、${getTitle()}で口座開設するメリットを紹介！`} />
            <BreadCrunb itemList={[
                {name: '国内取引所', path: '/exchange-jp'},
                {name: getTitle(), path: `/exchange-jp/${slug}`}
                ]} />
            <div>
                <div className={styles.display_flex}>
                    {switchExchange()}
                    <SideBar />
                </div>
            </div>
            <FooterArrow />
        </MainLayout>
    );
}
