import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Newspaper } from "lucide-react";
import { BsSuitcase } from "react-icons/bs";
import { profileImg } from "../sidebar/UserProfileCard";

function CreatePost() {
  return (
    <div className="w-full bg-white rounded-lg border border-[#e0e0e0] shadow-sm">
      <div className="flex items-center gap-3 px-4 pt-4">
        <Avatar
          src={profileImg}
          className="w-12 h-12 rounded-full object-cover"
        />
        <Input placeholder="Write something here" />
      </div>

      <div className="mt-2 flex items-center justify-evenly px-2 pb-1">
        <Button
          icon={<BsSuitcase size={20} className="text-[#0a66c2]" />}
          text="Job"
        />

        <Button
          icon={<Newspaper size={20} className="text-[#E16745]" />}
          text="Write article"
        />
      </div>
    </div>
  );
}

export default CreatePost;
