import { useEffect, useRef, useState } from 'react';
import styles from './css/styles.module.css'
import formStyles from './../globalStyles/form.module.css'
import wrapperStyles from './../globalStyles/wrappers.module.css'
import PredTable from "../components/table/PredTable";

const ProcessMassValue = () => {
    const [comp, setComp] = useState();
    const [score, setScore] = useState();
    const [uComp, setUComp] = useState();
    const [PPMs, setPMMs] = useState();

    const [compDisplay, setCompDisplay] = useState();
    const [predDisplay, setPredDisplay] = useState();
    const [PPMDisplay, setPPMDisplay] = useState();

    const [simpleMode, setSimpleMode] = useState(false);
    const [cri1, setCr1] = useState(false);
    const [cri2, setCr2] = useState(false);
    const [cri3, setCr3] = useState(false);
    const [cri4, setCr4] = useState(false);

    const [criEnc, setCriEnc] = useState();

    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const massRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch('http://127.0.0.1:8080/mass-val', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                massVal: massRef.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            setComp(data.compounds);
            setScore(data.scores);
            setUComp(data.uCompounds);
            setCriEnc(data.critereaEncodings);
            setCompDisplay(data.compounds);
            setPredDisplay(data.scores);
            setPPMDisplay(data.ppms)
            setPMMs(data.ppms);
            setShowResults(true);
            setLoading(false);
            setError(false);
            setSimpleMode(false);
        }).catch((err) => {
            console.log(err);
            setError(true);
            setLoading(false);
        })
    }

    const showFormHandler = () => {
        setShowResults(false);
    }

    const doesPassCrit = (a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] == 1 && b[i] == 0) {
                return false;
            }
        }

        return true;
    }

    useEffect(() => {
        let displayC = [];
        let displayP = score;
        let displayPPM = PPMs;

        if (!simpleMode) {
            displayC = comp;
        } else {
            displayC = uComp;
        }

        const enc = [Number(cri1), Number(cri2), Number(cri3), Number(cri4)];

        let isZero = true;
        for (const el of enc) {
            if (el !== 0) {
                isZero = false;
            }
        }

        if (!isZero) {
            let c = [];
            let p = [];
            let ppm = []

            for (let i = 0; i < criEnc.length; i++) {
                if (doesPassCrit(enc, criEnc[i])) {
                    c.push(displayC[i]);
                    p.push(displayP[i]);
                    ppm.push(displayPPM[i]);
                }
            }
            
            displayC = c;
            displayP = p;
            displayPPM = ppm;
        }

        setCompDisplay(displayC);
        setPredDisplay(displayP);
        setPPMDisplay(displayPPM);
    }, [cri1, cri2, cri3, cri4, simpleMode, PPMs, comp, score, uComp, criEnc]);

    return (
        <div>
            <p className={styles.title}>Mass Spectrometry Data Predictor v1</p>
            
            {!showResults && <div className={wrapperStyles.center}>
                <form onSubmit={submitHandler}>
                    <input type='type' placeholder='0.00' name='mass' ref={massRef}/>
                    <button type='submit'>Get Predictions</button>
                </form>
            </div>}

            {error && <div className={wrapperStyles.center}>
                <p className={formStyles.error}>An error occurred. Please try again.</p>    
            </div>}

            {loading && <div className={wrapperStyles.center}>
                <p>Loading...</p>    
            </div>}

            {showResults && <div className={wrapperStyles.center}>
                <button className={formStyles.back} onClick={showFormHandler}>Go Back</button>    
            </div>}

            {showResults && <div className={styles.checkboxes}>
                <div>
                    <input type='checkbox' checked={simpleMode} onChange={(e) => { setSimpleMode((prevState) => !prevState) }} />
                    <label>Polyatomics</label>
                </div>
                
                <div>
                    <input type='checkbox' checked={cri1} onChange={(e) => { setCr1((prevState) => !prevState) }} />
                    <label>Cri 1</label>
                </div>

                <div>
                    <input type='checkbox' checked={cri2} onChange={(e) => { setCr2((prevState) => !prevState) }} />
                    <label>Cri 2</label>
                </div>

                <div>
                    <input type='checkbox' checked={cri3} onChange={(e) => { setCr3((prevState) => !prevState) }} />
                    <label>Cri 3</label>
                </div>
                
                <div>
                    <input type='checkbox' checked={cri4} onChange={(e) => { setCr4((prevState) => !prevState) }} />
                    <label>Cri 4</label>
                </div>
            </div>}

            {showResults && <PredTable compounds={compDisplay} preds={predDisplay} ppms={PPMDisplay} />}
        </div>
    );
}

export default ProcessMassValue;