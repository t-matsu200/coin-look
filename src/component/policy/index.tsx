import styles from './index.module.scss';


function PolicyContent() {
  return (
    <>
      <div className={styles.content}>
        <section className={styles.container}>
          <div>
            <h1>サイトポリシー</h1>
            <hr />
            <p>本サイトにおいて提供するサービスをご利用いただくユーザー様（以下「ユーザー」といいます。）は下記事項を必ずご一読いただき、これらの条件にご同意された上でご利用ください。</p>
            <hr />

            <h2>著作権について</h2>
            <p>本サイトの運営者（以下「運営者」といいます。）が管理運営するサイトに掲載されている個々の情報（文字、写真、イラスト等）は著作権の対象となっております。事前に文書による許諾を得ない限り、私的使用その他の法律によって明示的に認められる範囲を超えて、これらの情報を使用（複製、改変、アップロード、掲示、送信、頒布、ライセンス、販売、出版等を含む）をすることは一切禁止します。</p>
            <hr />

            <h2>免責事項</h2>
            <p>当ホームページに掲載されている投資情報は、情報の提供のみを目的としており、証券投資等の勧誘を意図するものではありません。当ホームページの内容は運営者が信頼できると判断する情報から作成されておりますが、正確性、適時性等を保証するものではありません。当ホームページの内容に依拠した結果に被った損害について、当社は責任を負うものではありません。</p>

          </div>
          <p>以上</p>
        </section>
      </div>
    </>
  );
}

export default PolicyContent;
