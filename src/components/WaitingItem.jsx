import { ReactComponent as BookSvg } from "../assets/svgs/book.svg";
import { ReactComponent as PrinterSvg } from "../assets/svgs/printer.svg";
import { ReactComponent as CopySvg } from "../assets/svgs/copy.svg";
import { ReactComponent as HistorySvg} from "../assets/svgs/history.svg"

const WaitingItem = ({ registerTime, docName, page, place, copies, isPrinted, 
        waitingTime, printedTime, onButtonClick }) => {
    return (
        <div className="flex flex-col w-full space-y-2 items-start p-3 rounded-lg drop-shadow bg-white">
            <p className="font-normal text-gray-dark text-sm">{registerTime}</p>
            <p className="font-bold text-black text-xl truncate whitespace-nowrap overflow-hidden max-w-full">{docName}</p>
            <div className="flex flex-row space-x-8 font-normal text-gray-dark text-sm">
                <div className="flex flex-row space-x-[6px] ">
                    <BookSvg className="w-5 h-5" fill="black" />
                    <p>{page} pages</p>
                </div>
                <div className="flex flex-row space-x-[6px] ">
                    <PrinterSvg className="w-5 h-5" fill="black" />
                    <p>{place}</p>
                </div>
                <div className="flex flex-row space-x-[6px] ">
                    <CopySvg className="w-5 h-5" fill="black" />
                    <p>{copies} copies</p>
                </div>
            </div>
            {isPrinted ?
                <div className="w-full">
                    <div className="flex flex-row gap-1">
                        <HistorySvg fill="#07C656" />
                        <p className="font-semibold text-[#07C656] text-base">Printed at: </p>
                        <p className="text-[#07C656] text-base">{printedTime}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p/>
                        <button className="px-4 py-2 rounded-lg bg-[#64FFA2] bg-opacity-50 items-end" onClick={onButtonClick}>
                            <p className="font-semibold text-[#07C656]">Confirm</p>
                        </button>
                    </div>
                </div>
                :
                <div className="w-full">
                    <div className="flex flex-row gap-1">
                        <HistorySvg fill="#F40F0F" />
                        <p className="font-semibold text-[#F40F0F] text-base">Expected waiting time: </p>
                        <p className="text-[#F40F0F] text-base">{waitingTime} minute</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p/>
                        <button className="px-5 py-2 rounded-lg bg-[#FD7D7D] bg-opacity-50 items-end" onClick={onButtonClick}>
                            <p className="font-semibold text-[#F40F0F]">Cancel</p>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default WaitingItem;