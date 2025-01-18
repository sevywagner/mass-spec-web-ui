import { useState } from 'react';
import styles from './css/table.module.css';
import wrapperStyles from '../../globalStyles/wrappers.module.css'
import TableItem from './TableItem';

const PredTable = ({ compounds, preds, ppms }) => {
    const [downloadLink, setDownloadLink] = useState();

    const downloadHandler = () => {
        fetch('http://127.0.0.1:8080/download-table', {
            method: 'POST',
            body: JSON.stringify({
                compounds,
                preds,
                ppms
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.text();
        }).then((data) => {
            setDownloadLink(URL.createObjectURL(new Blob([data], { type: 'text/plain' })));
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <div className={styles.center}>
                <button className={styles.save} onClick={downloadHandler}>Save Table</button>
                {downloadLink && <a href={downloadLink} download="table.txt">Download</a>}
                <table border='true' className={styles.table}>
                    <tr>
                        <th>Prediction</th>
                        <th>Confidence</th>
                        <th>PPM</th>
                    </tr>
                    {compounds.map((c, idx) => <TableItem key={Math.random()} compound={c} pred={preds[idx]} ppm={ppms[idx]} />)}
                </table>
            </div>
        </>
    );
}

export default PredTable;