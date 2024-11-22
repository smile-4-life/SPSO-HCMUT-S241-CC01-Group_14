import wavingHandEmoji from "../assets/images/waving_hand_emoji.jpg"
import { ReactComponent as MessageSvg } from "../assets/svgs/message.svg"
import { ReactComponent as BellSvg } from "../assets/svgs/bell.svg"
import { ReactComponent as AvtSvg } from "../assets/svgs/Avatar.svg"
import { ReactComponent as DownArrowSvg } from "../assets/svgs/down_arrow.svg"

const Header = ({ pageName, description }) => {
    return (
        <div className="flex py-3 px-5 justify-between w-full bg-white items-center rounded-lg">
            <div className="flex flex-col justify-start items-start">
                <div className="flex flex-row space-x-4">
                    <p className="text-blue font-bold text-xl">{pageName}</p>
                    <img src={wavingHandEmoji} alt="waving_hand_emoji" className="w-6 h-6" />
                </div>
                <p className="text-gray-dark font-normal text-base">{description}</p>
            </div>
            <div className="flex flex-row space-x-4 items-center ml-2">
                <MessageSvg fill="black" color="black" className="w-6 h-6"/>
                <BellSvg fill="black" color="black" className="w-6 h-6"/>
                <div className="flex flex-row space-x-3">
                    <AvtSvg fill="#679F38" className="w-11 h-11" />
                    <div className="flex flex-col space-y-0 items-start justify-center">
                        <p className="text-blue font-bold text-base">Tran Quoc Trung</p>
                        <p className="text-gray-dark font-normal text-sm">Student</p>
                    </div>
                </div>
                <DownArrowSvg className="w-5 h-2"/>
            </div>
        </div>
    )
}

export default Header;