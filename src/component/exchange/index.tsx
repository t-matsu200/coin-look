import Link from 'next/link';
import styles from './index.module.scss';
import ContentHeader from '../../component/contentHeader';
import TableContent from '../../component/tableContent';
import Advertisement from '../advertisement';
import ExchangeLinkComponent from '../exchange-link';
import AppConstant from '../../constant';

import chartLogo from '../../../public/img/chart1.svg';
import coincheckLogo from '../../../public/img/coincheck.png';
import bitFlyerLogo from '../../../public/img/bitFlyer.png';
import bitPointLogo from '../../../public/img/BITPoint.png';
import gmoCoinLogo from '../../../public/img/GMOcoin.png';
import dmmCoinLogo from '../../../public/img/dmmBitcoin.png';
import huobiLogo from '../../../public/img/huobi.png';
import bgCoincheckLogo from '../../../public/img/bg-coincheck.png';
import bgBitFlyerLogo from '../../../public/img/bg-bitFlyer.png';
import bgBitPointLogo from '../../../public/img/bg-bitpoint.png';
import bgGmoCoinLogo from '../../../public/img/bg-gmoCoin.png';
import bgDmmCoinLogo from '../../../public/img/bg-dmmCoin.png';
import bgHuobiLogo from '../../../public/img/bg-huobi.png';
import huobiCampaign from '../../../public/img/huobi-campaign.png';
import bitpointCampaign from '../../../public/img/bitpoint-campaign.png';


