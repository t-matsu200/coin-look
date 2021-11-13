import Link from 'next/link';

import styles from './index.module.scss';
import ContentHeader from '../contentHeader';
import Advertisement from '../advertisement';
import AppConstant from '../../constant';


export default function ExchangeJpComponent() {

  return (
    <>
      <div className={styles.content}>
        <div>
            <div className={styles.content_head} style={{paddingBottom: '0'}}>
                <ContentHeader title="国内の各暗号資産取引所 一覧" />
            </div>
        </div>

        <div className={styles.content_body}>
          <div className={styles.content_main}>
              <p>国内の仮想通貨取引所の紹介ページのリンク集となります。</p>
              <p>各取引所で利用できる便利でお得なサービスについて解説していますので、<br/>是非チェックしてみてください。</p>
              <div className="check-point">
                <ul>
                  <li>
                    <Link href="/exchange-jp/[slug]" as="/exchange-jp/coincheck">Coincheck 紹介ページ</Link>
                  </li>
                  <li>
                    <Link href="/exchange-jp/[slug]" as="/exchange-jp/bitFlyer">bitFlyer 紹介ページ</Link>
                  </li>
                  <li>
                    <Link href="/exchange-jp/[slug]" as="/exchange-jp/gmocoin">GMO コイン 紹介ページ</Link>
                  </li>
                </ul>
              </div>
          </div>

          <Advertisement htmlString={AppConstant.huobiRect} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
        </div>
      </div>
    </>
  );
}
