"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface IHeaderTabs {
  title: string;
  route: string;
}

export default function Header() {
  const pathname = usePathname();

  const HeaderTabs: IHeaderTabs[] = [
    {
      title: "ri-instagram-line",
      route: "https://www.instagram.com/leolmdl/",
    },
    {
      title: "ri-mail-line",
      route: "mailto:leleolagomoreno@gmail.com",
    },
    {
      title: "@lelamo2002",
      route: "https://github.com/lelamo2002",
    },
  ];

  const LastItem = HeaderTabs.at(-1);

  return (
    <>
      <div className="hidden md:flex flex-row justify-between w-full border-line border-t text-secondary-grey">
        <div className="flex flex-row">
          <div className="h-12 md:border-r pl-4 pr-4 flex border-line items-center hover:text-secondary-white ">
            <p className="truncate">find me in:</p>
          </div>

          {HeaderTabs.map((tab, index) => {
            if (index === HeaderTabs.length - 1) {
              return null;
            }

            return (
              <a
                target="_blank"
                href={tab.route}
                key={tab.title}
                className={` h-12 cursor-pointer border-r px-4 text-xl flex border-line items-center hover:border-t-2 hover:text-secondary-white border-t-accent-orange ${tab.title}`}
              ></a>
            );
          })}
        </div>

        {LastItem && (
          <a
            target="_blank"
            href={LastItem.route}
            key={LastItem.title}
            className={`h-12 cursor-pointer gap-1 border-l px-7 flex border-line items-center hover:border-t-2 hover:text-secondary-white border-t-accent-orange  ${
              LastItem.route == pathname
                ? "border-t-2 text-secondary-white"
                : ""
            } `}
          >
            {LastItem.title}
            <i className="ri-github-fill text-xl"></i>
          </a>
        )}
      </div>

      <div className="flex md:hidden flex-row justify-between w-full border-line border-t text-secondary-grey">
        <div className="flex flex-row">
          <div className="h-12 md:border-r pl-4 flex border-line items-center  hover:text-secondary-white ">
            <p className="truncate">Leonardo Lago Moreno</p>
          </div>
        </div>
      </div>
    </>
  );
}
