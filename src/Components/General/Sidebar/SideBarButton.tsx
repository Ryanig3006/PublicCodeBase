import style from '../../../Styles/Sidebar.module.css'

interface Props {
    children: string;
}

const SidebarButton = (props: Props) => {
    return (
        <button className={style.SidebarButton}>
            {props.children}
        </button>   
    )
}

export default SidebarButton;