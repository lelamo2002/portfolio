import WormGame from "@/components/WormGame";

export default function Page() {
  const role = "> Fullstack developer";

  const GithubLink = () => (
    <div className="flex flex-row space-x-2">
      <p className="text-secondary-light-blue">const</p>{" "}
      <p className="text-accent-light-cyan">githublink</p> <p> {"="} </p>{" "}
      <a
        href="https://github.com/lelamo2002"
        className="text-accent-pastel-orange underline"
      >
        {'"https://github.com/lelamo2002"'}
      </a>
    </div>
  );

  return (
    <div className="flex w-[75%] justify-between items-center font-firaCode flex-col xl:flex-row">
      <div className="flex w-[60%] flex-col justify-center ">
        <div className="pb-20">
          <p className="text-body">Hello there, I am</p>
          <h1 className="text-headline leading-none">Leonardo Moreno</h1>
          <h3 className="text-secondary-light-blue text-subheadline">{role}</h3>
        </div>
        <div className="leading-8 text-codeSnippets">
          <p className="text-secondary-grey">
            {"// complete the game to continue"}
          </p>
          <p className="text-secondary-grey">
            {"// You can also see it on my github page"}
          </p>
          <GithubLink />
        </div>
      </div>
      <div className="flex p-4 bg-[linear-gradient(180deg,#237b6d,rgba(67,217,173,.13))]  rounded-xl">
        <div className=" m-2 bg-primary-dark-blue rounded-xl w-[192px] overflow-hidden ">
          <WormGame />
        </div>
        <div className=" m-2 w-[192px]">
          <div className="p-2 bg-[#011423]/[.19] rounded-xl h-[134px]">
            <p>{"// use keyboard"}</p>
            <p>{"// arrows to start"}</p>
            <p>{"// playing"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
