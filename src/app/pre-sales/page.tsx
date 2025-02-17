"use client";
import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import RealEstate from "@/components/realEstate";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const manrope = Manrope({ subsets: ["greek"] });

const PreSales = () => {
  const banner = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".slide-up", {
        y: 200,
        opacity: 0,

        stagger: 0.2,
        duration: 1,
        autoAlpha: 0,
      });

      gsap.from(".slide-up-trigger", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".slide-up-trigger",
        },
        rotateX: 40,
        stagger: 0.2,
        duration: 1,
        autoAlpha: 0,
      });

      gsap.from(".slide-up-view-all-trigger", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".slide-up-view-all-trigger",
        },
        rotateX: 40,
        stagger: 0.2,
        duration: 1,
        autoAlpha: 0,
      });

      gsap.from(".book-up-trigger", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".book-up-trigger",
        },
        rotateX: "-30px",
        stagger: 0.3,
        duration: 1,
        scale: 0.8,
        autoAlpha: 0,
      });

      gsap.from(".book-left-trigger", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".book-left-trigger",
          start: 400,
          end: 600,
        },
        rotateY: "-30px",
        stagger: 0.3,
        duration: 1,
        scale: 2,
        autoAlpha: 0,
      });

      gsap.from(".book-right-trigger", {
        x: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".book-right-trigger",
          start: 400,
          end: 600,
        },

        rotateY: "30px",
        stagger: 0.3,
        duration: 1,
        scale: 2,
        autoAlpha: 0,
      });
      gsap.from(".pointers", {
        y: 200,
        opacity: 0,
        stagger: 0.2,

        duration: 1,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".pointers",
          start: "start 85%",
          end: "start top",
          markers: true,
        },
      });

      gsap.from(".vicinity-up", {
        y: 200,
        opacity: 0,
        stagger: 0.2,

        duration: 1,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".vicinity-up",
          start: "start 95%",
          end: "start top",
          markers: true,
        },
      });

      gsap.from(".rotate-animation", {
        rotate: -360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      gsap.from(".slide-right", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".slide-right",
        },
        stagger: 0.3,
        duration: 1,
        autoAlpha: 0,
      });

      gsap.from(".book-up-video", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".book-up-video",
        },
        rotateX: "-30px",
        stagger: 0.3,
        duration: 1,
        scale: 0.8,
        autoAlpha: 0,
      });
    },

    { scope: banner }
  );

  return (
    <div ref={banner}>
      <div className="bg-post-sales bg-no-repeat">
        <HeaderSection />
        <div
          className=" bg-no-repeat lg:h-[39rem] tab:h-[36.3rem] mobile:h-[29rem] bg-center relative"
          style={{ backgroundPosition: "4.5rem -7rem" }}
        >
          <Image
            width={826}
            height={443}
            src="/assets/Images/vestate-logo.png"
            alt=""
            className=" mx-auto left-0 right-0 top-0 lg:w-[82%] w-full h-full absolute z-10 mobile:w-[90%]"
          />
          <Image
            width={85}
            height={74}
            src="/assets/Images/home/3d-pentagon.png"
            alt=""
            className="rotate-animation absolute right-[15.31rem] top-[6.25rem]"
          />
          <div className=" slide-up max-w-[59.3rem] my-0 mx-auto tab:pt-14 mobile:pt-10 relative z-20 ">
            <p className="text-white opacity-75 text-center tab:text-[2.5rem] mobile:text-2xl pb-5">
              V-Estate
            </p>
            <p className="text-white lg:text-[6.8rem] text-center lg:leading-[4.5rem] tab:pb-7 font-semibold tab:text-7xl mobile:text-5xl mobile:pb-3">
              Pre Sales
            </p>
            <p
              className={`${manrope.className} text-white opacity-65 tab:text-base text-center tab:px-36 lg:px-[8.5rem] mobile:text-xs mobile:leading-6 mobile:px-6`}
            >
              Pre-sales tools play a pivotal role in the overall sales journey,
              serving as powerful magnets to attract customers to your website
              and bolstering the projects word-of-mouth reputation. At Ink In
              Caps, we&apos;ve crafted an all-encompassing online solution that
              enables businesses to connect with prospective clients on a global
              scale. Our solution provides a comprehensive and intricate insight
              into the project, showcasing its key highlights and intricacies
              for a thorough understanding.
            </p>
            <div className="mx-auto my-0 max-w-[59.3rem] lg:translate-x-[2rem] tab:translate-x-[0]">
              <img src="/assets/Images/pre-sales-video.png" alt="" />
              {/* <div className="bg-post-video-frame bg-no-repeat"> */}
              {/* <video src=""></video> */}
            </div>
          </div>
        </div>

        <div className="bg-light-grey lg:h-[23rem] tab:h-[19.6rem] mobile:h-[10rem]"></div>
      </div>
      <div className="bg-prime-green">
        <div className="max-w-[82rem] m-auto mobile:px-5 tab:px-0">
          <div className="flex lg:justify-between lgdesktop:flex-row mobile:flex-col tab:justify-center tab:items-center tab:py-20 mobile:py-10">
            <div>
              <h2 className=" slide-up lg:text-7xl tab:text-5xl tab:leading-[3.33rem] bg-white inline tab:px-6 mobile:text-[2rem] mobile:px-2 ">
                Project Overview
              </h2>
              <p
                className={`${manrope.className} slide-up text-amenities-para opacity-60 head-14 font-medium tab:py-5 tab:w-[38rem] mobile:pr-8 tab:px-0 mobile:py-2`}
              >
                This features lets the visitor understand the location factor of
                the project and the surroundings vicinity
              </p>

              <img
                className="book-left-trigger"
                src="/assets/Images/project-overview.png"
                alt="project-overview"
              />
            </div>

            <div className=" tab:mt-16 mobile:mt-10">
              <div className="pointers  bg-white flex gap-2.5 items-center tab:px-5 tab:py-4 mobile:pl-3 mobile:pr-3 mobile:py-4 lgdesktop:w-[33.1rem] tab:w-[41.1rem] mb-5">
                <div
                  className="tab:pr-4 mobile:pr-2"
                  style={{ borderRight: "1px solid #cdea67" }}
                >
                  <svg
                    className="mobile:w-[1.43rem] tab:w-auto"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.95 25.1095C13.8378 25.1095 12.6929 25.1095 11.5807 25.1095C10.8611 25.1095 10.534 24.8151 10.534 24.1282C10.5012 22.7543 10.0106 21.6422 9.06196 20.6281C6.80489 18.2075 6.34693 14.4784 7.88436 11.5671C9.42178 8.62314 12.6602 6.95488 16.0294 7.38012C19.3005 7.80536 22.0156 10.226 22.7352 13.4317C23.324 16.0813 22.7679 18.5019 20.9361 20.53C19.9875 21.5767 19.3987 22.6889 19.3987 24.0955C19.3987 24.7824 19.0388 25.0441 18.3192 25.0441C17.1743 25.1095 16.0621 25.1095 14.95 25.1095ZM15.8332 11.7961C15.8332 11.24 15.4733 10.8802 14.8845 10.8802C13.0854 10.8475 11.2863 12.1559 10.7629 13.9223C10.5667 14.5439 10.7629 15.0345 11.2863 15.1654C11.8097 15.3289 12.2349 15.0999 12.4312 14.4784C12.791 13.4644 13.5107 12.8756 14.5574 12.6793C14.7864 12.6466 14.9827 12.6466 15.2116 12.5812C15.6042 12.4831 15.8004 12.1887 15.8332 11.7961Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M15.0162 26.8761C16.0302 26.8761 17.0115 26.9088 18.0256 26.8761C18.4181 26.8761 18.5162 27.0069 18.5162 27.3668C18.5162 29.3294 17.4695 30.4089 15.5068 30.4089C15.0162 30.4089 14.5255 30.4089 14.0348 30.4089C12.3338 30.3435 11.1235 28.8061 11.3852 27.1051C11.4506 26.778 11.6469 26.8761 11.8105 26.8761C12.8899 26.8761 13.9367 26.8761 15.0162 26.8761Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M15.8339 2.89869C15.8339 3.45478 15.8666 4.04358 15.8339 4.59967C15.8012 5.18847 15.4414 5.54829 14.918 5.54829C14.4273 5.54829 14.0675 5.18847 14.0675 4.59967C14.0348 3.45478 14.0348 2.9314 14.0675 1.78651C14.0675 1.19771 14.46 0.837891 14.9834 0.837891C15.4741 0.837891 15.8012 1.19771 15.8339 1.78651C15.8666 2.37531 15.8339 2.30989 15.8339 2.89869Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M2.48757 14.412C3.07637 14.412 3.66517 14.3793 4.25397 14.412C4.84277 14.4447 5.16988 14.7718 5.20259 15.2625C5.20259 15.7859 4.87548 16.1457 4.25397 16.1784C3.10908 16.2111 2.5857 16.2111 1.44081 16.1784C0.884721 16.1784 0.524899 15.8186 0.492188 15.3279C0.492188 14.8045 0.85201 14.4447 1.44081 14.412C1.9969 14.3793 1.93148 14.412 2.48757 14.412Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M27.3488 16.1801C26.7927 16.1801 26.2039 16.2128 25.6478 16.1801C25.0263 16.1474 24.6992 15.8203 24.6992 15.2969C24.6992 14.8062 25.059 14.4464 25.6151 14.4464C26.76 14.4137 27.2834 14.4137 28.4283 14.4464C29.0171 14.4464 29.4096 14.8389 29.3769 15.3296C29.3769 15.8203 28.9844 16.1801 28.3956 16.1801C27.8395 16.2128 27.9376 16.1801 27.3488 16.1801Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M8.3098 7.7723C8.27709 8.09941 8.14624 8.39381 7.78642 8.55737C7.45931 8.72092 7.09949 8.68821 6.87051 8.45923C5.98731 7.60875 5.75833 7.37977 4.90784 6.49657C4.58073 6.13675 4.61344 5.67879 4.97326 5.31897C5.33309 4.95915 5.79104 4.92643 6.15086 5.25355C7.06678 6.10403 7.26304 6.33301 8.11353 7.21621C8.24438 7.37977 8.3098 7.57603 8.3098 7.7723Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M21.5586 7.77298C21.5913 7.44587 21.7549 7.2496 21.9184 7.05333C22.6708 6.30098 22.8016 6.17013 23.554 5.41778C24.0119 4.99253 24.5353 4.95982 24.8951 5.31964C25.2549 5.67947 25.2222 6.23555 24.797 6.6608C24.0119 7.44587 23.8811 7.60942 23.0633 8.39449C22.7689 8.68889 22.4418 8.78702 22.0493 8.59076C21.7221 8.39449 21.5913 8.10009 21.5586 7.77298Z"
                      fill="#B0DB17"
                    />
                  </svg>
                </div>

                <div className="tab:pl-2 mobile:pl-0">
                  <h2 className="text-augment-para tab:text-lg font-bold opacity-80 mobile:text-[0.9375rem]">
                    Comprehensive Understanding
                  </h2>
                  <p
                    className={`${manrope.className} lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] mobile:text-[0.6875rem]`}
                  >
                    It provides a holistic view of the project, enabling
                    potential buyers to grasp the layout, scale, and design
                    elements.
                  </p>
                </div>
              </div>
              <div className="pointers  bg-white flex gap-2.5 items-center tab:px-5 tab:py-4 mobile:pl-3 mobile:pr-3 mobile:py-4 lgdesktop:w-[33.1rem] tab:w-[41.1rem] mb-5">
                <div
                  className="tab:pr-4 mobile:pr-2"
                  style={{ borderRight: "1px solid #cdea67" }}
                >
                  <svg
                    className="mobile:w-[1.43rem] tab:w-auto"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.147 0.653432C20.1709 0.682457 25.8017 6.34224 25.7727 13.3662C25.7436 20.3611 20.0839 25.9919 13.0889 25.9338C6.06501 25.9048 0.463275 20.245 0.4923 13.2501C0.521324 6.25517 6.15208 0.624407 13.147 0.653432ZM3.01743 13.2791C3.01743 18.8518 7.51624 23.3796 13.0889 23.4087C18.6617 23.4087 23.2185 18.9099 23.2185 13.3372C23.2475 7.73542 18.7197 3.17857 13.118 3.17857C7.54526 3.20759 3.04646 7.70639 3.01743 13.2791Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M19.0977 25.294C21.6518 23.9589 23.6255 22.0433 24.9896 19.5182C25.1057 19.315 25.1638 19.1989 25.396 19.4021C26.3828 20.1857 26.644 21.3467 26.0055 22.4206C25.7733 22.7979 25.9765 22.9721 26.1796 23.1753C28.1533 25.1489 27.9501 24.9167 29.8948 26.8614C30.6204 27.587 30.6204 27.8482 29.8948 28.6028C29.4304 29.0963 28.937 29.5607 28.4436 30.0541C27.7179 30.7797 27.4567 30.7797 26.7021 30.025C24.7574 28.0804 25.0187 28.3416 23.074 26.397C22.7838 26.0777 22.5806 25.9326 22.1162 26.2228C21.1003 26.8904 19.9394 26.5131 19.0977 25.294Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M13.2637 8.28711C16.2822 8.37418 18.7493 9.79639 20.694 12.1183C21.884 13.5115 21.884 13.0762 20.694 14.4693C18.7203 16.7913 16.2532 18.3006 13.0895 18.2716C10.2161 18.2716 7.89416 16.9945 6.00756 14.9337C4.23706 12.9891 4.23706 13.5696 6.00756 11.6249C7.92318 9.56419 10.2742 8.34516 13.2637 8.28711ZM17.3562 13.3374C17.3852 10.9864 15.5276 9.0998 13.2056 9.07077C10.8547 9.04175 8.96806 10.8993 8.93904 13.2213C8.91001 15.6013 10.7676 17.4879 13.0895 17.5169C15.4405 17.5169 17.3271 15.6593 17.3562 13.3374Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M15.5848 13.3075C15.5848 14.6716 14.4529 15.7746 13.0887 15.7456C11.7536 15.7165 10.6797 14.6136 10.6797 13.2785C10.6797 11.9143 11.8407 10.8114 13.1758 10.8404C14.5109 10.8694 15.5848 11.9724 15.5848 13.3075ZM13.2338 12.6399C13.1758 12.2626 13.0017 11.9724 12.5663 11.9724C12.1599 11.9724 11.8987 12.2046 11.8987 12.6109C11.8987 13.0172 12.1309 13.2785 12.5373 13.2785C12.9436 13.3075 13.1758 13.0172 13.2338 12.6399Z"
                      fill="#B0DB17"
                    />
                  </svg>
                </div>

                <div className="tab:pl-2 mobile:pl-0">
                  <h2 className="text-augment-para tab:text-lg font-bold opacity-80 mobile:text-[0.9375rem]">
                    Transparency
                  </h2>
                  <p
                    className={`${manrope.className} lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] mobile:text-[0.6875rem]`}
                  >
                    Transparency is improved as customers can explore the
                    project from all angles, reducing the risk of
                    misunderstandings or misrepresentations.
                  </p>
                </div>
              </div>
              <div className="pointers  bg-white flex gap-2.5 items-center tab:px-5 tab:py-4 mobile:pl-3 mobile:pr-3 mobile:py-4 lgdesktop:w-[33.1rem] tab:w-[41.1rem] mb-5">
                <div
                  className="tab:pr-4 mobile:pr-2"
                  style={{ borderRight: "1px solid #cdea67" }}
                >
                  <svg
                    className="mobile:w-[1.43rem] tab:w-auto"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.0315 21.3184C26.0315 22.488 26.0315 23.6576 26.0315 24.8543C26.0315 25.8879 25.5419 26.3775 24.4811 26.3775C22.1148 26.3775 19.7484 26.3775 17.3549 26.3775C16.2669 26.3775 15.7773 25.8879 15.7773 24.7999C15.7773 22.4608 15.7773 20.0945 15.7773 17.7553C15.7773 17.0754 16.0221 16.5858 16.5933 16.205C17.7629 15.4706 18.8781 14.709 20.0204 13.9202C20.5916 13.5123 21.1628 13.5123 21.734 13.9202C22.9035 14.709 24.0731 15.4978 25.2699 16.2594C25.7867 16.5858 26.0043 17.0482 26.0043 17.6737C26.0315 18.8977 26.0315 20.0945 26.0315 21.3184Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M5.60564 13.5939C4.38168 13.5939 3.18491 13.5939 1.96095 13.5939C1.00897 13.5939 0.492188 13.1043 0.492188 12.1523C0.492188 9.73159 0.492188 7.28365 0.492188 4.86292C0.492188 4.26454 0.709781 3.82935 1.19937 3.50296C2.39613 2.74138 3.5657 1.9526 4.73527 1.16383C5.33365 0.755837 5.90484 0.783036 6.50322 1.19102C7.64559 1.9798 8.81515 2.74138 9.98472 3.50296C10.5015 3.82935 10.7191 4.29174 10.7191 4.91732C10.7191 7.31085 10.7191 9.70439 10.7191 12.0979C10.7191 13.1587 10.2295 13.6211 9.16874 13.6211C7.97198 13.6211 6.77521 13.5939 5.60564 13.5939Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M15.9972 3.39453C16.786 3.39453 17.5476 3.39453 18.3364 3.39453C20.5395 3.42173 22.1443 4.99929 22.1987 7.20242C22.2259 8.42639 22.2259 9.67756 22.1987 10.9015C22.1987 11.7719 21.6819 12.3159 20.9203 12.3159C20.1587 12.3159 19.6419 11.7719 19.6419 10.9015C19.6147 9.81355 19.6419 8.69838 19.6419 7.61041C19.6419 6.35925 19.2339 5.95126 18.01 5.95126C16.4868 5.95126 14.9909 5.95126 13.4677 5.95126C12.5701 5.95126 11.9717 5.43447 11.9989 4.6729C11.9989 3.93852 12.5701 3.42173 13.4405 3.42173C14.2837 3.39453 15.154 3.39453 15.9972 3.39453Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M10.6101 22.5413C9.79409 22.5413 8.97811 22.5685 8.16213 22.5413C6.01339 22.4869 4.43584 20.9365 4.32704 18.815C4.29984 17.9718 4.29984 17.1014 4.32704 16.2311C4.35424 15.4151 4.87102 14.8711 5.6054 14.8711C6.33978 14.8711 6.85657 15.4151 6.88377 16.2311C6.91097 16.9382 6.88377 17.6726 6.88377 18.3798C6.88377 19.5222 7.31896 19.9302 8.43412 19.9302C9.98448 19.9302 11.5348 19.9302 13.0852 19.9302C14.146 19.9302 14.7987 20.7733 14.4452 21.6709C14.2004 22.2693 13.738 22.5141 13.1124 22.5141C12.2964 22.5413 11.4532 22.5413 10.6101 22.5413Z"
                      fill="#B0DB17"
                    />
                  </svg>
                </div>

                <div className="tab:pr-4 mobile:pr-2">
                  <h2 className="text-augment-para tab:text-lg font-bold opacity-80 mobile:text-[0.9375rem]">
                    Remote Accessibility
                  </h2>
                  <p
                    className={`${manrope.className} lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] mobile:text-[0.6875rem]`}
                  >
                    Visitors can explore the project remotely, which is
                    particularly useful for out-of-town or NRI target market.
                  </p>
                </div>
              </div>
              <div className="pointers  bg-white flex gap-2.5 items-center tab:px-5 tab:py-4 mobile:pl-3 mobile:pr-3 mobile:py-4 lgdesktop:w-[33.1rem] tab:w-[41.1rem] mb-5">
                <div
                  className="tab:pr-4 mobile:pr-2"
                  style={{ borderRight: "1px solid #cdea67" }}
                >
                  <svg
                    className="mobile:w-[1.43rem] tab:w-auto"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1572 0.986376C18.5851 1.00456 23.7947 6.25966 23.7675 12.6785C23.7402 19.0792 18.5033 24.2797 12.1026 24.2616C5.67466 24.2434 0.465019 18.9883 0.492294 12.5694C0.51957 6.16874 5.75648 0.968192 12.1572 0.986376ZM6.54748 11.442C6.48383 11.4511 6.34746 11.4602 6.21108 11.4966C4.93822 11.833 4.55636 13.324 5.511 14.306C6.6384 15.4697 7.80215 16.6062 8.94773 17.7518C9.90238 18.7064 10.7752 18.7064 11.7298 17.7518C14.0119 15.4697 16.294 13.1877 18.576 10.9056C18.7033 10.7783 18.8397 10.651 18.9488 10.5056C19.3579 9.96005 19.4216 9.35999 19.1033 8.75992C18.7851 8.15077 18.2669 7.86892 17.585 7.87801C17.0668 7.8871 16.6758 8.15986 16.3212 8.51444C14.421 10.4237 12.5026 12.3239 10.6115 14.2423C10.4024 14.4514 10.2933 14.4605 10.0842 14.2423C9.35686 13.4877 8.61133 12.7603 7.87489 12.0239C7.51121 11.6602 7.11117 11.442 6.54748 11.442Z"
                      fill="#B0DB17"
                    />
                  </svg>
                </div>

                <div className="tab:pr-4 mobile:pr-2">
                  <h2 className="text-augment-para tab:text-lg font-bold opacity-80 mobile:text-[0.9375rem]">
                    Better Decision-Making
                  </h2>
                  <p
                    className={`${manrope.className} lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] mobile:text-[0.6875rem]`}
                  >
                    The ability to virtually explore the property empowers
                    buyers to make more informed decisions by assessing the
                    site&apos;s features and layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[82rem] m-auto mobile:px-5 tab:px-0">
        <div className="flex lgdesktop:justify-between  lgdesktop:flex-row  mobile:flex-col-reverse tab:justify-center tab:items-center  tab:py-20 mobile:py-10">
          <div className="   tab:mt-16 mobile:mt-10">
            <div
              className=" vicinity-up bg-white flex gap-2.5 items-center tab:pl-8 tab:pr-7 pt-2 pb-4 mobile:px-4 lgdesktop:w-[33.15rem] tab:w-[41.5rem] mb-5 rounded"
              style={{ border: "1px solid rgba(12, 17, 54, 0.25)" }}
            >
              <div
                className="tab:pr-4 mobile:pr-2"
                style={{ borderRight: "1px solid #cdea67" }}
              >
                <svg
                  className="mobile:w-[1.43rem] tab:w-auto"
                  width="27"
                  height="31"
                  viewBox="0 0 27 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5061 10.3834C3.47107 5.3626 7.21917 1.22919 12.275 0.715435C17.0273 0.225031 21.581 3.58781 22.5502 8.34006C23.0639 10.8855 22.6436 13.2908 21.2424 15.4976C18.8604 19.2107 16.4785 22.9238 14.0965 26.6368C13.4426 27.6527 12.8238 27.6527 12.1816 26.6485C9.79963 22.9354 7.41766 19.2224 5.0357 15.5093C4.01986 13.9097 3.51778 12.2166 3.5061 10.3834ZM17.4943 10.2316C17.4359 7.7796 15.4276 5.87636 12.9756 5.94642C10.6286 6.0048 8.72541 8.00145 8.76044 10.3717C8.79547 12.8238 10.8038 14.7503 13.2558 14.692C15.6378 14.6336 17.5527 12.6136 17.4943 10.2316Z"
                    fill="#B0DB17"
                  />
                  <path
                    d="M12.3799 30.5713C9.82279 30.5129 6.5651 30.1977 3.47088 28.9483C2.47839 28.5396 1.54429 28.0259 0.797006 27.2202C-0.253861 26.0876 -0.265537 24.6514 0.761977 23.4838C1.54429 22.5964 2.54845 22.0593 3.62267 21.6389C4.3466 21.3587 5.10556 21.1719 5.84117 20.915C6.17978 20.7983 6.35493 20.915 6.54175 21.2069C7.84949 23.2736 9.18059 25.3403 10.5 27.3954C11.9245 29.6139 14.3415 29.6022 15.7777 27.372C17.0854 25.3287 18.3932 23.2853 19.7009 21.2303C19.8527 20.9851 19.9695 20.7866 20.3315 20.88C21.756 21.277 23.1688 21.709 24.4182 22.538C26.9169 24.2077 26.8935 26.543 24.3364 28.1426C22.3982 29.357 20.2264 29.8474 18.0079 30.1977C16.3849 30.4662 14.7619 30.583 12.3799 30.5713Z"
                    fill="#B0DB17"
                  />
                </svg>
              </div>

              <div className="tab:pl-2 mobile:pl-0 ">
                <h2 className="text-augment-para tab:text-lg font-bold opacity-80 mobile:text-[0.9375rem]">
                  Location Awareness
                </h2>
                <p
                  className={`${manrope.className} lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] mobile:text-[0.6875rem]`}
                >
                  Vicinity mapping helps potential buyers understand the
                  project&apos;s location in the context of its surroundings. It
                  allows them to see nearby amenities, services, and landmarks
                  within a 5 km radius.
                </p>
              </div>
            </div>
            <div
              className=" vicinity-up bg-white flex gap-2.5 items-center tab:pl-8 tab:pr-7 py-6 mobile:px-4  lgdesktop:w-[33.15rem] tab:w-[41.5rem] mb-5 rounded"
              style={{ border: "1px solid rgba(12, 17, 54, 0.25)" }}
            >
              <div
                className="tab:pr-4 mobile:pr-2"
                style={{ borderRight: "1px solid #cdea67" }}
              >
                <svg
                  className="mobile:w-[1.43rem] tab:w-auto"
                  width="29"
                  height="46"
                  viewBox="0 0 29 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.81048 27.34C10.0203 27.0079 9.93285 26.6757 9.93285 26.3785C9.93285 22.5326 9.95034 18.6867 9.93285 14.8408C9.93285 13.7045 10.23 12.6906 11.1391 11.9739C12.153 11.1697 13.2893 10.9774 14.4955 11.5193C15.7716 12.0962 16.401 13.1276 16.4359 14.4912C16.4709 16.0645 16.4884 17.6378 16.4359 19.2112C16.4185 19.9279 16.5933 20.1726 17.3275 20.1202C18.219 20.0503 18.9882 20.4698 19.5476 21.1341C19.8623 21.5012 20.142 21.5711 20.5965 21.4837C22.2223 21.204 23.6208 21.9907 24.1977 23.5291C24.3725 23.9836 24.5473 24.1234 25.0543 24.1059C26.9947 24.036 28.3932 25.3821 28.4107 27.34C28.4457 29.9098 28.4107 32.462 28.4282 35.0318C28.4282 35.3989 28.3233 35.7136 28.131 36.0108C27.4142 37.2694 26.75 38.5805 25.9633 39.7868C25.2116 40.958 24.8794 42.1642 24.9494 43.5627C25.0368 45.4507 24.9669 45.4682 23.0614 45.4682C19.5301 45.4682 16.0164 45.4507 12.4851 45.4857C11.7684 45.4857 11.5237 45.2584 11.646 44.5941C12.0656 42.2866 11.174 40.5559 9.46086 39.0351C7.7302 37.4967 6.68131 35.4688 5.99954 33.2662C5.71984 32.3746 5.40517 31.5006 5.12547 30.609C4.68843 29.228 5.0031 28.0043 6.01702 27.2176C7.04842 26.4135 8.23716 26.3785 9.5133 27.1477C9.60071 27.2351 9.7056 27.2701 9.81048 27.34Z"
                    fill="#B0DB17"
                  />
                  <path
                    d="M20.807 18.8792C22.2056 16.8689 22.7824 14.8061 22.6426 12.4985C22.3804 7.8135 18.4471 4.02003 13.5523 3.77529C8.90222 3.54803 4.56683 7.11424 3.92002 11.6944C3.44802 15.0508 4.46194 17.9003 6.92682 20.2078C7.31141 20.5574 7.48623 20.8896 7.45126 21.414C7.4163 22.0783 7.4163 22.7601 7.45126 23.4244C7.48623 24.0712 7.36386 24.2985 6.71704 23.8789C3.25573 21.6588 1.19292 18.5296 0.808333 14.4564C0.0915954 6.78209 6.07023 0.506271 13.762 0.716048C22.7999 0.978269 28.6212 11.0476 24.3383 19.0016C24.0761 19.4911 23.8488 19.596 23.3419 19.3337C22.6076 18.9841 21.7685 18.9142 20.807 18.8792Z"
                    fill="#B0DB17"
                  />
                  <path
                    d="M7.45213 16.6766C5.63407 14.2817 6.19347 10.4183 8.58842 8.18066C11.1757 5.76823 15.1439 5.73326 17.8011 8.07577C20.2835 10.2609 20.8604 14.2117 18.9549 16.8689C18.9549 16.0123 18.9549 15.3306 18.9549 14.6663C18.9199 11.3273 16.4376 8.75754 13.2385 8.75754C9.96945 8.74006 7.46961 11.3098 7.45213 14.6837C7.43465 15.3131 7.45213 15.9249 7.45213 16.6766Z"
                    fill="#B0DB17"
                  />
                </svg>
              </div>

              <div className="tab:pl-2 mobile:pl-0">
                <h2 className="text-augment-para tab:text-lg font-bold opacity-80 mobile:text-[0.9375rem]">
                  Accessibility Information
                </h2>
                <p
                  className={`${manrope.className} lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] mobile:text-[0.6875rem]`}
                >
                  Visitors can assess the convenience of the location, such as
                  proximity to schools, hospitals, shopping centers, and
                  transportation hubs.
                </p>
              </div>
            </div>
            <div
              className="bg-white flex gap-2.5 items-center tab:pl-8 tab:pr-7 py-6 mobile:px-4  lgdesktop:w-[33.15rem] tab:w-[41.5rem] mb-5 rounded"
              style={{ border: "1px solid rgba(12, 17, 54, 0.25)" }}
            >
              <div
                className="tab:pr-4 mobile:pr-2"
                style={{ borderRight: "1px solid #cdea67" }}
              >
                <svg
                  className="mobile:w-[1.43rem] tab:w-auto"
                  width="33"
                  height="36"
                  viewBox="0 0 33 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0215 17.0423C25.0215 22.3223 25.0353 27.6161 25.0077 32.8962C25.0077 33.5165 25.1869 33.6682 25.7797 33.6406C27.0894 33.5992 27.0894 33.6268 27.0894 32.3447C27.0894 24.5832 27.0894 16.8217 27.0756 9.04648C27.0756 8.4399 27.1997 8.17796 27.8614 8.24689C28.4266 8.30204 29.0056 8.30204 29.5846 8.24689C30.1912 8.19175 30.398 8.35718 30.398 9.01891C30.3566 12.5619 30.3842 16.0911 30.3842 19.6341C30.3842 24.0456 30.398 28.4571 30.3704 32.8686C30.3704 33.4476 30.4669 33.6682 31.1149 33.6406C32.5762 33.5854 32.5624 33.6268 32.5762 35.0881C32.5762 35.5706 32.4521 35.6947 31.9696 35.6947C21.5198 35.6809 11.0701 35.6809 0.606581 35.6947C0.110288 35.6947 0 35.5431 0 35.0743C0.0137859 33.613 0 33.613 1.4751 33.613C2.12303 33.613 2.77097 33.5717 3.40513 33.6268C4.08064 33.6819 4.28743 33.5165 4.28743 32.7859C4.24607 27.0371 4.27364 21.3022 4.27364 15.5534C4.27364 14.4092 4.27364 14.4092 5.44545 14.4092C7.6512 14.4092 9.85695 14.4092 12.0627 14.4092C12.9588 14.4092 12.9726 14.4092 12.9726 15.2777C12.9726 21.1092 12.9864 26.9544 12.9588 32.7859C12.9588 33.5027 13.1656 33.6682 13.8411 33.6268C15.0405 33.5717 15.0542 33.613 15.0542 32.3723C15.0542 26.0032 15.0542 19.6479 15.0542 13.2788C15.0542 12.2448 15.1921 12.3413 14.0892 12.3413C12.1316 12.3413 10.1878 12.3275 8.23021 12.3551C7.72013 12.3689 7.55469 12.231 7.56848 11.7072C7.59605 9.74956 7.59605 7.80574 7.56848 5.84814C7.56848 5.42078 7.70634 5.25534 8.11992 5.14506C13.5792 3.6286 19.0384 2.09836 24.4838 0.55434C25.118 0.375122 25.0904 0.678413 25.0904 1.11956C25.0077 6.42715 25.0215 11.7347 25.0215 17.0423ZM7.5547 27.3266C7.5547 27.5334 7.5547 27.7402 7.5547 27.947C7.5547 29.5462 7.5547 29.5324 9.14008 29.4497C9.48473 29.4359 9.62259 29.3256 9.62259 28.9672C9.6088 27.8919 9.62259 26.8166 9.62259 25.7275C9.62259 25.5207 9.63637 25.2863 9.33308 25.2725C8.823 25.2587 8.32671 25.2587 7.81663 25.2725C7.51334 25.2863 7.5547 25.5345 7.5547 25.7413C7.5547 26.2651 7.5547 26.789 7.5547 27.3266ZM20.9822 27.3542C20.9822 26.8028 20.9822 26.2513 20.9822 25.6999C20.9822 25.5207 21.0236 25.2863 20.7616 25.2725C20.2378 25.2587 19.7001 25.2587 19.1762 25.2725C18.9281 25.2725 18.9281 25.4931 18.9281 25.6723C18.9281 26.7752 18.9281 27.8781 18.9281 28.9809C18.9281 29.1326 18.8867 29.367 19.0935 29.3807C19.6587 29.4083 20.2378 29.4221 20.803 29.3945C21.0511 29.3807 20.9822 29.105 20.9822 28.9396C20.9822 28.4157 20.9822 27.8919 20.9822 27.3542ZM18.9143 12.1897C18.9143 12.3689 18.9143 12.5619 18.9143 12.7411C18.9143 14.3127 18.9143 14.2989 20.5135 14.23C20.8719 14.2162 20.996 14.1059 20.9822 13.7475C20.9546 13.0168 20.9822 12.2724 20.9822 11.5417C20.9822 9.97014 20.9822 9.98392 19.3968 10.0529C19.0384 10.0666 18.9005 10.1631 18.9143 10.5354C18.9281 11.0868 18.9143 11.6382 18.9143 12.1897ZM7.5547 19.7168C7.5547 19.9236 7.5547 20.1304 7.5547 20.3372C7.5547 21.9363 7.5547 21.9363 9.14008 21.8398C9.48473 21.8123 9.62259 21.7158 9.62259 21.3573C9.6088 20.282 9.62259 19.2067 9.62259 18.1176C9.62259 17.9108 9.65016 17.6765 9.33308 17.6765C8.823 17.6765 8.32671 17.6627 7.81663 17.6765C7.49955 17.6903 7.5547 17.9384 7.5547 18.1452C7.5547 18.6553 7.5547 19.1929 7.5547 19.7168ZM20.9822 19.7719C20.9822 19.5651 20.9822 19.3584 20.9822 19.1516C20.9822 17.5662 20.9822 17.58 19.3968 17.6489C19.0522 17.6627 18.9143 17.7592 18.9143 18.1314C18.9281 19.2067 18.9143 20.282 18.9143 21.3711C18.9143 21.5779 18.9005 21.8123 19.2038 21.8123C19.7139 21.826 20.2102 21.826 20.7203 21.8123C20.9822 21.8123 20.9822 21.6055 20.9822 21.4125C20.9822 20.8748 20.9822 20.3234 20.9822 19.7719Z"
                    fill="#B0DB17"
                  />
                </svg>
              </div>

              <div className="tab:pl-2 mobile:pl-0">
                <h2 className="text-augment-para tab:text-lg font-bold opacity-80 mobile:text-[0.9375rem]">
                  Neighborhood Evaluation
                </h2>
                <p
                  className={`${manrope.className} lg:text-[0.8rem] tab:text-base text-augment-para leading-[1.1rem] mobile:text-[0.6875rem]`}
                >
                  It enables users to evaluate the neighborhood, which is
                  crucial for their lifestyle and daily needs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="vicinity-up px-5 lg:text-7xl tab:text-5xl tab:leading-[3.33rem] bg-prime-green inline tab:px-6 mobile:text-[2rem] mobile:px-2">
              Vicinity Mapping
            </h2>
            <p
              className={`${manrope.className} vicinity-up text-amenities-para opacity-60 lg:text-lg tab:text-base head-14  font-medium tab:py-8 mobile:py-2 mobile:pr-5 tab:pr-0 lgdesktop:w-[30rem] lg:w-[40rem] `}
            >
              This feature lets the visitor understand the location factor of
              the project and the surrounding vicinity
            </p>

            <Image
              className="book-right-trigger"
              width={683}
              height={405}
              src="/assets/Images/vicinity-mapping.png"
              alt="vicinity-mapping"
            />
          </div>
        </div>
      </div>
      <div className="bg-form-head">
        <div className="max-w-[82rem] m-auto tab:pb-0 mobile:pb-10 mobile:px-5 tab:px-0">
          <div className="flex lgdesktop:justify-between lgdesktop:flex-row mobile:flex-col tab:justify-center tab:items-center tab:pt-24 mobile:pt-12 lg:pb-24">
            <div>
              <h2 className=" slide-up px-5 lg:text-7xl tab:text-5xl tab:leading-[3.33rem] bg-prime-green inline tab:px-6 mobile:text-[2rem] mobile:px-0">
                Amenities Highlight
              </h2>
              <p
                className={`${manrope.className} slide-up text-white lg:text-lg tab:text-base font-medium tab:py-6 mobile:py-4 tab:w-[30rem] mobile:pr-3 tab:pr-0 mobile:text-xs`}
              >
                This feature lets the visitor understand the added value the
                project has embodied and offers to its buyers.
              </p>

              <Image
                width={683}
                height={485}
                src="/assets/Images/vicinity-mapping.png"
                alt="project-overview"
                className="book-left-trigger"
              />
            </div>

            <div className="lgdesktop:mt-60 tab:mt-16 tab:mb-20 mobile:mt-8">
              <div
                className="flex gap-2.5 items-center tab:px-5 py-4 mobile:px-2 lgdesktop:w-[33.15rem] tab:w-[41.1rem] rounded mb-5"
                style={{ border: "1px solid  rgba(176, 219, 23, 0.25)" }}
              >
                <div
                  className="pr-4"
                  style={{ borderRight: "1px solid #cdea67" }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3026 23.8132C11.0134 23.6907 6.86292 21.891 3.14091 18.9648C2.19816 18.2179 1.32888 17.3854 0.545295 16.4671C0.0310704 15.8549 0.00658347 15.4876 0.545295 14.9122C4.91621 10.2107 10.1809 7.40695 16.7311 7.62733C20.9429 7.77426 24.6159 9.4761 27.9706 11.9493C29.1582 12.8308 30.2357 13.8225 31.1906 14.9489C31.6559 15.4999 31.6804 15.8794 31.1906 16.4181C27.0401 20.936 21.9958 23.5438 16.3026 23.8132ZM15.8374 9.42712C12.3602 9.42712 9.56872 12.2186 9.58096 15.6835C9.58096 19.1239 12.3602 21.9154 15.7884 21.9277C19.2655 21.9399 22.0693 19.1607 22.0815 15.6958C22.0938 12.2309 19.3145 9.42712 15.8374 9.42712ZM22.4366 20.4217C22.5468 20.4217 22.5835 20.434 22.6202 20.4217C25.0444 19.3321 27.1626 17.8016 29.0725 15.9529C29.3786 15.659 29.195 15.5244 28.9991 15.3285C27.2238 13.5899 25.2281 12.1574 22.9753 11.0922C22.8161 11.0188 22.6814 10.8718 22.4611 10.9576C24.4445 14.1041 24.4445 17.2384 22.4366 20.4217ZM9.21366 10.9576C9.12795 10.9453 9.09122 10.9331 9.05449 10.9453C6.6058 12.035 4.47544 13.5777 2.56546 15.4509C2.27162 15.7447 2.50425 15.8672 2.66341 16.0263C4.47544 17.8139 6.53234 19.2709 8.84635 20.3483C8.9443 20.3973 9.04225 20.5074 9.20141 20.4095C7.23022 17.2629 7.21798 14.1286 9.21366 10.9576Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M9.87644 5.36188C9.53362 5.3374 9.23978 5.17823 9.05613 4.84766C8.66434 4.16203 8.2603 3.47639 7.88076 2.77852C7.59916 2.25205 7.74608 1.72558 8.22357 1.46847C8.67658 1.2236 9.16632 1.37052 9.4724 1.8725C9.88868 2.57038 10.305 3.26825 10.6723 3.99062C11.0028 4.62728 10.5743 5.3374 9.87644 5.36188Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M21.8253 5.36229C21.1519 5.37454 20.6621 4.6889 20.9682 4.08897C21.36 3.29315 21.813 2.50957 22.2905 1.76272C22.5599 1.3342 23.0129 1.23625 23.4659 1.49336C23.9189 1.75047 24.0781 2.19124 23.8454 2.64425C23.4536 3.44007 22.9761 4.21141 22.5231 4.9705C22.3762 5.22761 22.0946 5.32556 21.8253 5.36229Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M10.7929 26.8373C10.7929 27.1189 10.7194 27.3026 10.6092 27.4862C10.2419 28.1351 9.87463 28.7963 9.49509 29.4452C9.17676 29.9839 8.68702 30.1431 8.22177 29.8982C7.73203 29.6288 7.59735 29.1024 7.90344 28.5269C8.28298 27.829 8.67477 27.1434 9.09105 26.47C9.32368 26.0782 9.69098 25.9313 10.1317 26.0537C10.5603 26.1762 10.7439 26.4945 10.7929 26.8373Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M23.931 29.1157C23.9065 29.5075 23.7106 29.7891 23.331 29.9361C22.9148 30.0952 22.523 29.985 22.3026 29.63C21.8129 28.8586 21.3721 28.0628 20.9436 27.2547C20.7232 26.8385 20.8946 26.4467 21.2619 26.1896C21.6292 25.9202 22.0945 25.908 22.3761 26.2508C23.0127 27.0588 23.5025 27.9771 23.9187 28.9198C23.931 28.9688 23.9187 29.0423 23.931 29.1157Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M16.7561 2.00688C16.7561 2.37418 16.7806 2.74148 16.7439 3.10879C16.7071 3.63525 16.3276 4.00256 15.8501 4.0148C15.3726 4.02705 14.9563 3.65974 14.9318 3.14552C14.8951 2.39867 14.8951 1.63957 14.9318 0.892722C14.9563 0.366254 15.3726 0.0234375 15.8501 0.0234375C16.3276 0.0356809 16.7071 0.378498 16.7439 0.917209C16.7806 1.27227 16.7561 1.63957 16.7561 2.00688Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M16.7553 29.3589C16.7553 29.7017 16.7798 30.0567 16.7553 30.3996C16.7185 30.975 16.3512 31.3423 15.8493 31.3545C15.3473 31.3668 14.9432 30.9995 14.9188 30.424C14.8943 29.7139 14.8943 29.0038 14.9188 28.2937C14.9432 27.7305 15.3595 27.3387 15.8493 27.3754C16.388 27.4122 16.7063 27.7305 16.743 28.2814C16.7675 28.6243 16.7553 28.9916 16.7553 29.3589Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M18.9724 15.6961C18.9601 17.4224 17.5032 18.8549 15.7891 18.8182C14.075 18.7814 12.6792 17.3612 12.6915 15.6716C12.7037 13.9453 14.1607 12.5128 15.8748 12.5495C17.6011 12.574 18.9846 13.9942 18.9724 15.6961ZM15.8503 16.9694C16.5604 16.9572 17.1236 16.3817 17.1114 15.6716C17.0991 14.9615 16.5237 14.3983 15.8136 14.4105C15.1034 14.4228 14.5402 14.9982 14.5525 15.7083C14.5647 16.4062 15.1402 16.9694 15.8503 16.9694Z"
                      fill="#B0DB17"
                    />
                  </svg>
                </div>

                <div className="tab:pl-2 mobile:pl-0 slide-up">
                  <h2 className=" text-white lg:text-lg tab:text-2xl font-bold opacity-80 mobile:text-[0.9375rem]">
                    Accessibility Information
                  </h2>
                  <p
                    className={`${manrope.className} lg:text-xs tab:text-base text-white opacity-80 leading-[1.1rem] tab:w-[31rem] lg:w-full mobile:text-[0.68rem]`}
                  >
                    Visitors can assess the convenience of the location, such as
                    proximity to schools, hospitals, shopping centers, and
                    transportation hubs.
                  </p>
                </div>
              </div>
              <div
                className="flex gap-2.5 items-center tab:px-5 py-4 mobile:px-2 lgdesktop:w-[33.15rem] tab:w-[41.1rem] mb-5 rounded "
                style={{ border: "1px solid  rgba(176, 219, 23, 0.25)" }}
              >
                <div
                  className="pr-4"
                  style={{ borderRight: "1px solid #cdea67" }}
                >
                  <svg
                    width="32"
                    height="37"
                    viewBox="0 0 32 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.4795 13.5564C23.4795 16.4462 23.4795 19.336 23.4795 22.2397C23.4795 23.1566 23.0627 23.6846 22.3403 23.6568C21.6595 23.6429 21.2566 23.1288 21.2566 22.2397C21.2427 21.156 21.2427 21.156 20.159 21.156C17.4499 21.156 14.7407 21.1699 12.0315 21.1421C11.5174 21.1421 11.309 21.2671 11.3785 21.7951C11.4202 22.073 11.4063 22.3508 11.3785 22.6287C11.309 23.24 10.9478 23.5873 10.3365 23.6429C9.7669 23.6985 9.26674 23.2539 9.18338 22.6704C9.1556 22.5314 9.16949 22.3925 9.16949 22.2536C9.16949 16.3489 9.16949 10.4443 9.16949 4.55358C9.16949 3.08089 9.82247 1.95554 11.1562 1.30256C12.4483 0.677363 13.7265 0.816296 14.8796 1.69157C15.7132 2.33066 16.13 3.21983 16.2134 4.26182C16.2689 4.94259 15.8382 5.48442 15.2269 5.56778C14.6295 5.65114 14.1155 5.20656 14.0043 4.52579C13.8515 3.58105 13.3375 3.10868 12.5594 3.19204C11.8231 3.26151 11.3924 3.81724 11.3924 4.7203C11.3924 5.69282 11.4063 6.66535 11.3785 7.63788C11.3646 8.04078 11.5174 8.15193 11.8926 8.15193C14.8379 8.13803 17.7694 8.13803 20.7148 8.15193C21.1455 8.15193 21.2705 8.02689 21.2566 7.5962C21.2288 6.5542 21.2288 5.51221 21.2566 4.47022C21.2983 2.56684 22.6737 1.10805 24.5215 0.969121C26.3693 0.830189 27.9393 2.08058 28.2588 3.95617C28.4116 4.81755 28.0504 5.44274 27.3557 5.56778C26.7028 5.67893 26.2165 5.23435 26.0637 4.35907C25.9247 3.59494 25.3968 3.13647 24.6882 3.17815C23.9519 3.21983 23.4656 3.76166 23.4656 4.59526C23.4795 7.5823 23.4795 10.5694 23.4795 13.5564ZM16.3106 10.361C14.8518 10.361 13.393 10.3748 11.9342 10.3471C11.5174 10.3471 11.3507 10.4443 11.3785 10.8889C11.4063 11.6808 11.4063 12.4588 11.3785 13.2507C11.3646 13.6398 11.4758 13.7787 11.8787 13.7787C14.8379 13.7648 17.7972 13.7648 20.7565 13.7787C21.1871 13.7787 21.2566 13.5981 21.2427 13.2369C21.2288 12.5005 21.201 11.7503 21.2427 11.0139C21.2705 10.4999 21.1316 10.3332 20.5897 10.3471C19.1865 10.3887 17.7416 10.361 16.3106 10.361ZM16.3523 18.9331C17.8111 18.9331 19.2699 18.9192 20.7287 18.947C21.1594 18.9609 21.2844 18.8219 21.2705 18.3912C21.2427 17.7383 21.2566 17.0992 21.2705 16.4462C21.2705 16.1405 21.2149 15.9877 20.8537 15.9877C17.8389 16.0016 14.8379 16.0016 11.8231 15.9877C11.4897 15.9877 11.3785 16.1128 11.3924 16.4323C11.4063 17.0853 11.4341 17.7244 11.3924 18.3774C11.3646 18.8636 11.5591 18.947 11.9898 18.947C13.4347 18.9192 14.8935 18.9331 16.3523 18.9331Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M25.6896 29.9641C24.4947 29.9502 23.4805 29.5056 22.6608 28.6581C22.2857 28.283 21.9384 27.8662 21.3966 27.7134C20.4796 27.4633 19.771 27.8245 19.1736 28.4914C18.4512 29.2972 17.5759 29.8113 16.4922 29.9363C15.0334 30.103 13.797 29.6445 12.7966 28.5748C12.1992 27.9357 11.5462 27.4911 10.6015 27.6995C9.9902 27.8384 9.62898 28.2969 9.22607 28.6998C7.98958 29.9085 6.53079 30.2558 4.87749 29.7835C4.15504 29.5751 3.54374 29.1583 3.02969 28.5886C2.52953 28.0329 1.9738 27.6717 1.18189 27.6022C0.515013 27.5467 0.112109 27.0048 0.181575 26.4213C0.237148 25.81 0.723411 25.4071 1.39029 25.421C2.58511 25.4627 3.58542 25.9211 4.40512 26.7825C4.83581 27.2271 5.2665 27.6717 5.96116 27.7412C6.83644 27.8245 7.39217 27.366 7.934 26.7964C8.9621 25.7127 10.2125 25.2682 11.6991 25.4766C12.6299 25.6016 13.4496 25.9767 14.0609 26.6853C15.2974 28.1302 16.6034 28.0329 17.8121 26.7131C19.4654 24.9208 22.1468 24.9764 23.8834 26.7131C24.2725 27.1021 24.6337 27.5467 25.2033 27.6856C26.0925 27.9079 26.7871 27.5605 27.3706 26.9076C28.1626 26.0184 29.1351 25.5043 30.3299 25.421C31.1079 25.3654 31.622 25.7266 31.6914 26.3796C31.7609 27.0465 31.3719 27.5605 30.5939 27.6161C29.8298 27.6717 29.3157 28.0885 28.8294 28.6025C27.982 29.4917 26.94 29.9641 25.6896 29.9641Z"
                      fill="#B0DB17"
                    />
                    <path
                      d="M25.6752 36.4523C24.5499 36.4245 23.5913 36.0355 22.7854 35.2853C22.6048 35.1047 22.4242 34.9241 22.2436 34.7435C21.285 33.8543 20.3124 33.8682 19.3677 34.7713C19.1871 34.9519 19.0065 35.1325 18.8259 35.3131C17.1865 36.8413 14.6718 36.8413 13.0324 35.3131C12.7962 35.0908 12.5739 34.8546 12.3377 34.6323C11.4902 33.9099 10.5455 33.9238 9.7119 34.6601C9.54518 34.8129 9.37847 34.9796 9.21175 35.1464C7.47509 36.883 4.86316 36.9108 3.12651 35.1742C2.54299 34.5906 1.95948 34.0905 1.05641 34.0627C0.514578 34.0488 0.111674 33.4514 0.153353 32.9234C0.195033 32.326 0.69519 31.8676 1.33428 31.8815C2.39017 31.9092 3.32101 32.2844 4.11293 32.9929C4.30743 33.1596 4.47415 33.3541 4.65476 33.5209C5.69676 34.5073 6.66928 34.4934 7.69738 33.4931C7.83632 33.368 7.94746 33.2291 8.08639 33.0902C9.75358 31.4786 12.296 31.4647 13.9771 33.0624C14.0883 33.1735 14.1994 33.2986 14.3106 33.4097C15.4498 34.5351 16.4223 34.5351 17.5477 33.3958C17.77 33.1735 18.0062 32.9234 18.2562 32.7289C19.9095 31.4647 22.2158 31.6036 23.7302 33.0346C23.8969 33.1874 24.0497 33.368 24.2164 33.5209C25.2307 34.4795 26.2171 34.4934 27.1896 33.4931C27.9676 32.6873 28.8429 32.0899 29.9683 31.9092C30.1905 31.8815 30.4267 31.8398 30.6629 31.8676C31.2742 31.9231 31.691 32.3955 31.6771 32.979C31.6632 33.6042 31.3159 34.021 30.7185 34.0488C29.8988 34.0905 29.3431 34.4934 28.8151 35.0491C27.9676 35.98 26.9256 36.4384 25.6752 36.4523Z"
                      fill="#B0DB17"
                    />
                  </svg>
                </div>

                <div className="tab:pl-2 mobile:pl-0">
                  <h2 className="text-white lg:text-lg tab:text-2xl font-bold opacity-80 mobile:text-[0.9375rem]">
                    Neighborhood Evaluation
                  </h2>
                  <p
                    className={`${manrope.className} lg:text-xs tab:text-base text-white opacity-80 leading-[1.1rem] mobile:text-[0.68rem]`}
                  >
                    It enables users to evaluate the neighborhood, which is
                    crucial for their lifestyle and daily needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[82rem] m-auto mobile:px-5 tab:px-16 lg:px-0 ">
        <div className="flex lgdesktop:justify-between lgdesktop:flex-row mobile:flex-col-reverse tab:justify-center tab:items-center tab:mt-28 mobile:mt-12">
          <div className="lgdesktop:w-3/5  tab:w-auto tab:my-5">
            <Image
              width={683}
              height={350}
              src="/assets/Images/vicinity-mapping.png"
              alt="amenities-highlight"
              className="book-left-trigger"
            />
          </div>
          <div className="slide-up lg:m-auto  lgdesktop:w-2/5 lg:w-[65%] tab:w-auto">
            <h2 className="px-5 lg:text-7xl tab:text-5xl lg:leading-[3.33rem] bg-prime-green inline tab:px-6 mobile:text-[2rem] mobile:px-0">
              Interior Unit
            </h2>
            <p className="lg:text-7xl tab:text-5xl font-semibold lg:leading-[3.33rem] lg:pt-8 mobile:pt-0 mobile:text-[1.93rem] mobile:leading-6">
              Dollhouse View
            </p>
            <p
              className={`${manrope.className} lg:text-lg tab:text-base text-amenities-para lg:leading-[1.94rem] lg:pt-5 mobile:pt-3 mobile:pb-3 head-14 mobile:pr-5 tab:pr-0 `}
            >
              This feature lets the visitor get a detailed understanding of the
              unit layout and how the finished unit can look like{" "}
              <br className="tab:hidden mobile:hidden lg:block"></br> post
              possession
            </p>
          </div>
        </div>

        <div className=" slide-up flex justify-between lgdesktop:flex-row mobile:flex-col lg:mt-12  lgdesktop:my-20 mt-5 tab:mb-20 tab:items-center tab:gap-5 lg:gap-0">
          <div className="flex lg:pb-6 mobile:pb-4 lgdesktop:pb-0">
            <div className="bg-prime-green tab:rounded-2xl mobile:rounded-md tab:p-4 mobile:py-2 mobile:px-3 flex justify-center items-center tab:w-[5.15rem] tab:h-[5.15rem] mobile:w-[4.15rem] mobile:h-[3.15rem] mt-2.5">
              <svg
                className="mobile:w-[1.37rem]"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.484375 16.7212C0.484375 11.9799 0.484375 7.2386 0.484375 2.49731C0.484375 1.19283 1.01119 0.666016 2.30313 0.666016C11.7983 0.666016 21.2808 0.666016 30.776 0.666016C32.0679 0.666016 32.5947 1.19283 32.5947 2.48477C32.5947 11.9799 32.5947 21.4625 32.5947 30.9576C32.5947 32.2621 32.0679 32.7764 30.776 32.7764C29.6471 32.7764 28.5182 32.7889 27.3893 32.7764C26.411 32.7638 25.7964 32.1868 25.7964 31.3088C25.8089 30.4559 26.411 29.8915 27.3517 29.8789C27.9412 29.8664 28.5182 29.8538 29.1077 29.8789C29.5342 29.904 29.6973 29.7911 29.6847 29.327C29.6596 27.734 29.6596 26.1536 29.6847 24.5606C29.6973 24.1091 29.5342 24.0087 29.1077 24.0087C25.9469 24.0213 22.7986 24.0213 19.6377 24.0213C18.7722 24.0213 18.1827 23.6074 18.0322 22.9175C17.8189 21.9517 18.4837 21.1364 19.5123 21.1238C21.3059 21.1113 23.1121 21.1238 24.9058 21.1238C26.3232 21.1238 27.7531 21.1113 29.1705 21.1364C29.5468 21.1364 29.6722 21.036 29.6722 20.6472C29.6596 15.1282 29.6596 9.60925 29.6722 4.09028C29.6722 3.70145 29.5468 3.58856 29.1705 3.58856C26.574 3.6011 23.9902 3.6011 21.3937 3.58856C21.0049 3.58856 20.892 3.70145 20.892 4.09028C20.9046 5.72089 20.9171 7.35149 20.892 8.9821C20.892 9.38348 21.03 9.47128 21.3937 9.45873C22.9365 9.44619 24.4919 9.44619 26.0347 9.45873C27.0632 9.45873 27.6904 10.0357 27.6904 10.9263C27.6778 11.7918 27.0507 12.3562 26.0598 12.3562C23.9024 12.3687 21.7575 12.3687 19.6001 12.3562C18.5339 12.3562 17.982 11.8043 17.982 10.7256C17.9695 8.56817 17.9695 6.4233 17.982 4.26589C17.982 3.77671 17.8942 3.57602 17.3423 3.57602C12.8895 3.6011 8.4367 3.6011 3.9839 3.57602C3.49472 3.57602 3.3442 3.70145 3.3442 4.20317C3.36929 7.36404 3.36929 10.5124 3.3442 13.6732C3.3442 14.2251 3.53235 14.3255 4.02153 14.3255C5.84028 14.3004 7.65903 14.2878 9.47778 14.3255C10.0924 14.338 10.2053 14.1122 10.1927 13.5729C10.1677 12.0301 10.1551 10.4747 10.2053 8.93192C10.2429 7.75287 11.4471 7.11317 12.4003 7.71524C12.9522 8.06645 13.1153 8.6058 13.1027 9.22041C13.0902 12.7325 13.1027 16.2446 13.1027 19.7566C13.1027 20.6346 13.1153 21.5127 13.1027 22.3907C13.0902 23.369 12.5132 24.0087 11.6603 24.0213C10.7948 24.0338 10.2053 23.4192 10.1927 22.4283C10.1802 20.8855 10.1677 19.3302 10.1927 17.7874C10.1927 17.3609 10.0799 17.2104 9.64084 17.2229C7.73429 17.248 5.84028 17.248 3.93373 17.2229C3.44455 17.2104 3.35675 17.386 3.35675 17.8375C3.36929 21.6632 3.36929 25.4888 3.35675 29.3145C3.35675 29.7911 3.50726 29.904 3.95882 29.904C8.59976 29.8915 13.2407 29.8915 17.8817 29.8915C18.1074 29.8915 18.3458 29.8789 18.5715 29.904C19.3367 29.9667 19.8886 30.5562 19.9011 31.3088C19.9136 32.0614 19.3868 32.676 18.6468 32.7889C18.4461 32.814 18.2329 32.8015 18.0196 32.8015C12.7892 32.8015 7.57123 32.8015 2.34075 32.8015C0.986099 32.7764 0.484375 32.2746 0.484375 30.8949C0.484375 26.1787 0.484375 21.4499 0.484375 16.7212Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="pl-5 ">
              <h2 className=" tab:text-2xl tab:font-semibold mobile:font-bold leading-[2.15rem]  mobile:text-[0.9375rem]">
                Layout Understanding
              </h2>
              <p
                className={`${manrope.className} text-head-dark opacity-60 tab:text-base font-medium tab:py-2 lgdesktop:w-[16.5rem] lg:w-[35.5rem] tab:w-[34.5rem] tab:leading-[1.45rem] mobile:text-[0.6875rem]`}
              >
                The interior unit or dollhouse view allows potential buyers to
                navigate inside the flat and gain a clear understanding of its
                layout, room sizes, and spatial organization.
              </p>
            </div>
          </div>
          <div className="flex lg:pb-6 mobile:pb-4 lgdesktop:pb-0">
            <div className="bg-prime-green tab:rounded-2xl mobile:rounded-md tab:p-4 mobile:py-2 mobile:px-3 flex justify-center items-center tab:w-[5.15rem] tab:h-[5.15rem] mobile:w-[4.15rem] mobile:h-[3.15rem] mt-2.5">
              <svg
                className="mobile:w-[1.37rem]"
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33561 3.33254C8.83346 3.35874 9.27891 3.51596 9.67195 3.81729C10.2353 4.26274 10.8118 4.69509 11.3751 5.14053C11.5979 5.32395 11.7944 5.38946 12.0695 5.23224C12.4494 5.03572 12.8687 4.8654 13.2748 4.73439C13.5369 4.64268 13.6548 4.51167 13.681 4.22344C13.7465 3.52906 13.8513 2.83469 13.943 2.14032C14.1002 0.882582 14.9125 0.135803 16.1833 0.135803C17.1659 0.122701 18.1486 0.122701 19.1312 0.135803C20.2841 0.148904 21.1095 0.882582 21.2667 2.0355C21.3715 2.74298 21.4632 3.46356 21.5287 4.18413C21.5549 4.48546 21.7121 4.59028 21.9611 4.74749C23.0747 5.44187 24.0311 5.33705 24.9089 4.32825C25.1316 4.06622 25.446 3.8828 25.7343 3.68628C26.5596 3.14912 27.5554 3.20153 28.2759 3.8697C29.0882 4.62958 29.8743 5.41566 30.6342 6.22795C31.3679 7.00093 31.3941 8.03594 30.739 8.92684C30.3066 9.5295 29.8481 10.1191 29.3764 10.6824C29.1799 10.9182 29.2192 11.1017 29.2978 11.3768C29.6123 12.6083 30.3066 13.2634 31.6299 13.1324C31.9312 13.1062 32.2325 13.1979 32.5339 13.2503C33.6475 13.4206 34.3681 14.2329 34.3943 15.3596C34.4074 16.3815 34.4074 17.4165 34.3943 18.4384C34.3681 19.5914 33.6344 20.4037 32.4815 20.5609C31.8133 20.6526 31.1451 20.7705 30.4639 20.8098C30.0446 20.836 29.9267 21.0718 29.7302 21.3863C29.0489 22.4475 29.3633 23.2205 30.1232 24.1113C31.7085 25.9848 31.6168 26.6268 29.8743 28.3693C29.3764 28.8671 28.8917 29.365 28.3938 29.8498C27.5554 30.6358 26.5334 30.6882 25.5901 30.0201C25.3281 29.8236 25.0661 29.6139 24.8172 29.4174C23.4415 28.3431 23.4415 28.3431 21.8694 29.1161C21.6335 29.234 21.5811 29.4043 21.5549 29.627C21.4763 30.3214 21.3846 31.0158 21.2929 31.7102C21.1357 32.9286 20.3234 33.6754 19.0919 33.6885C18.1092 33.7016 17.1266 33.7016 16.144 33.6885C14.9518 33.6754 14.1264 32.9286 13.9692 31.7495C13.9299 31.4743 13.8382 31.1861 13.8644 30.911C13.9823 29.5877 13.3141 28.9065 12.0957 28.5789C11.8075 28.5003 11.6241 28.4872 11.4013 28.6706C10.8642 29.1161 10.3008 29.5353 9.75056 29.9546C8.74175 30.7144 7.69364 30.662 6.80275 29.7842C6.09527 29.103 5.4009 28.4086 4.71963 27.7011C3.89424 26.8495 3.82873 25.8145 4.53621 24.8581C4.96855 24.2817 5.4009 23.7052 5.85945 23.1549C6.08217 22.8929 6.01666 22.6964 5.95116 22.3951C5.66293 21.1504 4.94235 20.5871 3.67152 20.6657C3.37018 20.6919 3.06885 20.6002 2.76752 20.5609C1.6277 20.3906 0.894021 19.5783 0.88092 18.4122C0.867818 17.4034 0.867818 16.4077 0.88092 15.3989C0.894021 14.2198 1.6539 13.3944 2.83303 13.2372C3.5274 13.1455 4.22177 13.0407 4.91615 12.9752C5.21748 12.949 5.33539 12.8179 5.49261 12.5559C6.14768 11.4423 6.12148 10.4859 5.08647 9.60811C4.83754 9.39849 4.66722 9.11025 4.4838 8.83512C3.84183 7.99664 3.88114 6.97473 4.60171 6.21485C5.34849 5.41566 6.13458 4.66888 6.90756 3.8959C7.3137 3.51596 7.79845 3.35874 8.33561 3.33254ZM17.6114 7.93564C13.7334 7.93564 8.64146 10.9815 8.64146 16.9187C8.64146 22.7288 13.7334 25.8624 17.5721 25.8755C21.4501 25.8886 26.5813 22.2268 26.5813 16.9187C26.5813 11.3831 21.4894 7.93564 17.6114 7.93564Z"
                  fill="#0C1136"
                />
              </svg>
            </div>
            <div className="pl-5">
              <h2 className="tab:text-2xl tab:font-semibold mobile:font-bold leading-[2.15rem]  mobile:text-[0.9375rem]">
                Personalization
              </h2>
              <p
                className={`${manrope.className} text-head-dark opacity-60 tab:text-base font-medium tab:py-2 lgdesktop:w-[16.5rem] lg:w-[35.5rem] tab:w-[34.5rem] tab:leading-[1.45rem] mobile:text-[0.6875rem]`}
              >
                Buyers can personalize their exploration by virtually walking
                through different units, helping them select the one that best
                suits their needs.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-prime-green tab:rounded-2xl mobile:rounded-md tab:p-4 mobile:py-2 mobile:px-3 flex justify-center items-center tab:w-[5.15rem] tab:h-[5.15rem] mobile:w-[4.15rem] mobile:h-[3.15rem] mt-2.5">
              <svg
                className="mobile:w-[1.37rem]"
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0386 13.3474C13.578 12.5282 14.6224 10.3574 15.7897 8.33002C15.9331 8.08428 15.8921 7.73613 15.8921 7.42895C15.8921 5.68824 15.8921 3.94753 15.8921 2.20682C15.9126 1.08048 16.3427 0.670898 17.469 0.670898C21.0733 0.670898 23.2236 2.75975 23.2645 6.36404C23.285 7.73613 23.3055 9.08774 23.2645 10.4598C23.2441 11.1152 23.4079 11.3404 24.1042 11.3199C26.3159 11.279 28.5481 11.2995 30.7598 11.2995C33.975 11.3199 35.6748 14.1256 34.1389 16.9517C33.9341 17.3408 33.9545 17.5865 34.1593 17.9551C35.0809 19.532 34.9171 21.027 33.7293 22.3786C33.4221 22.7267 33.4221 22.952 33.5859 23.3616C34.2003 24.7746 33.9545 26.1057 32.9306 27.2526C32.6029 27.6212 32.6234 27.8874 32.7872 28.3175C33.7702 30.9183 32.05 33.3758 29.2649 33.3962C23.8789 33.4167 18.4725 33.3962 13.0865 33.3962C11.8578 33.3962 10.7109 33.1095 9.4003 33.2939C6.92234 33.642 4.36248 33.3962 1.84357 33.3962C0.778662 33.3962 0.328125 32.9662 0.328125 31.9218C0.328125 25.5733 0.328125 19.1839 0.328125 12.8149C0.328125 11.75 0.778662 11.3199 1.84357 11.3199C4.15769 11.2995 6.49229 11.3199 8.80641 11.3199C10.7314 11.3199 10.8748 11.4428 11.0386 13.3474ZM21.0733 30.9797C23.5717 30.9797 26.0497 30.9797 28.5481 30.9797C30.0226 30.9797 30.6779 30.6316 30.6165 29.7715C30.5346 28.5223 29.613 28.5223 28.671 28.5223C27.8723 28.5223 27.3603 28.0717 27.3808 27.2526C27.4013 26.4948 27.9133 26.1057 28.671 26.0853C29.2239 26.0648 29.7564 26.1057 30.3093 26.0648C31.0056 26.0033 31.4356 25.5733 31.4356 24.8565C31.4356 24.1398 31.0056 23.7097 30.2888 23.6483C29.7564 23.6073 29.2034 23.6483 28.6505 23.6278C27.8928 23.5868 27.4013 23.1977 27.3808 22.44C27.3603 21.6209 27.8723 21.2113 28.6915 21.1908C29.3673 21.1703 30.0635 21.1908 30.7394 21.1908C31.7223 21.1703 32.3162 20.6993 32.2548 19.9416C32.1934 19.061 31.6199 18.7333 30.7803 18.7333C30.125 18.7333 29.4901 18.7333 28.8348 18.7333C27.9952 18.7333 27.4013 18.4057 27.3808 17.5046C27.3808 16.624 27.9747 16.2554 28.7939 16.2554C29.5721 16.2554 30.3707 16.2963 31.1489 16.2349C31.8452 16.1735 32.2548 15.7024 32.2343 14.9857C32.2138 14.3304 31.8043 13.9208 31.1489 13.8389C30.8827 13.7979 30.596 13.8184 30.3298 13.8184C27.6675 13.8184 25.0052 13.8184 22.343 13.8184C21.2166 13.8184 20.8071 13.3883 20.7866 12.2825C20.7661 11.2176 20.7866 10.1731 20.7866 9.10822C20.7866 8.08428 20.8071 7.06033 20.7456 6.03638C20.6842 4.93052 20.3156 3.96801 19.1688 3.49699C18.5953 3.27172 18.2882 3.27172 18.3086 4.02944C18.3496 5.42201 18.3086 6.83506 18.3291 8.22763C18.3291 8.67816 18.2062 9.08774 18.0015 9.49732C16.6498 12.1801 14.8477 14.4942 12.0011 15.8253C11.8782 15.8868 11.7759 15.9891 11.653 16.0506C11.1205 16.2963 10.9567 16.665 10.9567 17.2588C10.9772 21.0474 10.9567 24.8361 10.9772 28.6247C10.9772 30.222 11.7554 30.9797 13.3937 30.9797C15.9536 30.9797 18.5134 30.9797 21.0733 30.9797Z"
                  fill="#0C1136"
                />
              </svg>
            </div>
            <div className="pl-5">
              <h2 className="tab:text-2xl tab:font-semibold mobile:font-bold leading-[2.15rem]  mobile:text-[0.9375rem]">
                Reduced Surprises
              </h2>
              <p
                className={`${manrope.className} text-head-dark opacity-60 tab:text-base font-medium tab:py-2 lgdesktop:w-[16.5rem] lg:w-[35.5rem] tab:w-[34.5rem] tab:leading-[1.45rem] mobile:text-[0.6875rem]`}
              >
                It minimizes surprises upon purchase since customers have a
                detailed understanding of the interior, reducing the likelihood
                of dissatisfaction post-acquisition.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[82rem] m-auto lg:px-14 mobile:px-0 lgdesktop:px-0 mobile:pt-16 tab:pt-0">
          <RealEstate />
        </div>
        <div className="mobile:mt-20 tab:mt-0">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
export default PreSales;
