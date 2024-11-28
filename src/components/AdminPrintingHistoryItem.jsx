import { ReactComponent as PrinterSvg } from "../assets/svgs/printer.svg";
import { ReactComponent as CopySvg } from "../assets/svgs/copy.svg";
import { ReactComponent as PersonalSvg } from "../assets/svgs/personal_icon.svg";
import { useNavigate } from "react-router-dom";

const AdminPrintingHistoryItem = ({ docName, printTime, studentName, copies, place, studentId }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full space-y-2 items-start p-3 rounded-lg drop-shadow bg-white">
            <div className="flex w-full justify-between items-start">
                <p className="font-bold text-black text-base">{docName}</p>
                <p className="font-normal text-gray-dark text-xs">{printTime}</p>
            </div>
            <div className="flex flex-row space-x-8 font-normal text-gray-dark text-xs">
                <div className="flex flex-row space-x-[6px] cursor-pointer" onClick={() => {navigate(`student?id=${studentId}&name=${studentName}`)}} >
                    <PersonalSvg className="w-4 h-4" fill="black" />
                    <p>{studentName}</p>
                </div>
                <div className="flex flex-row space-x-[6px] ">
                    <PrinterSvg className="w-4 h-4" fill="black" />
                    <p>{place}</p>
                </div>
                <div className="flex flex-row space-x-[6px] ">
                    <CopySvg className="w-4 h-4" fill="black" />
                    <p>{copies} copies</p>
                </div>
            </div>
        </div>
    )
}

export default AdminPrintingHistoryItem;