import { useLayoutEffect, useRef } from 'react';

import styles from './index.module.scss';

type LayoutProps = {
    htmlString: string;
    width?: string;
    textAlign?: string;
    minHeight?: string;
    padding?: string;
    display?: string;
}


export default function Advertisement({ htmlString, width, textAlign, minHeight, padding, display }: LayoutProps) {

    const divRef = useRef();

    let addStyle = {};

    if (width) {
        Object.assign(addStyle, {width: width})
    }

    if (textAlign) {
        Object.assign(addStyle, {textAlign: textAlign})
    }

    if (minHeight) {
        Object.assign(addStyle, {minHeight: minHeight})
    }

    if (padding) {
        Object.assign(addStyle, {padding: padding})
    }

    if (display) {
        Object.assign(addStyle, {display: display})
    }
  
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
            <div className={styles.ad_disp} style={addStyle}>
                <div ref={divRef} />
            </div>
        </>;
}
