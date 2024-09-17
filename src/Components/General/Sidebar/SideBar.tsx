import styles from '../../../Styles/Sidebar.module.css';
import SideBarMenu from './SideBarMenu';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const SideBar = (props: Props) => {
    return (
        <div className={styles.Sidebar}>
            <SideBarMenu />
            <div>{props.children}</div>
        </div>
    )
}

export default SideBar;