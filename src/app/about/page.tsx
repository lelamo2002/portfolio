export default function Page() {
  const role = "> Fullstack developer";
  return (
    <div className="flex w-screen h-screen bg-primary-black justify-center items-center">
      <div className="flex flex-wrap w-[96%] h-[94%] bg-primary-dark-blue justify-center items-center rounded-xl border-line border">
        <div className="flex w-[75%] h-1/2">
          <div className="flex w-[60%] flex-col justify-center font-firaCode">
            <div className="pb-20">
              <p className="text-body">Hello there, I am</p>
              <h1 className="text-headline">Leonardo Moreno</h1>
              <h3 className="text-secondary-light-blue text-subheadline">
                {role}
              </h3>
            </div>
            <div className="leading-8">
              <p className="text-secondary-grey">
                {"// complete the game to continue"}
              </p>
              <p className="text-secondary-grey">
                {"// You can also see it on my github page"}
              </p>
            </div>
          </div>
          <div className="flex bg-accent-light-cyan w-[40%] rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
