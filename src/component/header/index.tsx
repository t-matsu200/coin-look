import Link from 'next/link';

import styles from './index.module.scss';
import Icon from '../../../public/img/title.png';

function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.first_row}>
            <div className={styles.logo}>
              <Link href="/">
                <img src={Icon.src} alt="Site Icon" />
              </Link>
            </div>
            <div>【暗号資産】初心者向けにわかりやすく解説！</div>
          </div>
          <div className={styles.second_row}>
            <div className={styles.header_menu}>
              <div>
                <Link href="/">ホーム</Link>
              </div>
              <div>
                <Link href="/exchange">取引所</Link>
              </div>
              <div>
                <Link href="/account">口座開設</Link>
              </div>
              <div>
                <Link href="/currency">通貨</Link>
              </div>
              <div>
                <Link href="/terms">規約</Link>
              </div>
              <div>
                <Link href="/policy">ポリシー</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;