import WormGame from "@/components/WormGame";
import Image from "next/image";

export default function Home() {
  const role = "> Fullstack developer";

  const GithubLink = () => (
    <div className="flex flex-row gap-2 flex-wrap">
      <p className="text-secondary-light-blue">{"const "}</p>
      <p className="text-accent-light-cyan">{"githubLink"}</p> <p> {"= "} </p>
      <a
        href="https://github.com/lelamo2002"
        className="text-accent-pastel-orange underline break-all "
      >
        {'"https://github.com/lelamo2002"'}
      </a>
    </div>
  );

  return (
    <div className="flex gap-8 items-stretch font-firaCode flex-row flex-wrap m-4 justify-center w-5/6 md:w-auto">
      <div className="flex flex-col justify-between w-full md:w-auto ">
        <div className="">
          <p className="text-body">Hello there, I am</p>
          <h1 className="text-headline leading-none break-words">
            Leonardo Moreno
          </h1>
          <h3 className="text-secondary-light-blue text-subheadline">{role}</h3>
        </div>
        <div className="leading-8 text-codeSnippets">
          <p className="text-secondary-grey">
            {"// Feel free to play this worm game"}
          </p>
          <p className="text-secondary-grey">
            {
              "// Just remember to keep browsing the page, or maybe check my github ;)"
            }
          </p>
          <GithubLink />
        </div>
      </div>

      <WormGame gridHeight={40} gridWidth={24} />
      <Image
        src="/background_blurs.svg"
        alt=""
        width={500}
        height={500}
        className="absolute pointer-events-none md:top-1/4 md:left-2/4"
      />
    </div>
  );
}
