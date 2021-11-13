import styles from './index.module.scss';
import ContentHeader from '../../component/contentHeader';
import TableContent from '../../component/tableContent';
import Advertisement from '../../component/advertisement';
import AppConstant from '../../constant';

import bgCoincheckLogo from '../../../public/img/bg-coincheck.png';


export default function CoincheckComponent() {

    function makeLink(url: string, text: string) {
        const colorLink = {color: '#5fc7ca', textDecoration: 'underline'};
        return <a href={url} target="_blank" rel="noopener noreferrer" style={colorLink}>{text}</a>
    }

    function openAccount() {
        return (
            <div className="check-point">
                <a className="account-link" href={AppConstant.coincheck} target="_blank" rel="noopener noreferrer">口座開設する</a>
            </div>
        )
    }

    const subTitle1 = 'Coincheckの特徴';
    const subTitle2 = 'Coincheckのサービスについて';
    const subTitle3 = '貸暗号資産（旧貸仮想通貨）';
    const subTitle4 = '大口OTC取引';
    const subTitle5 = 'Coincheckつみたて';
    const subTitle6 = 'Coincheck NFT'
    const subTitle7 = 'Coincheck IEO'
    const subTitle8 = 'Coincheck まとめ';
    const currentPath = '/exchange-jp/coincheck';
    const plt = makeLink('https://hashpalette.com',  'PLT');
    const coincheck =  makeLink(AppConstant.coincheck,  'Coincheck');
    const meebits = makeLink('https://meebits.larvalabs.com/', 'Meebits');
    const sandbox = makeLink('https://www.sandbox.game/jp/', 'The Sandbox');
    const cryptoSpells = makeLink('https://cryptospells.jp/', 'CryptoSpells');

    return (
        <>
            <div className={styles.content}>
                <div>
                <div className={styles.content_head}>
                    <ContentHeader title="日本国内の暗号資産取引所であるCoincheckについて解説！" />
                    <img src={bgCoincheckLogo.src} alt="Coincheck ロゴ" width={584} height={440} />
                </div>
                </div>
                <div className={styles.content_body}>
                <div className={styles.content_main}>
                    <p>この記事では<strong>{coincheck}</strong>の特徴と利用可能な各種サービスについて解説します。</p>
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
                    <div className={styles.content_main}>
                        <p>{coincheck}の特徴としてまず挙げられるのは、取り扱い銘柄が17種類と国内では最多となります。<br/>アルトコインの取引に興味がある方は{coincheck}がおすすめです。</p>
                        <p>豊富な各銘柄に対応した<strong>{subTitle3}</strong>や、他にはない大口取引時の優遇レート適用、NFTの売買やIEO実施など、多岐に渡る取り組みが行われています。</p>
                        <p>初心者でも簡単に取引を開始できますので、口座開設を検討してみてはいかがでしょうか？</p>
                    </div>
                    {openAccount()}
                </div>

                <h2 id="sec2">{subTitle2}</h2>
                <div>
                    <div className={styles.content_main}>
                        <p>{coincheck}で口座開設すると、以下のサービスが利用できます。</p>
                        <ul className="padding-left-40">
                            <li>貸暗号資産（旧貸仮想通貨）</li>
                            <li>大口OTC取引</li>
                            <li>Coincheckつみたて</li>
                            <li>Coincheck NFT</li>
                            <li>Coincheck IEO</li>
                        </ul>
                    </div>
                </div>

                <h2 id="sec3">{subTitle3}</h2>
                <div>
                    <div className={styles.content_main}>
                        <p><strong>貸暗号資産サービス</strong>は、保有する暗号資産を{coincheck}に一定期間貸し出すことで、期間満了後に預けた暗号資産と同量・同等の暗号資産 + 各年率で計算した利用料をその暗号資産でもらえるサービスです。</p>
                        <p>貸出期間は14日間・30日間・90日間・180日間・365日間から選ぶことができ、年率は以下のようになっています。</p>
                        <p>暗号資産の銘柄によっては4~5%の貸出を行っていないこともあります。<br/>また、貸出枠に上限があり基本的には申請を出してから数日~数ヶ月後に貸出が始まるという認識でいましょう。</p>
                        <p>参考までに、筆者のIOSTを30日間の貸出で申請した所、ちょうど１ヶ月後に貸し出されました。</p>
                        <div className={styles.table_block}>
                            <table>
                                <tr>
                                    <th>期間</th>
                                    <th>年率</th>
                                </tr>
                                <tr>
                                    <td>14日間</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>30日間</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>90日間</td>
                                    <td>3%</td>
                                </tr>
                                <tr>
                                    <td>180日間</td>
                                    <td>4%</td>
                                </tr>
                                <tr>
                                    <td>365日間</td>
                                    <td>5%</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <hr/>
                <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec4">{subTitle4}</h2>
                <div className={styles.content_main}>
                    <p><strong>{subTitle4}</strong>とは数千万以上の大口取引をする場合に、優遇レートで取引できるサービスです。</p>
                    <p>取引可能銘柄はBTC, ETH, XRP, LTC, BCHの5種類です。</p>
                    <div className={styles.table_block} style={{textAlign: 'left'}}>
                        <table>
                            <tr>
                                <th>BTC（ビットコイン）</th>
                                <td style={{width: '50%'}}>1.5BTC 以上から</td>
                            </tr>
                            <tr>
                                <th>ETH（イーサリアム）</th>
                                <td>20ETH 以上から</td>
                            </tr>
                            <tr>
                                <th>XRP（リップル）</th>
                                <td>停止中</td>
                            </tr>
                            <tr>
                                <th>LTC（ライトコイン）</th>
                                <td>350 LTC以上から</td>
                            </tr>
                            <tr>
                                <th>BCH（ビットコインキャッシュ）</th>
                                <td>150 BCH以上から</td>
                            </tr>
                        </table>
                    </div>
                    <p style={{opacity: 0.6, margin: 0, textAlign: 'right', marginRight: '10%'}}>※ 2021/11 現在のデータです</p>
                </div>

                <h2 id="sec5">{subTitle5}</h2>
                <div className={styles.content_main}>
                    <p><strong>{subTitle5}</strong>とは、毎月一定額を自動で積み立て、安定した暗号資産投資ができるサービスとなります。</p>
                    <p>レートに惑わされず少しずつ投資が出来るため、初心者にもおすすめのサービスです。</p>
                    <p>積立金額は月1万円からとなっており、購入パターンを月に一回購入するパターンと毎日に分散して購入するパターンから選べます。</p>
                    <p>BTCやETCなどの主要な暗号資産を少しずつ購入するのがおすすめです。</p>
                </div>

                <h2 id="sec6">{subTitle6}</h2>
                <div className={styles.content_main}>
                    <p><strong>{subTitle6}（β版）</strong>とは、暗号資産とNFTを用いたトレカやゲーム内アイテムを売買することができるサービスです。</p>
                    <p>アイドルのトレカや「{meebits}」のアバター、「{sandbox}」の土地や「{cryptoSpells}」のカードなどゲーム内アイテムが暗号資産で売買できます。</p>
                    <p>「{cryptoSpells}」で入手したカードを売却したり、「{sandbox}」の土地を他のプレイヤーに貸し出すことにより利益を得ることも可能になるようですので、興味のある方は調べてみると面白いかもしれません。</p>
                </div>

                <h2 id="sec7">{subTitle7}</h2>
                <div className={styles.content_main}>
                    <p><strong>{subTitle7}</strong>とは、企業・プロジェクトによるトークン発行を通じた資金調達を支援することです。</p>
                    <p>IEO参加者は企業・プロジェクトを支援することにより、トークンを取得することができます。</p>
                    <p>{plt}の募集の際には<strong>1PLT=4.05円、一口1,000PLT、申込上限2400口</strong>という条件で募集されていて、申込み開始からわずか6分で調達目標金額を突破するほどでした。<br/>2021/11現在の{plt}価格は50円前後ですので、<strong>募集時の約10倍</strong>となっています。</p>
                    <p>またIEOが実施されるかは不明ですが、今後いつ実施されても対応できるように、口座開設を済ませておくことをおすすめします。</p>
                </div>

                <h2 id="sec8">{subTitle8}</h2>
                <div className={styles.content_main}>
                    <p>暗号資産のレンディングで利益を得たり、NFTの取引やIEOに参加できる{coincheck}は初心者に特におすすめの暗号資産取引所です。</p>
                    <p>この機会に是非、{coincheck}で口座開設をしてみましょう。</p>
                    <div className="check-point">
                        <ul className={styles.matome_ul}>
                            <li><strong>{subTitle3}</strong>で何もせずに暗号資産が増やせます。</li>
                            <li>大口の取引をする場合、<strong>{subTitle4}</strong>を利用することでお得なレートで取引できます。</li>
                            <li><strong>{subTitle5}</strong>で、主要な暗号資産を少しずつ自動で積み立てが可能です。</li>
                            <li><strong>{subTitle6}</strong>では、ブロックチェーンゲーム内のアイテムなどを暗号資産で売買できます。</li>
                            <li><strong>{subTitle7}</strong>で、いつIEOが実施されても対応できるように口座開設を済ませておきましょう。</li>
                            <a className="account-link" href={AppConstant.coincheck} target="_blank" rel="noopener noreferrer" style={{marginTop: '5%'}}>口座開設する</a>
                        </ul>
                    </div>
                </div>
                <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
                </div>
            </div>
        </>
    );
}
