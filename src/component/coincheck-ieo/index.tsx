import styles from './index.module.scss';
import ContentHeader from '../../component/contentHeader';
import TableContent from '../../component/tableContent';
import Advertisement from '../../component/advertisement';
import AppConstant from '../../constant';

import bgCoinFinLogo from '../../../public/img/coincheck_financie.png';
import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';


const TwitterCoinBlock = () => {

    const htmlString = `
    <blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">＼Coincheck IEO第2号案件始動！／<br>コインチェックとフィナンシェは、IEOによる資金調達に向けた契約を締結いたしました🤝<a href="https://t.co/SAgnBV5WLw">https://t.co/SAgnBV5WLw</a></p>&mdash; Coincheck(コインチェック) (@coincheckjp) <a href="https://twitter.com/coincheckjp/status/1465154229308313603?ref_src=twsrc%5Etfw">2021年11月29日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  
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
            <div ref={divRef} style={{height: '653px'}} />
          </>;
  }

const FinBlock = () => {

    const htmlString = `
    <a class="twitter-timeline" data-lang="ja" data-height="600" href="https://twitter.com/financie_jp?ref_src=twsrc%5Etfw">Tweets by financie_jp</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  
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
            <div ref={divRef} style={{border: 'solid 0.5px #10bdc2', height: '620px'}} />
          </>;
}

