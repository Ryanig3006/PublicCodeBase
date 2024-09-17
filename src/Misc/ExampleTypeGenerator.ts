import ExampleType from "../Types/ExampleType";

const ExampleTypeGenerator = (count: number) => {
    var list:ExampleType[] = [];
    for (let i = 0; i < count; i++) {
        const t:ExampleType = { 
            id: i,
            name: nameList[Math.floor(Math.random() * (nameList.length - 1 + 1) + 0)],
            address: Math.floor(Math.random() * (60 - 1 + 1) + 0) + " " + adressList[Math.floor(Math.random() * (adressList.length - 1 + 1) + 0)],
            status: statusList[Math.floor(Math.random() * (statusList.length - 1 + 1) + 0)],
            desc: desc[Math.floor(Math.random() * (desc.length - 1 + 1) + 0)],
            val: 0}
        list.push(t);
      }
    return list;
}


const nameList = [
    "John",
    "Gary",
    "Dean",
    "Barny",
    "Ryan",
    "Gregg",
    "Dylan",
    "Cameron",
    "Iain",
    "Abdul"
]

const adressList = [
    "Dunlop Street",
    "Barn Road",
    "Old Road",
    "Life Garden",
    "Poridge Lane",
    "High Street"
]

const statusList = [
    "Active",
    "Inactive",
    "Processing",
    "Testing"
]

const desc = [
    "Wipe",
    "Testing",
    "Can't Confirm",
    "Wallow",
    "Needs Checked"
]

export default ExampleTypeGenerator;