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
  const title = pageTitle ? pageTitle : '【仮想通貨取引の始め方・やり方】￤やり方・取引所・口座解説・税金・リスクを紹介！ | CoinLook(コインルック)';
  const description = pageDescription ? pageDescription : '【仮想通貨取引について解説！】CoinLookは仮想通貨取引に興味のある方・取引を始めたい方に向けた暗号資産取引解説サイトです。';
  const url = 'https://coin-app-1br.pages.dev';
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
