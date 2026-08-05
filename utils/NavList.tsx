import {
  AiFillHome,
} from "react-icons/ai";

import {
  MdPeople,
} from "react-icons/md";

import {
  HiBriefcase,
} from "react-icons/hi";

import {
  BsChatDotsFill,
  BsBellFill,
} from "react-icons/bs";

export const NavList = [
  {
    id: 1,
    title: "Home",
    logo: <AiFillHome />,
  },
  {
    id: 2,
    title: "My Network",
    logo: <MdPeople />,
  },
  {
    id: 3,
    title: "Jobs",
    logo: <HiBriefcase />,
  },
  {
    id: 4,
    title: "Messaging",
    logo: <BsChatDotsFill />,
  },
  {
    id: 5,
    title: "Notifications",
    logo: <BsBellFill />,
  },
];