import ExampleTypeGenerator from "../Misc/ExampleTypeGenerator";
import ExampleType from "../Types/ExampleType";

const GetAll = (num: number): ExampleType[] => {
    return ExampleTypeGenerator(num);
}

const Get = () => {
    return ExampleTypeGenerator(1)[0];
}

export const API = {
    GetAll,
    Get,
}