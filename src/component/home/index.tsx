import styles from './index.module.scss';
import HomeArticle from '../../component/homeArticle';
import ContentHeader from '../../component/contentHeader';

import exchangeLogo from '../../../public/img/exchange-s.png';
import bankLogo from '../../../public/img/bank-s.png';
import currencyLogo from '../../../public/img/currency.png';
import homeLogo from '../../../public/img/home.png';


function HomeComponent() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content_head}>
          <ContentHeader title="仮想通貨取引 解説サイト" />
          <img src={homeLogo.src} alt="仮想通貨取引初心者向けの解説サイト" />
        </div>
        <div className={styles.content_body}>
          <p>当ブログは仮想通貨（暗号資産）取引の初心者に向けた解説サイトです。</p>
          <p>暗号資産（仮想通貨）取引の始め方や取引所の特徴、銘柄、初心者が気をつける点などを解説しています。</p>
          <p>実際に仮想通貨取引所を利用してみて感じた事なども記事にしていますので、是非参考にしてみてください。</p><br/>
          <p>※ 資金決済法の改正（令和2年5月1日施行）により、法令上<strong>「仮想通貨」</strong>は<strong>「暗号資産」</strong>へ呼称変更されました。</p>
        </div>
      </div>
      <div className={styles.title_box}>
        <div className={styles.wrap_title}>
          <h1>記事紹介</h1>
        </div>
        <div className={styles.articles}>
          <HomeArticle title="暗号資産取引所｜国内のおすすめ暗号資産取引所を紹介！" description="暗号資産取引初心者の方には国内の暗号資産取引所での取引をおすすめします。その理由や取引所について解説！"
            href="/exchange" imgUrl={exchangeLogo} />
          <HomeArticle title="口座解説｜暗号資産取引を開始するための口座解説方法を紹介！" description="暗号資産取引所の口座解説方法や、複数の取引所で口座開設するメリットなどについて解説！"
            href="/account" imgUrl={bankLogo} />
          <HomeArticle title="暗号資産の銘柄｜暗号資産の銘柄（種類）を紹介！" description="国内の暗号資産取引所で購入できる銘柄の特徴ついて解説！"
            href="/currency" imgUrl={currencyLogo} />
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
