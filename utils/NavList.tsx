import { navListType } from "@/types/navList.Type";
import { BsPeopleFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

export const NavList : navListType[] = [
    {
        id : 1 ,
        title : "Home",
        logo : <FaHome/>,
        href : "/Home"
    },
    {
        id : 2 , 
        title : "My Network",
        logo : <BsPeopleFill />,
        href : "#"
    },
    {
        id : 3 ,
        title : "Jobs",
        logo : <FaSuitcase />,
        href : "#"
    },

    {
        id : 4 ,
        title : "Messaging",
        logo : <FaMessage />,
        href : "#"
    },

    {
        id : 5 ,
        title : "Notification",
        logo : <IoNotifications />,
        href : "#"
    },
]