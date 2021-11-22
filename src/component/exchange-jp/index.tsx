import ContentHeader from '../contentHeader';
import Advertisement from '../advertisement';
import ExchangeLinkComponent from '../exchange-link';
import AppConstant from '../../constant';


export default function ExchangeJpComponent() {

  return (
    <>
      <div className="content">
        <div>
            <div className="content-head" style={{paddingBottom: '0'}}>
                <ContentHeader title="国内の暗号資産取引所 サービス紹介リンク" />
            </div>
        </div>

        <div className="content-body">
          <div className="content-main">
              <p>国内の仮想通貨取引所のサービス紹介ページです。</p>
              <p>各取引所で利用できる便利でお得なサービスについて解説していますので、<br/>是非チェックしてみてください。</p>
              <p>当サイトで紹介している取引所は、全て日本の金融庁に登録済みの暗号資産交換業者です。
                <span style={{opacity: 0.6}}>
                  <a href="https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf" target="_blank" rel="noopener noreferrer">※ 参照</a>
                </span>
              </p>
              <ExchangeLinkComponent />
          </div>

          <Advertisement htmlString={AppConstant.coincheckRectBanner} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
        </div>
      </div>
    </>
  );
}
