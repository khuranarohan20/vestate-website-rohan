import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import Image from "next/image";
import { Manrope } from "next/font/google";
import RealEstate from "@/components/realEstate";

const manrope = Manrope({ subsets: ["greek"] });
const ExperienceCenter = () => {
  return (
    <>
      <div>
        <div className="bg-post-sales bg-no-repeat">
          <HeaderSection />
          <div
            className=" bg-no-repeat lg:h-[33.3rem] tab:h-[27rem] bg-center relative"
            style={{ backgroundPosition: "4.5rem -7rem" }}
          >
            <Image
              width={826}
              height={443}
              src="/assets/Images/vestate-logo.png"
              alt=""
              className=" lg:h-full lg:w-full absolute z-10"
            />
            <div className="max-w-[63.3rem] my-0 mx-auto pt-14 relative z-20">
              <p className="text-white opacity-75 text-center lg:text-[2.5rem] tab:text-[1.75rem] lg:pb-5 tab:pb-3">
                V-Estate
              </p>
              <p className="text-white lg:text-[6.8rem] text-center lg:leading-[4.5rem] lg:pb-7 tab:pb-5 font-semibold tab:text-7xl">
                Experience Center
              </p>
              <p
                className={`${manrope.className} text-white opacity-65 text-base text-center px-32 `}
              >
                Elevate your real estate marketing experience by powering up
                your Sales & Experience Centers with V-Estate. Transcend
                traditional property showcasing, and empower your Clients to
                embark on a captivating journey that brings your properties to
                life like never before.
              </p>
              <div className="mx-auto my-0 max-w-[59.3rem] lg:translate-x-[2rem] tab:translate-x-[11rem]">
                <Image
                  className="tab:w-[37.5rem] lg:w-[56.25rem]"
                  width={900}
                  height={467}
                  src="/assets/Images/pre-sales-video.png"
                  alt=""
                />
                {/* <div className="bg-post-video-frame bg-no-repeat"> */}
                {/* <video src=""></video> */}
              </div>
            </div>
          </div>

          <div className="bg-light-grey lg:h-[23rem] tab:h-[19.6rem]"></div>

          <div className="bg-white h-[14rem]">
            <ul className="flex ">
              <li className="lg:px-24 py-8  tab:px-12 text-center relative after:content-[''] after:absolute after:bg-prime-green after:w-4 after:h-4 after:rounded-full after:bottom-[-0.68rem]">
                <p className="lg:text-lg tab:text-sm text-neutral-grey">
                  Intuitive smart display
                </p>
              </li>
              <li className="lg:px-24 py-8  tab:px-12  text-center relative after:content-[''] after:absolute after:bg-prime-green after:w-4 after:h-4 after:rounded-full after:bottom-[-0.68rem]">
                <p className="lg:text-lg tab:text-sm text-neutral-grey">
                  Dynamic projection Mapping
                </p>
              </li>
              <li className="lg:px-24 py-8  tab:px-12  text-center relative after:content-[''] after:absolute after:bg-prime-green after:w-4 after:h-4 after:rounded-full after:bottom-[-0.68rem]">
                <p className="lg:text-lg tab:text-sm text-neutral-grey">
                  Interactive touchscreen experience
                </p>
              </li>
              <li className="lg:px-24 py-8  tab:px-12  text-center relative after:content-[''] after:absolute after:bg-prime-green after:w-4 after:h-4 after:rounded-full after:bottom-[-0.68rem]">
                <p className="lg:text-lg tab:text-sm text-neutral-grey">
                  Immersive virtual Reality
                </p>
              </li>
            </ul>
            <hr className="border-t-[0.37rem] rounded-full mx-8" />
          </div>
        </div>

        <div className="bg-prime-green">
          <div className="max-w-[82rem] m-auto lg:py-20 tab:px-20 lgdesktop:px-0 tab:py-16">
            <div className="tab:flex tab:flex-col tab:items-center tab:justify-center lg:block">
              <h2 className="lg:text-7xl tab:text-5xl leading-[3.33rem] bg-white inline px-6">
                Intuitive Smart Display
              </h2>
              <p
                className={`${manrope.className} text-amenities-para opacity-60 head-14 font-medium py-5 lg:w-[42rem] tab:w-[36rem]`}
              >
                Take control of your project presentations with our intuitive
                smart displays, empowering your sales team to deliver a cohesive
                and engaging storytelling experience.
              </p>
            </div>
            <div className="flex lg:justify-between lg:flex-row tab:flex-col tab:justify-center tab:items-center py-5">
              <Image
                className="lg:mr-4 lgdesktop:mr-0 tab:w-[37.5rem] lg:w-[42.68rem]"
                width={683}
                height={405}
                src="/assets/Images/project-overview.png"
                alt="project-overview"
              />
              <div className="tab:pt-10">
                <div className="bg-white flex gap-2.5 items-center px-5 py-4 lg:w-[33.1rem] tab:w-[36rem] mb-5">
                  <h2 className="text-prime-green lg:text-[3.5rem] tab:text-[2.5rem]">
                    01
                  </h2>

                  <div className="pl-4">
                    <h2 className="text-augment-para lg:text-lg tab:text-2xl lg:font-semibold tab:font-bold opacity-80">
                      Seamless Tablet navigation
                    </h2>
                    <p className="lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] ">
                      Our user-friendly tablet control system puts the power in
                      your sales team's hands, enabling them to seamlessly
                      navigate and manage presentations with ease.
                    </p>
                  </div>
                </div>
                <div className="bg-white flex gap-2.5 items-center px-5 py-4 lg:w-[33.1rem] tab:w-[36rem] mb-5">
                  <h2 className="text-prime-green lg:text-[3.5rem] tab:text-[2.5rem]">
                    02
                  </h2>

                  <div className="pl-2">
                    <h2 className="text-augment-para lg:text-lg tab:text-2xl lg:font-semibold tab:font-bold opacity-80">
                      Premium display solution
                    </h2>
                    <p className="lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] ">
                      From sleek TVs to stunning 4K projectors, we offer
                      software compatibility with a wide range of display
                      solutions to suit your needs, ensuring your visuals are
                      crisp, vibrant, and captivating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[80rem] m-auto tab:px-16 lg:px-14 lgdesktop:px-0">
          <div className="flex lg:justify-between lg:flex-row tab:flex-col tab:justify-center tab:items-center mt-28">
            <div className="lgdesktop:w-2/5 lg:w-7/12 tab:w-[37rem]">
              <h2 className="bg-prime-green px-4 lg:text-7xl tab:text-5xl inline leading-[3.33rem]">
                Dynamic
              </h2>
              <p className="lg:text-[3.5rem] tab:text-5xl font-semibold lg:leading-[3.33rem] tab:leading-8 pt-8">
                Project mapping
              </p>
              <p
                className={`${manrope.className} lg:text-sm tab:text-base text-amenities-para leading-6 pt-5`}
              >
                Breathe life into your scale models with our advanced projection
                mapping technology leveraging a mesmerizing display of light,
                color, and movement, captivating audiences and leaving a lasting
                impression.
              </p>
            </div>
            <div className="tab:w-auto tab:my-5">
              <Image
                className="tab:w-[37.5rem] lg:w-[42.68rem]"
                width={683}
                height={405}
                src="/assets/Images/vicinity-mapping.png"
                alt="amenities-highlight"
              />
            </div>
          </div>
          <div className="flex justify-between lg:flex-row tab:flex-col lg:my-20 tab:mt-5 tab:mb-20 tab:items-center tab:gap-5 lg:gap-0 lg:items-baseline ">
            <div className="flex">
              <div className="bg-prime-green rounded-2xl p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem]  mt-2.5 tab:w-[4.5rem] tab:h-[4.5rem]">
                <h2 className="text-pure-black text-[1.75rem] font-semibold">
                  01
                </h2>
              </div>
              <div className="pl-5">
                <h2 className=" lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem] tab:text-[1.5rem]">
                  Frontal Projection
                </h2>
                <p
                  className={`${manrope.className} text-head-dark opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium py-2 lg:w-[12.5rem] xl:w-[16.5rem] tab:w-[31.5rem] leading-6`}
                >
                  Ideal for tower-style projects, our frontal projection system
                  uses high-end projectors to highlight key features,
                  complemented by visually stunning background content.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-prime-green rounded-2xl p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] mt-2.5 tab:w-[4.5rem] tab:h-[4.5rem]">
                <h2 className="text-pure-black text-[1.75rem] font-semibold ">
                  02
                </h2>
              </div>
              <div className="pl-5">
                <h2 className="lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem] tab:text-[1.5rem]">
                  360* projection
                </h2>
                <p
                  className={`${manrope.className} text-head-dark opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium py-2  lg:w-[12.5rem] xl:w-[16.5rem] tab:w-[31.5rem] leading-6`}
                >
                  Perfect for township or full project showcases, our immersive
                  360-degree projection envelops viewers in a seamless,
                  panoramic experience, highlighting project information,
                  surrounding areas, and inventory status.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-prime-green rounded-2xl p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] tab:w-[4.5rem] tab:h-[4.5rem] mt-2.5">
                <h2 className="text-pure-black text-[1.75rem] font-semibold">
                  03
                </h2>
              </div>
              <div className="pl-5">
                <h2 className="lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem] tab:text-[1.5rem]">
                  Building scale projection
                </h2>
                <p
                  className={`${manrope.className} text-head-dark opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium py-2 lg:w-[12.5rem] xl:w-[16.5rem] tab:w-[31.5rem] leading-6`}
                >
                  Go beyond the ordinary and launch your building in grand style
                  with our large-scale projection system, meticulously
                  highlighting every architectural detail.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-form-head lg:py-12">
          <div className="max-w-[82rem] m-auto tab:px-16 lg:px-14 lgdesktop:px-0">
            <div className="flex lg:justify-between lg:flex-row tab:flex-col-reverse tab:justify-center tab:items-center lg:mt-28 tab:pt-16">
              <div className="lg:w-3/5 tab:w-auto tab:my-5 lg:mr-16 lgdesktop:mr-0">
                <Image
                  className="lg:ml-4 tab:w-[37.5rem] lg:w-[42.68rem]"
                  width={683}
                  height={405}
                  src="/assets/Images/vicinity-mapping.png"
                  alt="amenities-highlight"
                />
              </div>
              <div className="m-auto  lg:w-2/5 tab:w-[37rem]">
                <h2 className="bg-prime-green px-4 lg:text-7xl tab:text-5xl inline leading-[3.33rem] ">
                  Interactive
                </h2>
                <p className="lg:text-[3.5rem] tab:text-5xl font-semibold leading-[3.33rem] lg:pt-8 tab:pt-6 text-white">
                  Touch Experience
                </p>
                <p
                  className={`${manrope.className} lg:text-sm tab:text-base text-neutral-white leading-6 pt-5 opacity-60`}
                >
                  Engage your audience with our cutting-edge interactive
                  touchscreen solutions, designed to enhance customer
                  understanding and leave a lasting impression.
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:flex-row tab:flex-col lg:my-20 tab:pt-4 tab:pb-16 tab:items-center tab:gap-5 lg:gap-0 lg:items-baseline">
              <div className="flex">
                <div className="bg-prime-green rounded-2xl p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] tab:w-[4.5rem] tab:h-[4.5rem] mt-2.5">
                  <h2 className="text-pure-black text-[1.75rem] font-semibold">
                    01
                  </h2>
                </div>
                <div className="pl-5">
                  <h2 className="lgdesktop:text-2xl leading-[2.15rem] lg:text-[1.3rem] font-semibold lwading-[2.15rem] text-white ">
                    Touch Displays
                  </h2>
                  <p
                    className={`${manrope.className} text-neutral-white opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium py-2 lg:w-[12.5rem] xl:w-[16.5rem] tab:w-[33.5rem] leading-[1.45rem]`}
                  >
                    From compact 24-inch screens to massive 100-inch displays,
                    we'll work with you to find the perfect touchscreen solution
                    that complements the aesthetics of your Experience Center.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-prime-green rounded-2xl p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] tab:w-[4.5rem] tab:h-[4.5rem] mt-2.5">
                  <h2 className="text-pure-black text-[1.75rem] font-semibold">
                    02
                  </h2>
                </div>
                <div className="pl-5">
                  <h2 className="lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem]  text-white">
                    Kiosks and Tablets
                  </h2>
                  <p
                    className={`${manrope.className} text-neutral-white opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium py-2 lg:w-[12.5rem] xl:w-[16.5rem] tab:w-[33.5rem] leading-[1.45rem]`}
                  >
                    Sleek and intuitive, plug-and-play kiosks and touch tables
                    offer a seamless interactive experience, available in
                    various sizes and colors to suit your branding.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-prime-green rounded-2xl p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] tab:w-[4.5rem] tab:h-[4.5rem] mt-2.5">
                  <h2 className="text-pure-black text-[1.75rem] font-semibold">
                    03
                  </h2>
                </div>
                <div className="pl-5">
                  <h2 className="lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem] text-white">
                    Video wall
                  </h2>
                  <p
                    className={`${manrope.className} text-neutral-white opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium py-2 lg:w-[12.5rem] xl:w-[16.5rem] tab:w-[33.5rem] leading-[1.45rem]`}
                  >
                    Captivate your audience from the moment they enter with
                    stunning video wall displays, creating an immersive visual
                    experience that demands attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[82rem] m-auto lg:py-20 lg:px-14 tab:py-16 lgdesktop:px-0">
          <div className="tab:flex tab:flex-col tab:items-center tab:justify-center lg:block">
            <h2 className="lg:text-7xl tab:text-5xl leading-[3.33rem] bg-prime-green inline px-6">
              Immersive VR experience
            </h2>
            <p
              className={`${manrope.className} text-amenities-para opacity-60 head-14 font-medium py-5 lg:w-[42rem] tab:w-[39rem]`}
            >
              Experience Step into the future of real estate marketing with
              state-of-the-art Virtual Reality (VR) pod, allowing potential
              buyers to explore your projects and interiors in stunning 1:1
              scale, increasing conversions and streamlining decision-making.
            </p>
          </div>
          <div className="flex lg:justify-between lg:flex-row tab:flex-col tab:justify-center tab:items-center py-5">
            <Image
              className="lg:mr-4 lgdesktop:mr-0 tab:w-[37.5rem] lg:w-[42.68rem]"
              width={683}
              height={405}
              src="/assets/Images/project-overview.png"
              alt="project-overview"
            />
            <div className="tab:pt-8">
              <div
                className=" flex gap-2.5 items-center px-5 py-3 lg:w-[33.1rem] tab:w-[36rem] mb-5"
                style={{
                  border: " 1px solid rgba(48, 52, 84, 0.24)",
                }}
              >
                <h2 className="text-prime-green lg:text-[3.5rem] tab:text-[2.5rem]">
                  01
                </h2>

                <div className="pl-6">
                  <h2 className="text-augment-para lg:text-lg tab:text-2xl lg:font-semibold tab:font-bold opacity-80">
                    VR Headsets
                  </h2>
                  <p className=" text-augment-para lg:text-[0.8rem] tab:text-base  leading-[1.1rem]">
                    We support a wide range of VR headsets, from the
                    cutting-edge Oculus Quest to the industry-leading HTC Vive,
                    ensuring a seamless and immersive experience for your
                    customers.
                  </p>
                </div>
              </div>
              <div
                className=" flex gap-2.5 items-center px-5 py-3  lg:w-[33.1rem] tab:w-[36rem] mb-5"
                style={{
                  border: " 1px solid rgba(48, 52, 84, 0.24)",
                }}
              >
                <h2 className="text-prime-green lg:text-[3.5rem] tab:text-[2.5rem]">
                  02
                </h2>

                <div className="pl-2">
                  <h2 className="text-augment-para lg:text-lg tab:text-2xl lg:font-semibold tab:font-bold opacity-80">
                    Photorealistic VR Content
                  </h2>
                  <p className="text-augment-para lg:text-[0.8rem] tab:text-base  leading-[1.1rem]">
                    Our team of experts crafts breathtakingly realistic VR
                    content, bringing your interiors, amenities, and projects to
                    life in a fully immersive, walkable environment.
                  </p>
                </div>
              </div>
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
export default ExperienceCenter;
