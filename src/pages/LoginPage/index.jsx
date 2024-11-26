import HCMUTLogo from "../../assets/images/HCMUT_official_logo.png";
import HMCUTLoginImage from "../../assets/images/hcmut_libary_image.png"
import HCMUTImage from "../../assets/images/HCMUT_logo.png"
import { NavLink } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="flex-1 h-screen">
            <div className="flex w-full bg-blue px-4 justify-start">
                <img src={HCMUTLogo} alt="HCMUT_official_logo" className="w-28 h-20"/>
            </div>
            <div 
                className="h-full w-full flex justify-center items-center bg-cover bg-center py-10"
                style={{
                    backgroundImage: `url(${HMCUTLoginImage})`
                }}
            >
                <div className="w-[540px] flex flex-col items-center space-y-8 justify-center p-14 bg-white rounded-lg">
                    <p className="text-3xl text-blue-dark font-extrabold">SMART PRINTING SERVICE</p>
                    <img src={HCMUTImage} alt="HCMUT_official_logo" className="w-36 h-36"/>
                    <div className="bg-gray h-[1px] w-full"/>
                    <div className="w-full flex justify-start">
                        <p className="text-2xl font-bold text-[#002799]">Log in using your account on:</p>
                    </div>
                    <div className="w-full flex flex-col space-y-[6px]">
                        <NavLink className="w-full py-3 flex items-center justify-center rounded-lg border border-[#DDDDDD]"
                            to="/user/student_information"
                        >
                            <p className="text-black font-normal text-sm">HCMUT (HCMUT account)</p>
                        </NavLink>
                        <NavLink className="w-full py-3 flex items-center justify-center rounded-lg border border-[#DDDDDD]"
                            to="/admin/manage_system"
                        >
                            <p className="text-black font-normal text-sm">Admin </p>
                        </NavLink>
                    </div>
                    <div className="bg-gray h-[1px] w-full"/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage