import styles from '../../../Styles/Table.module.css'
import { TableHeader } from '../../../Types/GenericTypes';

interface Props<T> {
    headers: TableHeader<T>[],
    action?: boolean,
}

function TableHead<T> (props: Props<T>) {
    const head = props.headers.map((e, key) => {
        return (
            <th key={key}>{e.header}</th>
        )
    })
    return (
        <thead className={styles.TableHead}>
            <tr>
                {head}
                {props.action ? <th>Actions</th> : <></>}
            </tr>
        </thead>
    )
}

export default TableHead;