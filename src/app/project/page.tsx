import HeaderSection from "@/components/header";
import HomeSection from "@/components/footer";
import RealEstate from "@/components/realEstate";
import FooterSection from "@/components/footer";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <>
      <div className="bg-pure-black">
        <HeaderSection />
        <div className=" tab:px-[1.82rem] lgdesktop:max-w-[82rem] lgdesktop:m-auto pt-10 lg:px-14 lgdesktop:px-0">
          <div
            className="flex justify-between pb-10"
            style={{ borderBottom: "0.75px solid rgba(255, 255, 255, 0.5)" }}
          >
            <div className="my-auto mx-0">
              <h1 className="bg-white px-5 font-semibold tab:px-2 tab:text-[3.15rem] tab:leading-[2.82rem] lg:text-[4.5rem] xl:text-[5.5rem] lg:leading-[5rem] flex items-center">
                V-Estate
              </h1>
              <p className="text-prime-green flex items-center font-semibold tab:text-[3.15rem] tab:leading-[2.82rem] lg:text-[4.5rem] xl:text-[5.5rem] lg:leading-[5rem] pt-2">
                Projects{" "}
                <svg
                  className="lg:ml-4 tab:w-[1.32rem] tab:ml-2 lg:w-[2.5rem]"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M39.1376 20.1826L0.346191 20.1826"
                      stroke="#E7E7E7"
                      stroke-width="3.49787"
                    />
                    <path
                      d="M33.4638 6.46096L6.03418 33.8906"
                      stroke="#E7E7E7"
                      stroke-width="3.49787"
                    />
                    <path
                      d="M33.4638 33.8896L6.03418 6.45996"
                      stroke="#E7E7E7"
                      stroke-width="3.49787"
                    />
                    <path
                      d="M19.7417 39.5795L19.7417 0.788086"
                      stroke="#E7E7E7"
                      stroke-width="3.49787"
                    />
                  </g>
                </svg>
              </p>
            </div>
            <div>
              <Image
                width={662}
                height={296}
                className=" tab:w-[22.65rem] lg:w-[30rem] lgdesktop:w-[40.3rem] 2xl:w-[42.8rem] "
                src="/assets/Images/florence.png"
                alt="florence-fortune"
              />
              <h2 className="text-white head-3 font-semibold">
                Florence Fortune
              </h2>
              <button className="flex items-center  text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1 tab:w-[0.63rem] lg:w-[1.25rem]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.82991 14.6436C4.58657 14.8825 4.58657 15.2699 4.82991 15.5088C5.07324 15.7477 5.46777 15.7477 5.71111 15.5088L4.82991 14.6436ZM5.71111 15.5088L15.6068 5.79257L14.7256 4.92735L4.82991 14.6436L5.71111 15.5088Z"
                    fill="white"
                  />
                  <path
                    d="M6.4834 5.18262H15.3308V13.8696"
                    stroke="white"
                    stroke-width="1.23496"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="flex justify-between py-10 tab:gap-x-3 lg:gap-6"
            style={{ borderBottom: "0.75px solid rgba(255, 255, 255, 0.5)" }}
          >
            <div>
              <Image
                width={644}
                height={350}
                src="/assets/Images/L&T.png"
                alt=""
              />
              <h2 className="text-white head-3  font-semibold">
                L&T Rejuve 360
              </h2>
              <button className="flex items-center  text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1 tab:w-[0.63rem] lg:w-[1.25rem]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.82991 14.6436C4.58657 14.8825 4.58657 15.2699 4.82991 15.5088C5.07324 15.7477 5.46777 15.7477 5.71111 15.5088L4.82991 14.6436ZM5.71111 15.5088L15.6068 5.79257L14.7256 4.92735L4.82991 14.6436L5.71111 15.5088Z"
                    fill="white"
                  />
                  <path
                    d="M6.4834 5.18262H15.3308V13.8696"
                    stroke="white"
                    stroke-width="1.23496"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div>
              <Image
                width={644}
                height={350}
                src="/assets/Images/shapoorji.png"
                alt=""
              />
              <h2 className="text-white head-3  font-semibold">
                Shapoorji & Pallonji
              </h2>
              <button className="flex items-center  text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1 tab:w-[0.63rem] lg:w-[1.25rem]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.82991 14.6436C4.58657 14.8825 4.58657 15.2699 4.82991 15.5088C5.07324 15.7477 5.46777 15.7477 5.71111 15.5088L4.82991 14.6436ZM5.71111 15.5088L15.6068 5.79257L14.7256 4.92735L4.82991 14.6436L5.71111 15.5088Z"
                    fill="white"
                  />
                  <path
                    d="M6.4834 5.18262H15.3308V13.8696"
                    stroke="white"
                    stroke-width="1.23496"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between pt-10 pb-12 lg:gap-6 tab:gap-x-3 ">
            <div>
              <Image
                width={644}
                height={350}
                src="/assets/Images/L&T.png"
                alt=""
              />
              <h2 className="text-white head-3  font-semibold">Jp Infra</h2>
              <button className="flex items-center  text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1 tab:w-[0.63rem] lg:w-[1.25rem]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.82991 14.6436C4.58657 14.8825 4.58657 15.2699 4.82991 15.5088C5.07324 15.7477 5.46777 15.7477 5.71111 15.5088L4.82991 14.6436ZM5.71111 15.5088L15.6068 5.79257L14.7256 4.92735L4.82991 14.6436L5.71111 15.5088Z"
                    fill="white"
                  />
                  <path
                    d="M6.4834 5.18262H15.3308V13.8696"
                    stroke="white"
                    stroke-width="1.23496"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div>
              <Image
                width={644}
                height={350}
                src="/assets/Images/shapoorji.png"
                alt=""
              />
              <h2 className="text-white head-3  font-semibold">L&T</h2>
              <button className="flex items-center  text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1 tab:w-[0.63rem] lg:w-[1.25rem]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.82991 14.6436C4.58657 14.8825 4.58657 15.2699 4.82991 15.5088C5.07324 15.7477 5.46777 15.7477 5.71111 15.5088L4.82991 14.6436ZM5.71111 15.5088L15.6068 5.79257L14.7256 4.92735L4.82991 14.6436L5.71111 15.5088Z"
                    fill="white"
                  />
                  <path
                    d="M6.4834 5.18262H15.3308V13.8696"
                    stroke="white"
                    stroke-width="1.23496"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lgdesktop:max-w-[82rem] m-auto pt-40 pb-20 tab:pb-0 tab:pt-20 tab:px-[1.82rem] lg:px-14 lgdesktop:px-0">
        <RealEstate />
        <FooterSection />
      </div>
    </>
  );
};
export default ProjectSection;
