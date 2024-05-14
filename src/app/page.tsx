import Image from "next/image";
import HeaderSection from "@/components/header";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["greek"] });

export default function Home() {
  return (
    <>
      <main className="">
        <div className="bg-journey-redefined bg-no-repeat bg-cover">
          <HeaderSection />

          <div className="flex flex-col items-center justify-center py-40">
            <h2 className="text-white head-64">Sales Journey Redefined</h2>
            <p className="text-white text-2xl text-center w-[65rem]">
              An Immersive Property Experiences
            </p>
            <button className="bg-prime-green flex items-center lg:px-[2.12rem] lg:py-1.5 tab:px-14  tab:py-2.5 rounded-full text-2xl mobile:text-lg mobile:px-5 mobile:py-0.5">
              Book Demo{" "}
              <svg
                className="ml-1"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.46677 14.7016C4.20653 14.9619 4.20653 15.3838 4.46677 15.6441C4.72702 15.9043 5.14896 15.9043 5.40921 15.6441L4.46677 14.7016ZM5.40921 15.6441L15.3503 5.70298L14.4079 4.76054L4.46677 14.7016L5.40921 15.6441Z"
                  fill="#121112"
                />
                <path
                  d="M6.15283 5.0498H15.0408V13.9378"
                  stroke="#121112"
                  stroke-width="1.3328"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <svg
            width="679"
            height="104"
            viewBox="0 0 679 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M520.96 0H0V104H679C656.895 104 635.778 94.8434 620.67 78.7075L564.759 18.9922C553.415 6.87598 537.559 0 520.96 0Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="max-w-[82rem] m-auto py-32">
          <div className="flex">
            <Image
              width={507}
              height={404}
              src="/assets/Images/about-vestate.png"
              alt=""
            />
            <div className="w-[60%] pl-20">
              <h2 className="bg-prime-green text-head-dark text-7xl w-[15rem] m-auto">
                About
              </h2>
              <p className="flex text-7xl font-semibold items-center py-5 justify-center">
                V-Estate{" "}
                <svg
                  className="ml-4"
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.5236 27.998L0.523438 27.998"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M48.3324 8.18904L8.73438 47.7871"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M48.3324 47.7875L8.73438 8.18945"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M28.5234 56.0001L28.5234 0"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                </svg>
              </p>
              <p>
                V-Estate is an interactive sales tool that consolidates the
                entire sales process into a single, user-friendly platform,
                empowering you to put customers at the forefront of your sales
                journey. <br></br> <br></br>
                At its core, V-Estate is designed to revolutionize the way real
                estate developers approach sales and marketing. Showcase
                properties in stunning detail, offering customers an
                unparalleled opportunity to explore every aspect of a
                development before making a purchase decision.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center py-20">
            <Image
              className="mx-6 my-6"
              width={236}
              height={48}
              src="/assets/Images/home/larsen-tourbo.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={247}
              height={48}
              src="/assets/Images/home/kalpatru.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={123}
              height={48}
              src="/assets/Images/home/adani.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={216}
              height={37}
              src="/assets/Images/home/rustomjee.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={182}
              height={43}
              src="/assets/Images/home/lodha.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={260}
              height={33}
              src="/assets/Images/home/kumar-properties.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={224}
              height={43}
              src="/assets/Images/home/shapoor-pallon.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={112}
              height={48}
              src="/assets/Images/home/architect-hafeez.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={197}
              height={35}
              src="/assets/Images/home/jp.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={160}
              height={50}
              src="/assets/Images/home/hba.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={163}
              height={51}
              src="/assets/Images/home/florence-fortune.png"
              alt=""
            />
            <Image
              className="mx-6 my-6"
              width={192}
              height={58}
              src="/assets/Images/home/ao-design.png"
              alt=""
            />
          </div>
          <hr style={{}} />

          <div className="pt-20 pb-4">
            <h2 className="bg-prime-green text-head-dark text-7xl w-[20rem] m-auto text-center">
              v-estate
            </h2>
            <p className="flex text-7xl font-semibold items-center justify-center py-5">
              Project case studies
            </p>
            <div className="flex gap-6 my-8">
              <div>
                <Image
                  className=""
                  width={636}
                  height={678}
                  src="/assets/Images/home/home-fortune.png"
                  alt=""
                />
                <h2 className="text-head-dark head-56  font-semibold  mobile:leading-[1.6rem] mobile:py-3 lg:py-6">
                  Florence Fortune
                </h2>
                <button
                  className="flex items-center  text-black project-btn rounded-full tab:py-0.5 tab:px-5 mobile:px-4"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                  }}
                >
                  View Project{" "}
                  <svg
                    className="ml-2"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.99104 13.8037C3.7477 14.0426 3.7477 14.43 3.99104 14.6689C4.23438 14.9079 4.6289 14.9079 4.87224 14.6689L3.99104 13.8037ZM4.87224 14.6689L14.7679 4.95272L13.8867 4.08751L3.99104 13.8037L4.87224 14.6689Z"
                      fill="black"
                    />
                    <path
                      d="M5.64453 4.3418H14.4919V13.0287"
                      stroke="black"
                      stroke-width="1.23496"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <div>
                  <Image
                    className=" h-[18.25rem]"
                    width={644}
                    height={292}
                    src="/assets/Images/florence.png"
                    alt=""
                  />
                  <h2 className="text-head-dark head-56  font-semibold  mobile:leading-[1.6rem] mobile:py-3  lg:py-6">
                    L&T Rejuve 360
                  </h2>
                  <button
                    className="flex items-center  text-black project-btn rounded-full tab:py-0.5 tab:px-5 mobile:px-4"
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    View Project{" "}
                    <svg
                      className="ml-2"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.99104 13.8037C3.7477 14.0426 3.7477 14.43 3.99104 14.6689C4.23438 14.9079 4.6289 14.9079 4.87224 14.6689L3.99104 13.8037ZM4.87224 14.6689L14.7679 4.95272L13.8867 4.08751L3.99104 13.8037L4.87224 14.6689Z"
                        fill="black"
                      />
                      <path
                        d="M5.64453 4.3418H14.4919V13.0287"
                        stroke="black"
                        stroke-width="1.23496"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6">
                  <Image
                    className=" h-[18.25rem]"
                    width={644}
                    height={292}
                    src="/assets/Images/gallery-2.png"
                    alt=""
                  />
                  <h2 className="text-head-dark head-56  font-semibold  mobile:leading-[1.6rem] mobile:py-3  lg:py-6">
                    Shapoorji & Pallonji
                  </h2>
                  <button
                    className="flex items-center  text-black project-btn rounded-full tab:py-0.5 tab:px-5 mobile:px-4"
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    View Project{" "}
                    <svg
                      className="ml-2"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.99104 13.8037C3.7477 14.0426 3.7477 14.43 3.99104 14.6689C4.23438 14.9079 4.6289 14.9079 4.87224 14.6689L3.99104 13.8037ZM4.87224 14.6689L14.7679 4.95272L13.8867 4.08751L3.99104 13.8037L4.87224 14.6689Z"
                        fill="black"
                      />
                      <path
                        d="M5.64453 4.3418H14.4919V13.0287"
                        stroke="black"
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

          <div
            className="flex justify-center py-2"
            style={{
              borderTop: " 1px solid rgba(0, 0, 0, 0.3);",
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            }}
          >
            <button
              className="flex items-center justify-center text-black project-btn rounded-full tab:py-0.5 tab:px-5 mobile:px-4 my-5 "
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
              }}
            >
              View All Project{" "}
              <svg
                className="ml-2"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99104 13.8037C3.7477 14.0426 3.7477 14.43 3.99104 14.6689C4.23438 14.9079 4.6289 14.9079 4.87224 14.6689L3.99104 13.8037ZM4.87224 14.6689L14.7679 4.95272L13.8867 4.08751L3.99104 13.8037L4.87224 14.6689Z"
                  fill="black"
                />
                <path
                  d="M5.64453 4.3418H14.4919V13.0287"
                  stroke="black"
                  stroke-width="1.23496"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-black ">
          <div className="max-w-[82rem] m-auto">
            <div className="flex justify-between items-center py-10">
              <h2 className="text-head-light text-7xl font-semibold w-full">
                Wide Array of Experiences
              </h2>
              <p
                className={`${manrope.className} text-para1-dark text-base font-bold `}
              >
                Explore Our Array of Interactive Offerings That Sets You Apart 
              </p>
            </div>

            <div className="flex justify-between">
              <div>
                <Image
                  className=""
                  width={331}
                  height={210}
                  src="/assets/Images/home/ort.png"
                  alt=""
                />
                <h3 className="text-[2.5rem] text-head-light font-semibold  pt-2">
                  ORT
                </h3>
                <p className="text-para1-dark text-base font-semibold w-[21rem]">
                  With the help of unique tech innovation portray the unique
                  sellings points of the project in this interactive project
                </p>
              </div>

              <div>
                <Image
                  className=""
                  width={331}
                  height={210}
                  src="/assets/Images/home/flipbook.png"
                  alt=""
                />
                <h3 className="text-[2.5rem] text-head-light font-semibold pt-2">
                  Flipbook
                </h3>
                <p className="text-para1-dark text-base font-semibold w-[21rem]">
                  With the help of unique tech innovation portray the unique
                  sellings points of the project in this interactive project
                </p>
              </div>

              <div>
                <Image
                  className=""
                  width={331}
                  height={210}
                  src="/assets/Images/home/interactive-wall.png"
                  alt=""
                />
                <h3 className="text-[2.5rem] text-head-light font-semibold pt-2">
                  Interactive Wall
                </h3>
                <p className="text-para1-dark text-base font-semibold w-[21rem]">
                  With the help of unique tech innovation portray the unique
                  sellings points of the project in this interactive project
                </p>
              </div>
            </div>
          </div>
          <Image
            className=""
            width={119}
            height={122}
            src="/assets/Images/home/triangle-glass.png"
            alt=""
          />
        </div>

        <div className="max-w-[82rem] m-auto py-32 flex justify-between">
          <div className="w-[44%]">
            <h2 className="bg-prime-green text-head-dark text-7xl inline px-2">
              {" "}
              The Interactive{" "}
            </h2>
            <p className="flex text-7xl font-semibold items-center py-5">
              Solution{" "}
              <svg
                className="ml-4"
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.5236 27.998L0.523438 27.998"
                  stroke="#CDEA67"
                  stroke-width="4.28415"
                />
                <path
                  d="M48.3324 8.18904L8.73438 47.7871"
                  stroke="#CDEA67"
                  stroke-width="4.28415"
                />
                <path
                  d="M48.3324 47.7875L8.73438 8.18945"
                  stroke="#CDEA67"
                  stroke-width="4.28415"
                />
                <path
                  d="M28.5234 56.0001L28.5234 0"
                  stroke="#CDEA67"
                  stroke-width="4.28415"
                />
              </svg>
            </p>
            <p
              className={`${manrope.className} text-base text-para2-light leading-8 mb-4`}
            >
              V-Estate's tech-immersive solution offers a modern and efficient
              approach to real estate sales, leveraging cutting-edge technology
              to transform the customer experience and giving the power of
              imagination in the customer palms.
            </p>
            <button className="bg-prime-green flex items-center  rounded-full text-xl px-4 py-2">
              Explore{" "}
              <svg
                className="ml-1"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.46677 14.7016C4.20653 14.9619 4.20653 15.3838 4.46677 15.6441C4.72702 15.9043 5.14896 15.9043 5.40921 15.6441L4.46677 14.7016ZM5.40921 15.6441L15.3503 5.70298L14.4079 4.76054L4.46677 14.7016L5.40921 15.6441Z"
                  fill="#121112"
                />
                <path
                  d="M6.15283 5.0498H15.0408V13.9378"
                  stroke="#121112"
                  stroke-width="1.3328"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <Image
            className=""
            width={693}
            height={411}
            src="/assets/Images/home/interactive-solution.png"
            alt=""
          />
        </div>

        <div className="bg-prime-green">
          <div className="flex justify-between py-28">
            <div className="flex">
              <div className="w-[25.75rem] h-[33.75rem] bg-white rounded-tr-3xl rounded-br-3xl">
                <div className=" mt-[13rem] ml-10">
                  <h2 className="text-4xl">All In</h2>
                  <h3 className=" text-head-dark text-5xl font-semibold">
                    One Platform
                  </h3>
                </div>
              </div>
              <div>
                <ul className="my-[3.43rem]">
                  <li className="bg-amenities-primary px-4 rounded-tr-full rounded-br-full py-3 mb-3 flex items-center">
                    <span className="w-9 h-9 bg-white opacity-15 rounded-full"></span>
                    <p className="text-[#F5FBE1] text-lg pl-4 pr-8">
                      Interiors
                    </p>
                  </li>
                  <li className="bg-amenities-primary px-4 rounded-tr-full rounded-br-full py-3 mb-3 flex items-center">
                    <span className="w-9 h-9 bg-white opacity-15 rounded-full"></span>
                    <p className="text-[#F5FBE1] text-lg pl-4 pr-8">
                      Exteriors
                    </p>
                  </li>
                  <li className="bg-amenities-primary px-4 rounded-tr-full rounded-br-full py-3 mb-3 flex items-center">
                    <span className="w-9 h-9 bg-white opacity-15 rounded-full"></span>
                    <p className="text-[#F5FBE1] text-lg pl-4 pr-8">
                      Amenities
                    </p>
                  </li>
                  <li className="bg-amenities-primary px-4 rounded-tr-full rounded-br-full py-3 mb-3 flex items-center">
                    <span className="w-9 h-9 bg-white opacity-15 rounded-full"></span>
                    <p className="text-[#F5FBE1] text-lg pl-4 pr-8">Vicinity</p>
                  </li>
                  <li className="bg-amenities-primary px-4 rounded-tr-full rounded-br-full py-3 mb-3 flex items-center">
                    <span className="w-9 h-9 bg-white opacity-15 rounded-full"></span>
                    <p className="text-[#F5FBE1] text-lg pl-4 pr-8">
                      Road connectivity
                    </p>
                  </li>
                  <li className="bg-amenities-primary px-4 rounded-tr-full rounded-br-full py-3 mb-3 flex items-center">
                    <span className="w-9 h-9 bg-white opacity-15 rounded-full"></span>
                    <p className="text-[#F5FBE1] text-lg pl-4 pr-8">
                      Floor plans
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-3/6">
              <Image
                className=""
                width={622}
                height={369}
                src="/assets/Images/home/one-platform.png"
                alt=""
              />
              <h2 className="text-[2.8rem] text-head-dark font-semibold">
                Amenities
              </h2>
              <p
                className={`${manrope.className} text-base text-amenities-para w-4/5 leading-[1.81rem]`}
              >
                Show the wide offerings the projects is offerings its residents
                and the lifestyle that they will get if they become a part of
                the community
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black py-20">
          <h2 className="bg-prime-green text-7xl text-form-head my-10 w-[24rem] text-center m-auto">
            Portability
          </h2>
          <div className="w-[82rem] m-auto flex justify-between pt-16">
            <div>
              <h2 className="text-white flex items-center text-[5.6rem]">
                AR{" "}
                <svg
                  className="ml-4"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.0001 27.998L0 27.998"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M47.809 8.191L8.21094 47.7891"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M47.809 47.7856L8.21094 8.1875"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M28 56.0001L28 0"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                </svg>
              </h2>
              <p className="text-white opacity-70 w-[35rem] pb-8">
                This solution offers the developers a one-stop solution by
                offerings a port for AR that can be utilized as a brand recall
                tool, For the final decision-Making process
              </p>

              <Image
                className="h-[21.25rem]"
                width={550}
                height={348}
                src="/assets/Images/vicinity-mapping.png"
                alt="project-overview"
              />
            </div>

            <div>
              <h2 className="text-white flex items-center text-[5.6rem]">
                VR{" "}
                <svg
                  className="ml-4"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.0001 27.998L0 27.998"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M47.809 8.191L8.21094 47.7891"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M47.809 47.7856L8.21094 8.1875"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                  <path
                    d="M28 56.0001L28 0"
                    stroke="#CDEA67"
                    stroke-width="4.28415"
                  />
                </svg>
              </h2>
              <p className="text-white opacity-70 w-[35rem] pb-8">
                The interactive tool can also be ported to a VR headset that can
                given an immersive feel to the client that experience the
                solution and drops them in the middle of the property
              </p>

              <Image
                width={550}
                height={348}
                src="/assets/Images/home/VR.png"
                alt="project-overview"
              />
            </div>
          </div>
        </div>

        <div className="bg-prime-green py-20">
          <div className="max-w-[82rem] m-auto">
            <h2 className="text-7xl leading-[3.5rem] text-center">One Tool</h2>
            <h3 className="text-7xl text-center font-semibold">
              Multiple Outputs
            </h3>
            <div className="flex justify-between pt-20">
              <div className="mr-5">
                <ul>
                  <li className="bg-[#A9C741] flex items-center justify-center text-center py-2 px-4 mb-6 h-[5.25rem] rounded-lg">
                    <p className="text-black  text-2xl font-semibold">
                      Immersive Virtual Tour
                    </p>
                  </li>
                  <li className="bg-[#A9C741] flex items-center justify-center text-center py-2 px-4 mb-6 h-[5.25rem] rounded-lg">
                    <p className="text-black  text-2xl font-semibold">
                      Video <br></br> Walkthroughs 
                    </p>
                  </li>
                  <li className="bg-[#A9C741] flex items-center justify-center py-2 px-4 mb-6 h-[5.25rem] rounded-lg">
                    <p className="text-black  text-2xl font-semibold">
                      Renders
                    </p>
                  </li>
                  <li className="bg-[#A9C741] flex items-center justify-center py-2 px-4 h-[5.25rem] rounded-lg">
                    <p className="text-black  text-2xl font-semibold">
                      VR Port
                    </p>
                  </li>
                </ul>
              </div>

              <Image
                className=""
                width={710}
                height={417}
                src="/assets/Images/home/VR.png"
                alt=""
              />
              <div className="ml-5">
                <ul>
                  <li className="bg-[#A9C741] text-center py-2 px-4 mb-6 h-[5.25rem] rounded-lg">
                    <p className="text-black  text-2xl font-semibold">
                      Marketing <br></br>Collaterals
                    </p>
                  </li>
                  <li className="bg-[#A9C741] flex items-center justify-center text-center py-2 px-4 mb-6 h-[5.25rem] rounded-lg">
                    <p className="text-black  text-2xl font-semibold">
                      Web Version
                    </p>
                  </li>
                  <li className="bg-[#A9C741] flex items-center justify-center text-center py-2 px-4 mb-6 h-[5.25rem] rounded-lg">
                    <p className="text-black text-2xl font-semibold">AR Port</p>
                  </li>
                  <li className="bg-[#A9C741] flex items-center justify-center text-center py-2 px-4  h-[5.25rem] rounded-lg">
                    <p className="text-black  text-2xl font-semibold">
                      Experience center Innovation
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[82rem] m-auto py-20">
          <h2
            className="bg-prime-green text-7xl w-[35rem] m-auto text-center"
            style={{ transform: "rotate(-1deg)" }}
          >
            Hear What Our
          </h2>
          <h3 className="text-7xl font-semibold text-center py-2">
            Happy Clients Says
          </h3>
          <div>
            <div className="bg-light-grey">
              <div className="flex">
                <Image
                  width={15}
                  height={14}
                  src="/assets/Images/home/star.png"
                  alt=""
                />
                <Image
                  width={15}
                  height={14}
                  src="/assets/Images/home/star.png"
                  alt=""
                />
                <Image
                  width={15}
                  height={14}
                  src="/assets/Images/home/star.png"
                  alt=""
                />
                <Image
                  width={15}
                  height={14}
                  src="/assets/Images/home/star.png"
                  alt=""
                />
                <Image
                  width={15}
                  height={14}
                  src="/assets/Images/home/star.png"
                  alt=""
                />
              </div>
              <p>
                "One of the best and most immersive experiences <br></br>we have
                seen in recent years"
              </p>
              <div className="flex items-center">
                <Image
                  width={38}
                  height={38}
                  src="/assets/Images/home/infra-marketing.jpg"
                  alt=""
                />
                <div>
                  <h2>JP Infra</h2>
                  <p>Marketing Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
