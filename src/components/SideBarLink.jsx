import { NavLink } from "react-router-dom"

const SideBarLink = ({ name, hrefLink, Icon }) => {
    
    return (
        <NavLink to={hrefLink}>
            {({ isActive, isPending }) => 
                isActive || isPending ? (
                    <div className="flex flex-row space-x-3 justify-start items-center px-4 py-3 bg-blue font-normal w-full rounded-xl">
                        <Icon fill="white" color="white" className="w-8 h-8"/>
                        <p className="text-white">{name}</p>
                    </div>
                )
                :
                (
                    <div className="flex flex-row space-x-3 justify-start items-center px-4 py-3 bg-transparent font-normal w-full">
                        <Icon fill="black" color="black" className="w-8 h-8"/>
                        <p className="text-black">{name}</p>
                    </div>
                )
            }
        </NavLink>
    )
}

export default SideBarLink