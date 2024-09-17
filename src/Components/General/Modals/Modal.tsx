import styles from '../../../Styles/Modal.module.css'

interface Props {
    open: boolean;
    actions: Array<{onClick:(() => void) | ((e: any) => void), label:string}>;
    body: JSX.Element | JSX.Element;
}

const Modal = (props: Props) => {
    return (
        <div className={styles.Modal} style={props.open ? {display:'block'} : {display:'none'}}>
            <div className={styles.ModalMain}>
                <div className={styles.ModalBody}>
                    {props.body}
                </div>
                <div className={styles.ModalFooter}>
                    {props.actions.map((a, aKey) => {
                        return (
                            <button key={aKey} onClick={a.onClick} className={styles.ModalButton}>{a.label}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal;