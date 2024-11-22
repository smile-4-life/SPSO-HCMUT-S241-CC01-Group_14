import React from "react";
import side_bar_image from "../assets/images/hcmut_school_gate.png"
import { ReactComponent as SpsoLogo } from "../assets/svgs/spso_name.svg"
import SideBarLink from "./SideBarLink";
import { ReactComponent as ScheduleSvg } from "../assets/svgs/calendar.svg";
import { ReactComponent as PrinterSvg } from "../assets/svgs/printer.svg";
import { ReactComponent as HistorySvg } from "../assets/svgs/log.svg";
import { ReactComponent as LogoutSvg } from "../assets/svgs/log_out.svg"

const AdminSidebar = () => {
  return (
    <div 
        className="flex flex-col space-y-6 h-screen w-96 p-6 text-base items-center bg-cover bg-center font-normal text-black"
        style={{
            backgroundImage: `url(${side_bar_image})`,
        }}
    >
      <a href="manage_system">
        <SpsoLogo className="w-48 h-auto mb-6" />
      </a>
      <ul className="flex flex-col w-full items-left"> 
        <SideBarLink name="Manage system" hrefLink="manage_system" Icon={PrinterSvg} />
        <SideBarLink name="Printing history" hrefLink="printing_history" Icon={HistorySvg} />
        <SideBarLink name="Maintenance scheduling" hrefLink="maintenance_scheduling" Icon={ScheduleSvg} />
      </ul>
      <div className="w-full h-[1px] bg-[#0388B4]"/>
      <a href="/" className="flex flex-row space-x-3 justify-left px-4 py-3 text-red font-normal w-full">
          <LogoutSvg color="red" />
          <p>Log out</p>
      </a>
    </div>
  );
};

export default AdminSidebar;