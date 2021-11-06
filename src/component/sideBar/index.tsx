import { useLayoutEffect, useRef } from 'react';
import styles from './index.module.scss';
import Advertisement from '../advertisement';


const TwitterBlock = () => {

  const htmlString = `
  <a class="twitter-timeline" data-width="360" data-height="360" href="https://twitter.com/coin_post?ref_src=twsrc%5Etfw"></a> 
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;

  const divRef = useRef();

  useLayoutEffect(() => {
  if (!divRef.current) {
      return;
  }

  const fragment = document
      .createRange()
      .createContextualFragment(htmlString);

      if (divRef.current) {
          let refCurrent: any = divRef.current;
          refCurrent.appendChild(fragment);
      }
  }, [htmlString]);

  return <>
          <div ref={divRef} />
        </>;
}


export default function SideBar() {

  const htmlString1 = `
  <div class="admax-ads" data-admax-id="3a808285500b6bacb6cc20e004d0c39f" style="display:inline-block;width:300px;height:250px;"></div>
  <script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "3a808285500b6bacb6cc20e004d0c39f",type: "banner"});</script>
  <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>`;


  const cryptoMoll = `<a href="https://px.a8.net/svt/ejp?a8mat=3HOQGX+50ED2Q+4QSM+601S1" rel="nofollow">
  <img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=211106049303&wid=001&eno=01&mid=s00000022135001008000&mc=1"></a>
  <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=3HOQGX+50ED2Q+4QSM+601S1" alt="">`;

  return (
    <>
      <aside className={styles.container}>
        <div className={styles.sticky}>
          <div>
            <section className={styles.twitter_window}>
              <header>
                <div className={styles.inner}>
                  <h2>最新ニュース</h2>
                </div>
              </header>
            </section>
          </div>
          <div className={styles.twitter_content}>
            <TwitterBlock />
          </div>
          <div className={styles.advertisement_block}>
            <Advertisement htmlString={cryptoMoll} padding="12px 0 0" />
          </div>
          <div className={styles.advertisement_block}>
            <Advertisement htmlString={htmlString1} padding="12px 0 0" />
          </div>
        </div>
      </aside>
    </>
  );
}
