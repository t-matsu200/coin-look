import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';

import styles from './index.module.scss';
import ContentHeader from '../../../component/contentHeader';
import TableContent from '../../../component/tableContent';
import Advertisement from '../../../component/advertisement';
import AppConstant from '../../../constant';
import bgGmoIEO from '../../../../public/img/gmo-ieo.png';


const TwitterCoinBlock = () => {

    const htmlString = `
    <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">IEOの募集開始！第1弾はJ2リーグFC琉球が発行する「FCRコイン」！ <br><br>2022年4月27日（水）の定期メンテナンス明けより、IEOの募集を開始いたします。<br><br>【募集要項】<br>■銘柄：FCRコイン（FCR）<br>■募集価格：2.2円 / FCR<br>■1口あたりの数量：2,500 FCR<br>■最小申込口数：1 口<a href="https://t.co/sF9aGw3gPa">https://t.co/sF9aGw3gPa</a> <a href="https://t.co/s9A130VX35">pic.twitter.com/s9A130VX35</a></p>&mdash; GMOコイン【公式】 (@gmo_coin) <a href="https://twitter.com/gmo_coin/status/1519135189590417408?ref_src=twsrc%5Etfw">April 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  
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
            <div ref={divRef} style={{height: '812px'}} />
          </>;
  }

const FcrBlock = () => {

    const htmlString = `
    <blockquote class="twitter-tweet" data-dnt="true"><p lang="ja" dir="ltr">総発行数10億枚となるFC Ryukyu Coinを発行いたしました🎉<br><br>本日16時よりうち4.5億 <a href="https://twitter.com/hashtag/FCR%E3%82%B3%E3%82%A4%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#FCRコイン</a> の購入申込みの受付を開始いたします🪙国内2例目、スポーツクラブ初となる <a href="https://twitter.com/hashtag/IEO?src=hash&amp;ref_src=twsrc%5Etfw">#IEO</a> となります。<br><br>合わせて初となる公式NFTの無償配布も行います。詳細はこちらをご確認ください→ <a href="https://t.co/NtQuwCoKxT">https://t.co/NtQuwCoKxT</a></p>&mdash; FC Ryukyu Coin (@fcr_coin) <a href="https://twitter.com/fcr_coin/status/1519134529885143040?ref_src=twsrc%5Etfw">April 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  
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
            <div ref={divRef} style={{height: '860px'}} />
          </>;
}

