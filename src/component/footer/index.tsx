import Link from 'next/link';
import styles from './index.module.scss';
import logo from '../../../public/img/title.png';


function Footer() {

    return (
        <footer className={styles.container}>
            <div className={styles.footer}>
                <div>
                    <div className={styles.footer_logo}>
                        <Link href="/">
                            <img src={logo.src}  alt="CoinLook" width={184} height={60} />
                        </Link>
                    </div>
                    <div className={styles.footer_desc}>
                        <span>coin-look.pages.dev</span>
                    </div>
                    <div className={styles.footer_logo}>
                        <span>© CoinLook All Rights Reserved.</span>
                    </div>
                </div>
                <div className={styles.footer_sitemap}>
                    <div className={styles.sitemap_primary}>
                        <div className={styles.sitemap_list}>
                            <p className={styles.sitemap_list_label}>カテゴリ</p>
                            <ul className={styles.sitemap_list}>
                                <li><Link href="/exchange">取引所</Link></li>
                                <li><Link href="/account">口座開設</Link></li>
                                <li><Link href="/currency">通貨</Link></li>
                                <li><Link href="/terms">規約</Link></li>
                                <li><Link href="/policy">ポリシー</Link></li>
                            </ul>
                        </div>
                        <div className={styles.sitemap_list}>
                            <p className={styles.sitemap_list_label}>取引所一覧</p>
                            <ul className={styles.sitemap_list}>
                                <li><Link href="/exchange-jp/[slug]" as="/exchange-jp/coincheck"><a>Coincheck</a></Link></li>
                                <li><Link href="/exchange-jp/[slug]" as="/exchange-jp/bitFlyer"><a>bitFlyer</a></Link></li>
                                <li><Link href="/exchange-jp/[slug]" as="/exchange-jp/gmocoin"><a>GMOコイン</a></Link></li>
                                <li><Link href="/exchange-jp/[slug]" as="/exchange-jp/bitpoint"><a>BITPoint</a></Link></li>
                                <li><a href="https://px.a8.net/svt/ejp?a8mat=3HOQGX+3SCAB6+3OP8+HWI5T" target="_blank" rel="noopener noreferrer">DMM Bitcoin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
