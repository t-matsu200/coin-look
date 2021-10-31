import Link from 'next/link';
import styles from './index.module.scss';

type ListItem = {
  subTitle: string;
  path: string;
  as: string;
}

type LayoutProps = {
  listItem: ListItem[];
}


export default function TableContent({ listItem }: LayoutProps) {
  return (
    <>
      <div className={styles.container}>
        <details open>
          <summary className={styles.title_block}>
            <span className={styles.title}>目次</span>
          </summary>
          <ul className={styles.table_list}>
            {listItem.map((r, index) => {
              return <li className={styles.list_item} key={index}>
                <Link href={r.path} as={r.as}>{r.subTitle}</Link>
              </li>
            })}
          </ul>
        </details>
      </div>
    </>
  );
}