export default function GmoCoinIEOComponent() {

    function makeLink(url: string, text: string) {
        const colorLink = {color: '#5fc7ca', textDecoration: 'underline'};
        return <a href={url} target="_blank" rel="noopener noreferrer" style={colorLink}>{text}</a>
    }

    function openAccount() {
        return (
            <div className="account-point">
                <a href="https://h.accesstrade.net/sp/cc?rk=0100mdoh00lt2u" rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                    <img className="account-link-img" src="https://h.accesstrade.net/sp/rr?rk=0100mdoh00lt2u" alt="GMOコイン" />
                </a>
            </div>
        )
    }

    const subTitle1 = 'GMOコインがFCRコインのIEOを開始';
    const subTitle2 = 'GMOコイン IEOとは';
    const subTitle3 = 'FCRコイン(FCR)について';
    const subTitle4 = 'まとめ';

    const currentPath = '/ieo';
    const plt = makeLink('https://hashpalette.com',  'PLT');
    const fcRyukyu = makeLink('https://fcryukyu.com/',  'FC琉球');
    const fcrCoin = makeLink('https://fcr-coin.com/',  'FCRコイン');
    const gmocoin =  makeLink(AppConstant.gmoCoin,  'GMOコイン');

    return (
        <>
            <div className="content">
                <div>
                    <div className="content-head">
                        <ContentHeader title="GMOコインがFCRコイン（FCR）のIEOを開始！" />
                        <a href="https://h.accesstrade.net/sp/cc?rk=0100nbcw00lt2u" rel="nofollow" referrerPolicy="no-referrer-when-downgrade">
                            <img src={bgGmoIEO.src} alt="GMO Coin IEO logo" width={400} height={300} style={{maxWidth: '400px'}} />
                        </a>
                    </div>
                </div>
                <div className="content-body">
                <div className="content-main">
                    <p>2022年4月27日、{gmocoin}がJリーグに所属する{fcRyukyu}の独自トークン「FCRコイン（FCR）」のIEOを開始しました。</p>
                    <p>この記事では、開始されたIEOの詳細について解説します。</p>
                    <p>GMOコインの特徴については<Link href="/exchange-jp/[slug]" as="/exchange-jp/gmocoin"><a>こちら</a></Link>で解説しています。</p>
                </div>
                <TableContent listItem={[
                    {subTitle: subTitle1, path: currentPath, as: '#sec1'},
                    {subTitle: subTitle2, path: currentPath, as: '#sec2'},
                    {subTitle: subTitle3, path: currentPath, as: '#sec3'},
                    {subTitle: subTitle4, path: currentPath, as: '#sec4'}
                    ]} />
                
                <Advertisement htmlString={AppConstant.gmocoinRect} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec1">{subTitle1}</h2>
                <div>
                    <div className="content-main">
                        <p>GMOコインが{fcRyukyu}の独自トークン{fcrCoin}のIEOを開始しました。</p>
                        <p>1FCRの価格は2.2円で、1口あたりの数量は2,500FCR(5,500円)、販売総量は4億5千万 FCR(9億9千万円)となります。</p>
                        <p>IEOの募集期間は2022年5月18日までとなります。</p>
                        <p>今後IEOに参加を考えている方は、IEOがいつ実施されても対応できるように、{gmocoin}で口座開設をおすすめします。</p>
                    </div>
                    {openAccount()}
                </div>

                <h2 id="sec2">{subTitle2}</h2>
                <div>
                    <div className="content-main">
                        <p>GMOコイン IEOとは、{gmocoin}が企業・プロジェクトによるトークン発行を通じた資金調達を支援することです。</p>
                        <p>IEO参加者は企業・プロジェクトを支援(=トークン購入の申し込み)することにより、抽選でトークンを取得することができます。</p>
                        <TwitterCoinBlock />
                    </div>
                </div>

                <h2 id="sec3">{subTitle3}</h2>
                <div>
                    <div className="content-main">
                        <p>{fcRyukyu}とは、日本の沖縄市を中心とする沖縄県全県をホームタウンとする日本プロサッカーリーグ（Jリーグ）に加盟するサッカークラブです。</p>
                        <p>小野伸二選手が在籍していた事があるクラブで、サッカーファンならご存知の方も多いと思います。</p>
                        <p>そのFC琉球が発行するトークンが{fcrCoin}です。</p>
                        <p>FCRコインは、深刻化するサッカークラブの運営資金問題の解決や、選手・チームに対するFCRコイン送付機能によるファンからの支援を目的として発行されるようです。</p>
                        <br/>
                        <FcrBlock />
                    </div>
                </div>

                <hr/>
                <Advertisement htmlString={AppConstant.ledgerNano} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />

                <h2 id="sec4">{subTitle4}</h2>
                <div className="content-main">
                    <p>IEOの募集期間は大体、2~3週間で締め切ってしまう事が多いです。</p>
                    <p>先に口座開設を済ませておけば、時間に余裕を持って申し込みに参加できます。</p>
                    <p>IEO実施が突然発表されても慌てなくて済むように、{gmocoin}で口座開設をしておきましょう。</p>
                    <div className="check-point">
                        <ul className={styles.matome_ul}>
                            <li>{gmocoin}と{fcRyukyu}が発行する{fcrCoin}のIEOを開始しました。</li>
                            <li>IEOに参加するには{gmocoin}の口座開設が必要です。</li>
                            <a className="account-link" href={AppConstant.gmocoin} target="_blank" rel="noopener noreferrer" style={{marginTop: '5%'}}>口座開設する</a>
                        </ul>
                    </div>
                </div>
                <Advertisement htmlString={AppConstant.biccore} width="100%" textAlign="center" minHeight="100px" padding="16px 0 0" />
                </div>
            </div>
        </>
    );
}
