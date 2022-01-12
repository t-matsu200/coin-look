import styles from './index.module.scss';
import ContentHeader from '../../component/contentHeader';
import TableContent from '../../component/tableContent';
import Advertisement from '../../component/advertisement';
import AppConstant from '../../constant';

import bgBitPointLogo from '../../../public/img/bg-bitpoint.png';
import bitpointCampaign from '../../../public/img/bitpoint-campaign.png';


export default function BitPointComponent() {

    function makeLink(url: string, text: string) {
        const colorLink = {color: '#5fc7ca', textDecoration: 'underline'};
        return <a href={url} target="_blank" rel="noopener noreferrer" style={colorLink}>{text}</a>
    }

    function openAccount() {
        return (
            <div className="check-point">
                <a className="account-link" href={AppConstant.bitPoint} target="_blank" rel="noopener noreferrer">口座開設する</a>
            </div>
        )
    }

    const subTitle1 = 'BITPointの特徴';
    const subTitle2 = 'BITPointのサービスについて';
    const subTitle3 = '貸して増やす';
    const subTitle4 = 'アルトコインの板取引';
    const subTitle5 = '新規銘柄上場キャンペーン';
    const subTitle6 = 'BITPoint まとめ';
    const currentPath = '/exchange-jp/bitpoint';
    const bitPoint =  makeLink(AppConstant.bitPoint,  'BITPoint');
    const trx = makeLink('https://tron.network/index?lng=jap',  'TRX（トロン）');
    const campaign = makeLink('https://www.bitpoint.co.jp/news/campaign/', '公式サイト');
    const jmy = makeLink('https://www.jasmy.co.jp/',  'JMY（ジャスミー）');
    const ada = makeLink('https://cardano.org/',  'ada（エイダコイン）');
    const bat = makeLink('https://basicattentiontoken.org/', 'BAT（ベーシックアテンショントークン）')

    return (
        <>
            <div className="content">
                <div>
                    <div className="content-head">
                        <ContentHeader title="日本国内の暗号資産取引所であるBITPointについて解説！" />
                        <img src={bgBitPointLogo.src} alt="BITPoint ロゴ" width={584} height={134} style={{margin: '80px 0'}} />
                    </div>
                </div>
                <div className="content-body">
                <div className="content-main">
                    <p>この記事では<strong>{bitPoint}</strong>の特徴と利用可能な各種サービスについて解説します。</p>
                </div>
                <TableContent listItem={[
                    {subTitle: subTitle1, path: currentPath, as: '#sec1'},
                    {subTitle: subTitle2, path: currentPath, as: '#sec2'},
                    {subTitle: subTitle3, path: currentPath, as: '#sec3'},
                    {subTitle: subTitle4, path: currentPath, as: '#sec4'},
                    {subTitle: subTitle5, path: currentPath, as: '#sec5'},
                    {subTitle: subTitle6, path: currentPath, as: '#sec6'}
                    ]} />
                
                <Advertisement htmlString={AppConstant.huobiRect} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec1">{subTitle1}</h2>
                <div>
                    <div className="content-main">
                        <p>{bitPoint}の特徴は、他の国内取引所では取り扱いの少ないアルトコインを上場している点にあります。</p>
                        <p>具体的には{trx}や{ada}、{jmy}などが挙げられます。</p>
                        <p>2021年11月30日にLNK（チェーンリンク）が新たに上場され、取扱銘柄数は11種類となりました。</p>
                        <p>新規銘柄の上場の際に、対象銘柄が貰えるキャンペーンを開催することが多いので、口座開設をしておくだけで暗号資産がもらえるかもしれません。<br/><span style={{opacity: 0.6}}>※ キャンペーン内容は要確認</span></p>
                        <p>また、<span className="yellow-border">各種手数料が全て無料</span>な点と<span className="yellow-border">アルトコインの板取引</span>ができる点が挙げられます。</p>
                        <p>{bitPoint}は国内で取り扱いの少ない銘柄が上場されており、アルトコインの取引をしたい方におすすめの暗号資産取引所です。</p>
                    </div>
                    {openAccount()}
                </div>

                <h2 id="sec2">{subTitle2}</h2>
                <div>
                    <div className="content-main">
                        <p>{bitPoint}で口座開設すると、以下のサービスが利用できます。</p>
                        <ul className={styles.menu_list}>
                            <li>{subTitle3}</li>
                            <li>{subTitle4}</li>
                            <li>{subTitle5}</li>
                        </ul>
                    </div>
                </div>

                <h2 id="sec3">{subTitle3}</h2>
                <div>
                    <div className="content-main">
                        <p><strong>{subTitle3}</strong>は、保有する暗号資産を{bitPoint}に一定期間貸し出すことで、期間満了後に預けた暗号資産と同量・同等の暗号資産 + 各年率で計算した利用料をその暗号資産でもらえるサービスです。</p>
                        <p>貸出期間や年率は募集毎に異なります。</p>
                        <p>常時募集している訳ではありませんが、30日間で年率10%や100%などの高い年率で貸し出せる可能性があります。<br/>なお、年率100%は抽選の場合が多いです。</p>
                    </div>
                </div>

                <hr/>
                <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec4">{subTitle4}</h2>
                <div className="content-main">
                    <p><strong>{subTitle4}</strong>で取り扱いのある銘柄の中に、{trx}や{bat}があります。</p>
                    <p>特にBATはレートがよく動くように思いますので、短期保有の方には良いのではないでしょうか。</p>
                    <p>{ada}の板取引も9月末に開始予定でしたが延期となり、<br/>2021年11月現在ADAの板取引はできない状態となっています。</p>
                </div>

                <h2 id="sec5">{subTitle5}</h2>
                <div className="content-main">
                    <p><strong>{subTitle5}</strong>として、Twitterのリツイートで暗号資産が貰えたり、購入額の10%相当が付与されるなどのキャンペーンをよく開催しています。</p>
                    <p>キャンペーン内容はその時によって内容が異なりますので、詳細は{campaign}を確認してみてください。</p>
                    <p>2022年1月31日まで<span className="yellow-border">JMYが貰えるキャンペーン</span>が開催中です！</p>
                    <div className="check-point">
                        <a href={AppConstant.bitPoint} target="_blank" rel="noopener noreferrer">
                            <div className="appeal-img">
                                <img src={bitpointCampaign.src} alt="BITPoint キャンペーン" width={400} height={230} />
                            </div>
                        </a>
                    </div>
                </div>

                <h2 id="sec6">{subTitle6}</h2>
                <div className="content-main">
                    <p>{bitPoint}は各種手数料が無料で、アルトコインの取引に興味のある方におすすめの暗号資産取引所です。</p>
                    <p>この機会に是非、{bitPoint}で口座開設をしてみましょう。</p>
                    <div className="check-point">
                        <ul>
                            <li><strong>各種手数料が無料</strong>。</li>
                            <li><strong>{subTitle3}</strong>で何もせずに暗号資産が増やせます。</li>
                            <li><strong>{subTitle4}</strong>では、他の国内取引所で取り扱いのないアルトコインの板取引が可能です。</li>
                            <li><strong>{subTitle5}</strong>で、無料で暗号資産が貰えます。</li>
                            <a className="account-link" href={AppConstant.bitPoint} target="_blank" rel="noopener noreferrer" style={{marginTop: '5%'}}>口座開設する</a>
                        </ul>
                    </div>
                </div>
                <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
                </div>
            </div>
        </>
    );
}
