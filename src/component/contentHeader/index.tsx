import styles from './index.module.scss';

type LayoutProps = {
    title: string;
};


export default function ContentHeader({ title }: LayoutProps): JSX.Element {
    return <>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </>
}