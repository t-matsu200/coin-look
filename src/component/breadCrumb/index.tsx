import Link from 'next/link';
import styles from './index.module.scss';

type ItemProps = {
    name: string;
    path: string;
};

type LayoutProps = {
    itemList?: ItemProps[];
};


function BreadCrunb({ itemList }: LayoutProps): JSX.Element {

    let resultList = [{name: 'トップ', path: '/'}];
    if (itemList) {
        Object.values(itemList).forEach(item => {
            resultList.push(item);
        });
    }

    return (
        <>
            <div className={styles.bread_crumb}>
                {resultList.map((item, index) => {
                        return <Link href={item.path} key={index}>{item.name}</Link>
                        }
                    )}
            </div>
        </>
    );
}

export default BreadCrunb;
