import { useState } from "react";
import ContainerHeader from "../Components/General/ContainerHeader";
import Table from "../Components/General/Table Component/Table";
import { API } from "../Services/Example.service";
import ExampleType from "../Types/ExampleType";
import { TableHeader } from "../Types/GenericTypes";
import Modal from "../Components/General/Modals/Modal";

type ModalAction<T> = {
    onClick: (() => void) | ((e: T) => void),
    label: string,
}

const ExampleContainer = () => {

    const [data, setData] = useState<ExampleType[]>(API.GetAll(25));
    const headers:TableHeader<ExampleType>[] = [
        {header:"ID", key:"id"}, 
        {header:"Name", key:"name"},
        {header:"Address", key:"address"},
        {header:"Status", key:"status"},
        {header:"Description", key:"desc"},
        {header: "Val", key: "val"}
    ]

    const actions:Array<{onClick: ((e: ExampleType) => void) | (() => void), icon: JSX.Element, colour?: string}> = [
        {onClick: (e) => (e), icon: <>E</>},
        {onClick: (e) => ConfirmDelete(e), icon: <>D</>, colour:"red"}
    ]

    const [modalActions, setModalActions] = useState<ModalAction<ExampleType>[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const ToggleModal = () => {
        setModalOpen((prev) => !prev);
    }

    const ConfirmDelete = (item: ExampleType) => {
        setModalActions([{onClick: () => Delete(item), label:"Confirm"}, {onClick: () => ToggleModal(), label:"Cancel"}])
        ToggleModal();
    }

    const Delete = (e: ExampleType) => {
        console.log(e);
        ToggleModal();
    }

    return (
        <>
            <Modal open={modalOpen} actions={modalActions} body={<>Are you sure?</>} />
            <ContainerHeader title="Example Container"/>
            <Table<ExampleType> headers={headers} data={data} actions={actions}/>
        </>
    )
}

export default ExampleContainer;