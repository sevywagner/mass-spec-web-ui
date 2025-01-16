import { Outlet, Link } from "react-router";
import styles from './header.module.css'

const Header = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <div className={styles.segment}>
                        <div className={styles.logo}>
                            <img alt="Tamu Logo" src={require("../../media/tamu.png")}></img>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <Link to='/mass-spec-web-ui/' className={styles.link}>Process Mass Val</Link>
                        <Link to='/mass-spec-web-ui/graphs' className={styles.link}>Process Graphs</Link>
                    </div>
                    <div className={styles.segment}></div>
                </nav>
            </header>
            {children}
            <Outlet />
        </>
    );
}

export default Header;