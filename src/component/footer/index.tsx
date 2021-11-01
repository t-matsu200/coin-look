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
                            <img src={logo.src}  alt="CoinLook" />
                        </Link>
                    </div>
                    <div className={styles.footer_desc}>
                        <span>www.coin-look.net</span>
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
                                <li><a href="https://coincheck.com/ja/" target="_blank" rel="noopener noreferrer">Coincheck</a></li>
                                <li><a href="https://bitflyer.com/ja-jp/" target="_blank" rel="noopener noreferrer">bitFlyer</a></li>
                                <li><a href="https://www.bitpoint.co.jp/" target="_blank" rel="noopener noreferrer">BITPoint</a></li>
                                <li><a href="https://coin.z.com/jp/" target="_blank" rel="noopener noreferrer">GMOコイン</a></li>
                                <li><a href="https://bitcoin.dmm.com/" target="_blank" rel="noopener noreferrer">DMM Bitcoin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
