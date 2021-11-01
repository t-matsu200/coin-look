import styles from './index.module.scss';


export default function FooterArrow() {

    function handleClick() {
        window.scrollTo(0, 0);
    }

    return <>
            <div className={styles.table_content_footer}>
                <div className={styles.table_scroll}>
                    <button className={styles.table_scroll_btn} onClick={handleClick}>
                        <div className={styles.arrow_top}></div>
                    </button>
                </div>
            </div>
        </>
}
