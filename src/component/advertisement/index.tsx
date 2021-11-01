import { useLayoutEffect, useRef } from 'react';

import styles from './index.module.scss';


export default function Advertisement(props) {

    const htmlString = `
    <!-- admax -->
    <div class="admax-ads" data-admax-id="388aabe107277a2e1584f9f649a48bde" style="display:inline-block;width:160px;height:600px;"></div>
    <script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "388aabe107277a2e1584f9f649a48bde",type: "banner"});</script>
    <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>
    <!-- admax -->`;

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
            <div className={styles.ad_disp}>
                <div ref={divRef} />
            </div>
        </>;
}
