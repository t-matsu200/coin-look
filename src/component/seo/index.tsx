import { VFC } from 'react';
import Head from 'next/head';
import icon from '../../../public/img/icon.png';

interface MetaData {
  pageTitle?: string
  pageDescription?: string
  pageImgWidth?: number
  pageImgHeight?: number
}

const Seo: VFC<MetaData> = ({
  pageTitle,
  pageDescription,
  pageImgWidth,
  pageImgHeight
}) => {
  let title = pageTitle ? pageTitle : '【初心者向けに解説！】仮想通貨／ビットコイン取引における日本国内取引所の口座開設方法・サービス比較￤取引の始め方・取引所のサービス比較・口座開設方法を紹介！';
  title += '| CoinLook(コインルック)';
  let description = pageDescription ? pageDescription : '初心者向けに仮想通貨取引の始め方・取引所のサービス比較について分かりやすく解説！';
  description += '￤CoinLookは仮想通貨取引に興味のある方・取引を始めたい方に向けた仮想通貨取引の解説サイトです。';
  const url = 'https://coin-look.pages.dev/';
  const imgUrl = icon.src;
  const imgWidth = pageImgWidth ? pageImgWidth : 1280;
  const imgHeight = pageImgHeight ? pageImgHeight : 640;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={url} />
    </Head>
  )
}

export default Seo;
