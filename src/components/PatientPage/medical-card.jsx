import PrescriptionTable from "./prescription-table";

const MedicalCard = () => {
    return (
        <div className="border-2 p-5 flex flex-row text-start gap-x-[100px]">
            <div className="text-sm">12 Jan 1980</div>
            <div className="flex gap-y-[60px] flex-col">
                <div className="text-sm font-semibold flex flex-row gap-x-3">Complaints: <div className="font-thin">Bleeding Gums, Toothache, bad breath</div></div>
                <div className="text-sm font-semibold flex flex-row gap-x-3">Diagnosis: <div className="font-thin">Bleeding Gums, Toothache, bad breath</div></div>
                <div className="text-sm font-semibold flex flex-row gap-x-3">Treatment: <div className="font-thin">Bleeding Gums, Toothache, bad breath</div></div>
            </div>
            <div>
                <PrescriptionTable />
            </div>
        </div>
    )
}
export default MedicalCard;
