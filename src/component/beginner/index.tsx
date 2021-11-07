import styles from './index.module.scss';
import ContentHeader from '../contentHeader';
import TableContent from '../tableContent';
import Advertisement from '../advertisement';
import AppConstant from '../../constant';

import beginnerLogo from '../../../public/img/bg-beginner.png';


export default function BeginnerComponent() {

  const subTitle1 = '仮想通貨投資で初心者が気をつけること';
  const subTitle2 = '仮想通貨取引は必ず余裕資金で';
  const subTitle3 = '初心者は小額でコツコツと';
  const subTitle4 = 'レバレッジ取引はハイリスク・ハイリターン';
  const subTitle5 = '仮想通貨取引で発生する税金について';
  const subTitle6 = '仮想通貨投資で初心者が気をつけること まとめ';
  
  function makeLink(url: string, text=null) {
    if (text) {
      return <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
    }
    return <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
  }

  return (
    <>
      <div className={styles.content}>
        <div>
            <div className={styles.content_head}>
                <ContentHeader title="仮想通貨取引初心者の注意すべき点｜仮想通貨取引で発生する税金についても解説！" />
                <img src={beginnerLogo.src} alt="仮想通貨取引初心者の注意すべき点について解説" width={584} height={440} />
            </div>
        </div>

        <div className={styles.content_body}>
          <div className={styles.content_main}>
              <p><span className="danger"><strong>仮想通貨取引を始めるにあたって、何に気をつければ良いのでしょうか？</strong></span></p>
              <p>この記事では<strong>仮想通貨投資でやってはいけないこと</strong>について解説します。</p>
              <p>仮想通貨初心者が気をつけるべき点として、<span className="yellow-border">発生する税金</span>についても解説していきます。</p>
          </div>

          <TableContent listItem={[
            {subTitle: subTitle1, path: '/beginner', as: '#sec1'},
            {subTitle: subTitle2, path: '/beginner', as: '#sec2'},
            {subTitle: subTitle3, path: '/beginner', as: '#sec3'},
            {subTitle: subTitle4, path: '/beginner', as: '#sec4'},
            {subTitle: subTitle5, path: '/beginner', as: '#sec5'},
            {subTitle: subTitle6, path: '/beginner', as: '#sec6'}
            ]} />
          
          <Advertisement htmlString={AppConstant.huobiRect} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

          <h2 id="sec1">{subTitle1}</h2>
          <div className={styles.check_point}>
            <ul className={styles.matome_ul}>
              <li>仮想通貨購入は必ず余剰資金ですること</li>
              <li>最初は小額の取引をコツコツと続けていくこと</li>
              <li>レバレッジ取引はリスクが高いので、仕組みを覚えてから取り組むこと</li>
              <li>脱税とならないように、税金の発生タイミングと計算方法を押さえておくこと</li>
            </ul>
          </div>

          <h2 id="sec2">{subTitle2}</h2>
          <div>
            <div className={styles.content_main}>
              <p>仮想通貨取引は投資です。</p>
              <p><strong>人生を賭けるような無理な投資は絶対にしてはいけません。</strong></p>
              <p>万が一投資した金額を全て失ったとしても、問題なく生活できるくらいの金額で取引しましょう。</p>
              <p>ポートフォリオの5%くらいが良いとされるレポートも有るようです。</p>
              <p>余裕資金が少ないのであれば、取引も控えましょう。</p>
            </div>
          </div>

          <h2 id="sec3">{subTitle3}</h2>
          <div>
            <div className={styles.content_main}>
              <p>仮想通貨の価格が上昇している間は様子を見ましょう。</p>
              <p>取引所のチャートで価格の推移が確認できますので、比較的低価格帯に推移している銘柄を狙いましょう。</p>
              <p>ただし、いつもいつも低価格の銘柄があるとは限りませんので、その場合は小額で少しずつ買い増していく事をおすすめします。</p>
              <p><strong>よく分からない状態で高額の取引をするのは危険が伴いますのでやめましょう。</strong></p>
              <p>初心者であれば、コツコツ貯めた銘柄を長期保有して、将来の値上がりに期待するのが良いでしょう。</p>
            </div>
          </div>

          <h2 id="sec4">{subTitle4}</h2>
          <div>
            <div className={styles.content_main}>
              <p>国内の取引所で行うレバレッジ取引では、簡単にいうと元手の金額の2倍の金額で取引が可能です。</p>
              <p>販売所や取引所での単純な売買ではありませんので、レバレッジ取引をする際は仕組みをしっかり理解してから行ってください。</p>
              <p>初心者の方であれば、レバレッジ取引は行わなくても良いくらいに思っています。</p>
              <p><strong>通常の売買よりも遥かにリスクが高い事を肝に銘じておきましょう。</strong></p>
            </div>
          </div>

          <h2 id="sec5">{subTitle5}</h2>
          <div>
            <div className={styles.content_main}>
              <p>仮想通貨取引で発生した利益は全て<strong>雑所得</strong>となります。（個人の場合）</p>
              <p>仮想通貨取引で得た利益の他に副業などをしていれば、それらを合算した金額が雑所得となります。</p>
              <p>雑所得が<strong>20万円以上</strong>の場合、その利益に対して<strong>所得税</strong>がかかります。</p>
              <p>雑所得が20万円以上の場合は<strong>確定申告</strong>をする必要があり、<strong>確定申告</strong>をしなかった場合は<strong className="danger">脱税</strong>となります。</p>
              <p>なお、仮想通貨を円や商品に交換せずに保有しているだけであれば、確定申告をする必要はありません。</p>
              <p>計算方法は{makeLink("https://www.nta.go.jp/publication/pamph/shotoku/kakuteishinkokukankei/kasoutuka/index.htm", "国税庁ホームページ")}を確認するのが良いでしょう。<br/>エクセル形式の計算書もダウンロードできます。（令和3年6月発表）</p>
              <p><strong>ステーキング・レンディング・キャンペーンで得た利益</strong>に関しては、<br/><strong className="danger">日本円に換金していなくても受け取った時点で税金が発生します。</strong></p>
              <p>ステーキング等で得た利益は全額が雑所得に加算されます。</p>
              <p><strong>受け取った通貨の取得価額</strong>は、報酬を受け取る権利が確定した時点での時価 * 数量になります。</p>
              <p>頻繁に利益が発生する場合は受け取る権利が確定した回数分、(受け取る権利が確定した時点での時価 * 数量)を計算する必要があることに注意してください。</p>
              <p>なお、この計算方法は<strong>国内で得た場合</strong>の計算方法です。</p>
              <p><strong>ステーキング等で得た利益を売却する場合</strong>は、以下のように雑所得に加算します。<br/>計算結果がマイナスの場合、加算はされません。</p>
              <p><strong>売却額 - (受け取る権利が確定した時点での時価 * 数量)</strong></p>
            </div>
          </div>

          <h2 id="sec6">{subTitle6}</h2>
          <div className={styles.check_point}>
            <ul className={styles.matome_ul}>
              <li>仮想通貨購入は必ず余剰資金ですること</li>
              <li>最初は小額の取引をコツコツと続けていくこと</li>
              <li>レバレッジ取引はリスクが高いので、仕組みを覚えてから取り組むこと</li>
              <li>脱税とならないように、税金の発生タイミングと計算方法を押さえておくこと</li>
            </ul>
          </div>

          <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
        </div>
      </div>
    </>
  );
}
