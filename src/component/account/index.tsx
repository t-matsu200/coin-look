import styles from './index.module.scss';
import ContentHeader from '../contentHeader';
import TableContent from '../tableContent';
import Advertisement from '../advertisement';
import AppConstant from '../../constant';

import accountLogo from '../../../public/img/bg-account.png';
import bgCoincheckLogo from '../../../public/img/bg-coincheck.png';
import bgBitFlyerLogo from '../../../public/img/bg-bitFlyer.png';
import bgBitPointLogo from '../../../public/img/bg-bitpoint.png';
import bgGmoCoinLogo from '../../../public/img/bg-gmoCoin.png';
import bgDmmCoinLogo from '../../../public/img/bg-dmmCoin.png';
import bgHuobiLogo from '../../../public/img/bg-huobi.png';
import huobiCampaign from '../../../public/img/huobi-campaign.png';
import bitpointCampaign from '../../../public/img/bitpoint-campaign.png';


export default function AccountComponent() {

  const subTitle1 = '口座開設までの流れ';
  const subTitle2 = '口座開設後の流れ';
  const subTitle3 = '仮想通貨取引口座の入金手数料について';
  const subTitle4 = '複数の取引所で口座開設するメリット';
  const subTitle5 = '仮想通貨取引所の口座開設 まとめ';
  const coincheck = <a href={AppConstant.coincheck} target="_blank" rel="noopener noreferrer" style={{color: '#5fc7ca', textDecoration: 'underline'}}>Coincheck</a>

  return (
    <>
      <div className={styles.content}>
        <div>
          <div className={styles.content_head}>
              <ContentHeader title="仮想通貨取引所の口座開設方法について｜複数の仮想通貨取引所で口座開設するメリット、入金手数料を抑える方法についても解説！" />
              <img src={accountLogo.src} alt="仮想通貨取引口座の開設について解説" width={584} height={440} />
          </div>
        </div>
        <div className={styles.content_body}>
          <div className={styles.content_main}>
              <p><span className="danger"><strong>仮想通貨の売買を始めるには、仮想通貨取引所への口座開設（アカウント作成）をする必要があります。</strong></span></p>
              <p>この記事では<strong>取引所の口座開設の流れ</strong>について解説します。</p>
              <p>仮想通貨初心者にもおすすめの<span className="yellow-border">振込手数料がお得な銀行</span>や<span className="yellow-border">複数の取引所で口座開設するメリット</span>についても解説していきます。</p>
          </div>
          <TableContent listItem={[
            {subTitle: subTitle1, path: '/account', as: '#sec1'},
            {subTitle: subTitle2, path: '/account', as: '#sec2'},
            {subTitle: subTitle3, path: '/account', as: '#sec3'},
            {subTitle: subTitle4, path: '/account', as: '#sec4'},
            {subTitle: subTitle5, path: '/account', as: '#sec5'}
            ]} />
          
          <Advertisement htmlString={AppConstant.huobiRect} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

          <h2 id="sec1">{subTitle1}</h2>
          <div>
            <div className={styles.content_main}>
              <h3>流れ</h3>
              <ol className="padding-left-40">
                <li>メールアドレス・パスワードの登録</li>
                <li>専用フォームより個人情報を入力</li>
                <li>本人確認書類の提出（画像ファイルのアップロード）</li>
                <li>取引所が審査を開始</li>
                <li>審査完了後、確認書類が郵送される</li>
                <li>確認書類に記載されている口座開設コードの入力 </li>
              </ol>
              <span style={{opacity: 0.5, fontSize: '14px', paddingLeft: '20px'}}>※取引所によっては必要のない工程が含まれます</span>
              <p><strong>口座開設に費用は発生しません。</strong></p>
              <p>口座開設フォームの入力項目も少なく、初心者でも簡単に口座を開くことができます。<br/>各取引所でリリースしているスマートフォンアプリからでもアカウント登録が可能です。</p>
            </div>
          </div>

          <h2 id="sec2">{subTitle2}</h2>
          <div>
            <div className={styles.content_main}>
              <h3>流れ</h3>
              <ol className="padding-left-40">
                <li>取引所のWebサイトまたはスマートフォンアプリでログイン</li>
                <li>規約への同意（ログイン後、PDFが自動で表示されます）</li>
                <li>二段階認証の設定</li>
                <li>出金先銀行口座の連携</li>
              </ol>
              <p>取引所にログインしたら、最初に規約への同意が求められます。<br/>しっかりと目を通しておくと、仮想通貨に関しての理解も深まります。</p>
              <p>次は二段階認証の設定です。<br/>こちらはセキュリティに関わる事ですので必ず設定しましょう。</p>
              <p>携帯電話番号によるSNS認証か、認証アプリかを選べます。<br/>デフォルトでSNS認証が設定されているかもしれませんが、Google Authenticatorのような<strong>認証アプリを設定する</strong>事をおすすめします。</p>
              <p>また、取引所から日本円を出金する際に振込先となる銀行口座情報も連携する必要があります。</p>
            </div>
          </div>

          <h2 id="sec3">{subTitle3}</h2>
          <div>
              <div className={styles.content_main}>
                <p>仮想通貨を購入するには、取引所の口座に日本円を入金する必要があります。<br/>ここで気になるのが、<strong>入金手数料</strong>です。</p>
                <p>多くの取引所では<strong>住信SBIネット銀行</strong>からの入金は手数料無料となっています。<br/>特に{coincheck}は手数料が高めですので、<strong>住信SBIネット銀行</strong>の口座も併せて開設しておくと良いでしょう。</p>
                <p>入金方法や銀行口座によって手数料が変わる場合がありますので、注意してください。</p>
              </div>

              <h3>Coincheck</h3>
              <div className={styles.table_block}>
                <img src={bgCoincheckLogo.src} alt="Coincheck logo" width={400} height={300} />
                <table>
                  <thead>
                    <tr>
                      <th>入金手数料</th>
                      <td>・銀行振込：無料<br/>・コンビニ入金：770～1,018円<br/>・クイック入金：770～1,018円</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>板取引可能</th>
                      <td>BTC, ETH, FCT, MONA, PLT</td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td>・銀行振込で無料となるのは「GMOあおぞらネット銀行」と「住信SBIネット銀行」のみ<br/>・手数料が770円となる範囲は入金額29,000円まで</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.check_point}>
                  <a className={styles.account_link} href={AppConstant.coincheck}>口座開設する</a>
                </div>
              </div>

              <h3>bitFlyer</h3>
              <div className={styles.table_block}>
                <img src={bgBitFlyerLogo.src} alt="bitFlyer logo" />
                <table>
                  <thead>
                    <tr>
                      <th>入金手数料</th>
                      <td>
                        <div>・銀行振込：無料 or 330円<br/>・クイック入金：330円<br/>・コンビニ入金：330円</div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>板取引可能</th>
                      <td>BTC, XRP, ETH, XLM, MONA</td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td>・銀行振込で無料となるのは「住信SBIネット銀行」のみ<br/>・スマートフォンアプリからクイック本人確認が可能</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.check_point}>
                  <a className={styles.account_link} href="https://bitflyer.com/invitation?id=e3ilarco&lang=ja-JP">公式アプリをダウンロード</a>
                </div>
              </div>

              <h3>BITPoint</h3>
              <div className={styles.table_block}>
                <img src={bgBitPointLogo.src} alt="BITPoint logo" style={{margin: "60px 0 60px"}} />
                <table>
                  <thead>
                    <tr>
                      <th>入金手数料</th>
                      <td>
                        <div>・銀行振込：無料<br/>・即時入金：無料</div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>板取引可能</th>
                      <td>BTC, TRX, XRP, ETH, BCH, LTC, BAT</td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td>・即時入金ができるのは「住信SBIネット銀行」と「PayPay銀行」、「イオン銀行」のみ<br/>・国内の取引所では取扱の少ない銘柄を上場<br/>・口座開設キャンペーンをよく実施している</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.check_point}>
                  <a href={AppConstant.bitPoint} target="_blank" rel="noopener noreferrer">
                    <div className={styles.appeal_img}>
                      <img src={bitpointCampaign.src} alt="BITPoint" width={400} height={230} />
                    </div>
                  </a>
                </div>
              </div>

              <h3>Huobi Japan</h3>
              <div className={styles.table_block}>
                <img src={bgHuobiLogo.src} alt="Huobi logo" />
                <table>
                  <thead>
                    <tr>
                      <th>入金手数料</th>
                      <td>
                        <div>・銀行振込：無料<br/>・クイック入金：無料</div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>備考</th>
                      <td>・入出金手数料が無料<br/>・HT保有量に応じて取引手数料が割引</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.check_point}>
                  <a href={AppConstant.huobiJp} rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                    <div className={styles.appeal_img}>
                      <img src={huobiCampaign.src} alt="フォビジャパン（Huobi Japan)" />
                    </div>
                  </a>
                </div>
              </div>

              <h3>GMOコイン</h3>
              <div className={styles.table_block}>
                <img src={bgGmoCoinLogo.src} alt="GMO coin logo" />
                <table>
                  <thead>
                    <tr>
                      <th>入金手数料</th>
                      <td>
                        <div>・銀行振込：無料<br/>・即時入金：無料</div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>備考</th>
                      <td>・入出金手数料、送金手数料が無料</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>DMM Bitcoin</h3>
              <div className={styles.table_block}>
                <img src={bgDmmCoinLogo.src} alt="DMM Bitcoin logo" />
                <table>
                  <thead>
                    <tr>
                      <th>入金手数料</th>
                      <td>
                        <div>・銀行振込：無料<br/>・クイック入金：無料</div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>備考</th>
                      <td>・入出金手数料、送金手数料が無料<br/>・口座開設キャンペーンをよく実施している</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>

          <h2 id="sec4">{subTitle4}</h2>
          <div>
            <div className={styles.content_main}>
              <p>新規銘柄の上場の際に慌てて口座開設を申請しても、応募が多くて審査完了までに時間がかかる事があります。</p>
              <p>また、IEOなどの募集に応募したい場合にも口座開設が必要となります。</p>
              <p>複数の取引所で口座開設を済ませておくことで、<strong>すぐにアクションを起こせる状態</strong>となり、柔軟な対応が可能となります。</p>
              <p>上記で解説している取引所に関して<strong>口座開設費・維持費は無料</strong>ですので、口座開設をしておいても損をする事はないでしょう。</p>
            </div>
          </div>

          <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

          <h2 id="sec5">{subTitle5}</h2>
          <div className={styles.content_main}>
            <div className={styles.check_point}>
                <ul className={styles.matome_ul}>
                    <li><strong>口座開設費・維持費は無料です。</strong></li>
                    <li>口座開設審査に少し時間がかかる事があります。</li>
                    <li>日本円を入金する時は<strong>住信SBIネット銀行</strong>の口座が有ると入金手数料が安くてお得です。</li>
                    <li>複数の取引所で口座開設することで<strong>新規銘柄の上場・IEO</strong>などに対し、すぐにアクションを起こす事ができます。</li>
                </ul>
            </div>
          </div>
          <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
        </div>
      </div>
    </>
  );
}
