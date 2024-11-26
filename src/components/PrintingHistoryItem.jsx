import { ReactComponent as BookSvg } from "../assets/svgs/book.svg";
import { ReactComponent as PrinterSvg } from "../assets/svgs/printer.svg";
import { ReactComponent as CopySvg } from "../assets/svgs/copy.svg";

const PrintingHistoryItem = ({ printTime, docName, page, place, copies }) => {
    return (
        <div className="flex flex-col w-full space-y-2 items-start p-3 rounded-lg drop-shadow bg-white">
            <p className="font-normal text-gray-dark text-sm">{printTime}</p>
            <p className="font-bold text-black text-xl">{docName}</p>
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
        </div>
    )
}

export default PrintingHistoryItem;