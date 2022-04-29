import { useRouter } from 'next/router';
import MainLayout from '../../../layouts';
import Seo from '../../../component/seo';
import BreadCrunb from '../../../component/breadCrumb';
import SideBar from '../../../component/sideBar';
import FooterArrow from '../../../component/footerArrow';
import styles from '../../../styles/Home.module.scss';

import CoincheckIEOComponent from '../../../component/ieo/coincheck-ieo';
import GmoCoinIEOComponent from '../../../component/ieo/gmocoin-ieo';


export default function IEOSlugComponent() {
    const router = useRouter();
    const { slug } = router.query;

    function switchIEO() {
        let Component = CoincheckIEOComponent;
        switch (slug) {
            case 'gmocoin':
                Component = GmoCoinIEOComponent;
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
            case 'gmocoin':
                title = 'GMO コイン';
                break;
            default:
                break;
        }
        return title;
    }

    function getPageTitle() {
        let pageTitle = '【Coincheck IEO】2022年夏にCoincheckとFINANCIE（フィナンシェ）がIEOによるトークン発行！';
        switch (slug) {
            case 'gmocoin':
                pageTitle = 'GMO コイン';
                break;
            default:
                break;
        }
        return pageTitle;
    }

    function getPageDescription() {
        let pageDescription = 'CoincheckとFINANCIEがIEOによる資金調達実現に向けた契約締結を発表しました。この記事ではその詳細について説明していきます。';
        switch (slug) {
            case 'gmocoin':
                pageDescription = 'GMO コイン';
                break;
            default:
                break;
        }
        return pageDescription;
    }

    return (
        <MainLayout>
            <Seo pageTitle={getPageTitle()}
                pageDescription={getPageDescription()} />
            <BreadCrunb itemList={[
                {name: 'IEO', path: '/ieo'},
                {name: `${getTitle()}`, path: `/ieo/${slug}`}
                ]} />
            <div>
                <div className={styles.display_flex}>
                    {switchIEO()}
                    <SideBar />
                </div>
            </div>
            <FooterArrow />
        </MainLayout>
    );
}
