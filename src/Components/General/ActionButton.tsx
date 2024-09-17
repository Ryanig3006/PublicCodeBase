import styles from '../../Styles/Button.module.css'

interface Props {
    onClick: (e: any) => any;
    children: JSX.Element;
    colour?: string;
}

const ActionButton = (props: Props) => {
    return (
        <button className={styles.ActionButton} style={{backgroundColor:props.colour}} onClick={props.onClick}>{props.children}</button>
    )
}

export default ActionButton;