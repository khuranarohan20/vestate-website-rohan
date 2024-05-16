import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import Image from "next/image";
import { Manrope } from "next/font/google";
import RealEstate from "@/components/realEstate";

const manrope = Manrope({ subsets: ["greek"] });
const caseStudy = () => {
  return (
    <>
      <div>
        <div className="bg-jp-infra-xv bg-no-repeat bg-cover">
          <HeaderSection />

          <div className="flex flex-col items-center justify-center py-40">
            <Image
              width={300}
              height={71}
              src="/assets/Images/jp-infra-logo.png"
              alt=""
            />
            <h2 className="text-white text-[6.75rem]">JP Infra X V-Estate</h2>
            <p className="text-white text-2xl text-center w-[65rem]">
              JP Infra stands as a prominent player in the real estate sector,
              Known for its development of residential and commercial projects
              across the micro markets of the MMR regions, with a strong
              operational presence in mira road
            </p>
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

        <div className="max-w-[82rem] m-auto py-20 lg:px-14 lgdesktop:px-0">
          <h2 className="text-form-head lgdesktop:text-7xl lg:text-5xl leading-[5rem] font-semibold text-center py-10">
            Gallery
          </h2>
          <Image
            width={1312}
            height={497}
            src="/assets/Images/gallery-1.png"
            alt=""
          />
          <div className="flex mt-6 gap-6">
            <Image
              className="lg:w-[28.12rem] lgdesktop:w-auto"
              width={644}
              height={354}
              src="/assets/Images/gallery-2.png"
              alt=""
            />
            <Image
              width={644}
              height={292}
              src="/assets/Images/florence.png"
              alt=""
              className="lg:w-[28.12rem] lgdesktop:w-auto lgdesktop:h-[18.25rem] lg:h-[13.25rem] my-auto mx-0"
            />
          </div>
        </div>

        <div className="bg-black">
          <div className="max-w-[82rem] m-auto py-20">
            <div className="bg-prime-green flex items-center justify-center w-[40%] m-auto">
              <h2 className="text-7xl text-form-head">Case Study</h2>
            </div>

            <div className="flex justify-between py-16">
              <Image
                width={597}
                height={549}
                src="/assets/Images/objective.png"
                alt=""
              />
              <div className="m-auto pl-8">
                <h2 className="text-white text-[2.5rem] pb-2">Objective</h2>
                <p className="text-white capitalize text-base w-[38.5rem]">
                  JP Infra sought to transform the traditional approach to
                  property showcasing, opting for a more client-centric method.
                  Entrusting Ink In Caps with this task, they aimed to provide a
                  captivating experience for their clients, highlighting the
                  unique features and offerings of their mixed-use property in a
                  3D interactive manner. With a property comprising a mall on
                  the first six floors, bustling with shops, theatres, and
                  lifestyle stores, and two residential towers above boasting a
                  myriad of amenities, JP Infra aimed to showcase their entire
                  property uniquely and engagingly.
                </p>
              </div>
            </div>

            <div className="flex justify-between py-16">
              <div className="m-auto pl-8">
                <h2 className="text-white text-[2.5rem] pb-2">Solution</h2>
                <p className="text-white capitalize text-base w-[38.5rem]">
                  To help them showcase their entire residential project we
                  adopted the Interactive sales tool V-Estate to be deployed at
                  their site, where their clients can jump right into the
                  property and explore a plethora of amenities offered by them
                  such as the Gym, cafe, pool complex, clubhouse etc and dive
                  right into the units they offer with the accurate view the
                  flat gives access to. They were also the beneficiaries of the
                  Renders and walkthroughs which were the direct byproducts of
                  the software utilised in the OOH and performance campaigns.
                  <br></br> <br></br>
                  In addition, the clients can understand the lifestyle the area
                  offers with our comprehensive vicinity mapping module that
                  covers an area of 5km around the project to showcase the great
                  connectivity the project offers. 
                </p>
              </div>
              <Image
                width={597}
                height={549}
                src="/assets/Images/solution.png"
                alt=""
              />
            </div>

            <div className="flex justify-between py-16">
              <Image
                width={597}
                height={549}
                src="/assets/Images/technology-sight.png"
                alt=""
              />
              <div className="m-auto pl-8">
                <h2 className="text-white text-[2.5rem] pb-2">
                  Technology Sight
                </h2>
                <p className="text-white capitalize text-base w-[38.5rem]">
                  V-Estate has been deployed in 2 variations on this site
                  office, the first one being a kiosk linked with an 8.4ft x
                  4.8ft LED Panel that runs the software for a group session and
                  the second interaction which consists of 2 Kiosks linked to 65
                  Inch OLED TVs for an individual experience. <br></br>{" "}
                  <br></br>
                  Want to know more about V-Estate, click the link
                </p>
              </div>
            </div>

            <div className="flex justify-between py-16">
              <div className="m-auto pl-8">
                <h2 className="text-white text-[2.5rem] pb-2">Result</h2>
                <p className="text-white capitalize text-base w-[38.5rem]">
                  They have showcased this to all their customers that come for
                  a site visit amongst which they have generated a total of 500+
                  EOI, the tool has helped them showcase 4 interior unit types
                  without making a sample flat in their site office, resulting
                  in cost-saving in their marketing budgets. 
                </p>
              </div>
              <Image
                width={597}
                height={549}
                src="/assets/Images/result.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="max-w-[82rem] m-auto py-20">
          <h2 className="text-7xl text-form-head font-semibold">
            More case-Study
          </h2>

          <div className="flex lg:justify-between py-10 tab:flex-row mobile:flex-col mobile:justify-center mobile:items-center">
            <div className="mobile:py-4 tab:py-0">
              <Image
                width={624}
                height={292}
                src="/assets/Images/florence.png"
                alt=""
              />
              <h2 className="text-head-dark head-56  font-semibold  mobile:leading-[1.6rem] mobile:py-3 tab:py-8">
                Florence Fortune
              </h2>
              <button
                className="flex items-center  text-black project-btn rounded-full tab:py-0.5 tab:px-5 mobile:px-4"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                }}
              >
                View Case Study{" "}
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
                    strokeWidth="1.23496"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mobile:py-4 tab:py-0">
              <Image
                width={624}
                height={292}
                src="/assets/Images/gallery-2.png"
                alt=""
              />
              <h2 className="text-head-dark head-56  font-semibold mobile:leading-[1.6rem] mobile:py-3 tab:py-8">
                Majestique
              </h2>
              <button
                className="flex items-center  text-black project-btn rounded-full tab:py-0.5 tab:px-5 mobile:px-4"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                }}
              >
                View Case Study{" "}
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
                    strokeWidth="1.23496"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[82rem] m-auto px-14 lgdesktop:px-0">
          <RealEstate />
          <FooterSection />
        </div>
      </div>
    </>
  );
};
export default caseStudy;
