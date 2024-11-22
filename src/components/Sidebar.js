import React from "react";
import side_bar_image from "../assets/images/hcmut_school_gate.png"
import { ReactComponent as SpsoLogo } from "../assets/svgs/spso_name.svg"
import SideBarLink from "../components/SideBarLink";
import { ReactComponent as PersonalSvg } from "../assets/svgs/personal_icon.svg";
import { ReactComponent as PlusRectangleSvg } from "../assets/svgs/plus-rectangle.svg";
import { ReactComponent as PrinterSvg } from "../assets/svgs/printer.svg";
import { ReactComponent as HistorySvg } from "../assets/svgs/log.svg";
import { ReactComponent as LogoutSvg } from "../assets/svgs/log_out.svg"

const Sidebar = () => {
  return (
    <div 
        className="flex flex-col space-y-6 h-screen w-96 p-6 text-base items-center bg-cover bg-center font-normal text-black"
        style={{
            backgroundImage: `url(${side_bar_image})`,
        }}
    >
      <a href="/">
        <SpsoLogo className="w-48 h-auto mb-6" />
      </a>
      <ul className="flex flex-col w-full items-left">
        <SideBarLink name="Personal information" hrefLink="student_information" Icon={PersonalSvg} />
        <SideBarLink name="Print document" hrefLink="print_document" Icon={PrinterSvg} /> 
        <SideBarLink name="Transaction history" hrefLink="transaction_history" Icon={HistorySvg} />
        <SideBarLink name="Buy more paper" hrefLink="buy_more_paper" Icon={PlusRectangleSvg} />
      </ul>
      <div className="w-full h-[1px] bg-[#0388B4]"/>
      <a href="/" className="flex flex-row space-x-3 justify-left px-4 py-3 text-red font-normal w-full">
          <LogoutSvg color="red" />
          <p>Log out</p>
      </a>
    </div>
  );
};

export default Sidebar;