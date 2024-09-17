import { useEffect, useState } from "react";
import ExampleType from "../../Types/ExampleType";
import { API } from "../../Services/Example.service";

const ExampleTable = () => {

    const [data, setData] = useState<ExampleType[]>([]);

    useEffect(() => {
        setData(API.GetAll(25));
    }, [])

    return (
        <></>
    )
}

export default ExampleTable;