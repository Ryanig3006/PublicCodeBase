import style from '../../../Styles/Sidebar.module.css'
import SidebarButton from './SideBarButton';

const SideBarMenu = () => {
    return (
        <div className={style.SidebarMenu}>
            <h1>Title</h1>
            <SidebarButton>Dashboard</SidebarButton>
            <SidebarButton>Example 1</SidebarButton>
        </div>
    )
}

export default SideBarMenu;