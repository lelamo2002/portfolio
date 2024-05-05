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
      title: "Home",
      route: "/",
    },
    {
      title: "About",
      route: "/about",
    },
    {
      title: "Projects",
      route: "/projects",
    },
    {
      title: "Contact",
      route: "/contact",
    },
  ];

  const LastItem = HeaderTabs.at(-1);

  return (
    <div className="flex flex-row justify-between w-full border-line border-b text-secondary-grey">
      <div className="flex flex-row">
        <div className="h-14 border-r pl-4 pr-14 flex border-line items-center hover:text-secondary-white ">
          <p className="truncate">Leonardo Lago Moreno</p>
        </div>

        {HeaderTabs.map((tab, index) => {
          if (index === HeaderTabs.length - 1) {
            return null;
          }

          return (
            <Link
              href={tab.route}
              key={tab.title}
              className={` h-14 cursor-pointer border-r px-7 flex border-line items-center hover:border-b-2 border-b-accent-orange ${
                tab.route == pathname ? "border-b-2 text-secondary-white" : ""
              } `}
            >
              {tab.title}
            </Link>
          );
        })}
      </div>

      {LastItem && (
        <Link
          href={LastItem.route}
          key={LastItem.title}
          className={`h-14 cursor-pointer border-l px-7 flex border-line items-center hover:border-b-2 border-b-accent-orange  ${
            LastItem.route == pathname ? "border-b-2 text-secondary-white" : ""
          } `}
        >
          {LastItem.title}
        </Link>
      )}
    </div>
  );
}
