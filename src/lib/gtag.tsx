import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'


type ContactEvent = {
    action: 'submit_form'
    category: 'contact'
    label: string
}
  
type ClickEvent = {
    action: 'click'
    category: 'other'
    label: string
}

export type Event = (ContactEvent | ClickEvent) & {
    label?: Record<string, string | number | boolean>
    value?: string
}

export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';

export const existsGaId = GA_ID !== '';

export const event = ({action, category, label}: Event) => {
    if (!existsGaId) {
      return
    }
  
    window.gtag('event', action, {
      event_category: category,
      event_label: JSON.stringify(label)
    })
}
  
export const pageview = (path: string) => {
    window.gtag('config', GA_ID, {
        page_path: path,
    });
}

export const usePageView = () => {
    const router = useRouter()
  
    useEffect(() => {
        if (!existsGaId) {
            return
        }
  
        const handleRouteChange = (path: string) => {
            pageview(path)
        }
  
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
}

export const GoogleAnalytics = () => (
    <>
      {existsGaId && (
        <>
          <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script
            defer
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());    
                gtag('config', '${GA_ID}');
              `,
            }}
            strategy="afterInteractive"
          />
        </>
      )}
    </>
);
