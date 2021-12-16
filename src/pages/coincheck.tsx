import { useRouter } from 'next/router';
import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import SideBar from '../component/sideBar';
import FooterArrow from '../component/footerArrow';
import styles from '../styles/Home.module.scss';

import Coincheck from '../component/coincheck';


export default function CCComponent() {
    const router = useRouter();
    const { slug } = router.query;
    const title = 'Coincheck';

    return (
        <MainLayout>
            <Seo pageTitle={`【${title}】仮想通貨／ビットコイン国内取引所の${title}を紹介！`}
                pageDescription={`これから暗号資産(仮想通貨)投資を始めたい初心者向けに、${title}で口座開設するメリットを紹介！`} />
            <BreadCrunb itemList={[
                {name: 'サービス', path: '/exchange-jp'},
                {name: title, path: `/exchange-jp/${slug}`}
                ]} />
            <div>
                <div className={styles.display_flex}>
                    <Coincheck />
                    <SideBar />
                </div>
            </div>
            <FooterArrow />
        </MainLayout>
    );
}
