interface Props {
  coverImg: string;
  profileImg: string;
  name: string;
  role: string;
  company: string;
  address: string;
  Logo: string;
}

export default function UserProfileCard({
  coverImg,
  profileImg,
  name,
  role,
  company,
  address,
  Logo,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
      <div className="relative">
        <img
          src={coverImg}
          className="h-20 w-full object-cover"
          alt=""
        />

        <img
          src={profileImg}
          className="absolute left-4 top-14 h-16 w-16 rounded-full border-2 border-white object-cover"
          alt=""
        />
      </div>

      <div className="pt-12 px-4 pb-4">
        <h2 className="capitalize font-semibold text-[20px] leading-6 hover:cursor-pointer">
          {name}
        </h2>

        <p className="capitalize text-sm text-zinc-700 mt-1">
          {role}
        </p>

        <p className="capitalize text-sm text-zinc-700">
          {company}
        </p>

        <p className="capitalize text-sm text-zinc-500 mt-1">
          {address}
        </p>

        <div className="mt-4 flex items-center gap-2 hover: cursor-pointer">
          <img
            src={Logo}
            className="w-5 h-5 object-contain"
            alt=""
          />

          <span className="text-sm font-semibold">
            {company}
          </span>
        </div>
      </div>
    </div>
  );
}