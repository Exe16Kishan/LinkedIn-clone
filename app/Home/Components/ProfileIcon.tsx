import { BiSolidDownArrow } from "react-icons/bi"


function ProfileIcon() {
  return (
    <div className='flex flex-col'>
        <img src="https://img.icons8.com/?size=50&id=23241&format=png&color=000000" alt="profile"  />
        <p className='flex items-center gap-1.5'>Me <BiSolidDownArrow/></p>
    </div>
  )
}

export default ProfileIcon