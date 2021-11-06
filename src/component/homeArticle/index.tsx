import Link from 'next/link';
import styles from './index.module.scss';


type LayoutProps = {
  title: string;
  description: string;
  href: string;
  imgUrl: StaticImageData;
}

export default function HomeArticle({ title, description, href, imgUrl }: LayoutProps): JSX.Element {
  return (
    <>
      <section className={styles.wrap_box}>
        <div className={styles.box_content} role="article">
          <div className={styles.inner}>
            <Link href={href}>
              <figure className={styles.thumbnail}>
                <div className={styles.wrap_thumbnail}>
                  <img src={imgUrl.src} alt={title} width={140} height={140} />
                </div>
              </figure>
            </Link>
            <section className={styles.box_desc}>
              <div className={styles.content_title}>
                <Link href={href}>{title}</Link>
              </div>
              <div className={styles.description}>{description}</div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
