"use client";

import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const manrope = Manrope({ subsets: ["greek"] });
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  useGSAP(() => {
    gsap.from(".rotate-animation", {
      rotate: -360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
    gsap.from(".title-up", {
      y: 200,
      opacity: 0,
      stagger: 0.15,
      duration: 0.75,
      autoAlpha: 0,
    });
    gsap.from(".banner-up", {
      y: 200,
      opacity: 0,

      rotateX: "-30px",
      stagger: 0.3,
      duration: 1,
      scale: 0.8,
      autoAlpha: 0,
    });
  });
  return (
    <>
      <div className="bg-pure-black lg:h-[47.8rem] mobile:h-[15.8rem] tab:h-[30.8rem]">
        <HeaderSection />
        <div className="main-banner tab:px-14 mobile:px-4">
          <div className="flex 2xl:justify-between tab:pb-10 mobile:pb-3 lgdesktop:mt-16 tab:mt-8 overflow-hidden">
            <div className="lg:mr-36 mr-0 marginRight title-up overflow-hidden">
              <h2 className="text-white font-medium lg:text-7xl tab:text-[2.5rem] lg:leading-[5rem] tab:leading-[2.82rem] mobile:text-xl mobile:leading-[0.25rem]">
                Let&apos;s
                <br></br>
                <div className="flex gap-1 ">
                  <span className="text-prime-green flex items-center tab:leading-[2.82rem] mobile:leading-[0.25rem]">
                    Get in Touch &nbsp;
                  </span>
                  <svg
                    className="pl-3.5 mobile:w-[1.62rem] tab:w-auto mobile:pl-2 rotate-animation"
                    width="39"
                    height="40"
                    viewBox="0 0 39 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.7914 20.2295L0 20.2295"
                      stroke="#E7E7E7"
                      strokeWidth="3.49787"
                    />
                    <path
                      d="M33.1174 6.50783L5.68774 33.9375"
                      stroke="#E7E7E7"
                      strokeWidth="3.49787"
                    />
                    <path
                      d="M33.1174 33.9365L5.68774 6.50684"
                      stroke="#E7E7E7"
                      strokeWidth="3.49787"
                    />
                    <path
                      d="M19.3955 39.6264L19.3955 0.834961"
                      stroke="#E7E7E7"
                      strokeWidth="3.49787"
                    />
                  </svg>
                </div>
              </h2>
              <p
                className={`${manrope.className} text-white  lg:text-base text-[0.57rem] lg:leading-5 lg:w-[34rem] leading-3 tab:w-3/4 opacity-70 mobile:w-full lg:pt-4`}
              >
                Our experts are available to answer any questions you might
                have. We&apos;ve got the answers.
              </p>
            </div>
            <div className="flex items-center  lg:w-[38.5rem]  lg:mt-20 tab:w-[auto] mt-[2.2rem] mobile:hidden tab:flex">
              <div className="lg:mr-20 tab:mr-8 title-up overflow-hidden">
                <h3 className="text-white font-medium lg:text-3xl text-base">
                  Visit Us
                </h3>
                <Link
                  target="_blank"
                  href={
                    "https://www.google.com/maps/place/Ink+In+Caps+IIC/@19.1452727,72.8534323,15z/data=!4m2!3m1!1s0x0:0xa441e0453e9b6c63?sa=X&ved=2ahUKEwj2peeouLSDAxW3z6ACHdHLDmMQ_BJ6BAgNEAA"
                  }
                  className={`${manrope.className} text-white lg:text-base text-xs opacity-70 lg:leading-[1.4rem] leading-[0.88rem] hover:text-prime-green`}
                >
                  Mumbai, Maharashtra, 400063
                </Link>
              </div>
              <div className="title-up overflow-hidden">
                <h3 className="text-white font-medium lg:text-3xl text-base">
                  Contact
                </h3>
                <Link
                  href={"mailto:vestate@inkincaps.com"}
                  target="_blank"
                  className={`${manrope.className} text-white lg:text-base text-xs opacity-70 lg:leading-[1.65rem] leading-[0.88rem] hover:text-prime-green block`}
                >
                  vestate@inkincaps.com
                </Link>
                <Link
                  href="tel:+919152387077"
                  target="_blank"
                  className={`${manrope.className} text-white lg:text-base  text-xs opacity-70 lg:leading-[1.65rem] leading-[0.88rem] hover:text-prime-green`}
                >
                  +91 915-238-7077
                </Link>
              </div>
            </div>
          </div>

          <div className=" overflow-hidden">
            <Image
              width={1920}
              height={645}
              src="/assets/Images/contact-banner.png"
              alt=""
              className="d-block banner-up"
            />
          </div>
        </div>
        <div className="bg-prime-green lg:mt-24 mt-12">
          <div className=" flex justify-between lg:py-[7.63rem] tab:py-16 tab:px-20 tab:flex-row mobile:flex-col mobile:px-12">
            <div className="mobile:pb-5 pb-0">
              <h2 className="text-form-head font-semibold lg:text-7xl text-[2.5rem] lg:leading-[5rem] leading-[2.85rem] mobile:text-xl">
                Have A <br className="mobile:hidden tab:block"></br> Project?{" "}
                <br></br> Let&apos;s{" "}
                <br className="mobile:hidden tab:block"></br> Discuss
              </h2>
            </div>
            <div className="discuss-form-container">
              <form>
                <div className="flex gap-5 lg:mb-16 mb-9">
                  <input
                    className={`${manrope.className} tab:w-[10.63rem] lg:w-[18.94rem] llgdesktop:w-[24rem]  input-style placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium mobile:w-[7.85rem]`}
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className={`${manrope.className} tab:w-[10.63rem] lg:w-[18.94rem] llgdesktop:w-[24rem] input-style placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium mobile:w-[7.85rem]`}
                    type="email"
                    placeholder="Your Email"
                  />
                </div>

                <div className="flex gap-5 lg:mb-16 mb-9">
                  <input
                    className={`${manrope.className} tab:w-[10.63rem] lg:w-[18.94rem] llgdesktop:w-[24rem] input-style placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium mobile:w-[7.85rem]`}
                    type="phone"
                    placeholder="Phone Number"
                  />
                  <input
                    className={`${manrope.className} tab:w-[10.63rem] lg:w-[18.94rem] llgdesktop:w-[24rem] input-style placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium mobile:w-[7.85rem]`}
                    type="text"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <input
                    className={`${manrope.className} input-full placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium`}
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <button
                  className={`${manrope.className} bg-white lg:rounded-full rounded-2xl lg:px-[2.21rem] lg:py-[1rem] tab:px-[1.2rem] tab:py-[0.5rem] mt-8 font-semibold lg:text-base tab:text-[0.57rem] mobile:text-[0.27rem] mobile:py-2 mobile:px-3 mobile:rounded-3xl`}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" lgdesktop:max-w-[82rem]  tab:px-[1.82rem] lgdesktop:m-auto lgdesktop:px-0">
          <FooterSection />
        </div>
      </div>
    </>
  );
};
export default ContactSection;
