import styles from './css/table.module.css';

const TableItem = ({ compound, pred }) => {
    return (
        <div className={styles.item}>
            <p>{compound}</p>
            <p>{pred}</p>
        </div>
    );
}

export default TableItem;