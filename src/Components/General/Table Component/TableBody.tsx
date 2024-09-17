import styles from '../../../Styles/Table.module.css'
import { TableAction } from '../../../Types/GenericTypes';
import ActionButton from '../ActionButton';

interface Props<T> {
    headers: Array<{header: string, key: keyof T}>,
    data: T[],
    actions?: TableAction<T>[],
}

function TableBody<T>(props: Props<T>) {
    const rows = props.data.map((d, key1) => {
        return (
            <tr key={key1} className={styles.TableRow}>
                {props.headers.map((h, Key2) => {
                    return (<td key={Key2}><>{d[h.key]}</></td>)
                })}
                {props.actions ? 
                <td style={{textAlign: 'center'}}>
                    {props.actions.map((e, aKey) => {
                    return <ActionButton key={aKey} onClick={() => e.onClick(d)} colour={e.colour}>{e.icon}</ActionButton>
                    })}
                </td>
                :
                <></>
            }
            </tr>
        );
    });
    return (
        <tbody className={styles.TableBody}>
            {rows}
        </tbody>
    )
}

export default TableBody;
