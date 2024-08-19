"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SidebarAccordion from "@/components/SidebarAccordion";
import Checkbox from "@/components/ui/Checkbox";

type CheckboxState = {
  [key: string]: boolean;
};

const tecnologiesUsed = {
  react: {
    name: "React",
    icon: "ri-reactjs-line",
  },
  node: {
    name: "Node.js",
    icon: "ri-nodejs-line",
  },
  typescript: {
    name: "TypeScript",
    icon: "ri-typescript-line",
  },
  rubyOnRails: {
    name: "Ruby on Rails",
    icon: "ri-ruby-line",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "ri-postgresql-line",
  },
};

export default function Projects() {
  const [checkboxStates, setCheckboxStates] = useState<CheckboxState>(
    Object.keys(tecnologiesUsed).reduce((acc: CheckboxState, key: string) => {
      acc[key] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (name: string) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar showExtraTabs={false}>
        <SidebarAccordion title="Projects" startsOpen={true}>
          <div className="flex flex-col gap-5 p-3">
            {Object.entries(tecnologiesUsed).map(([key, value]) => (
              <Checkbox
                key={key}
                label={value.name}
                icon={value.icon}
                checked={checkboxStates[key]}
                onChange={() => handleCheckboxChange(key)}
              />
            ))}
          </div>
        </SidebarAccordion>
      </Sidebar>
      <div className="flex flex-col w-full h-full"></div>
    </div>
  );
}
