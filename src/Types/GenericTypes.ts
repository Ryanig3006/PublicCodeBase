export type TableHeader<T> = {
    header: string, 
    key:keyof T
}

export type TableAction<T> = {
    onClick: (e: T) => void, 
    icon: JSX.Element, 
    colour?: string
}