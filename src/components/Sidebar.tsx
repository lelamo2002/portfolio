interface ISidebarProps {
  showExtraTabs: boolean;
  children?: React.ReactNode;
}

const extraTabs = [
  {
    title: "ri-github-fill",
    icon: "Github",
    route: "/",
  },
];

export default function Sidebar({ showExtraTabs, children }: ISidebarProps) {
  return (
    <div className="flex flex-row w-80 h-full border-line border-r text-secondary-grey">
      {showExtraTabs && (
        <div className="flex flex-col w-16 h-full border-line border-r"></div>
      )}

      <div className="w-full">{children}</div>
    </div>
  );
}
