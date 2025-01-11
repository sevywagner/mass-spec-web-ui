import { useRef, useState } from 'react';
import styles from './css/styles.module.css'
import formStyles from './../globalStyles/form.module.css'
import wrapperStyles from './../globalStyles/wrappers.module.css'
import PredTable from "../components/table/PredTable";

const ProcessMassValue = () => {
    const [comp, setComp] = useState();
    const [score, setScore] = useState();
    const [criComp, setCriComp] = useState();
    const [criScore, setCriScore] = useState();
    const [uComp, setUComp] = useState();
    const [simpleMode, setSimpleMode] = useState(false)
    const [criMode, setCriMode] = useState(false)
    const [showResults, setShowResults] = useState(false);
    const massRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();

        fetch('https://mass-spec-ai.onrender.com/', {
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
            setCriComp(data.criCheckComp);
            setCriScore(data.criCheckScore)
            setShowResults(true);
        }).catch((err) => {
            console.log(err);
        })
    }

    const toggleSimpleMode = () => {
        setSimpleMode((prevState) => !prevState);
    }

    const toggleCriMode = () => {
        setCriMode((prevState) => !prevState);
    }

    const showFormHandler = () => {
        setShowResults(false);
    }

    return (
        <div>
            <h1>Mass Spectrometry Data Predictor v1</h1>
            
            {!showResults && <div className={wrapperStyles.center}>
                <form onSubmit={submitHandler}>
                    <label>Mass Value</label>
                    <input type='type' placeholder='0.00' name='mass' ref={massRef}/>
                    <button type='submit'>Get Predictions</button>
                </form>
            </div>}

            {showResults && <div className={wrapperStyles.center}>
                <button className={formStyles.back} onClick={showFormHandler}>Go Back</button>    
            </div>}

            {showResults && <div className={styles.checkboxes}>
                {!criMode && <div>
                    <input type='checkbox' checked={simpleMode} onChange={toggleSimpleMode} />
                    <label for="mode">Polyatomics</label>
                </div>}
                
                <div>
                    <input type='checkbox' checked={criMode} onChange={toggleCriMode} />
                    <label for="mode">Criterea</label>
                </div>
            </div>}

            {showResults && !criMode && <PredTable compounds={simpleMode ? uComp : comp} preds={score} />}
            {showResults && criMode && <PredTable compounds={criComp} preds={criScore} />}
        </div>
    );
}

export default ProcessMassValue;