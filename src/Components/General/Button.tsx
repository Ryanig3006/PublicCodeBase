interface Props {
    children: string,
    onClick?: () => void,
}

const Button = (props: Props) => {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;