import styles from './index.module.scss';
import ContentHeader from '../../component/contentHeader';
import TableContent from '../../component/tableContent';
import Advertisement from '../../component/advertisement';
import AppConstant from '../../constant';

import bgBitFlyerLogo from '../../../public/img/bg-bitFlyer.png';


export default function BitFlyerComponent() {

    function makeLink(url: string, text: string) {
        const colorLink = {color: '#5fc7ca', textDecoration: 'underline'};
        return <a href={url} target="_blank" rel="noopener noreferrer" style={colorLink}>{text}</a>
    }

    function openAccount() {
        return (
            <div className="check-point">
                <a className="account-link" href='https://bitflyer.com/ja-jp/account-create' target="_blank" rel="noopener noreferrer">口座開設する</a>
            </div>
        )
    }

    const subTitle1 = 'bitFlyerの特徴';
    const subTitle2 = 'bitFlyerのサービスについて';
    const subTitle3 = 'ビットコインをもらう';
    const subTitle4 = 'bitFlyer クレカ';
    const subTitle5 = 'かんたん積立';
    const subTitle6 = 'ヤマダ電機でのビットコイン決済サービス';
    const subTitle7 = 'Tポイントをビットコインに交換できる';
    const subTitle8 = 'bitFlyer まとめ';
    const currentPath = '/exchange-jp/bitFlyer';
    const bitFlyer = makeLink('https://bitflyer.com/ja-jp/account-create', 'bitFlyer');

    return (
        <>
            <div className="content">
                <div>
                <div className="content-head">
                    <ContentHeader title="日本国内の暗号資産取引所であるbitFlyerについて解説！" />
                    <img src={bgBitFlyerLogo.src} alt="bitFlyer ロゴ" width={584} height={440} />
                </div>
                </div>
                <div className="content-body">
                <div className="content-main">
                    <p>この記事では<strong>{bitFlyer}</strong>の特徴と利用可能な各種サービスについて解説します。</p>
                </div>
                <TableContent listItem={[
                    {subTitle: subTitle1, path: currentPath, as: '#sec1'},
                    {subTitle: subTitle2, path: currentPath, as: '#sec2'},
                    {subTitle: subTitle3, path: currentPath, as: '#sec3'},
                    {subTitle: subTitle4, path: currentPath, as: '#sec4'},
                    {subTitle: subTitle5, path: currentPath, as: '#sec5'},
                    {subTitle: subTitle6, path: currentPath, as: '#sec6'},
                    {subTitle: subTitle7, path: currentPath, as: '#sec7'},
                    {subTitle: subTitle8, path: currentPath, as: '#sec8'}
                    ]} />
                
                <Advertisement htmlString={AppConstant.huobiRect} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec1">{subTitle1}</h2>
                <div>
                    <div className="content-main">
                        <p>{bitFlyer}の特徴として、高いセキュリティがよく挙げられます。</p>
                        <p>Webアプリケーション向けのセキュリティプラットフォーム「Sqreen」が、<br/>世界140の仮想通貨取引所を対象にセキュリティ対策の調査を実施した結果、{bitFlyer}がトップクラスの評価を得られたようです。</p>
                        <p>また、2021年11月現在までにハッキング事故は一度も発生していませんので、安心して暗号資産の売買ができるのではないでしょうか。</p>
                        <p>他にもネットショッピング時にbitFlyerを経由するとビットコインが貰えたり、自動積み立てを1円単位から始められる等の特徴的なサービスも挙げられます。</p>
                    </div>
                    {openAccount()}
                </div>

                <h2 id="sec2">{subTitle2}</h2>
                <div>
                    <div className="content-main">
                        <p>{bitFlyer}で口座開設すると、以下のサービスが利用できます。</p>
                        <ul className="padding-left-40">
                            <li>{subTitle3}</li>
                            <li>{subTitle4}</li>
                            <li>{subTitle5}</li>
                            <li>{subTitle6}</li>
                            <li>{subTitle7}</li>
                        </ul>
                    </div>
                </div>

                <h2 id="sec3">{subTitle3}</h2>
                <div>
                    <div className="content-main">
                        <p><strong>{subTitle3}</strong>は、bitFlyer経由でインターネットサービスを利用すると、ビットコインをもらうことができるサービスです。</p>
                        <p>{subTitle3}条件は会員登録や商品購入、カード発行等たくさんの種類の広告があり、他の取引所にはないサービスとなっています。</p>
                        <p>例えばbitFlyer経由で楽天やYahoo!ショッピングで買い物をすると、<br/><span className="yellow-border">購入額の0.6%相当</span>のビットコインが貰えます。（2021/11現在）</p>
                    </div>
                </div>

                <hr/>
                <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec4">{subTitle4}</h2>
                <div className="content-main">
                    <p><strong>{subTitle4}</strong>とは、{bitFlyer}のWEBサイトからMastercardを発行して、そのクレジットカードでカードショッピングをすると0.5〜1.0%相当のビットコインが貯まるというサービスです。</p>
                    <p>種類はスタンダードとプラチナがあり、スタンダートは永年無料、プラチナは2年目以降から年会費が発生します。</p>
                    <p>クレジットカードの申し込みを行う前に、bitFlyerの口座開設を済ませておく必要があります。</p>
                    <p>詳細は{makeLink('https://bitflyer.com/creditcard', '公式サイト')}で確認できます。</p>
                </div>

                <h2 id="sec5">{subTitle5}</h2>
                <div className="content-main">
                    <p><strong>{subTitle5}</strong>とは暗号資産を一定の頻度と金額で、自動購入できるサービスです。</p>
                    <p>{bitFlyer}では一円単位からの自動積み立てが可能で、分散投資に適しています。<br/>他の取引所の同様サービスに比べ、圧倒的に敷居が低いことも特徴です。</p>
                    <p>積立頻度は「毎日 1 回」、「毎週 1 回」、「毎月 2 回（1 日と 15 日）」、「毎月 1 回」から選択可能です。</p>
                    <p>{subTitle5}はスマホアプリ「<strong>bitFlyer ウォレット</strong>」からのみ利用可能ですので、先にインストールしておくことをおすすめします。</p>
                    <div className="check-point">
                        <a className="account-link" style={{background: 'yellowgreen'}} href="https://bitflyer.com/invitation?id=e3ilarco&lang=ja-JP" target="_blank" rel="noopener noreferrer">公式アプリをダウンロード</a>
                    </div>
                </div>

                <h2 id="sec6">{subTitle6}</h2>
                <div className="content-main">
                    <p><strong>{subTitle6}</strong>とはその名の通り、ヤマダ電機でビットコイン払いが可能となるサービスです。</p>
                    <p>こちらのサービスも「bitFlyerウォレット」などで可能になります。。</p>
                    <p>1会計あたり30万円相当まで、ビットコインでの支払いが可能となりますので、{bitFlyer}で口座開設をしたら、決済機能に特化したビットコインの購入をおすすめします。</p>
                    <p>日本円に換金してから出金するなどの手間が省け、便利なサービスとなっています。</p>
                </div>

                <h2 id="sec7">{subTitle7}</h2>
                <div className="content-main">
                    <p><strong>{subTitle7}</strong>とは、「Tポイント」をビットコインに交換できるサービスです。</p>
                    <p>100ポイントにつき85円相当のビットコインに交換可能で、大手共通ポイントが仮想通貨への交換に対応するのは{bitFlyer}のみとなります。（2021/11現在）</p>
                    <p>貯まった「Tポイント」をビットコインに交換することで将来的に数倍の価値になる可能性がありますので、興味のある方は利用してみてはいかがでしょうか？</p>
                    <p>通常の売買と異なり、元手が必要ない事も魅力的なサービスです。</p>
                </div>

                <h2 id="sec8">{subTitle8}</h2>
                <div className="content-main">
                    <p>暗号資産取引の大前提となる堅牢なセキュリティや、決済周りでお得なサービスを展開する{bitFlyer}は初心者に特におすすめの暗号資産取引所です。</p>
                    <p>この機会に是非、{bitFlyer}で口座開設をしてみましょう。</p>
                    <div className="check-point">
                        <ul className={styles.matome_ul}>
                            <li>{bitFlyer}では<strong>今までに一度もハッキング事故が発生しておらず</strong>、安心して暗号資産の取引が可能です。</li>
                            <li><strong>{subTitle3}</strong>では、{bitFlyer}経由で買い物などをすると、<br/>無料で暗号資産が貰えてお得です。</li>
                            <li><strong>{subTitle5}</strong>で、<span className="yellow-border">何と1円から</span>暗号資産の自動積み立てが可能です。</li>
                            <li><strong>{subTitle6}</strong>では、日本円に換金しなくても買い物が可能です。</li>
                            <li><strong>{subTitle7}</strong>では、貯まったTポイントをビットコインに交換できます。</li>
                            <a className="account-link" href='https://bitflyer.com/ja-jp/account-create' target="_blank" rel="noopener noreferrer" style={{marginTop: '5%'}}>口座開設する</a>
                        </ul>
                    </div>
                </div>
                <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
                </div>
            </div>
        </>
    );
}