export default function ExchangeComponent() {
    const colorViolet = {color: 'violet'};
    const colorLink = {color: '#5fc7ca', textDecoration: 'underline'}

    const subTitle1 = '国内の仮想通貨取引所一覧';
    const subTitle2 = '各取引所の特徴';
    const subTitle3 = '海外の仮想通貨取引所一覧';
    const subTitle4 = '海外の仮想通貨取引所をおすすめしない理由';
    const subTitle5 = '国内の仮想通貨取引所 まとめ';

    function makeLink(url: string, text: string, isViolet=false) {
        return <a href={url} target="_blank" rel="noopener noreferrer" style={isViolet ? colorViolet : colorLink}>{text}</a>
    }

    const coincheck = makeLink(AppConstant.coincheck, 'Coincheck', true);
    const pallet = makeLink('https://hashpalette.com', 'パレットトークン');
    const pltStaking = makeLink('https://hashpalette.medium.com/plt%E3%82%A6%E3%82%A9%E3%83%AC%E3%83%83%E3%83%88%E3%82%B9%E3%83%86%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%AC%E3%82%A4%E3%83%89%E2%91%A1-%E3%82%B9%E3%83%86%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E8%A1%8C-c42abaf20120', 'ステーキング');

    const getBitcoin = makeLink('https://bitflyer.com/ja-jp/ex/getcoin',  'ビットコインをもらう');
    const polkadot = makeLink('https://polkadot.network/ja/', 'Polkadot');
    const tezos = makeLink('https://tezos.com', 'Tezos/XTZ');

    const cardano = makeLink('https://cardano.org', 'CARDANO/ADA COIN');
    const jasmy = makeLink('https://www.jasmy.co.jp', 'Jasmy');
    const chainLink = makeLink('https://chain.link/', 'チェーンリンク（LINK）');

    return (
    <>
      <div className="content">
        <div>
            <div className="content-head">
                <ContentHeader title="国内の仮想通貨取引所の特徴・サービス比較｜国内取引所の特徴・おすすめする理由を紹介！" />
                <img src={chartLogo.src} alt="国内の仮想通貨取引所について解説" width={584} height={390} />
            </div>
        </div>
        <div className="content-body">
            <div className="content-main">
                <p><strong>仮想通貨取引初心者の方には、海外の取引所ではなく国内の取引所での仮想通取引をおすすめします。</strong></p>
                <p>この記事では仮想通貨初心者におすすめの<span className="yellow-border">国内取引所の特徴</span>や<span className="yellow-border">国内取引所をおすすめする理由</span>について解説していきます。</p>
                <ExchangeLinkComponent />
            </div>
            <TableContent listItem={[
              {subTitle: subTitle1, path: '/exchange', as: '#sec1'},
              {subTitle: subTitle2, path: '/exchange', as: '#sec2'},
              {subTitle: subTitle3, path: '/exchange', as: '#sec3'},
              {subTitle: subTitle4, path: '/exchange', as: '#sec4'},
              {subTitle: subTitle5, path: '/exchange', as: '#sec5'}
              ]} />

            <Advertisement htmlString={AppConstant.huobiRect} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

            <h2 id="sec1">{subTitle1}</h2>
            <p>この記事で紹介する<span className="yellow-border">国内の仮想通貨取引所</span>の一覧となります。</p><br/>
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
                                <a href={AppConstant.coincheck} target="_blank" rel="noopener noreferrer">
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
                            <td>14種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>
                                <a href={AppConstant.bitPoint} target="_blank" rel="noopener noreferrer">
                                    <div><img src={bitPointLogo.src} alt="BITPoint logo"></img></div>BITPoint
                                </a>
                            </td>
                            <td>10種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>
                                <a href={AppConstant.huobiJp} rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                                    <div><img src={huobiLogo.src} alt="Huobi logo"></img></div>Huobi Japan
                                </a>
                            </td>
                            <td>14種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>
                                <a href={AppConstant.gmoCoin} target="_blank" rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                                    <div><img src={gmoCoinLogo.src} alt="GMO coin logo"></img></div>GMOコイン
                                </a>
                            </td>
                            <td>14種類</td>
                            <td>○</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>
                                <a href={AppConstant.dmmCoin} target="_blank" rel="noopener noreferrer">
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
                    <img src={bgCoincheckLogo.src} alt="Coincheck logo" width={400} height={300} />
                </div>
                <div className="content-main">
                    <p>2012年に創業のコインチェック株式会社が運営する暗号資産取引所。</p>
                    <p>国内では最多となる17銘柄を扱っており、初心者にもおすすめです。</p>
                    <p><span className="yellow-border">貸暗号資産</span>というレンディングサービスがあり、保有している暗号資産を一定期間{coincheck}に預けることにより利用料が貰えます。<br/>14日間で年率1%、30日間で年率2%と預け入れる期間が長くなる程年率が高くなりますが、年率の高い枠は人気ですので申請が受理されるまでかなりかかります。<br/>参考までに、筆者が所有しているIOSTを30日間の枠で申請した所、貸し出されるまでに1ヶ月かかりました。</p>
                    <p>Coincheckで利用可能な各種サービスについては、<Link href="/exchange-jp/coincheck">こちら</Link>で解説しています。</p>

                    <div className="account-point">
                        <a className="account-link" href={AppConstant.coincheck} target="_blank" rel="noopener noreferrer">口座開設する</a>
                    </div>

                    <p>また{coincheck}では、国内初のIEO（Initial Exchange Offering）として「{pallet}」が実施されました。<br/>今後もまたIEOが実施される可能性もありますので、募集に応募できるように口座開設を済ませておくと良いでしょう。</p>
                    <p>「{pallet}」を購入できるのは今の所、{coincheck}だけです。<br/>専用のウォレットアプリがリリースされており、初心者でも簡単に{pltStaking}を始めることができます。</p>
                    <p className={styles.app_link_title}>PLT公式ウォレットアプリ</p>
                    <div className={styles.app_icons}>
                        <a href="https://apps.apple.com/us/app/plt%E3%82%A6%E3%82%A9%E3%83%AC%E3%83%83%E3%83%88/id1581055631?itsct=apps_box_badge&amp;itscg=30200" className={styles.app_a_style_ios}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1629936000&h=b4b2be2c77906d82686b2bb3270eca0e" alt="Download on the App Store" className={styles.app_icon_style_ios} /></a>
                        <a href='https://play.google.com/store/apps/details?id=com.palettechain.wallet&hl=ja&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' className={styles.app_a_style2}><img alt='Google Play で手に入れよう' src='https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png' className={styles.app_icon_style2}/></a>
                    </div>
                    <p>口座開設後、{coincheck}にログインしたら<span className="danger">必ず2段階認証の設定</span>をしましょう。<br/>先にスマートフォンにGoogle Authenticator（Google 認証システム）をインストールしておくとスムーズです。</p>
                    <p className={styles.app_link_title}>Google Authenticator</p>
                    <div className={styles.app_icons}>
                        <a href="https://apps.apple.com/us/app/google-authenticator/id388497605?itsct=apps_box_badge&amp;itscg=30200" className={styles.app_a_style_ios}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1284940800&h=7fc6b39acc8ae5a42ad4b87ff8c7f88d" alt="Download on the App Store" className={styles.app_icon_style_ios} /></a>
                        <a href='https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=ja&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' className={styles.app_a_style2}><img alt='Get it on Google Play' src='https://play.google.com/intl/us-en/badges/static/images/badges/en_badge_web_generic.png' className={styles.app_icon_style2} /></a>
                    </div>
                </div>
            </div>

            <hr />
            <h3>bitFlyer</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo}>
                    <img src={bgBitFlyerLogo.src} alt="bitFlyer logo" width={400} height={300} />
                </div>
                <div className="content-main">
                    <p>2014年に創業の株式会社bitFlyerが運営する暗号資産取引所。</p>
                    <p>取扱銘柄は{coincheck}よりも少ないですが、ブラウザUIやスマホアプリが扱いやすくこちらも初心者におすすめです。<br/>スマホアプリからだと<strong>クイック本人確認</strong>が利用できて始めやすいと思います。</p>
                    <p>口座開設後のログイン時に表示されるメニューにある「{getBitcoin}」を経由して楽天やYahooショッピングを利用すると、商品価格の0.6%相当のビットコインがもらえます。（2021/11 現在）<br/>ポイントサイトと同じような感覚で利用でき、ビットコインがもらえる条件はその他にも色々あります。</p>
                    <p>また、テゾス({tezos})やポルカドット({polkadot})など、{coincheck}では扱っていない銘柄も取り扱っていますので、こちらも口座開設を済ませておく事をおすすめします。</p>
                    <p>2021年11月11日に国内では珍しい{chainLink}の新規上場を発表しました。12月中に取扱開始予定となっています。</p>
                    <p>bitFlyerで利用可能な各種サービスについては、<Link href="/exchange-jp/bitFlyer">こちら</Link>で解説しています。</p>
                </div>

                <div className="account-point">
                    <a className="account-link" href="https://bitflyer.com/invitation?id=e3ilarco&lang=ja-JP" target="_blank" rel="noopener noreferrer">公式アプリをダウンロード</a>
                </div>
            </div>

            <hr />
            <h3>GMOコイン</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo}>
                    <img src={bgGmoCoinLogo.src} alt="GMO coin logo" width={400} height={300}/>
                </div>
                <div className="content-main">
                    <p>2016年に設立されたGMOコイン株式会社が運営する暗号資産取引所。</p>
                    <p>スマホアプリの使い勝手に定評があり、初心者にもおすすめの取引所です。</p>
                    <p>基本的な手数料が全部無料であることも特徴の一つです。<br/>他の取引所やウォレットに小額の送金が必要になった場合など、口座開設を済ませておくとスムーズに利用できて便利です。</p>
                    <p>GMOコインで利用可能な各種サービスについては、<Link href="/exchange-jp/gmocoin">こちら</Link>で解説しています。</p>
                </div>
                <div className="account-point">
                    <a href="https://h.accesstrade.net/sp/cc?rk=0100mdoh00lt2u" rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                        <img className="account-link-img" src="https://h.accesstrade.net/sp/rr?rk=0100mdoh00lt2u" alt="GMOコイン" />
                    </a>
                </div>
            </div>

            <hr />
            <h3>DMM Bitcoin</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo}>
                    <img src={bgDmmCoinLogo.src} alt="DMM Bitcoin logo" width={400} height={300} />
                </div>
                <div className="content-main">
                    <p>2016年に設立された株式会社DMM Bitcoinが運営する暗号資産取引所。</p>
                    <p>アルトコインのレバレッジ取引を行うことができる点に特徴があります。<br/>レバレッジ取引とは元手を担保にその何倍もの取引を可能にする方法です。<br/>他の取引所ではアルトコインのレバレッジ取引は、あまり対応していないことが多いです。</p>
                    <p>また、送金手数料が他の取引所に比べ割安なのが特徴です。</p>
                    <p>よく口座開設キャンペーンを実施している印象がありますので、他の取引所よりもお得に口座開設できるかもしれません。</p>
                </div>
                <div className="account-point">
                    <a href={AppConstant.dmmCoin} rel="nofollow">
                        <div className="appeal-img">
                            <img width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=211106049229&wid=001&eno=01&mid=s00000017198003007000&mc=1" />  
                            <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=3HOQGX+3SCAB6+3OP8+HWI5T" alt="" />
                        </div>
                    </a>
                    <p className="careful">※ DMM Bitcoin公式サイトに遷移後、当サイトから遷移した旨のメッセージが表示されますが、全く問題ありませんのでご安心ください</p>
                </div>
            </div>

            <hr />
            <h3>BITPoint</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo} style={{margin: '80px 0 80px'}}>
                    <img src={bgBitPointLogo.src} alt="BITPoint logo" width={400} height={88} />
                </div>
                <div className="content-main">
                    <p>2016年に創業の株式会社ビットポイントジャパンが運営する暗号資産取引所。</p>
                    <p>ADAコイン({cardano})やジャスミー({jasmy})など他の国内取引所では扱っていない銘柄を立て続けに上場しています。<br/>今後も国内で取り扱いの少ない銘柄が上場される可能性がありますので、口座開設を済ませておく事をおすすめします。</p>
                    <p>また、こちらもブラウザUIやスマホアプリが扱いやすいので、初心者におすすめの取引所となります。</p>
                    <p>2021/11/30まで、<span className="yellow-border">JMYが最大15,500円相当貰えるキャンペーンを実施中</span>ですので、口座開設するなら今がお得です。</p>
                </div>

                <div className="account-point">
                    <a href={AppConstant.bitPoint} target="_blank" rel="noopener noreferrer">
                        <div className="appeal-img">
                            <img src={bitpointCampaign.src} alt="BITPoint" width={400} height={230} />
                        </div>
                    </a>
                </div>
            </div>

            <hr />
            <h3>フォビジャパン（Huobi Japaan）</h3>
            <div className={styles.exchange_block}>
                <div className={styles.bg_logo}>
                    <img src={bgHuobiLogo.src} alt="Huobi Japan logo" width={400} height={300} />
                </div>
                <div className="content-main">
                    <p>170か国で数千万人のユーザーにサービスを提供する<strong>Huobiグループ</strong>の日本法人、フォビジャパン株式会社が運営する暗号資産取引所。</p>
                    <p>Huobiグループは<strong>セキュリティーが強い</strong>ことで高い評価を得ているようです。</p>
                    <p>日本の法律に則った金融サービスを展開しており、<strong>入金手数料は無料</strong>です。</p>
                    <p><strong>HT（フォビトークン）</strong>というEthereumブロックチェーン上の分散型仮想通貨を取り扱っており、<strong>保有量に応じて全8段階の取引手数料の割引</strong>が行われます。2021/11/1現在、評価額は1,500円前後となっています。</p>
                    <p>2022/1/24まで、<span className="yellow-border">HTが最大30,000円相当貰えるキャンペーンを実施中</span>ですので、口座開設するなら今がお得です。</p>
                </div>
                <div className="account-point">
                    <a href={AppConstant.huobiJp} rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                        <div className="appeal-img">
                            <img src={huobiCampaign.src} alt="フォビジャパン（Huobi Japan)" />
                        </div>
                    </a>
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

            <hr/>
            <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

            <h2 id="sec4">{subTitle4}</h2>
            <div className="content-main">
                <p>海外の取引所には<span className="yellow-border">日本では上場されないような草コイン</span>が上場されていたり、<span className="yellow-border">ステーキングの利率</span>などが魅力的だと思います。</p>
                <p>しかし、よく分からないまま利用するのは<span className="danger"><strong>初心者には危険</strong></span>です。</p>
                <p>どうしても海外の取引所を利用したい場合は、<strong>税制や法律をよく理解</strong>してから臨む事をおすすめします。</p>
                <h3>海外の仮想通貨取引所を利用する場合に考慮すべきデメリット</h3>
                <p>・海外では<span className="danger"><strong>日本と異なる法律や規制</strong></span>が存在する為、思わぬトラブルが発生するかもしれません。</p>
                <p>・日本向けにサービスを提供しているにも関わらず日本での仮想通貨交換業の登録をしていない業者に対して、<span className="danger"><strong>金融庁は厳しく対処</strong></span>しています。</p>
                <p>・日本円を直接入金できない為、国内取引所で購入した仮想通貨を<span className="danger"><strong>海外取引所に送金</strong></span>する必要があります。</p>
                <p>・海外の取引所で売買した<span className="danger"><strong>仮想通貨の税金計算</strong></span>が国内で売買した場合と異なります。税金計算が複雑な為、初心者には向きません。</p>
                <p>・雑所得が20万円以上の場合、確定申告の際に<span className="danger"><strong>ステーキング報酬の利益分</strong></span>を雑所得に含める必要がある為、特に注意しましょう。</p>
            </div>

            <h2 id="sec5">{subTitle5}</h2>
            <div className="content-main">
                <div className="check-point">
                    <ul className={styles.matome_ul}>
                        <li>IEOや新規銘柄の上場に備え、すぐに売買はしなくても口座開設を済ませておくと良いでしょう。</li>
                        <li>仮想通貨初心者でも分かりやすいUIの国内取引所について解説しました。</li>
                        <li>仮想通貨初心者は海外の仮想通貨取引所の利用は控えた方が良いでしょう。</li>
                        <li>雑収入が20万円以上の場合、ステーキングやキャンペーンで得た仮想通貨にも課税されます。</li>
                    </ul>
                </div>
            </div>
            <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
        </div>
      </div>
    </>
  );
}
