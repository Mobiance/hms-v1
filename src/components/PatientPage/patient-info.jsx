import PatientCard from "./patient-card";

const PatientInfo = () => {
    return (
        <div className="border-2 p-4">
        <div className="flex flex-row justify-evenly pb-5">
            <div className="text-xl font-semibold">Sarthak Nandedkar</div>
            <div className="text-lg font-thin">abc@gmail.com</div>
            <div className="text-xl ">1231231232</div>
        </div>
            <div>
            <PatientCard />
            </div>
        </div>
    );
};
export default PatientInfo;
