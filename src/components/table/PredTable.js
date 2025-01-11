import { useState } from 'react';
import styles from './css/table.module.css';
import TableItem from './TableItem';

const PredTable = ({ compounds, preds }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.table}>
                    <TableItem compound="Compounds" pred="Confidence" />
                    {compounds.map((c, idx) => <TableItem compound={c} pred={preds[idx]} />)}
                </div>
            </div>
        </>
    );
}

export default PredTable;