import TableBody from "./TableBody";
import TableHead from "./TableHead";
import styles from '../../../Styles/Table.module.css'
import { TableAction } from "../../../Types/GenericTypes";

interface Props<T> {
    headers: Array<{header: string, key: keyof T}>,
    data: T[],
    actions?: TableAction<T>[]
}

function Table<T> (props: Props<T>) {
    return (
        <table className={styles.Table}>
            <TableHead headers={props.headers} action={props.actions ? true : false}/>
            <TableBody headers={props.headers} data={props.data} actions={props.actions} />
        </table>
    )
}

export default Table;