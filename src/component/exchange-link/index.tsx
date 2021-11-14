import Link from 'next/link';

import styles from './index.module.scss';
import coincheckLogo from '../../../public/img/coincheck.png';
import bitFlyerLogo from '../../../public/img/bitFlyer.png';
import bitPointLogo from '../../../public/img/BITPoint.png';
import gmoCoinLogo from '../../../public/img/GMOcoin.png';
import dmmCoinLogo from '../../../public/img/dmmBitcoin.png';


export default function ExchangeLinkComponent() {

  return (
    <>
        <div className={styles.check_point}>
            <ul>
                <li>
                    <div>
                        <img src={coincheckLogo.src} alt="Coincheck ロゴ" width={40} height={40} />
                        <Link href="/exchange-jp/[slug]" as="/exchange-jp/coincheck">Coincheck 紹介ページ</Link>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={bitFlyerLogo.src} alt="bitFlyer ロゴ" width={40} height={40} />
                        <Link href="/exchange-jp/[slug]" as="/exchange-jp/bitFlyer">bitFlyer 紹介ページ</Link>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={gmoCoinLogo.src} alt="GMOコイン ロゴ" width={40} height={40} />
                        <Link href="/exchange-jp/[slug]" as="/exchange-jp/gmocoin">GMO コイン 紹介ページ</Link>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={bitPointLogo.src} alt="BITPoint ロゴ" width={40} height={40} />
                        <Link href="/exchange-jp/[slug]" as="/exchange-jp/bitpoint">BITPoint 紹介ページ</Link>
                    </div>
                </li>
            </ul>
        </div>
    </>
  );
}
