// import FileInput from "../components/graphs/FileInput";
// import { useEffect, useState } from "react";
// import formStyles from './../globalStyles/form.module.css'
// import wrapperStyles from './../globalStyles/wrappers.module.css'
// import styles from './css/graphs.module.css'

const Graphs = () => {
    // const [img, setImg] = useState();
    // const [inputMode, setInputMode] = useState(true);
    // const [loading, setLoading] = useState(false);
    // const [preds, setPreds] = useState();

    // const submitHandler = (av, base) => {
    //     const form = new FormData();
    //     form.append('av', av);
    //     form.append('base', base);

    //     fetch('http://127.0.0.1:8080/graph-upload', {
    //         method: 'POST',
    //         body: form
    //     }).then((res) => {
    //         return res.text();
    //     }).then((data) => {
    //         setImg(data);
    //         setInputMode(false);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }

    // const fitPeaks = () => {
    //     fetch('https://mass-spec-ai.onrender.com/fit', {
    //         method: 'GET'
    //     }).then((res) => res.json()).then((data) => {
    //         console.log(data);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }

    // const predict = () => {
    //     setLoading(true);
    //     fetch('http://127.0.0.1:8080/predict', {
    //         method: 'GET'
    //     }).then((res) => {
    //         return res.text();
    //     }).then((data) => {
    //         setPreds(URL.createObjectURL(new Blob([data], { type: 'text/plain' })));
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }

    // const toggleInputMode = () => {
    //     setInputMode((prevState) => !prevState);
    // }

    // useEffect(() => {
    //     setLoading(false);
    // }, [preds])

    return (
        <div>
            <h1>Graphs</h1>
            <h1>Currently Unavailable (due to lack of power on free backend host)</h1>
            {/* {inputMode && <FileInput onSubmit={submitHandler} />}
            {!inputMode && img && <div className={wrapperStyles.center}>
                <button onClick={toggleInputMode} className={formStyles.back}>Go Back</button>
            </div>}
            {!inputMode && <div className={wrapperStyles.center}>
                <button onClick={predict} className={styles.option}>Find Peaks and Predict</button>
                <button onClick={fitPeaks} className={styles.option}>Get X0's</button>
            </div>}
            {loading && <div className={wrapperStyles.center}> <p>Loading...</p></div>}
            {!inputMode && preds && <div className={wrapperStyles.center}><a href={preds} className={styles.link} download="output.txt">Download Results</a></div>}
            {!inputMode && img && <img src={`data:image/png;base64,${img}`} />} */}
        </div>
    );
}

export default Graphs;