import styles from './index.module.scss';
import ContentHeader from '../../component/contentHeader';
import TableContent from '../../component/tableContent';
import chartLogo from '../../../public/img/chart1.svg';
import coincheckLogo from '../../../public/img/coincheck.png';
import bitFlyerLogo from '../../../public/img/bitFlyer.png';
import bitPointLogo from '../../../public/img/BITPoint.png';
import gmoCoinLogo from '../../../public/img/GMOcoin.png';
import dmmCoinLogo from '../../../public/img/dmmBitcoin.png';
import bgCoincheckLogo from '../../../public/img/bg-coincheck.png';
import bgBitFlyerLogo from '../../../public/img/bg-bitFlyer.png';
import bgBitPointLogo from '../../../public/img/bg-bitpoint.png';
import bgGmoCoinLogo from '../../../public/img/bg-gmoCoin.png';
import bgDmmCoinLogo from '../../../public/img/bg-dmmCoin.png';


export default function ExchangeComponent() {
    const colorRed = {color: '#ff0000'};
    const colorViolet = {color: 'violet'};
    const colorYellowBorder = {color: '#000000', backgroundColor: '#ffff00'};
    const colorLink = {color: '#5fc7ca', textDecoration: 'underline'}

    const subTitle1 = '国内の仮想通貨取引所一覧';
    const subTitle2 = '各取引所の特徴';
    const subTitle3 = '海外の仮想通貨取引所一覧';
    const subTitle4 = '海外の仮想通貨取引所をおすすめしない理由';
    const subTitle5 = '国内の仮想通貨取引所 まとめ';

    function makeLink(url: string, text: string, isViolet=false) {
        return <a href={url} target="_blank" rel="noopener noreferrer" style={isViolet ? colorViolet : colorLink}>{text}</a>
    }

    const coincheck = makeLink('https://coincheck.com/ja', 'Coincheck', true);
    const pallet = makeLink('https://hashpalette.com', 'パレットトークン');
    const pltStaking = makeLink('https://hashpalette.medium.com/plt%E3%82%A6%E3%82%A9%E3%83%AC%E3%83%83%E3%83%88%E3%82%B9%E3%83%86%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%AC%E3%82%A4%E3%83%89%E2%91%A1-%E3%82%B9%E3%83%86%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E8%A1%8C-c42abaf20120', 'ステーキング');

    const bitFlyer = makeLink('https://bitflyer.com/ja-jp', 'bitFlyer', true);
    const getBitcoin = makeLink('https://bitflyer.com/ja-jp/ex/getcoin',  'ビットコインをもらう');
    const polkadot = makeLink('https://polkadot.network/ja/', 'Polkadot');
    const tezos = makeLink('https://tezos.com', 'Tezos/XTZ');

    const bitPoint = makeLink('https://www.bitpoint.co.jp', 'BITPoint', true);
    const cardano = makeLink('https://cardano.org', 'CARDANO/ADA COIN');
    const jasmy = makeLink('https://www.jasmy.co.jp', 'Jasmy');


    return (
    <>
      <div className={styles.content}>
        <div>
            <div className={styles.content_head}>
                <ContentHeader title="国内の仮想通貨取引所について解説｜取引所毎の特徴・海外の取引所をおすすめしない理由を紹介！" />
                <img src={chartLogo.src} alt="国内の仮想通貨取引所について解説" />
            </div>
        </div>
        <div className={styles.content_body}>
            <div className={styles.content_main}>
                <p><span style={colorRed}><strong>仮想通貨取引初心者の方には、海外の取引所ではなく国内の取引所での仮想通取引をおすすめします。</strong></span></p>
                <p>この記事では仮想通貨初心者におすすめの<span style={colorYellowBorder}>国内取引所の特徴</span>や<span style={colorYellowBorder}>海外の取引所をおすすめしない理由</span>について解説していきます。</p>
                <p>この記事を読めば、<strong>仮想通貨初心者の方が日本国内の取引所を利用した方が良い理由</strong>が明らかになります。</p>
            </div>
            <TableContent listItem={[
              {subTitle: subTitle1, path: '/exchange', as: '#sec1'},
              {subTitle: subTitle2, path: '/exchange', as: '#sec2'},
              {subTitle: subTitle3, path: '/exchange', as: '#sec3'},
              {subTitle: subTitle4, path: '/exchange', as: '#sec4'},
              {subTitle: subTitle5, path: '/exchange', as: '#sec5'}
              ]} />

            <h2 id="sec1">{subTitle1}</h2>
            <p>この記事で紹介する<span style={colorYellowBorder}>国内の仮想通貨取引所</span>の一覧となります。</p><br/>
            <div className={styles.table_block}>
                <table>
                    <thead>
                        <tr>
                            <th>取引所名</th>
                            <th>銘柄数</th>
                            <th>板取引</th>
                            <th>スマホアプリ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://coincheck.com/ja" target="_blank" rel="noopener noreferrer">
                                    <div><img src={coincheckLogo.src} alt="Coincheck logo"></img></div>Coincheck
                                </a>
                            </td>
                            <td>17種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://bitflyer.com/ja-jp" target="_blank" rel="noopener noreferrer">
                                    <div><img src={bitFlyerLogo.src} alt="bitFlyer logo"></img></div>bitFlyer
                                </a>
                            </td>
                            <td>13種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://www.bitpoint.co.jp" target="_blank" rel="noopener noreferrer">
                                    <div><img src={bitPointLogo.src} alt="BITPoint logo"></img></div>BITPoint
                                </a>
                            </td>
                            <td>10種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://coin.z.com/jp" target="_blank" rel="noopener noreferrer">
                                    <div><img src={gmoCoinLogo.src} alt="GMO coin logo"></img></div>GMOコイン
                                </a>
                            </td>
                            <td>14種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://coin.z.com/jp" target="_blank" rel="noopener noreferrer">
                                    <div><img src={dmmCoinLogo.src} alt="DMM Bitcoin logo"></img></div>DMM Bitcoin
                                </a>
                            </td>
                            <td>12種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="sec2">{subTitle2}</h2>
            <h3>Coincheck</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo}>
                    <img src={bgCoincheckLogo.src} alt="Coincheck logo" />
                </div>
                <div className={styles.content_main}>
                    <p>2012年に創業のコインチェック株式会社が運営する暗号資産取引所。</p>
                    <p>国内では最多となる17銘柄を扱っており、初心者にもおすすめです。</p>
                    <p>また{coincheck}では、国内初のIEO（Initial Exchange Offering）として「{pallet}」が実施されました。<br/>今後もまたIEOが実施される可能性もありますので、募集に応募できるように口座開設を済ませておくと良いでしょう。</p>
                    <p>「{pallet}」を購入できるのは今の所、{coincheck}だけです。<br/>専用のウォレットアプリがリリースされており、初心者でも簡単に{pltStaking}を始めることができます。</p>
                    <p className={styles.app_link_title}>PLT公式ウォレットアプリ</p>
                    <div className={styles.app_icons}>
                        <a href="https://apps.apple.com/us/app/plt%E3%82%A6%E3%82%A9%E3%83%AC%E3%83%83%E3%83%88/id1581055631?itsct=apps_box_badge&amp;itscg=30200" className={styles.app_a_style_ios}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1629936000&h=b4b2be2c77906d82686b2bb3270eca0e" alt="Download on the App Store" className={styles.app_icon_style_ios} /></a>
                        <a href='https://play.google.com/store/apps/details?id=com.palettechain.wallet&hl=ja&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' className={styles.app_a_style2}><img alt='Google Play で手に入れよう' src='https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png' className={styles.app_icon_style2}/></a>
                    </div>
                    <p>口座開設後、{coincheck}にログインしたら<span style={colorRed}>必ず2段階認証の設定</span>をしましょう。<br/>先にスマートフォンにGoogle Authenticator（Google 認証システム）をインストールしておくとスムーズです。</p>
                    <p className={styles.app_link_title}>Google Authenticator</p>
                    <div className={styles.app_icons}>
                        <a href="https://apps.apple.com/us/app/google-authenticator/id388497605?itsct=apps_box_badge&amp;itscg=30200" className={styles.app_a_style_ios}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1284940800&h=7fc6b39acc8ae5a42ad4b87ff8c7f88d" alt="Download on the App Store" className={styles.app_icon_style_ios} /></a>
                        <a href='https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=ja&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' className={styles.app_a_style2}><img alt='Get it on Google Play' src='https://play.google.com/intl/us-en/badges/static/images/badges/en_badge_web_generic.png' className={styles.app_icon_style2} /></a>
                    </div>
                </div>

                {/* <div className={styles.check_point}>
                    <a className={styles.account_link} href="https://coincheck.com/registrations?code=VXNlcjoyOTA1Nzcw">口座開設する</a>
                    <div className={styles.appeal}><span>この招待リンクから本人確認を完了すると、500円をプレゼント！</span></div>
                    <ul className={styles.appeal_ul}>
                        <li>*この招待リンク以外から会員登録した場合には、報酬付与は無効となります。</li>
                        <li>*紹介URLをクリックして表示されたページから、別のページに移動してしまうと、報酬対象外になります。</li>
                        <li>*URLに"code="が含まれることを確認の上、メールアドレス登録をお願いいたします。</li>
                        <li>*報酬対象は月間10人までとなります。1ヶ月間の申請者数が10人を超えた場合は報酬対象外になります。</li>
                    </ul>
                </div> */}
            </div>

            <hr />
            <h3>bitFlyer</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo}>
                    <img src={bgBitFlyerLogo.src} alt="bitFlyer logo" />
                </div>
                <div className={styles.content_main}>
                    <p>2014年に創業の株式会社bitFlyerが運営する暗号資産取引所。</p>
                    <p>取扱銘柄は{coincheck}よりも少ないですが、ブラウザUIやスマホアプリが扱いやすくこちらも初心者におすすめです。</p>
                    <p>口座開設後のログイン時に表示されるメニューにある「{getBitcoin}」を経由して楽天やYahooショッピングを利用すると、商品価格の0.6%相当のビットコインがもらえます。（2021/11 現在）<br/>ポイントサイトと同じような感覚で利用でき、ビットコインがもらえる条件はその他にも色々あります。</p>
                    <p>また、テゾス({tezos})やポルカドット({polkadot})など、{coincheck}では扱っていない銘柄も取り扱っていますので、こちらも口座開設を済ませておく事をおすすめします。</p>
                </div>

                {/* <div className={styles.check_point}>
                    <a className={styles.account_link} href="https://bitflyer.com/invitation?id=e3ilarco&lang=ja-JP">公式アプリをダウンロード</a>
                    <div className={styles.appeal}><span>この招待リンクから公式アプリをダウンロードすると、<br/>500円をプレゼント！</span></div>
                    <ul className={styles.appeal_ul}>
                        <li>*この招待リンクはスマートフォンからアクセスした時のみ、有効となります。</li>
                        <li>*この招待リンク以外から会員登録した場合には、報酬付与は無効となります。</li>
                        <li>*紹介URLをクリックして表示されたページから、別のページに移動してしまうと、報酬対象外になります。</li>
                    </ul>
                </div> */}
            </div>

            <hr />
            <h3>BITPoint</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo} style={{margin: '80px 0 80px'}}>
                    <img src={bgBitPointLogo.src} alt="BITPoint logo" />
                </div>
                <div className={styles.content_main}>
                    <p>2016年に創業の株式会社ビットポイントジャパンが運営する暗号資産取引所。</p>
                    <p>ADAコイン({cardano})やジャスミー({jasmy})など他の国内取引所では扱っていない銘柄を立て続けに上場しています。<br/>今後も国内で取り扱いの少ない銘柄が上場される可能性がありますので、口座開設を済ませておく事をおすすめします。</p>
                    <p>また、こちらもブラウザUIやスマホアプリが扱いやすくので、初心者におすすめの取引所となります。</p>
                </div>


                {/* <div className={styles.check_point}>
                    <a className={styles.account_link} href="https://www.bitpoint.co.jp/lp/referral/?invitationCd=YIHBHIRLFT&afid=PaAKUxGd&argument=E4y65Xyx&dmai=a60e69a5d44eea">口座開設する</a>
                    <div className={styles.appeal}><span>この招待リンクから口座開設を完了すると、1000円をプレゼント！</span></div>
                    <ul className={styles.appeal_ul}>
                        <li>*この招待リンク以外から会員登録した場合には、報酬付与は無効となります。</li>
                        <li>*紹介URLをクリックして表示されたページから、別のページに移動してしまうと、報酬対象外になります。</li>
                        <li>*URLに"invitationCd="が含まれることを確認の上、口座開設をお願いいたします。</li>
                    </ul>
                </div> */}
            </div>

            <hr />
            <h3>GMOコイン</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo}>
                    <img src={bgGmoCoinLogo.src} alt="GMO coin logo" />
                </div>
                <div className={styles.content_main}>
                    <p>2016年に設立されたGMOコイン株式会社が運営する暗号資産取引所。</p>
                    <p>スマホアプリの使い勝手に定評があり、初心者にもおすすめの取引所です。</p>
                    <p>基本的な手数料が全部無料であることも特徴の一つです。<br/>他の取引所やウォレットに小額の送金が必要になった場合など、口座開設を済ませておくとスムーズに利用できて便利です。</p>
                </div>
            </div>

            <hr />
            <h3>DMM Bitcoin</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo}>
                    <img src={bgDmmCoinLogo.src} alt="DMM Bitcoin logo" />
                </div>
                <div className={styles.content_main}>
                    <p>2016年に設立された株式会社DMM Bitcoinが運営する暗号資産取引所。</p>
                    <p>アルトコインのレバレッジ取引を行うことができる点に特徴があります。<br/>レバレッジ取引とは元手を担保にその何倍もの取引を可能にする方法です。<br/>他の取引所ではアルトコインのレバレッジ取引は、あまり対応していないことが多いです。</p>
                    <p>また、送金手数料が他の取引所に比べ割安なのが特徴です。</p>
                    <p>よく口座開設キャンペーンを実施している印象がありますので、他の取引所よりもお得に口座開設できるかもしれません。</p>
                </div>
            </div>

            <h2 id="sec3">{subTitle3}</h2>
            <div className={styles.foreign_block}>
                <div className={styles.foreign_list}>
                    <p>海外にも多くの仮想通貨取引所が存在しています。</p>
                    <p>主な海外仮想通貨取引所を一覧で記載します。</p>
                    <ul>
                        <li>Binance(バイナンス)</li>
                        <li>bybit(バイビット)</li>
                        <li>CryptoGT(クリプトジーティー)</li>
                        <li>FTX(エフティーエックス)</li>
                        <li>MEXC（MXC）</li>
                        <li>Gate.io(ゲート)</li>
                        <li>BaseFEX(ベースフェックス)</li>
                        <li>Bitfinex(ビットフィネックス)</li>
                        <li>Poloniex(ポロニエックス)</li>
                        <li>Bitstamp(ビットスタンプ)</li>
                        <li>Bittrex(ビットトレックス)</li>
                        <li>Bithumb Global(ビッサムグローバル)</li>
                        <li>Bitforex(ビットフォレックス)</li>
                        <li>Bit-Z(ビットジー)</li>
                        <li>KuCoin(クーコイン)</li>
                        <li>UPbit(アップビット)</li>
                    </ul>
                </div>
            </div>

            <h2 id="sec4">{subTitle4}</h2>
            <div className={styles.content_main}>
                <p>海外の取引所には<span style={colorYellowBorder}>日本では上場されないような草コイン</span>が上場されていたり、<span style={colorYellowBorder}>ステーキングの利率</span>などが魅力的だと思います。</p>
                <p>しかし、よく分からないまま利用するのは<span style={colorRed}><strong>初心者には危険</strong></span>です。</p>
                <p>どうしても海外の取引所を利用したい場合は、<strong>税制や法律をよく理解</strong>してから臨む事をおすすめします。</p>
                <h3>海外の仮想通貨取引所を利用する場合に考慮すべきデメリット</h3>
                <p>・海外では<span style={colorRed}><strong>日本と異なる法律や規制</strong></span>が存在する為、思わぬトラブルが発生するかもしれません。</p>
                <p>・日本向けにサービスを提供しているにも関わらず日本での仮想通貨交換業の登録をしていない業者に対して、<span style={colorRed}><strong>金融庁は厳しく対処</strong></span>しています。</p>
                <p>・日本円を直接入金できない為、国内取引所で購入した仮想通貨を<span style={colorRed}><strong>海外取引所に送金</strong></span>する必要があります。</p>
                <p>・海外の取引所で売買した<span style={colorRed}><strong>仮想通貨の税金計算</strong></span>が国内で売買した場合と異なります。税金計算が複雑な為、初心者には向きません。</p>
                <p>・雑所得が20万円以上の場合、確定申告の際に<span style={colorRed}><strong>ステーキング報酬の利益分</strong></span>を雑所得に含める必要がある為、特に注意しましょう。</p>
            </div>

            <h2 id="sec5">{subTitle5}</h2>
            <div className={styles.content_main}>
                <div className={styles.check_point}>
                    <ul className={styles.matome_ul}>
                        <li>IEOや新規銘柄の上場に備え、すぐに売買はしなくても口座開設を済ませておくと良いでしょう。</li>
                        <li>仮想通貨初心者でも分かりやすいUIの国内取引所について解説しました。</li>
                        <li>仮想通貨初心者は海外の仮想通貨取引所の利用は控えた方が良いでしょう。</li>
                        <li>雑収入が20万円以上の場合、ステーキングやキャンペーンで得た仮想通貨にも課税されます。</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
