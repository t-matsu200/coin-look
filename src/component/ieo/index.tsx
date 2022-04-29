import ContentHeader from '../contentHeader';
import Advertisement from '../advertisement';
import IEOLinkComponent from './ieo-link';
import AppConstant from '../../constant';


export default function IEOComponent() {

  return (
    <>
      <div className="content">
        <div>
            <div className="content-head" style={{paddingBottom: '0'}}>
                <ContentHeader title="国内の暗号資産取引所 IEO紹介リンク" />
            </div>
        </div>

        <div className="content-body">
          <div className="content-main">
              <p>国内の暗号資産取引所のIEO(Initial Exchange Offering)紹介ページです。</p>
              <p>IEOとは、新しく発足したブロックチェーンプロジェクトの発行するトークンを、暗号資産取引所が先行販売するサービスのことを指します。</p>
              <p>一般取引が開始される前の価格でトークンを購入することができる為、普通に購入するよりも低い価格でトークンを購入できます。</p>
              <p>その為、IEO実施時のトークンの受け渡しは抽選となる事が多いです。</p>
              <IEOLinkComponent />
          </div>

          <Advertisement htmlString={AppConstant.coincheckRectBanner} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
        </div>
      </div>
    </>
  );
}
