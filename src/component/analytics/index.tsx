import { useLayoutEffect, useRef } from 'react';


export default function Analytics(props) {

    const htmlString = `
    <!-- Cloudflare Web Analytics -->
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "abe082e2a9ac4cb6baa53f0abf7db1fb"}'></script>
    <!-- End Cloudflare Web Analytics -->`;

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