export default function CoincheckIEOComponent() {

    function makeLink(url: string, text: string) {
        const colorLink = {color: '#5fc7ca', textDecoration: 'underline'};
        return <a href={url} target="_blank" rel="noopener noreferrer" style={colorLink}>{text}</a>
    }

    function openAccount() {
        return (
            <div className="account-point">
                <a href="https://h.accesstrade.net/sp/cc?rk=0100nbcz00lt2u" rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                    <img className="account-link-img" src="https://h.accesstrade.net/sp/rr?rk=0100nbcz00lt2u" alt="コインチェック" />
                </a>
            </div>
        )
    }

    const subTitle1 = 'CoincheckとFINANCIEがIEOに向けて契約締結';
    const subTitle2 = 'Coincheck IEOとは';
    const subTitle3 = 'FINANCIEについて';
    const subTitle4 = 'まとめ';

    const currentPath = '/ieo';
    const plt = makeLink('https://hashpalette.com',  'PLT');
    const coincheck =  makeLink(AppConstant.coincheck,  'Coincheck');
    const financie = makeLink('https://financie.jp/', 'FINANCIE');

    return (
        <>
            <div className="content">
                <div>
                    <div className="content-head">
                        <ContentHeader title="CoincheckとFINANCIEがIEOによる資金調達に向けて、契約締結を発表！" />
                        <a href="https://h.accesstrade.net/sp/cc?rk=0100nbcw00lt2u" rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                            <img src={bgCoinFinLogo.src} alt="Coincheck FINANCIE logo" width={400} height={300} style={{maxWidth: '400px'}} />
                        </a>
                    </div>
                </div>
                <div className="content-body">
                <div className="content-main">
                    <p>{coincheck}が国内では2件目となるIEO（イニシャル・イクスチェンジ・オファリング）の引き受けに向けた契約を締結したと発表されました。</p>
                    <p>この記事では、新しく実施されるIEOの詳細について解説します。</p>
                    <p>Coincheckの特徴については<Link href="/exchange-jp/[slug]" as="/exchange-jp/coincheck"><a>こちら</a></Link>で解説しています。</p>
                </div>
                <TableContent listItem={[
                    {subTitle: subTitle1, path: currentPath, as: '#sec1'},
                    {subTitle: subTitle2, path: currentPath, as: '#sec2'},
                    {subTitle: subTitle3, path: currentPath, as: '#sec3'},
                    {subTitle: subTitle4, path: currentPath, as: '#sec4'}
                    ]} />
                
                <Advertisement htmlString={AppConstant.coincheckRectBanner} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec1">{subTitle1}</h2>
                <div>
                    <div className="content-main">
                        <p>{coincheck}が{financie}とIEOによる資金調達に向けた契約の締結が発表されました。</p>
                        <p>2022年夏をメドに、「フィナンシェトークン」をCoincheckにて販売、上場させる計画としています。</p>
                        <p>2021年7月のIEOで{plt}（パレットトークン）が販売され、今回で国内では2件目となります。</p>
                        <p>PLTは申し込みが始まってから6分で売出総額を突破するほど人気で、受け渡しは抽選となりました。</p>
                        <p>購入を考えている方は、{coincheck}で口座開設をしておきましょう。</p>
                        <p>直前に口座開設をすると、申し込み者数が増えて審査に時間がかかる場合があります。</p>
                    </div>
                    {openAccount()}
                </div>

                <h2 id="sec2">{subTitle2}</h2>
                <div>
                    <div className="content-main">
                        <p>Coincheck IEOとは、{coincheck}が企業・プロジェクトによるトークン発行を通じた資金調達を支援することです。</p>
                        <p>IEO参加者は企業・プロジェクトを支援することにより、トークンを取得することができます。</p>
                        <p>具体的にいうと、Coincheckのアプリ・WEBサイトでIEOの申し込みを行い、トークンを購入するという形になります。</p>
                        <p>前回のIEO実施時は受け渡しが抽選となり、最終的な当せん倍率は24.4倍となったそうです。</p>
                        <p>非常に人気が高かった事が伺えます。</p>
                        <TwitterCoinBlock />
                    </div>
                </div>

                <h2 id="sec3">{subTitle3}</h2>
                <div>
                    <div className="content-main">
                        <p>{financie}とは、簡単にいうと<strong>ブロックチェーンを活用したクラウドファンディング</strong>を行うプラットフォームを運営しています。</p>
                        <p>サッカーJ1の湘南ベルマーレなどのプロスポーツのクラブチームが{financie}でクラブトークンをファンやサポーターに向けて発行して資金調達を行っているようです。</p>
                        <p>今回発行が予定されている「フィナンシェトークン」と各クラブが発行している「クラブトークン」は別物です。</p>
                        <p>また、{makeLink('https://www.youtube.com/channel/UCSaBSRgprya9w9FN9WOUEYA/featured', 'YOUTUBEチャンネル')}や公式Twitterも存在するようです。</p>
                        <p>以下、会社情報です。</p>
                        <div className={styles.table_block}>
                            <table>
                                <tr>
                                    <th>会社名</th>
                                    <td>株式会社フィナンシェ</td>
                                </tr>
                                <tr>
                                    <th>代表取締役</th>
                                    <td>國光 宏尚</td>
                                </tr>
                                <tr>
                                    <th>設立日</th>
                                    <td>2019年1月</td>
                                </tr>
                                <tr>
                                    <th>住所</th>
                                    <td>東京都渋谷区桜丘町26-1 セルリアンタワー15F</td>
                                </tr>
                            </table>
                        </div>
                        <br/>
                        <FinBlock />
                    </div>
                </div>

                <hr/>
                <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec4">{subTitle4}</h2>
                <div className="content-main">
                    <p>IEO実施となれば、前回同様かなりの人気になると想定されます。</p>
                    <p>先に口座開設を済ませておけば、時間に余裕を持って申し込みに参加できます。</p>
                    <p>この機会に是非、{coincheck}でIEOに参加してみましょう。</p>
                    <div className="check-point">
                        <ul className={styles.matome_ul}>
                            <li>{coincheck}と{financie}がIEOによる資金調達実現に向けて契約を締結しました。</li>
                            <li>IEOに参加するには{coincheck}の口座開設が必要です。</li>
                            <a className="account-link" href={AppConstant.coincheck} target="_blank" rel="noopener noreferrer" style={{marginTop: '5%'}}>口座開設する</a>
                        </ul>
                    </div>
                </div>
                <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
                </div>
            </div>
        </>
    );
}
