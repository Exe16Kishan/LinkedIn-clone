import Userprofilecard from "@/components/ui/Userprofilecard";

let coverImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvD25Zvs6yeS4zh6_mKbOf1bCgV9-DYRj9Z1fkLnpWtg&s";
let profileImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTga73WXGuzom0Zmgglw7Uxx1drQ4yOYGhcjy5luDjaMg&s=10";
let logo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0PSCZtRsl8Kyh8Zw6k_gSlcpG2ObpHRjPWI-tbR7LQ&s=10";
function UserProfileCard() {
  return (
    <>
      <Userprofilecard
        coverImg={coverImg}
        profileImg={profileImg}
        role="fullstack engineer"
        name="kishan kumar"
        address="noida , uttar pradesh"
        company="BrandTangent"
        Logo={logo}
      />
    </>
  );
}

export default UserProfileCard;
