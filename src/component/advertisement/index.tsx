import { useLayoutEffect, useRef } from 'react';

import styles from './index.module.scss';

type LayoutProps = {
    htmlString: string;
}


export default function Advertisement({ htmlString }: LayoutProps) {

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
