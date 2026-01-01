import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
  key={column.title}
  className="min-w-[200px] h-auto flex flex-col items-center justify-start"
>
  <h3 className="font-bold text-[16px]">{column.title}</h3>

  {/* Social Media - Horizontal */}
  <div className="flex flex-row items-center gap-6 mt-4">
    {column.data.map(({ icon: Icon, name, link }) => (
      <Link
        key={`${column.title}-${name}`}
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center gap-2
        text-gray-200
        transition-colors duration-300
        hover:text-purple-400"
      >
        {Icon && <Icon size={20} />}
        <span className="text-[15px]">{name}</span>
      </Link>
    ))}
  </div>
</div>

          ))}
        </div>

     
<div className="mb-[20px] mt-[60px] text-[15px] text-center text-gray-400">
  © {new Date().getFullYear()}. Designed and developed by Dence Baylor Agudong.
</div>



      </div>
    </div>
  );
};
