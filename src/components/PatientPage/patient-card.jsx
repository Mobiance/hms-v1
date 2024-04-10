import MedicalCard from "./medical-card";
import { Button } from "../ui/button";
const PatientCard = () => {
    return (
        <div className="border-2 rounded-lg text-2xl font-semibold">
            <div className="flex flex-row justify-between p-5">
                <div>Medical Record</div>
                <Button className="text-white rounded-lg p-3">Add New Record</Button>
            </div>
            <div className="p-10 flex flex-col gap-y-[40px]">
                <MedicalCard />
                <MedicalCard />
                <MedicalCard />
            </div>
        </div>
    )
}
export default PatientCard;
