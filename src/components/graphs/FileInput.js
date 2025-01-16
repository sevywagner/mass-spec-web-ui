import { useState } from "react";
import styles from './file.module.css'

const FileInput = ({ onSubmit }) => {
    const [av, setAV] = useState();
    const [base, setBase] = useState();

    const avChangeHandler = (event) => {
        setAV(event.target.files[0]);
    }

    const baseChangeHandler = (event) => {
        setBase(event.target.files[0]);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        onSubmit(av, base);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.wrapper}>
                <div className={styles.input}>
                    <label>MZ_AV</label>
                    <input type="file" name="mz_av" onChange={avChangeHandler} />
                </div>
                <div className={styles.input}>
                    <label>MZ_Base</label>
                    <input type="file" name="mz_base" onChange={baseChangeHandler} />
                </div>
            </div>
            <button>Upload</button>
        </form>
    );
}

export default FileInput;