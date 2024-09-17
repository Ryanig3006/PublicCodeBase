import styles from '../../Styles/Header.module.css'

interface Props {
    title: string,
}

const ContainerHeader = (props: Props) => {
    return (
        <div className={styles.Header}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default ContainerHeader;