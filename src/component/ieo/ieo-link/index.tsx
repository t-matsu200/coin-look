import Link from 'next/link';

import styles from './index.module.scss';
import coincheckLogo from '../../../../public/img/coincheck.png';
import bitFlyerLogo from '../../../../public/img/bitFlyer.png';
import bitPointLogo from '../../../../public/img/BITPoint.png';
import gmoCoinLogo from '../../../../public/img/GMOcoin.png';
import dmmCoinLogo from '../../../../public/img/dmmBitcoin.png';


export default function IEOLinkComponent() {

  return (
    <>
        <div className={styles.check_point}>
            <ul>
                <li>
                    <div>
                        <img src={coincheckLogo.src} alt="Coincheck ロゴ" width={40} height={40} />
                        <Link href="/ieo/[slug]" as="/ieo/coincheck"><a>Coincheck IEO 紹介ページ</a></Link>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={gmoCoinLogo.src} alt="GMOコイン ロゴ" width={40} height={40} />
                        <Link href="/ieo/[slug]" as="/ieo/gmocoin"><a>GMO コイン IEO 紹介ページ</a></Link>
                    </div>
                </li>
            </ul>
        </div>
    </>
  );
}
