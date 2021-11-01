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
          <div>
            <Advertisement />
          </div>
        </div>
      </aside>
    </>
  );
}
