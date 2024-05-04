import HeaderSection from "@/components/header";
import HomeSection from "@/components/footer";
import RealEstate from "@/components/realEstate";
import FooterSection from "@/components/footer";

const ProjectSection = () => {
  return (
    <>
      <div className="bg-black">
        <HeaderSection />
        <div className="w-[82rem] m-auto pt-10">
          <div
            className="flex justify-between pb-10"
            style={{ borderBottom: "1px solid #ffffff" }}
          >
            <div className="my-auto mx-0">
              <h1 className="bg-white px-5 font-semibold text-[5.5rem] h-[5.63rem] flex items-center">
                V-Estate
              </h1>
              <p className="text-btn flex items-center font-semibold text-[5.5rem]">
                Projects{" "}
                <svg
                  className="ml-4"
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
              <img src="/assets/Images/florence.png" alt="" />
              <h2 className="text-white head-3 font-semibold">
                Florence Fortune
              </h2>
              <button className="flex items-center text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1"
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
            className="flex justify-between py-10 "
            style={{ borderBottom: "1px solid #ffffff" }}
          >
            <div>
              <img src="/assets/Images/L&T.png" alt="" />
              <h2 className="text-white head-3 font-semibold">
                L&T Rejuve 360
              </h2>
              <button className="flex items-center text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1"
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
              <img src="/assets/Images/shapoorji.png" alt="" />
              <h2 className="text-white head-3 font-semibold">
                Shapoorji & Pallonji
              </h2>
              <button className="flex items-center text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1"
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
          <div className="flex justify-between pt-10 pb-12">
            <div>
              <img src="/assets/Images/L&T.png" alt="" />
              <h2 className="text-white head-3 font-semibold">Jp Infra</h2>
              <button className="flex items-center text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1"
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
              <img src="/assets/Images/shapoorji.png" alt="" />
              <h2 className="text-white head-3 font-semibold">L&T</h2>
              <button className="flex items-center text-white project-btn rounded-full py-0.5 px-5">
                View Project{" "}
                <svg
                  className="ml-1"
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
      <div className="w-[82rem] m-auto pt-40 pb-20">
        <RealEstate />
      </div>
      <FooterSection />
    </>
  );
};
export default ProjectSection;
