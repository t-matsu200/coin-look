import styles from './index.module.scss';
import ContentHeader from '../../component/contentHeader';
import TableContent from '../../component/tableContent';
import Advertisement from '../../component/advertisement';
import AppConstant from '../../constant';

import bgGmoCoinLogo from '../../../public/img/bg-gmoCoin.png';


export default function CoincheckComponent() {

    function makeLink(url: string, text: string) {
        const colorLink = {color: '#5fc7ca', textDecoration: 'underline'};
        return <a href={url} target="_blank" rel="noopener noreferrer" style={colorLink}>{text}</a>
    }

    function openAccount() {
        return (
            <div className="check-point">
                <a className="account-link" href={AppConstant.gmoCoin} target="_blank" rel="noopener noreferrer">口座開設する</a>
            </div>
        )
    }

    const subTitle1 = 'GMOコインのサービスについて';
    const subTitle2 = '貸暗号資産';
    const subTitle3 = 'ステーキング';
    const subTitle4 = 'つみたて暗号資産';
    const subTitle5 = '暗号資産FX'
    const subTitle6 = 'GMOコイン まとめ'
    const currentPath = '/exchange-jp/gmocoin';
    const coincheck =  makeLink(AppConstant.coincheck,  'Coincheck');
    const gmoCoin =  makeLink(AppConstant.gmoCoin,  'GMOコイン');

    return (
        <>
            <div className={styles.content}>
                <div>
                <div className={styles.content_head}>
                    <ContentHeader title="日本国内の暗号資産取引所であるGMOコインについて解説！" />
                    <img src={bgGmoCoinLogo.src} alt="GMOコイン ロゴ" width={584} height={440} />
                </div>
                </div>
                <div className={styles.content_body}>
                <div className={styles.content_main}>
                    <p>この記事では<strong>{gmoCoin}</strong>で利用可能な各種サービスについて解説します。</p>
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
                    <div className={styles.content_main}>
                        <p>{gmoCoin}で口座開設すると、以下のサービスが利用できます。</p>
                        <ul className={styles.menu_list}>
                            <li>{subTitle2}</li>
                            <li>{subTitle3}</li>
                            <li>{subTitle4}</li>
                            <li>{subTitle5}</li>
                        </ul>
                    </div>
                    {openAccount()}
                </div>

                <h2 id="sec2">{subTitle2}</h2>
                <div>
                    <div className={styles.content_main}>
                        <p><strong>貸暗号資産サービス</strong>は、保有する暗号資産を{gmoCoin}に一定期間貸し出すことで、期間満了後に預けた暗号資産と同量・同等の暗号資産 + 各年率で計算した利用料をその暗号資産でもらえるサービスです。</p>
                        <p>貸出期間は1ヶ月間・3ヶ月間から選ぶことができ、年率は1ヶ月=1%、3ヶ月=3%になっています。</p>
                        <p>アルトコインは日本円で10万円程度から貸出可能となります。</p>
                        <p>貸出可能銘柄は以下となっています。<br/>中でもXTZ（テゾス）、DOT（ポルカドット）、ATOM（コスモス）は{coincheck}ではレンディングできない銘柄となっています。</p>
                        <ul className={styles.menu_list}>
                            <li>BTC（ビットコイン）</li>
                            <li>ETH（イーサリアム）</li>
                            <li>BCH（ビットコインキャッシュ）</li>
                            <li>LTC（ライトコイン）</li>
                            <li>XRP（リップル）</li>
                            <li>XEM（ネム）</li>
                            <li>XLM（ステラルーメン）</li>
                            <li>BAT（ベーシックアテンショントークン）</li>
                            <li>OMG（オーエムジー）</li>
                            <li>XTZ（テゾス）</li>
                            <li>QTUM（クアンタム）</li>
                            <li>ENJ（エンジンコイン）</li>
                            <li>DOT（ポルカドット）</li>
                            <li>ATOM（コスモス）</li>
                        </ul>
                    </div>
                </div>

                <hr/>
                <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec3">{subTitle3}</h2>
                <div className={styles.content_main}>
                    <p><strong>{subTitle3}</strong>とはビットコインにおけるマイニングに相当するプロセスで、保有しているだけで報酬を得ることができる仕組みです。</p>
                    <p>{gmoCoin}では、ステーキング対象の暗号資産であるXTZ（テゾス）を保有するだけで、ステーキング報酬を受け取ることができます。</p>
                    <p>{subTitle2}との違いとして、ステーキングは期間に縛りがない為、急な価格変動にも対応可能です。</p>
                    <p>ステーキングによる報酬は、年率3%～6%程度の見込となり、年率は一定ではありません。また、現状はXTZのみの取り扱いとなります。</p>
                    <p style={{opacity: 0.6}}>※ 2021/11 現在</p>
                </div>

                <h2 id="sec4">{subTitle4}</h2>
                <div className={styles.content_main}>
                    <p><strong>{subTitle4}</strong>とは、毎日または毎月の決まった日に、決まった金額の暗号資産を自動で購入できるサービスです。</p>
                    <p>{coincheck}では1万円からの積み立てに対し、{gmoCoin}では500円から積み立て可能ですので、複数の銘柄を分散して購入しやすくなっています。</p>
                    <p>小額の投資であれば各種手数料も無料の{gmoCoin}が断然おすすめです。</p>
                    {openAccount()}
                </div>

                <h2 id="sec5">{subTitle5}</h2>
                <div className={styles.content_main}>
                    <p><strong>{subTitle5}</strong>とは、実際に暗号資産（仮想通貨）を売買するのではなく、将来の値上がり・値下がりを見込んで買い注文または売り注文により「建玉」を保有し、建玉を決済することで価格変動の差額分だけを受け取る、証拠金取引です。</p>
                    <p>{gmoCoin}の{subTitle5}では、2倍のレバレッジで取引が可能です。</p>
                    <p>販売所・取引所での売買とは方式が異なりますので、初心者の方は仕組みをよく理解してから取り組みましょう。</p>
                </div>

                <h2 id="sec6">{subTitle6}</h2>
                <div className={styles.content_main}>
                    <p>各種手数料が無料で、暗号資産のレンディングで利益を得たり、500円から自動積み立て可能な<br/>{gmoCoin}は初心者に特におすすめの暗号資産取引所です。</p>
                    <p>この機会に是非、{gmoCoin}で口座開設をしてみましょう。</p>
                    <div className="check-point">
                        <ul className={styles.matome_ul}>
                            <li><strong>各種手数料が無料</strong>。</li>
                            <li><strong>{subTitle2}</strong>で何もせずに暗号資産が増やせます。</li>
                            <li><strong>{subTitle3}</strong>で{subTitle2}と異なり、預入期間の縛りなしでXTZを増やせます。</li>
                            <li><strong>{subTitle4}</strong>で、500円から複数の暗号資産を少しずつ自動で積み立てが可能です。</li>
                            <li><strong>{subTitle5}</strong>では、2倍のレバレッジで取引可能です。</li>
                        </ul>
                    </div>
                </div>
                <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
                </div>
            </div>
        </>
    );
}
