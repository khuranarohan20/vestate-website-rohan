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
            className=" bg-no-repeat lg:h-[33.3rem] tab:h-[27rem] mobile:h-[27rem] bg-center relative"
            style={{ backgroundPosition: "4.5rem -7rem" }}
          >
            <Image
              width={826}
              height={443}
              src="/assets/Images/vestate-logo.png"
              alt=""
              className=" lg:h-full lg:w-full absolute z-10"
            />
            <div className="max-w-[63.3rem] my-0 mx-auto pt-10 relative z-20">
              <p className="text-white opacity-75 text-center tab:text-[2.5rem] mobile:text-2xl lg:pb-5 mobile:pb-2">
                V-Estate
              </p>
              <p className="text-white lg:text-[6.75rem] text-center lg:leading-[4.5rem] tab:pb-[3.75rem] font-semibold tab:text-7xl mobile:text-5xl mobile:pb-3">
                Experience Center
              </p>
              <p
                className={`${manrope.className} text-white opacity-65 tab:text-base text-center tab:px-36 lg:px-[8.5rem] mobile:text-xs mobile:leading-6 mobile:px-6`}
              >
                Elevate your real estate marketing experience by powering up
                your Sales & Experience <br /> Centers with V-Estate. Transcend
                traditional property showcasing, and empower your Clients <br />
                to embark on a captivating journey that brings your properties
                to life like never before.
              </p>
              <div className="mx-auto my-10 lg:max-w-[59.3rem] tab:max-w-[37.5rem]">
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

          <div className="bg-light-grey lg:h-[23rem] tab:h-[19.6rem] mobile:h-[10rem]"></div>

          <div className="bg-white h-[14rem]">
            <ul className="flex mobile:justify-center tab:justify-normal">
              <li className="lg:px-24 py-8  tab:px-8 text-center relative after:content-[''] after:absolute after:bg-prime-green after:w-4 after:h-4 after:rounded-full after:bottom-[-0.68rem]">
                <p className="lg:text-lg  mobile:text-[0.5rem] text-neutral-grey">
                  Intuitive smart display
                </p>
              </li>
              <li className="lg:px-24 py-8  tab:px-8  text-center relative after:content-[''] after:absolute after:bg-prime-green after:w-4 after:h-4 after:rounded-full after:bottom-[-0.68rem]">
                <p className="lg:text-lg  mobile:text-[0.5rem] text-neutral-grey">
                  Dynamic projection Mapping
                </p>
              </li>
              <li className="lg:px-24 py-8  tab:px-8  text-center relative after:content-[''] after:absolute after:bg-prime-green after:w-4 after:h-4 after:rounded-full after:bottom-[-0.68rem]">
                <p className="lg:text-lg  mobile:text-[0.5rem] text-neutral-grey">
                  Interactive touchscreen experience
                </p>
              </li>
              <li className="lg:px-24 py-8  tab:px-8  text-center relative after:content-[''] after:absolute after:bg-prime-green after:w-4 after:h-4 after:rounded-full after:bottom-[-0.68rem]">
                <p className="lg:text-lg  mobile:text-[0.5rem] text-neutral-grey">
                  Immersive virtual Reality
                </p>
              </li>
            </ul>
            <hr className="border-t-[0.37rem] rounded-full tab:mx-8 mobile:mx-4" />
          </div>
        </div>

        <div className="bg-prime-green">
          <div className="max-w-[82rem] m-auto lg:py-20 tab:px-20 lgdesktop:px-0 tab:py-16 mobile:px-8  mobile:pt-16 mobile:pb-12">
            <div className="tab:flex mobile:flex-col tab:items-center tab:justify-center lgdesktop:justify-normal lgdesktop:items-start">
              <h2 className="lg:text-7xl tab:text-5xl tab:leading-[3.33rem] bg-white inline tab:px-6 mobile:text-[2rem] mobile:px-2">
                Intuitive Smart Display
              </h2>
              <p
                className={`${manrope.className} text-amenities-para opacity-60 head-14 font-medium lgdesktop:py-5 mobile:py-3 lg:w-[42rem] tab:w-[36rem]`}
              >
                Take control of your project presentations with our intuitive
                smart displays, empowering your sales team to deliver a cohesive
                and engaging storytelling experience.
              </p>
            </div>
            <div className="flex lg:justify-between mobile:flex-col tab:justify-center tab:items-center py-5 lgdesktop:flex-row">
              <Image
                className="lg:mr-4 lgdesktop:mr-0 tab:w-[37.5rem] lg:w-[42.68rem] "
                width={683}
                height={405}
                src="/assets/Images/project-overview.png"
                alt="project-overview"
              />
              <div className="mobile:pt-10 lgdesktop:pt-10">
                <div className="bg-white flex gap-2.5 items-center px-5 py-4 lg:w-[42.1rem] tab:w-[36rem] lgdesktop:w-[34.1rem] mb-5">
                  <h2
                    className="text-prime-green lg:text-[3.5rem] tab:text-[2.5rem] pr-3"
                    style={{ borderRight: "1px solid rgba(14, 29, 41, 0.5)" }}
                  >
                    01
                  </h2>

                  <div className="pl-4">
                    <h2 className="text-augment-para lg:text-lg tab:text-2xl mobile:font-[700] tab:font-bold opacity-80">
                      Seamless Tablet navigation
                    </h2>
                    <p className="lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] mobile:text-[0.62rem] ">
                      Our user-friendly tablet control system puts the power in
                      your sales team&apos;s hands, enabling them to seamlessly
                      navigate and manage presentations with ease.
                    </p>
                  </div>
                </div>
                <div className="bg-white flex gap-2.5 items-center px-5 py-4 lg:w-[42.1rem] tab:w-[36rem] lgdesktop:w-[34.1rem] mb-5">
                  <h2
                    className="text-prime-green lg:text-[3.5rem] tab:text-[2.5rem] pr-3"
                    style={{ borderRight: "1px solid rgba(14, 29, 41, 0.5)" }}
                  >
                    02
                  </h2>

                  <div className="pl-2">
                    <h2 className="text-augment-para lg:text-lg tab:text-2xl  mobile:font-[700] tab:font-bold opacity-80">
                      Premium display solution
                    </h2>
                    <p className="lg:text-[0.8rem] tab:text-base text-augment-para  leading-[1.1rem] mobile:text-[0.62rem]">
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

        <div className="max-w-[80rem] m-auto tab:px-16 lg:px-14 lgdesktop:px-0 mobile:px-8 ">
          <div className="flex lg:justify-between lgdesktop:flex-row mobile:flex-col  tab:justify-center tab:items-center lgdesktop:mt-28 mobile:mt-16 ">
            <div className="lgdesktop:w-2/5 lg:w-7/12 tab:w-[37rem]">
              <h2 className="lg:text-7xl tab:text-5xl tab:leading-[3.33rem] bg-prime-green inline tab:px-6 mobile:text-[2rem] mobile:px-2">
                Dynamic
              </h2>
              <p className="lg:text-[3.5rem] text-amenities-para tab:text-5xl font-semibold lg:leading-[3.33rem] tab:leading-8 tab:pt-8 mobile:text-2xl mobile:pt-0">
                Project mapping
              </p>
              <p
                className={`${manrope.className} mobile:text-sm lg:text-sm tab:text-base text-amenities-para leading-6 lgdesktop:pt-5 mobile:py-3`}
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
          <div className="flex lgdesktop:justify-between lgdesktop:flex-row mobile:flex-col lg:my-20 tab:mt-5 tab:mb-20 lg:mt-6 tab:items-center tab:gap-5 lg:gap-0 lgdesktop:items-baseline lg:justify-center lg:items-center mobile:py-10 lgdesktop:py-0">
            <div className="flex tab:mb-3 lgdesktop:mb-0">
              <div className="bg-prime-green lgdesktop:rounded-2xl mobile:rounded p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] mt-2.5 mobile:w-[4.5rem] mobile:h-[3.5rem]">
                <h2 className="text-pure-black tab:text-[1.75rem] mobile:text-lg font-semibold">
                  01
                </h2>
              </div>
              <div className="pl-5">
                <h2 className=" lgdesktop:text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem] tab:text-[1.5rem]">
                  Frontal Projection
                </h2>
                <p
                  className={`${manrope.className} mobile:text-[0.62rem] text-head-dark opacity-60 ltext-base lg:text-[0.9rem] font-medium mobile:pb-6 lgdesktop:py-2 lgdesktop:w-[18.5rem] tab:w-[31.5rem] tab:leading-6`}
                >
                  Ideal for tower-style projects, our frontal projection system
                  uses high-end projectors to highlight key features,
                  complemented by visually stunning background content.
                </p>
              </div>
            </div>
            <div className="flex tab:mb-3 lgdesktop:mb-0">
              <div className="bg-prime-green lgdesktop:rounded-2xl mobile:rounded p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] mt-2.5 mobile:w-[4.5rem] mobile:h-[3.5rem]">
                <h2 className="text-pure-black tab:text-[1.75rem] mobile:text-lg font-semibold">
                  02
                </h2>
              </div>
              <div className="pl-5">
                <h2 className="lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem] tab:text-[1.5rem]">
                  360* projection
                </h2>
                <p
                  className={`${manrope.className} mobile:text-[0.62rem] text-head-dark opacity-60 ltext-base lg:text-[0.9rem] font-medium mobile:pb-6 lgdesktop:py-2 lgdesktop:w-[18.5rem] tab:w-[31.5rem] tab:leading-6`}
                >
                  Perfect for township or full project showcases, our immersive
                  360-degree projection envelops viewers in a seamless,
                  panoramic experience, highlighting project information,
                  surrounding areas, and inventory status.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-prime-green lgdesktop:rounded-2xl mobile:rounded p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] mt-2.5 mobile:w-[4.5rem] mobile:h-[3.5rem]">
                <h2 className="text-pure-black tab:text-[1.75rem] mobile:text-lg font-semibold">
                  03
                </h2>
              </div>
              <div className="pl-5">
                <h2 className="lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem] tab:text-[1.5rem]">
                  Building scale projection
                </h2>
                <p
                  className={`${manrope.className} mobile:text-[0.62rem] text-head-dark opacity-60 ltext-base lg:text-[0.9rem] font-medium mobile:pb-6 lgdesktop:py-2 lgdesktop:w-[18.5rem] tab:w-[31.5rem] tab:leading-6`}
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
          <div className="max-w-[82rem] m-auto tab:px-16 lg:px-14 lgdesktop:px-0 mobile:flex-col-reverse lgdesktop:flex-row mobile:px-8 mobile:py-16">
            <div className="flex lg:justify-between lgdesktop:flex-row mobile:flex-col-reverse tab:justify-center tab:items-center lg:mt-28 tab:pt-16">
              <div className="lgdesktop:w-3/5 tab:w-auto tab:my-5 lg:mr-16 lgdesktop:mr-0 ">
                <Image
                  className="lg:ml-4 tab:w-[37.5rem] lg:w-[42.68rem]"
                  width={683}
                  height={405}
                  src="/assets/Images/vicinity-mapping.png"
                  alt="amenities-highlight"
                />
              </div>
              <div className="m-auto  lgdesktop:w-2/5 tab:w-[40rem]">
                <h2 className="lg:text-7xl tab:text-5xl tab:leading-[3.33rem] bg-prime-green inline tab:px-6 mobile:text-[2rem] mobile:px-2">
                  Interactive
                </h2>
                <p className="lg:text-[3.5rem] text-white tab:text-5xl font-semibold lg:leading-[3.33rem] tab:leading-8 tab:pt-8 mobile:text-2xl mobile:pt-0">
                  Touch Experience
                </p>
                <p
                  className={`${manrope.className} lg:text-sm tab:text-base mobile:text-sm text-neutral-white leading-6 lgdesktop:pt-5 mobile:py-3 opacity-60`}
                >
                  Engage your audience with our cutting-edge interactive
                  touchscreen solutions, designed to enhance customer
                  understanding and leave a lasting impression.
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:justify-center lgdesktop:flex-row mobile:flex-col lg:mt-10 lg:mb-5 lgdesktop:my-20 mobile:pt-6 tab:pb-16 tab:items-center tab:gap-5 lgdesktop:items-baseline">
              <div className="flex">
                <div className="bg-prime-green lgdesktop:rounded-2xl mobile:rounded p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] mt-2.5 mobile:w-[6.5rem] mobile:h-[3.5rem]">
                  <h2 className="text-pure-black text-[1.75rem] font-semibold">
                    01
                  </h2>
                </div>
                <div className="pl-5">
                  <h2 className="lgdesktop:text-2xl leading-[2.15rem] lg:text-[1.3rem] font-semibold lwading-[2.15rem] text-white ">
                    Touch Displays
                  </h2>
                  <p
                    className={`${manrope.className} mobile:text-[0.625rem] tab:text-base text-neutral-white opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium lgdesktop:py-2 mobile:pt-0 mobile:pb-4 lgdesktop:w-[18.5rem] tab:w-[31.5rem] leading-[1.45rem]`}
                  >
                    From compact 24-inch screens to massive 100-inch displays,
                    we&apos;ll work with you to find the perfect touchscreen
                    solution that complements the aesthetics of your Experience
                    Center.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-prime-green lgdesktop:rounded-2xl mobile:rounded p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] mt-2.5 mobile:w-[4.5rem] mobile:h-[3.5rem]">
                  <h2 className="text-pure-black text-[1.75rem] font-semibold">
                    02
                  </h2>
                </div>
                <div className="pl-5">
                  <h2 className="lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem]  text-white">
                    Kiosks and Tablets
                  </h2>
                  <p
                    className={`${manrope.className} mobile:text-[0.625rem] tab:text-base text-neutral-white opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium lgdesktop:py-2 mobile:pt-0 mobile:pb-4 lgdesktop:w-[18.5rem] tab:w-[31.5rem] leading-[1.45rem]`}
                  >
                    Sleek and intuitive, plug-and-play kiosks and touch tables
                    offer a seamless interactive experience, available in
                    various sizes and colors to suit your branding.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-prime-green lgdesktop:rounded-2xl mobile:rounded p-4 flex justify-center items-center lg:w-[5.15rem] lg:h-[5.15rem] mt-2.5 mobile:w-[4.5rem] mobile:h-[3.5rem]">
                  <h2 className="text-pure-black text-[1.75rem] font-semibold">
                    03
                  </h2>
                </div>
                <div className="pl-5">
                  <h2 className="lgdesktop::text-2xl font-semibold leading-[2.15rem] lg:text-[1.3rem] text-white">
                    Video wall
                  </h2>
                  <p
                    className={`${manrope.className} mobile:text-[0.625rem] tab:text-base text-neutral-white opacity-60 lgdesktop:text-base lg:text-[0.9rem] font-medium lgdesktop:py-2 mobile:pt-0 mobile:pb-4 lgdesktop:w-[18.5rem] tab:w-[31.5rem] leading-[1.45rem]`}
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

        <div className="max-w-[82rem] m-auto lg:py-20 lg:px-14 tab:py-16 lgdesktop:px-0 mobile:px-8 mobile:py-16">
          <div className="tab:flex tab:flex-col tab:items-center tab:justify-center lg:block lgdesktop:flex-row">
            <h2 className="lg:text-7xl tab:text-5xl tab:leading-[3.33rem] bg-prime-green inline tab:px-6 mobile:text-[2rem] mobile:px-2">
              Immersive VR experience
            </h2>
            <p
              className={`${manrope.className} text-amenities-para opacity-60 head-14 font-medium lgdesktop:py-5 mobile:py-3 lg:w-[42rem] tab:w-[39rem]`}
            >
              Experience Step into the future of real estate marketing with
              state-of-the-art Virtual Reality (VR) pod, allowing potential
              buyers to explore your projects and interiors in stunning 1:1
              scale, increasing conversions and streamlining decision-making.
            </p>
          </div>
          <div className="flex lg:justify-between lgdesktop:flex-row mobile:flex-col tab:justify-center tab:items-center pt-5">
            <Image
              className="lg:mr-4 lgdesktop:mr-0 tab:w-[37.5rem] lg:w-[42.68rem]"
              width={683}
              height={405}
              src="/assets/Images/project-overview.png"
              alt="project-overview"
            />
            <div className="mobile:pt-8 lgdesktop:pt-0">
              <div
                className=" flex gap-2.5 items-center px-5 py-3 lgdesktop:w-[33.1rem] tab:w-[36rem] mb-5"
                style={{
                  border: " 1px solid rgba(48, 52, 84, 0.24)",
                }}
              >
                <h2
                  className="text-prime-green lg:text-[3.5rem] mobile:text-lg pr-4"
                  style={{ borderRight: "1px solid rgba(14, 29, 41, 0.5)" }}
                >
                  01
                </h2>

                <div className="pl-3">
                  <h2 className="text-augment-para lg:text-lg tab:text-2xl lgdesktop:font-semibold mobile:font-bold  opacity-80">
                    VR Headsets
                  </h2>
                  <p className="mobile:text-sm text-augment-para lg:text-[0.8rem] tab:text-base  leading-[1.1rem]">
                    We support a wide range of VR headsets, from the
                    cutting-edge Oculus Quest to the industry-leading HTC Vive,
                    ensuring a seamless and immersive experience for your
                    customers.
                  </p>
                </div>
              </div>
              <div
                className=" flex gap-2.5 items-center px-5 py-3  lgdesktop:w-[33.1rem] tab:w-[36rem] mb-5"
                style={{
                  border: " 1px solid rgba(48, 52, 84, 0.24)",
                }}
              >
                <h2
                  className="text-prime-green lg:text-[3.5rem] mobile:text-lg pr-3"
                  style={{ borderRight: "1px solid rgba(14, 29, 41, 0.5)" }}
                >
                  02
                </h2>

                <div className="pl-2">
                  <h2 className=" text-augment-para lg:text-lg tab:text-2xl lgdesktop:font-semibold mobile:font-bold opacity-80">
                    Photorealistic VR Content
                  </h2>
                  <p className="mobile:text-sm text-augment-para lg:text-[0.8rem] tab:text-base leading-[1.1rem]">
                    Our team of experts crafts breathtakingly realistic VR
                    content, bringing your interiors, amenities, and projects to
                    life in a fully immersive, walkable environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[82rem] m-auto mobile:px-8 tab:px-14 lgdesktop:px-0">
          <RealEstate />
        </div>
        <div className="max-w-[82rem] m-auto mobile:px-8 tab:px-14 lgdesktop:px-0 mobile:pt-10 lgdesktop:mt-0">
          <FooterSection />
        </div>
      </div>
    </>
  );
};
export default ExperienceCenter;
