import styles from './index.module.scss';
import HomeArticle from '../../component/homeArticle';
import ContentHeader from '../../component/contentHeader';
import Advertisement from '../advertisement';
import AppConstant from '../../constant';

import exchangeLogo from '../../../public/img/exchange.png';
import bankLogo from '../../../public/img/bank.png';
import homeLogo from '../../../public/img/bg-home.png';


function HomeComponent() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content_head}>
          <ContentHeader title="仮想通貨取引 解説サイト" />
          <img src={homeLogo.src} alt="仮想通貨取引初心者向けの解説サイト" />
        </div>
        <div className={styles.content_body}>
          <p>当ブログは仮想通貨（暗号資産）取引初心者に向けた解説サイトです。</p>
          <p>実際に仮想通貨取引所を利用してみて感じた事などを記事にしていますので、是非参考にしてみてください。</p>
          <p>資金決済法の改正（令和2年5月1日施行）により、法令上、<strong>「仮想通貨」</strong>は<strong>「暗号資産」</strong>へ呼称変更されました。</p>
        </div>
      </div>
      <div className={styles.title_box}>
        <div className={styles.wrap_title}>
          <h1>記事紹介</h1>
        </div>
        <div className={styles.articles}>
          <HomeArticle title="暗号資産取引所｜国内のオススメ暗号資産取引所を紹介！" description="暗号資産取引初心者の方には国内の暗号資産取引所での取引をオススメします。その理由や取引所について解説！"
            href="/exchange" imgUrl={exchangeLogo} />
          <HomeArticle title="口座解説｜暗号資産取引の際に必要となるオススメの銀行口座を紹介！" description="暗号資産取引所の口座解説方法や、取引所に入金する際に必要となる銀行口座について解説！"
            href="/account" imgUrl={bankLogo} />
        </div>
        <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" display="block" />
      </div>
    </>
  );
}

export default HomeComponent;
