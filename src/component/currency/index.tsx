import styles from './index.module.scss';
import ContentHeader from '../contentHeader';
import TableContent from '../tableContent';
import Advertisement from '../advertisement';
import ExchangeLinkComponent from '../exchange-link';
import AppConstant from '../../constant';

import currencyLogo from '../../../public/img/bg-currency.png';
import bitcoinIcon from '../../../public/img/icon/icon-bitcoin.png';
import ethIcon from '../../../public/img/icon/icon-eth.png';
import adaIcon from '../../../public/img/icon/icon-ada.png';
import xrpIcon from '../../../public/img/icon/icon-xrp.png';
import xemIcon from '../../../public/img/icon/icon-xem.png';
import ltcIcon from '../../../public/img/icon/icon-ltc.png';
import lskIcon from '../../../public/img/icon/icon-lsk.png';
import pltIcon from '../../../public/img/icon/icon-plt.png';
import iostIcon from '../../../public/img/icon/icon-iost.png';
import jmyIcon from '../../../public/img/icon/icon-jmy.png';
import batIcon from '../../../public/img/icon/icon-bat.png';
import porcaIcon from '../../../public/img/icon/icon-porca.png';
import trxIcon from '../../../public/img/icon/icon-trx.png';


export default function AccountComponent() {

  const subTitle1 = '暗号資産の買い方・買うタイミング';
  const subTitle2 = '暗号資産の将来性';
  const subTitle3 = 'ビットコイン';
  const subTitle4 = 'イーサリアム（イーサ）';
  const subTitle5 = 'カルダノ（エイダコイン）';
  const subTitle6 = 'パレットトークン';
  const subTitle7 = 'IOST';
  const subTitle8 = 'JasmyCoin（ジャスミーコイン）';
  const subTitle9 = 'Lisk（リスク）';
  const subTitle10 = 'リップル';
  const subTitle11 = 'ネム（新通貨：シンボル）';
  const subTitle12 = 'ライトコイン';
  const subTitle13 = 'ポルカドット';
  const subTitle14 = 'トロン';
  const subTitle15 = 'ベーシックアテンショントークン（BAT）';
  const subTitle16 = '暗号資産の開発状況';
  const subTitle17 = '国内の暗号資産取引所で買える銘柄について まとめ';

  function makeLink(url: string, text=null) {
    if (text) {
      return <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
    }
    return <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
  }

  const bitPoint = makeLink('https://www.bitpoint.co.jp', 'BITPoint');
  const bitFlyer = makeLink('https://bitflyer.com/ja-jp', 'bitFlyer');
  const coincheck = makeLink('https://coincheck.com/ja', 'Coincheck');
  const dmmCoin = makeLink('https://bitcoin.dmm.com/', 'DMM Bitcoin');
  const gmoCoin = makeLink('https://coin.z.com/jp/', 'GMOコイン');
  const huobi = makeLink('https://coin.z.com/jp/', 'Huobi Japan');

  return (
    <>
      <div className="content">
        <div>
            <div className="content-head">
                <ContentHeader title="国内の取引所で買えるアルトコインの銘柄・特徴について｜初心者におすすめの暗号資産の買い方についても解説！" />
                <img src={currencyLogo.src} alt="国内の取引所で買えるアルトコインの銘柄について解説" width={584} height={440} />
            </div>
        </div>
        <div className="content-body">
          <div className="content-main">
              <p><span className="danger"><strong>暗号資産で儲けるためには、将来性があって安全な通貨を適切に選び、投資する必要があります。</strong></span></p>
              <p>近年、大きな流行りとなっている暗号資産、気になっている方も多いと思います。</p>
              <p>この記事では<strong>ビットコインをはじめ、国内の暗号資産取引所で買えるアルトコインの銘柄</strong>について解説します。</p>
              <p>暗号資産初心者におすすめの<span className="yellow-border">暗号資産の買い方・タイミング</span>や<span className="yellow-border">暗号資産の銘柄、開発状況</span>についても解説していきます。</p>
              <ExchangeLinkComponent />
          </div>

          <TableContent listItem={[
            {subTitle: subTitle1, path: '/account', as: '#sec1'},
            {subTitle: subTitle2, path: '/account', as: '#sec2'},
            {subTitle: subTitle3, path: '/account', as: '#sec3'},
            {subTitle: subTitle4, path: '/account', as: '#sec4'},
            {subTitle: subTitle5, path: '/account', as: '#sec5'},
            {subTitle: subTitle6, path: '/account', as: '#sec6'},
            {subTitle: subTitle7, path: '/account', as: '#sec7'},
            {subTitle: subTitle8, path: '/account', as: '#sec8'},
            {subTitle: subTitle9, path: '/account', as: '#sec9'},
            {subTitle: subTitle10, path: '/account', as: '#sec10'},
            {subTitle: subTitle11, path: '/account', as: '#sec11'},
            {subTitle: subTitle12, path: '/account', as: '#sec12'},
            {subTitle: subTitle13, path: '/account', as: '#sec13'},
            {subTitle: subTitle14, path: '/account', as: '#sec14'},
            {subTitle: subTitle15, path: '/account', as: '#sec15'},
            {subTitle: subTitle16, path: '/account', as: '#sec16'},
            {subTitle: subTitle17, path: '/account', as: '#sec17'}
            ]} />

          <Advertisement htmlString={AppConstant.coincheckRectBanner} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

          <h2 id="sec1">{subTitle1}</h2>
          <div>
              <div className="content-main">
                <h3>暗号資産の買い方</h3>
                <p>取引所に開設した口座に日本円を入金すると、その取引所内で暗号資産を購入できます。</p>
                <p>暗号資産取引所には<strong>「販売所」</strong>と<strong>「取引所」</strong>の2種類があります。<br/><strong>「販売所」</strong>では暗号資産取引所と直接暗号資産の取引を行います。<br/><strong>「取引所」</strong>では取引所に登録している個人同士(ユーザー間)で暗号資産の取引を行います。</p>
                <p><strong>「取引所」</strong>で取引した方が<span className="yellow-border">スプレッド（実質的な手数料）が安く抑えられる</span>ので、基本的には取引所での取引をおすすめします。<br/><strong>「販売所」</strong>でしか取り扱いのない銘柄もありますので、各取引所の案内を確認してみてください。</p>
                <p>所謂「板取引」というのは、取引所での取引をさす事が多いです。<br/>初心者の方が初めて「板取引」を行う場合、購入または売却価格を指定して注文する<span className="yellow-border">「指値注文」</span>が分かりやすいと思います。</p>
              </div>
              <div className="content-main">
                <h3>暗号資産を買うタイミング</h3>
                <p>大体の取引所では、各銘柄の<strong>暗号資産/日本円のチャート</strong>が確認できます。</p>
                <p>チャートから最大で約1年前までの価格変動が確認できますので、現在の価格が過去と比べてどの辺りを推移しているのかが確認できます。</p>
                <p>暗号資産の購入タイミングとしては、過去に比べ<span className="yellow-border">安い価格帯を推移している銘柄</span>を狙って少しずつ買い増しする事をおすすめします。</p>
                <p>暗号資産は投資と同じですので、<strong>人生を賭けるような無理な投資はNGです！</strong><br/>ポートフォリオの5%くらいが良いとされるレポートも有るようです。<br/>暗号資産購入は必ず余剰資金で購入するようにしましょう。</p>
                <p>また、暗号資産初心者の方には<span className="yellow-border">購入した通貨の長期保有</span>をおすすめします。<br/>短期間での売買は頻繁に価格推移を確認しなければならず、精神がすり減る作業になりますので、初心者にはおすすめしません。</p>
              </div>
          </div>

          <hr/>
          <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

          <h2 id="sec2">{subTitle2}</h2>
          <div>
            <div className="content-main">
              <p><strong>暗号資産には開発目的があります。</strong></p>
              <p>暗号資産の開発目的が時代にあっているか、人気が出そうかなどを見極める事が将来性を見極める判断材料となりそうです。</p>
              <p>各暗号資産の運営元の公式サイトなどを確認すると良いでしょう。<br/>英語サイトでもGoogle翻訳を使えば問題なく読む事ができます。</p>
              <p>他には暗号資産の<strong>時価総額</strong>や<strong>詐欺コインの危険性</strong>なども判断材料となり得ます。国内の取引所に上場されている銘柄は厳しい手続きを経て上場される為、詐欺の危険性は比較的少ないのではないかと思います。</p>
              <p>例として、現在の暗号資産の開発目的には以下のようなものがあります。</p>
              <h3>開発目的の例</h3>
              <ul className="padding-left-40">
                <li>決済に使われる</li>
                <li>海外送金に使われる</li>
                <li>スマートコントラクト（取引の信頼性・透明性・コスト削減等を期待）</li>
                <li>NFTマーケットプレイスなどのプラットフォームとなる</li>
              </ul>
            </div>
          </div>

          <h2 id="sec3">{subTitle3}</h2>
          <div className={styles.currency_logo}>
            <img src={bitcoinIcon.src} alt="ビットコイン　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>BTC</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>大体の取引所で取り扱い有り</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://bitcoin.org/ja/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/bitcoin")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・日本ではビッグカメラやDMM.comなどで決済可能。<br/>・決済に特化、徐々に使える場所が増えている。<br/>・過去にはビットコインとビットコインキャッシュにハードフォーク（分裂）した。<br/>・0.00000001 BTC = 1 Satoshi</td>
              </tr>
            </table>
          </div>

          <h2 id="sec4">{subTitle4}</h2>
          <div className={styles.currency_logo}>
            <img src={ethIcon.src} alt="イーサ　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>ETH</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>大体の取引所で取り扱い有り</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://ethereum.org/ja/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/ethereum")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・スマートコントラクト。<br/>・過去にはイーサリアムとイーサリアムクラシックにハードフォーク（分裂）した。<br/>・dApps（分散型アプリケーション）という管理者が介在しない非中央集権的なアプリケーションを構築できる事で有名。</td>
              </tr>
            </table>
          </div>

          <h2 id="sec5">{subTitle5}</h2>
          <div className={styles.currency_logo}>
            <img src={adaIcon.src} alt="カルダノ　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>Cardano（ADA）</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>・{bitPoint}<br/>・{gmoCoin}</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://cardano.org/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/cardano-foundation")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・独自のスマートコントラクト「Plutus(プルータス)」。<br/>・元はブロックチェーン技術を取り入れたオンラインカジノで利用。</td>
              </tr>
            </table>
          </div>

          <h2 id="sec6">{subTitle6}</h2>
          <div className={styles.currency_logo}>
            <img src={pltIcon.src} alt="パレットトークン　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>PLT</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>{coincheck}</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://hashpalette.com/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>-</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・コインチェックにて、<strong>国内としては初めてIEO（Initial Exchange Offering）が実施</strong><br/>・NFTのプラットフォーム「Pallet」で手数料の支払いとして利用される<br/>・ZOZO創業者前澤友作氏を引受先とする第三者割当増資で、約4.8億円の資金を調達<br/>・公式PLTウォレットアプリで簡単にステーキングが可能（{makeLink("https://apps.apple.com/us/app/id1581055631", "iOS")}・{makeLink("https://play.google.com/store/apps/details?id=com.palettechain.wallet&hl=ja&gl=US", "Android")} ）</td>
              </tr>
            </table>
          </div>

          <h2 id="sec7">{subTitle7}</h2>
          <div className={styles.currency_logo}>
            <img src={iostIcon.src} alt="IOST　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>IOST</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>・{coincheck}<br/>・{bitPoint}</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://iost.io/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/iost-official")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・ユーザーにオンラインサービスとデジタル商品の交換方法を提供するプラットフォームで使われる<br/>・医療分野で実証実験が進んでいるらしい<br/>・一定条件を満たしたユーザーを対象に、暗号資産（DON）の無料配布（エアドロップ）を行う</td>
              </tr>
            </table>
          </div>

          <h2 id="sec8">{subTitle8}</h2>
          <div className={styles.currency_logo}>
            <img src={jmyIcon.src} alt="ジャスミー　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>JASMY（JMY）</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>{bitPoint}</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://www.jasmy.co.jp/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/iost-official")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・スマートコントラクト<br/>・BITPoint上場後、数日で値上がり率100%以上を記録！<br/>・創業メンバーは、ソニー株式会社の第7代社長の安藤氏を筆頭に元ソニーのメンバー<br/>・Jasmy IoT Platformを使ったIoT開発環境・ブロックチェーンデータ分析が利用可能になり、個人情報の一元管理、運用が実現できるエコシステム<br/>・Jリーグ「サガン鳥栖」の公式スポンサー</td>
              </tr>
            </table>
          </div>

          <h2 id="sec9">{subTitle9}</h2>
          <div className={styles.currency_logo}>
            <img src={lskIcon.src} alt="リスク　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>LSK</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>・{coincheck}<br/>・{bitFlyer}<br/>・{gmoCoin}</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://lisk.com/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/LiskHQ")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・スマートコントラクト<br/>・メインとなるチェーンのほかにサイドチェーンを活用してトークンを構築していけることが特徴（スケーラビリティや開発の柔軟性）<br/>・プラットフォーム的な性質を持つブロックチェーン</td>
              </tr>
            </table>
          </div>

          <h2 id="sec10">{subTitle10}</h2>
          <div className={styles.currency_logo}>
            <img src={xrpIcon.src} alt="リップル　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>XRP</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>・{coincheck}<br/>・{bitFlyer}<br/>・{bitPoint}<br/>・{gmoCoin}<br/>・{dmmCoin}</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://ripple.com/xrp/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/ripple")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・高速で安価な国際送金。（海外送金の際に銀行を経由しない為、送金のプロセスが簡略化される）</td>
              </tr>
            </table>
          </div>

          <h2 id="sec11">{subTitle11}</h2>
          <div className={styles.currency_logo}>
            <img src={xemIcon.src} alt="ネム　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>XEM（新通貨：XYM）</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>・{coincheck}<br/>・{gmoCoin}<br/>・{dmmCoin}</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://t.co/hhDgOcobjj?amp=1")}<br/>※ Discordの招待リンクです</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/NemProject")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・新通貨XYM（Symbol）をXEM所有者に付与する方針？<br/>・ブロックを承認する作業であるハーベストでの報酬獲得が容易。<br/>・国内にも決済で使用できる店舗が多少存在する。<br/>・{makeLink("https://ja.wikipedia.org/wiki/Coincheck#%E6%9A%97%E5%8F%B7%E9%80%9A%E8%B2%A8%E6%B5%81%E5%87%BA%E4%BA%8B%E4%BB%B6", "コインチェック事件")}</td>
              </tr>
            </table>
          </div>

          <h2 id="sec12">{subTitle12}</h2>
          <div className={styles.currency_logo}>
            <img src={ltcIcon.src} alt="ライトコイン　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>LTC</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>大体の取引所で取り扱い有り</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://litecoin.org/ja/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/litecoin-project")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・元Googleの社員であるCharlie Lee氏がGithub上で公開したアルトコイン<br/>・ビットコインよりもトランザクション完了までのスピードが速く、より安い手数料で決済できることが特徴</td>
              </tr>
            </table>
          </div>

          <h2 id="sec13">{subTitle13}</h2>
          <div className={styles.currency_logo}>
            <img src={porcaIcon.src} alt="ポルカドット　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>DOT</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>大体の取引所で取り扱い有り</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://polkadot.network/ja/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/paritytech")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・Web3.0という世界の実現を目指す（個人情報をブロックチェーン上でユーザー同士が分散管理し、不正アクセスや情報漏洩のリスク軽減）<br/>・ポルカドットを介して異なるブロックチェーン同士（異なる暗号資産同士）を取引所などを介さずに運用できるようにする事を目指している<br/>・ステーキング利率が高め</td>
              </tr>
            </table>
          </div>

          <h2 id="sec14">{subTitle14}</h2>
          <div className={styles.currency_logo}>
            <img src={trxIcon.src} alt="トロン　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>TRX</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>・{bitPoint}<br/>・{huobi}</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://tron.network/index?lng=jap")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>{makeLink("https://github.com/tronprotocol")}</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・ブロックチェーン技術を利用し、デジタルコンテンツを配信する場を提供することを目的としたブロックチェーンプラットフォーム<br/>・クリエイターはトロン上で独自のトークンを発行し、売ることが可能</td>
              </tr>
            </table>
          </div>

          <h2 id="sec15">{subTitle15}</h2>
          <div className={styles.currency_logo}>
            <img src={batIcon.src} alt="BAT　ロゴ" width={180} height={180} />
          </div>
          <div className={styles.table_block}>
            <table>
              <tr>
                <th>通貨名</th>
                <td>BAT</td>
              </tr>
              <tr>
                <th>国内の取引所</th>
                <td>大体の取引所で取り扱い有り</td>
              </tr>
              <tr>
                <th>紹介サイト</th>
                <td>{makeLink("https://basicattentiontoken.org/")}</td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>-</td>
              </tr>
              <tr>
                <th>特徴</th>
                <td>・ウェブブラウザ<strong>Brave</strong>でブラウジング中に受信した広告を見るとBATが付与される<br/>・<strong>Brave</strong>で受け取ったBATは{bitFlyer}の口座に自動送金可能<br/>・<strong>Braveの認証済みクリエイター</strong>に投げ銭ができる（投げ銭を試してみたい方は{makeLink("https://vulnerability-page.tk/", "こちら")}のサイトにアクセスしてみてください。筆者が作成したサイトです。）</td>
              </tr>
            </table>
          </div>

          <hr />
          <Advertisement htmlString={AppConstant.huobiMinWide} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

          <h2 id="sec16">{subTitle16}</h2>
          <div>
            <div className="content-main">
              <p>暗号資産の開発状況は<span className="yellow-border">公式サイトのロードマップ</span>や<span className="yellow-border">GitHub上のソースコード</span>などから確認できます。<br/>GitHubのリンクは上の記事で紹介していますので、興味のある方は確認してみてください。</p>
              <p>全てではありませんが各暗号資産は<span className="yellow-border">国際会議</span>を開催しているので、そちらもチェックしておくと良いでしょう。</p>
              <p>また、<span className="yellow-border">Twitter公式アカウントのつぶやき</span>なども参考になりますので、フォローしておくのも良いでしょう。</p>
            </div>
          </div>

          <h2 id="sec17">{subTitle17}</h2>
          <div className="content-main">
            <div className="check-point">
              <ul className={styles.matome_ul}>
                  <li>初心者は<strong>安い価格帯を推移している銘柄を狙って少しずつ買い増し・長期保有</strong>がおすすめです。</li>
                  <li>各暗号資産で<strong>開発目的</strong>が異なります。</li>
                  <li><strong>ロードマップ・GitHub・国際会議・Twitter公式アカウント</strong>などから開発状況をキャッチアップできます。</li>
              </ul>
            </div>
          </div>
          <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
        </div>
      </div>
    </>
  );
}
