import styles from './css/table.module.css';
import wrapperStyles from '../../globalStyles/wrappers.module.css'
import TableItem from './TableItem';

const PredTable = ({ compounds, preds, ppms }) => {
    return (
        <div className={wrapperStyles.center}>
            <table border='true' className={styles.table}>
                <tr>
                    <th>Prediction</th>
                    <th>Confidence</th>
                    <th>PPM</th>
                </tr>
                {compounds.map((c, idx) => <TableItem key={Math.random()} compound={c} pred={preds[idx]} ppm={ppms[idx]} />)}
            </table>
        </div>
    );
}

export default PredTable;