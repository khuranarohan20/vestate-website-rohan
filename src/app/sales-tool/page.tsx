import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import Image from "next/image";
import { Manrope } from "next/font/google";
import RealEstate from "@/components/realEstate";

const manrope = Manrope({ subsets: ["greek"] });
const SalesToolSection = () => {
  return (
    <>
      <div>
        <div className="bg-post-sales bg-no-repeat">
          <HeaderSection />
          <div
            className=" bg-no-repeat lg:h-[33.3rem] tab:h-[36.3rem]  bg-center relative"
            style={{ backgroundPosition: "4.5rem -7rem" }}
          >
            <Image
              width={826}
              height={443}
              src="/assets/Images/vestate-logo.png"
              alt=""
              className="mx-auto left-0 right-0 top-0 lg:w-[70%] w-full h-full  absolute z-10"
            />
            <div className="max-w-[59.3rem] my-0 mx-auto pt-14 relative z-20">
              <p className="text-white opacity-75 text-center lg:text-[2.5rem] tab:text-[1.75rem] lg:pb-5 tab:pb-3">
                V-Estate
              </p>
              <p className="text-white lg:text-[6.8rem] text-center lg:leading-[4.5rem] lg:pb-7 tab:pb-5 font-semibold tab:text-5xl">
                Sales Tool
              </p>
              <p
                className={`${manrope.className} text-white opacity-65 text-base text-center px-32 `}
              >
                Pre-sales experiences encompass a versatile set of tools
                designed to articulate & convey the company's vision, showcase
                its brand legacy, and serve as an introductory gateway into the
                immersive customer journey they are meaning to create for their
                customers.
              </p>
              <div className="mx-auto my-0 max-w-[59.3rem] lg:translate-x-[2rem] tab:translate-x-[0]">
                <Image
                  width={800}
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
        </div>

        <div className="bg-prime-green lg:py-[7.8rem] tab:py-16">
          <div className="lg:max-w-[73.5rem] m-auto">
            <div className="lg:mb-16 tab:mb-8 flex justify-center items-center flex-col">
              <h2 className="lg:text-7xl tab:text-[2rem] lg:leading-[3.33rem] tab:leading-8 bg-white lg:px-6 lg:py-4 tab:py-2 tab:px-4">
                Exterior
              </h2>
              <p className="text-amenities-para lg:text-7xl tab:text-[2rem] tab:leading-40 font-semibold lg:py-5 tab:py-3 text-center">
                Comprehensive Exploration
              </p>
            </div>

            <div className="">
              <div className="flex tab:justify-center lg:justify-normal">
                <Image
                  className="lg:w-[35rem] tab:w-[19.68rem]"
                  width={560}
                  height={328}
                  src="/assets/Images/Exterior.png"
                  alt="project-overview"
                />

                <div className="lg:ml-16 tab:ml-14">
                  <h2 className="lg:text-5xl tab:text-2xl lg:leading-[3.33rem] tab:leading-8 bg-white lg:px-6 lg:py-5 tab:px-4 tab:py-2 text-center">
                    Amenity Showcase
                  </h2>
                  <div
                    className=" flex gap-2.5 items-center lg:px-5 lg:py-4 lg:w-[34rem] tab:w-[19rem]  lg:mt-5 lg:mb-5 tab:mt-3 tab:mb-3rounded lg:h-24 tab:h-[3.4rem] tab:p-2"
                    style={{ border: "1px solid rgba(12, 17, 54, 0.16)" }}
                  >
                    <div
                      className="pr-4 "
                      style={{
                        borderRight: "0.75px solid rgba(14, 29, 41, 0.5)",
                      }}
                    >
                      <svg
                        className="tab:w-[1.25rem] lg:w-[2.56rem]"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_205_33919)">
                          <path
                            d="M0.125 8.71807V31.8165C0.1254 32.5445 0.8794 33.0285 1.5414 32.7253C1.5414 32.7253 2.9234 32.0837 5.983 31.4065C9.0426 30.7293 13.719 30.0445 20.125 30.0445C26.531 30.0445 31.2074 30.7293 34.267 31.4065C37.327 32.0837 38.7086 32.7253 38.7086 32.7253C39.3706 33.0281 40.1246 32.5449 40.125 31.8165V8.71807C40.1246 8.00207 39.3942 7.51887 38.735 7.79807C38.735 7.79807 32.4366 10.4901 20.125 10.4901C7.8134 10.4901 1.515 7.79807 1.515 7.79807C0.8398 7.55687 0.1414 8.17927 0.125 8.71807ZM2.125 10.1197C4.681 10.9305 10.7822 12.4901 20.125 12.4901C29.4678 12.4901 35.569 10.9305 38.125 10.1197V27.8901C34.9342 27.9813 31.653 27.6661 28.1282 26.2541L20.843 18.1089L14.6914 23.2705L11.7218 21.2905L5.885 27.4841C4.6782 28.0241 3.5158 28.6977 2.125 28.6857V10.1197ZM30.141 15.2581C29.4347 15.2675 28.7605 15.5547 28.2644 16.0575C27.7682 16.5602 27.4899 17.2381 27.4898 17.9445C27.4897 18.4775 27.6481 18.9986 27.9449 19.4413C28.2418 19.8841 28.6636 20.2286 29.1567 20.431C29.6498 20.6334 30.192 20.6845 30.7143 20.578C31.2366 20.4714 31.7154 20.2119 32.0898 19.8324C32.4642 19.453 32.7173 18.9708 32.8169 18.4471C32.9165 17.9235 32.8581 17.382 32.6491 16.8916C32.4402 16.4012 32.0901 15.9841 31.6434 15.6932C31.1967 15.4023 30.674 15.2508 30.141 15.2581Z"
                            fill="#0C1136"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_205_33919">
                            <rect
                              width="40"
                              height="40"
                              fill="white"
                              transform="translate(0.125 0.266602)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="lg:pl-2 tab:pl-1">
                      <p
                        className={`${manrope.className} lg:text-base text-augment-para lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                      >
                        Highlight and showcase each amenity, providing a virtual
                        tour of recreational spaces, parks, pools, and other
                        outdoor features.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-2.5 items-center lg:px-5 lg:py-4 lg:w-[34rem] tab:w-[19rem] lg:mt-5 lg:mb-5 tab:mt-3 rounded lg:h-24 tab:h-[3.4rem] tab:p-2"
                    style={{ border: "1px solid rgba(12, 17, 54, 0.16)" }}
                  >
                    <div
                      className="pr-4"
                      style={{
                        borderRight: "0.75px solid rgba(14, 29, 41, 0.5)",
                      }}
                    >
                      <svg
                        className="tab:w-[1.25rem] lg:w-[2.56rem]"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.8242 16.7238C33.8242 16.3715 33.6846 16.0337 33.4359 15.7846C33.1873 15.5355 32.8501 15.3955 32.4985 15.3955C32.1469 15.3955 31.8097 15.5355 31.5611 15.7846C31.3124 16.0337 31.1728 16.3715 31.1728 16.7238H33.8242ZM9.07724 16.7238C9.07724 16.3715 8.93756 16.0337 8.68894 15.7846C8.44032 15.5355 8.10311 15.3955 7.75151 15.3955C7.3999 15.3955 7.0627 15.5355 6.81407 15.7846C6.56545 16.0337 6.42578 16.3715 6.42578 16.7238H9.07724ZM35.0969 21.2047C35.2183 21.3352 35.3647 21.4399 35.5273 21.5125C35.6899 21.5851 35.8655 21.6241 36.0435 21.6273C36.2215 21.6304 36.3983 21.5976 36.5634 21.5308C36.7284 21.464 36.8784 21.3645 37.0043 21.2384C37.1302 21.1123 37.2294 20.962 37.2961 20.7966C37.3628 20.6312 37.3955 20.4541 37.3924 20.2757C37.3892 20.0974 37.3503 19.9215 37.2778 19.7585C37.2054 19.5956 37.1009 19.4489 36.9706 19.3273L35.0969 21.2047ZM20.125 4.32617L21.0618 3.3875C20.8133 3.13874 20.4763 2.99902 20.125 2.99902C19.7737 2.99902 19.4367 3.13874 19.1882 3.3875L20.125 4.32617ZM3.27937 19.3273C3.14912 19.4489 3.04465 19.5956 2.97219 19.7585C2.89973 19.9215 2.86077 20.0974 2.85763 20.2757C2.85449 20.4541 2.88723 20.6312 2.95391 20.7966C3.02059 20.962 3.11983 21.1123 3.24572 21.2384C3.37161 21.3645 3.52157 21.464 3.68664 21.5308C3.85172 21.5976 4.02853 21.6304 4.20654 21.6273C4.38455 21.6241 4.5601 21.5851 4.72272 21.5125C4.88534 21.4399 5.0317 21.3352 5.15307 21.2047L3.27937 19.3273ZM11.2868 37.5342H28.9632V34.8775H11.2868V37.5342ZM33.8242 32.6637V16.7238H31.1728V32.6637H33.8242ZM9.07724 32.6637V16.7238H6.42578V32.6637H9.07724ZM36.9706 19.3273L21.0618 3.3875L19.1882 5.26485L35.0969 21.2047L36.9706 19.3273ZM19.1882 3.3875L3.27937 19.3273L5.15307 21.2047L21.0618 5.26485L19.1882 3.3875ZM28.9632 37.5342C30.2524 37.5342 31.4889 37.021 32.4005 36.1076C33.3121 35.1942 33.8242 33.9554 33.8242 32.6637H31.1728C31.1728 33.8857 30.1829 34.8775 28.9632 34.8775V37.5342ZM11.2868 34.8775C10.0671 34.8775 9.07724 33.8857 9.07724 32.6637H6.42578C6.42578 33.9554 6.93792 35.1942 7.84953 36.1076C8.76115 37.021 9.99757 37.5342 11.2868 37.5342V34.8775Z"
                          fill="#0C1136"
                        />
                        <path
                          d="M26.4886 18.9812C25.5201 18.9803 24.5621 19.1949 23.6759 19.6114C22.4748 17.4596 20.5005 16.3884 20.4098 16.3383C20.3214 16.2912 20.2239 16.2666 20.125 16.2666C20.0261 16.2666 19.9286 16.2912 19.8402 16.3383C19.7495 16.3875 17.772 17.4596 16.5741 19.6114C15.6879 19.1949 14.7299 18.9803 13.7614 18.9812C13.5926 18.9812 13.4307 19.0527 13.3114 19.18C13.192 19.3072 13.125 19.4798 13.125 19.6598V23.0525C13.1271 24.9138 13.7806 26.7074 14.9576 28.0821C16.1346 29.4568 17.7503 30.3136 19.4886 30.485V33.49L16.5916 31.9447C16.5168 31.9048 16.4354 31.881 16.352 31.8747C16.2685 31.8684 16.1848 31.8796 16.1055 31.9078C16.0261 31.936 15.9528 31.9806 15.8896 32.039C15.8264 32.0975 15.7747 32.1686 15.7373 32.2483C15.6999 32.3281 15.6776 32.4149 15.6716 32.5038C15.6657 32.5928 15.6763 32.6821 15.7027 32.7667C15.7292 32.8513 15.771 32.9295 15.8258 32.9968C15.8806 33.0642 15.9473 33.1194 16.022 33.1593L19.8402 35.1949C19.9286 35.242 20.0261 35.2666 20.125 35.2666C20.2239 35.2666 20.3214 35.242 20.4098 35.1949L24.228 33.1593C24.379 33.0787 24.4939 32.9375 24.5473 32.7667C24.6007 32.5958 24.5883 32.4094 24.5127 32.2483C24.4372 32.0873 24.3048 31.9648 24.1445 31.9078C23.9843 31.8509 23.8095 31.8641 23.6584 31.9447L20.7614 33.49V30.485C22.4997 30.3136 24.1154 29.4568 25.2924 28.0821C26.4694 26.7074 27.1229 24.9138 27.125 23.0525V19.6598C27.125 19.4798 27.058 19.3072 26.9386 19.18C26.8193 19.0527 26.6574 18.9812 26.4886 18.9812ZM19.4886 29.122C18.0892 28.9533 16.7969 28.2414 15.858 27.1221C14.9191 26.0027 14.3994 24.5542 14.3977 23.0525V20.3756C15.7972 20.5443 17.0895 21.2562 18.0284 22.3755C18.9672 23.4949 19.487 24.9434 19.4886 26.4451V29.122ZM20.125 23.3374C19.5897 22.0973 18.7469 21.0366 17.6877 20.2696C18.449 18.9303 19.5968 18.0728 20.125 17.7251C20.654 18.0711 21.8018 18.9286 22.5623 20.2696C21.5032 21.0367 20.6605 22.0974 20.125 23.3374ZM25.8523 23.0525C25.8506 24.5542 25.3309 26.0027 24.392 27.1221C23.4531 28.2414 22.1608 28.9533 20.7614 29.122V26.4451C20.763 24.9434 21.2828 23.4949 22.2216 22.3755C23.1605 21.2562 24.4528 20.5443 25.8523 20.3756V23.0525Z"
                          fill="#0C1136"
                        />
                      </svg>
                    </div>

                    <div className="pl-2">
                      <p
                        className={`${manrope.className} lg:text-base text-augment-para lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                      >
                        Clients gain a vivid understanding of the lifestyle the
                        property offers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex mt-20 tab:justify-center lg:justify-normal">
                  <div className="mr-16">
                    <h2 className="lg:text-5xl tab:text-2xl leading-[3.33rem] tab:leading-8 bg-white lg:px-6 lg:py-5 tab:px-4 tab:py-2 text-center">
                      Architectural Insights
                    </h2>
                    <div
                      className=" flex gap-2.5 items-center lg:px-5 lg:py-4 lg:w-[34rem] tab:w-[19rem] mt-5 mb-5 rounded lg:h-24 tab:h-[3.4rem] tab:p-2"
                      style={{ border: "1px solid rgba(12, 17, 54, 0.16)" }}
                    >
                      <div
                        className="pr-4"
                        style={{
                          borderRight: "0.75px solid rgba(14, 29, 41, 0.5)",
                        }}
                      >
                        <svg
                          className="tab:w-[1.25rem] lg:w-[2.56rem]"
                          width="40"
                          height="41"
                          viewBox="0 0 40 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.7078 4.58304C22.066 4.4638 22.4466 4.42724 22.821 4.47611C23.1954 4.52498 23.5538 4.658 23.8694 4.8652C24.185 5.0724 24.4496 5.3484 24.6433 5.67247C24.837 5.99654 24.9548 6.36028 24.9878 6.73638L24.9978 6.95638V16.0997L31.3212 17.3664C31.8481 17.4714 32.3272 17.7434 32.6875 18.1421C33.0477 18.5407 33.2699 19.0448 33.3212 19.5797L33.3312 19.8164V32.4664H34.9978C35.4226 32.4668 35.8312 32.6295 36.1401 32.9211C36.449 33.2127 36.6349 33.6113 36.6598 34.0354C36.6847 34.4594 36.5467 34.877 36.2741 35.2028C36.0014 35.5285 35.6147 35.7379 35.1928 35.788L34.9978 35.7997H4.99783C4.57303 35.7992 4.16444 35.6366 3.85555 35.345C3.54665 35.0533 3.36077 34.6548 3.33587 34.2307C3.31098 33.8066 3.44895 33.3891 3.7216 33.0633C3.99425 32.7376 4.381 32.5282 4.80283 32.478L4.99783 32.4664H6.66449V11.3997C6.66449 10.3997 7.25783 9.50638 8.16116 9.10971L8.37449 9.02804L21.7078 4.58304ZM21.6645 8.11304L9.99783 12.0014V32.4664H21.6645V8.11304ZM24.9978 19.5014V32.4664H29.9978V20.4997L24.9978 19.5014Z"
                            fill="#0C1136"
                          />
                        </svg>
                      </div>

                      <div className="pl-2">
                        <p
                          className={`${manrope.className} lg:text-base text-augment-para lg:leading-6 tab:text-[0.56rem] tab:leading-3 `}
                        >
                          Explore the ergonomic architecture of the property,
                          emphasizing design elements that contribute to a
                          unique and attractive visual appeal.
                        </p>
                      </div>
                    </div>
                    <div
                      className=" flex gap-2.5 items-center lg:px-5 lg:py-4 lg:w-[34rem] tab:w-[19rem] mt-5 mb-5 rounded lg:h-24 tab:h-[3.4rem] tab:p-2"
                      style={{ border: "1px solid rgba(12, 17, 54, 0.16)" }}
                    >
                      <div
                        className="pr-4"
                        style={{
                          borderRight: "0.75px solid rgba(14, 29, 41, 0.5)",
                        }}
                      >
                        <svg
                          className="tab:w-[1.25rem] lg:w-[2.56rem]"
                          width="40"
                          height="41"
                          viewBox="0 0 40 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.4347 0.783203H19.415V3.45634H20.4347V0.783203Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M24.6975 1.94758L23.7578 1.55176L22.72 4.01554L23.6597 4.41137L24.6975 1.94758Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M16.6828 4.01581L15.6455 1.55176L14.7057 1.94738L15.743 4.41143L16.6828 4.01581Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M13.293 12.7041C13.293 13.2657 14.0959 13.7144 14.2343 14.2322C14.3775 14.768 13.9107 15.5571 14.1822 16.0261C14.4575 16.5021 15.3767 16.4905 15.7629 16.8768C16.1492 17.263 16.1375 18.1822 16.6135 18.4576C17.0828 18.7289 17.8716 18.2622 18.4077 18.4056C18.9255 18.5438 19.3742 19.3469 19.9356 19.3469C20.4971 19.3469 20.9458 18.5438 21.4636 18.4056C21.9994 18.2622 22.7884 18.7289 23.2575 18.4576C23.7334 18.1821 23.7219 17.2629 24.1083 16.8768C24.4944 16.4906 25.4135 16.5021 25.689 16.0261C25.9605 15.557 25.4938 14.768 25.637 14.2321C25.7752 13.7143 26.5781 13.2656 26.5781 12.7041C26.5781 12.1427 25.7752 11.694 25.637 11.1761C25.4938 10.6404 25.9605 9.85126 25.689 9.38231C25.4138 8.90627 24.4946 8.91771 24.1083 8.53154C23.7221 8.14537 23.7338 7.226 23.2576 6.95082C22.7884 6.67927 21.9995 7.14605 21.4636 7.00281C20.9458 6.86425 20.4971 6.06152 19.9356 6.06152C19.3742 6.06152 18.9255 6.86425 18.4077 7.00281C17.8719 7.14605 17.0828 6.67927 16.6137 6.95074C16.1378 7.22608 16.1492 8.14529 15.7631 8.53146C15.3769 8.91779 14.4577 8.90611 14.1822 9.38223C13.9108 9.85118 14.3776 10.6402 14.2343 11.1761C14.0959 11.6941 13.293 12.1427 13.293 12.7041ZM17.5762 11.172C18.1035 10.6376 18.9354 10.6989 19.4324 11.2677L19.7371 11.6166C19.8453 11.7403 20.0255 11.7403 20.1338 11.6166L20.4387 11.2677C20.9355 10.6989 21.7674 10.6377 22.2949 11.172C22.8322 11.7167 22.8557 12.6364 22.3517 13.2132L20.8771 14.9007C20.631 15.1823 20.2909 15.3415 19.9354 15.3415C19.58 15.3415 19.2397 15.1823 18.9938 14.9007L17.519 13.2132C17.0152 12.6364 17.0389 11.7166 17.5762 11.172Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M8.86694 32.1988C9.9941 32.1988 10.9101 31.2811 10.9101 30.1558C10.9101 30.0815 10.9063 30.0094 10.897 29.9389L18.3069 27.0023C18.6797 27.5048 19.2765 27.831 19.9476 27.831C21.0747 27.831 21.9905 26.9151 21.9905 25.7879C21.9905 25.7065 21.9852 25.6268 21.9756 25.5489L29.393 22.6086C29.7656 23.1073 30.3607 23.4297 31.0302 23.4297C32.1553 23.4297 33.0712 22.5142 33.0712 21.3887C33.0712 21.3109 33.0674 21.233 33.0564 21.157C33.0192 20.8048 32.8894 20.4805 32.6911 20.2059C32.3221 19.6869 31.714 19.3477 31.0302 19.3477C29.903 19.3477 28.987 20.2636 28.987 21.3887C28.987 21.4814 28.9927 21.5742 29.0075 21.665L21.6049 24.5978C21.2339 24.0825 20.6297 23.7468 19.9475 23.7468C18.8222 23.7468 17.9065 24.6627 17.9065 25.7879C17.9065 25.8787 17.9119 25.9678 17.925 26.0569L10.5391 28.984C10.1683 28.4576 9.55659 28.1147 8.86686 28.1147C7.74156 28.1147 6.82582 29.0304 6.82582 30.1557C6.82582 30.254 6.83324 30.3523 6.84799 30.4468L0 33.1609L0.374403 34.11L7.24125 31.3885C7.61372 31.8798 8.20325 32.1988 8.86694 32.1988ZM30.0141 21.2664C30.0754 20.7605 30.5074 20.3674 31.0302 20.3674C31.2786 20.3674 31.5064 20.4564 31.6844 20.6048C31.9087 20.7919 32.0516 21.0735 32.0516 21.3888C32.0516 21.4481 32.0459 21.5056 32.0367 21.5614C31.955 22.0433 31.5342 22.4104 31.0302 22.4104C30.8001 22.4104 30.587 22.3345 30.4164 22.2046C30.1679 22.0193 30.0067 21.7226 30.0067 21.3888C30.0067 21.348 30.0085 21.3053 30.0141 21.2664ZM18.9354 25.6565C19.0003 25.154 19.4285 24.7666 19.9476 24.7666C20.1942 24.7666 20.4185 24.8538 20.5964 24.9983C20.8244 25.1855 20.9708 25.4712 20.9708 25.788C20.9708 25.8437 20.9672 25.8993 20.956 25.9531C20.8781 26.4388 20.4555 26.8114 19.9476 26.8114C19.7142 26.8114 19.4991 26.7318 19.3265 26.5982C19.0838 26.4129 18.9262 26.118 18.9262 25.7879C18.9262 25.7436 18.9298 25.699 18.9354 25.6565ZM7.8511 30.05C7.90494 29.5367 8.33867 29.1345 8.86702 29.1345C9.12092 29.1345 9.3546 29.2289 9.5345 29.3827C9.75318 29.57 9.89045 29.8462 9.89045 30.1559C9.89045 30.2208 9.8848 30.2857 9.87191 30.3468C9.78292 30.8196 9.3658 31.1791 8.86702 31.1791C8.6427 31.1791 8.43507 31.1069 8.2683 30.9826C8.01231 30.7972 7.84546 30.4951 7.84546 30.1558C7.84546 30.1207 7.84747 30.0854 7.8511 30.05Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M11.6809 35.5186H6.05394C5.77344 35.5186 5.5459 35.7459 5.5459 36.0266V40.308C5.5459 40.5888 5.77336 40.8162 6.05394 40.8162H11.6809C11.9616 40.8162 12.1892 40.5889 12.1892 40.308V36.0266C12.1891 35.7459 11.9616 35.5186 11.6809 35.5186Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M22.7621 33.25H17.1352C16.8545 33.25 16.627 33.4776 16.627 33.7582V40.3085C16.627 40.5894 16.8544 40.8167 17.1352 40.8167H22.7621C23.0427 40.8167 23.2701 40.5894 23.2701 40.3085V33.7582C23.27 33.4776 23.0427 33.25 22.7621 33.25Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M33.8431 27.1777H28.2161C27.9354 27.1777 27.708 27.4054 27.708 27.6859V40.3083C27.708 40.5891 27.9353 40.8165 28.2161 40.8165H33.8431C34.1236 40.8165 34.3513 40.5892 34.3513 40.3083V27.6859C34.3513 27.4054 34.1236 27.1777 33.8431 27.1777Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M32.6914 20.2066C32.8896 20.481 33.0195 20.8053 33.0566 21.1577L36.7494 19.6172L36.3769 18.668L32.6914 20.2066Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M39.6637 17.3768L37.6379 16.5024C37.4315 16.4136 37.1921 16.4575 37.0306 16.6137C36.8692 16.77 36.8177 17.0081 36.9001 17.217L37.317 18.2746L37.3163 18.2747L37.691 19.2238L38.1138 20.2967C38.1975 20.5094 38.4028 20.6491 38.6313 20.6491C38.6331 20.6491 38.6354 20.6491 38.6376 20.6491C38.8682 20.6464 39.0733 20.5017 39.1531 20.2852L39.9653 18.0797C40.0675 17.8026 39.935 17.4939 39.6637 17.3768Z"
                            fill="#0C1136"
                          />
                        </svg>
                      </div>

                      <div className="pl-2">
                        <p
                          className={`${manrope.className} lg:text-base text-augment-para lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                        >
                          Architectural details are highlighted, creating a
                          lasting impression on potential buyers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Image
                    className="lg:w-[35rem] tab:w-[19.68rem]"
                    width={560}
                    height={328}
                    src="/assets/Images/Exterior.png"
                    alt="project-overview"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[70rem] m-auto">
          <div className="flex lg:my-36 tab:my-20 justify-center">
            <div className="lg:w-1/2 tab:w-[18.125rem]">
              <h2 className="bg-prime-green lg:px-6 lg:text-7xl tab:text-2xl lg:leading-[3.33rem] inline tab:leading-8 tab:px-4 tab:py-2">
                Realistic Unit
              </h2>
              <p className="lg:text-7xl tab:text-2xl font-semibold leading-[3.33rem] lg:pt-4 lg:pb-6 tab:py-2">
                Visualization
              </p>
              <Image
                width={560}
                height={328}
                src="/assets/Images/Visualization.png"
                alt="project-overview"
              />
            </div>

            <div className="lg:w-1/2 tab:w-[18.125rem] lg:ml-20 tab:ml-8">
              <div
                className="flex rounded lg:p-8 tab:p-5 lg:mb-5 tab:mb-3"
                style={{ border: "1px solid rgba(12, 17, 54, 0.25)" }}
              >
                <div style={{ marginTop: "-0.4rem" }}>
                  <svg
                    className="tab:w-[1.31rem] lg:w-[2.06rem] mr-3"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.0498 5.37598H26.0498C26.315 5.37598 26.5694 5.48133 26.7569 5.66887C26.9444 5.85641 27.0498 6.11076 27.0498 6.37598V26.376C27.0498 26.6412 26.9444 26.8955 26.7569 27.0831C26.5694 27.2706 26.315 27.376 26.0498 27.376H6.0498C5.78459 27.376 5.53023 27.2706 5.3427 27.0831C5.15516 26.8955 5.0498 26.6412 5.0498 26.376V6.37598C5.0498 6.11076 5.15516 5.85641 5.3427 5.66887C5.53023 5.48133 5.78459 5.37598 6.0498 5.37598ZM2.0498 6.37598C2.0498 5.31511 2.47123 4.29769 3.22138 3.54755C3.97152 2.7974 4.98894 2.37598 6.0498 2.37598H26.0498C27.1107 2.37598 28.1281 2.7974 28.8782 3.54755C29.6284 4.29769 30.0498 5.31511 30.0498 6.37598V26.376C30.0498 27.4368 29.6284 28.4543 28.8782 29.2044C28.1281 29.9545 27.1107 30.376 26.0498 30.376H6.0498C4.98894 30.376 3.97152 29.9545 3.22138 29.2044C2.47123 28.4543 2.0498 27.4368 2.0498 26.376V6.37598ZM21.1178 14.72C21.3884 14.9032 21.61 15.15 21.7631 15.4387C21.9163 15.7274 21.9963 16.0492 21.9963 16.376C21.9963 16.7028 21.9163 17.0246 21.7631 17.3133C21.61 17.602 21.3884 17.8487 21.1178 18.032L15.1698 22.058C14.8689 22.2614 14.5183 22.379 14.1557 22.3982C13.793 22.4174 13.432 22.3375 13.1113 22.1671C12.7906 21.9967 12.5223 21.7422 12.3353 21.4308C12.1483 21.1195 12.0496 20.7631 12.0498 20.4V12.352C12.0496 11.9888 12.1483 11.6324 12.3353 11.3211C12.5223 11.0098 12.7906 10.7553 13.1113 10.5848C13.432 10.4144 13.793 10.3345 14.1557 10.3538C14.5183 10.373 14.8689 10.4906 15.1698 10.694L21.1178 14.72Z"
                      fill="#0C1136"
                    />
                  </svg>
                </div>

                <div className="">
                  <h2
                    className="font-semibold lg:text-2xl text-head-dark lg:leading-8 pl-3 pb-1 tab:text-sm tab:leading-[1.12rem] "
                    style={{ borderLeft: "0.75px solid rgba(12, 17, 54, 0.5)" }}
                  >
                    Delivery Day Preview
                  </h2>
                  <ul
                    className={`${manrope.className} list-disc lg:pl-9 tab:pl-7 lg:text-base text-augment-para lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                  >
                    <li className="pb-2">
                      Clients virtually walk through the units to experience the
                      space, materials, and finishes, getting a realistic
                      preview of what to expect on delivery day.
                    </li>
                    <li>
                      {" "}
                      Builds confidence and trust in the development process.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="flex rounded lg:p-8 tab:p-5"
                style={{ border: "1px solid rgba(12, 17, 54, 0.25)" }}
              >
                <div style={{ marginTop: "-0.1rem" }}>
                  <svg
                    className="tab:w-[1.25rem] lg:w-[2.56rem] mr-3"
                    width="28"
                    height="32"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.2101 19.7252H2.88337C2.18532 19.7252 1.61816 19.158 1.61816 18.46V1.26326C1.61816 0.565211 2.18532 -0.00195312 2.88337 -0.00195312H24.2101C24.9081 -0.00195312 25.4753 0.565211 25.4753 1.26326V18.46C25.4753 19.1507 24.9081 19.7252 24.2101 19.7252ZM2.88337 0.72518C2.58525 0.72518 2.34529 0.965134 2.34529 1.26326V18.46C2.34529 18.7581 2.58525 18.998 2.88337 18.998H24.2101C24.5082 18.998 24.7481 18.7581 24.7481 18.46V1.26326C24.7481 0.965134 24.5082 0.72518 24.2101 0.72518H2.88337Z"
                      fill="#0C1136"
                    />
                    <path
                      d="M23.8171 18.4305H3.27567C3.07208 18.4305 2.91211 18.2705 2.91211 18.0669V1.65556C2.91211 1.45196 3.07208 1.29199 3.27567 1.29199H23.8171C24.0207 1.29199 24.1806 1.45196 24.1806 1.65556V18.0742C24.1806 18.2705 24.0207 18.4305 23.8171 18.4305ZM3.63924 17.7034H23.4535V2.01912H3.63924V17.7034Z"
                      fill="#0C1136"
                    />
                    <path
                      d="M7.40217 31.9941H0.363564C0.159968 31.9941 0 31.8342 0 31.6306V28.1476C0 27.1223 0.836198 26.2861 1.86145 26.2861H5.90429C6.92954 26.2861 7.76574 27.1223 7.76574 28.1476V31.6306C7.76574 31.8269 7.60577 31.9941 7.40217 31.9941ZM0.727129 31.267H7.03861V28.1476C7.03861 27.5223 6.52962 27.0133 5.90429 27.0133H1.86145C1.23612 27.0133 0.727129 27.5223 0.727129 28.1476V31.267Z"
                      fill="#0C1136"
                    />
                    <path
                      d="M3.87937 25.8379C2.46874 25.8379 1.32715 24.689 1.32715 23.2856C1.32715 21.8823 2.47601 20.7334 3.87937 20.7334C5.28273 20.7334 6.43159 21.8823 6.43159 23.2856C6.43159 24.689 5.29 25.8379 3.87937 25.8379ZM3.87937 21.4605C2.86866 21.4605 2.05428 22.2822 2.05428 23.2856C2.05428 24.2891 2.87593 25.1107 3.87937 25.1107C4.88281 25.1107 5.70446 24.2891 5.70446 23.2856C5.70446 22.2822 4.89008 21.4605 3.87937 21.4605Z"
                      fill="#0C1136"
                    />
                    <path
                      d="M17.0701 31.9961H10.0315C9.82794 31.9961 9.66797 31.8361 9.66797 31.6325V28.1495C9.66797 27.1243 10.5042 26.2881 11.5294 26.2881H15.5723C16.5975 26.2881 17.4337 27.1243 17.4337 28.1495V31.6325C17.4337 31.8288 17.2665 31.9961 17.0701 31.9961ZM10.3951 31.2689H16.7066V28.1495C16.7066 27.5242 16.1976 27.0152 15.5723 27.0152H11.5294C10.9041 27.0152 10.3951 27.5242 10.3951 28.1495V31.2689Z"
                      fill="#0C1136"
                    />
                    <path
                      d="M13.5532 25.8379C12.1426 25.8379 11.001 24.689 11.001 23.2856C11.001 21.8823 12.1498 20.7334 13.5532 20.7334C14.9566 20.7334 16.1054 21.8823 16.1054 23.2856C16.1054 24.689 14.9566 25.8379 13.5532 25.8379ZM13.5532 21.4605C12.5425 21.4605 11.7281 22.2822 11.7281 23.2856C11.7281 24.2891 12.5498 25.1107 13.5532 25.1107C14.5566 25.1107 15.3783 24.2891 15.3783 23.2856C15.3783 22.2822 14.5566 21.4605 13.5532 21.4605Z"
                      fill="#0C1136"
                    />
                    <path
                      d="M26.7332 31.998H19.6946C19.491 31.998 19.3311 31.8381 19.3311 31.6345V28.1515C19.3311 27.1262 20.1673 26.29 21.1925 26.29H25.2353C26.2606 26.29 27.0968 27.1262 27.0968 28.1515V31.6345C27.0968 31.8308 26.9368 31.998 26.7332 31.998ZM20.0582 31.2709H26.3697V28.1515C26.3697 27.5262 25.8607 27.0172 25.2353 27.0172H21.1925C20.5672 27.0172 20.0582 27.5262 20.0582 28.1515V31.2709Z"
                      fill="#0C1136"
                    />
                    <path
                      d="M23.2143 25.8398C21.8037 25.8398 20.6621 24.691 20.6621 23.2876C20.6621 21.8842 21.811 20.7354 23.2143 20.7354C24.6177 20.7354 25.7666 21.8842 25.7666 23.2876C25.7666 24.691 24.625 25.8398 23.2143 25.8398ZM23.2143 21.4625C22.2036 21.4625 21.3892 22.2841 21.3892 23.2876C21.3892 24.291 22.2109 25.1127 23.2143 25.1127C24.2178 25.1127 25.0394 24.291 25.0394 23.2876C25.0394 22.2841 24.225 21.4625 23.2143 21.4625Z"
                      fill="#0C1136"
                    />
                    <path
                      d="M14.6079 5.9248C14.9284 5.9247 15.2371 6.05022 15.4721 6.27621C15.7071 6.5022 15.8511 6.81195 15.8751 7.14337L15.8783 7.24218V9.87692H17.784C18.1045 9.87681 18.4132 10.0023 18.6483 10.2283C18.8833 10.4543 19.0273 10.7641 19.0513 11.0955L19.0545 11.1943V16.4638H19.6897C19.8516 16.464 20.0073 16.5282 20.1251 16.6435C20.2428 16.7587 20.3136 16.9163 20.3231 17.0839C20.3326 17.2515 20.3233 17.3577 20.3233 17.5452C20.3233 17.7765 19.9248 17.7567 19.764 17.7765L19.6897 17.7811H8.25557C8.09366 17.781 7.62012 17.7811 7.62012 17.6014C7.62012 17.3577 7.63162 17.3287 7.62213 17.1611C7.61264 16.9935 7.66523 16.8284 7.76915 16.6997C7.87307 16.571 8.02047 16.4882 8.18124 16.4684L8.25557 16.4638H8.8908V7.24218C8.89069 6.90982 9.01175 6.5897 9.22969 6.346C9.44763 6.1023 9.74635 5.95303 10.066 5.9281L10.1613 5.9248H14.6079ZM17.784 11.1943H15.8783V16.4638H17.784V11.1943ZM14.6079 7.24218H10.1613V16.4638H14.6079V7.24218ZM13.3374 13.829V15.1464H11.4317V13.829H13.3374ZM13.3374 11.1943V12.5117H11.4317V11.1943H13.3374ZM13.3374 8.55955V9.87692H11.4317V8.55955H13.3374Z"
                      fill="#0C1136"
                    />
                  </svg>
                </div>
                <div className="">
                  <h2
                    className="font-semibold lg:text-2xl text-head-dark lg:leading-8 pl-3 pb-1 tab:text-sm tab:leading-[1.12rem] "
                    style={{ borderLeft: "0.75px solid rgba(12, 17, 54, 0.5)" }}
                  >
                     Orientation Details
                  </h2>
                  <ul
                    className={`${manrope.className} list-disc lg:pl-9 tab:pl-7 lg:text-base text-augment-para lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                  >
                    <li className="pb-2">
                      Showcase how each unit is oriented within the building,
                      allowing clients to understand sunlight exposure, views,
                      and privacy considerations.
                    </li>
                    <li>
                      {" "}
                      Clients make more informed decisions based on a clear
                      understanding of unit positioning.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-form-head lg:py-36 tab:py-20">
          <div className="lg:px-[5.2rem] tab:px-[3.2rem]">
            <div className="mb-8 text-center">
              <h2 className="bg-prime-green px-4 lg:text-7xl tab:text-[2rem] inline lg:leading-[3.33rem] tab:leading-8">
                Vicinity Touchpoints
              </h2>
              <p className="lg:text-7xl tab:text-[2rem] font-semibold text-white lg:leading-[3.33rem] tab:leading-10 lg:pt-4 lg:pb-6 tab:pt-2">
                Contextual Surroundings
              </p>
            </div>
            <div className="flex justify-center">
              <div className="lgdesktop:w-[32.73rem] lg:w-[34rem] 2xl:w-[38rem] lg:mr-12 tab:mr-6">
                <div
                  className="lg:p-6 tab:p-4 lg:mb-6 tab:mb-4"
                  style={{ border: "1px solid rgba(255, 255, 255, 0.25)" }}
                >
                  <h2 className="font-semibold lg:text-2xl tab:text[0.875rem] text-white lg:leading-8 tab:leading[1.125rem] pb-2">
                    Points of Interest Highlight
                  </h2>
                  <ul
                    className={`${manrope.className} lg:text-base leading-6 text-white list-disc pl-6 opacity-80 tab:text-[0.56rem] tab:leading-3`}
                  >
                    <li className="pb-2">
                      Identify and highlight nearby points of interest, such as
                      schools, shopping centers, and recreational areas,
                      contributing to the property's appeal.
                    </li>
                    <li>
                      {" "}
                      Enhance the overall perception of the property's
                      convenience and lifestyle benefits.
                    </li>
                  </ul>
                </div>
                <div
                  className="p-6"
                  style={{ border: "1px solid rgba(255, 255, 255, 0.25)" }}
                >
                  <h2 className="font-semibold lg:text-2xl tab:text[0.875rem] text-white lg:leading-8 tab:leading[1.125rem] pb-2">
                    Transportation Visualization
                  </h2>
                  <ul
                    className={`${manrope.className} lg:text-base leading-6 text-white list-disc pl-6 opacity-80 tab:text-[0.56rem] tab:leading-3`}
                  >
                    <li className="pb-2">
                      Map out transportation options, illustrating road
                      connectivity, public transport, and accessibility.
                    </li>
                    <li>
                      {" "}
                      Helps clients assess the property's connectivity to
                      essential services and their daily commute.
                    </li>
                  </ul>
                </div>
              </div>
              <Image
                className="lg:w-[32.5rem] lgdesktop:w-[42.18rem] mx-0 my-auto"
                width={675}
                height={396}
                src="/assets/Images/contextual.png"
                alt="project-overview"
              />
            </div>
          </div>
        </div>

        <div className="lg:py-40 tab:py-20">
          <div className="lg:mb-8 tab:mb-4 text-center">
            <h2 className="bg-prime-green px-4 lg:text-7xl tab:text-[2rem] inline lg:leading-[3.33rem] tab:leading-8">
              All Weather Modes
            </h2>
            <p className="lg:text-7xl tab:text-[2rem] font-semibold text-head-dark lg:leading-[3.33rem] tab:leading-10 lg:pt-4 lg:pb-6 tab:pt-2">
               Dynamic Environmental Experience
            </p>
          </div>

          <div className="flex lg:gap-10 tab:gap-3.5 px-40 justify-center">
            <div>
              <div
                className="rounded lg:w-[33.6rem]  tab:w-[19rem] lg:p-4 tab:py-3 tab:pr-3"
                style={{ border: "1px solid rgba(18, 17, 18, 0.25)" }}
              >
                <h2 className="font-semibold lg:text-2xl text-head-dark lg:leading-8 pl-3 pb-2 tab:text-sm tab:leading-[1.12rem] ">
                   Seasonal Variation
                </h2>
                <ul
                  className={`${manrope.className} lg:text-base lg:leading-6 text-head-dark list-disc pl-9 tab:text-[0.56rem] tab:leading-3`}
                >
                  <li className="pb-2 ">
                    Showcase the property in different seasons, allowing clients
                    to visualize how it looks year-round.
                  </li>
                  <li>
                    {" "}
                    Adds a dynamic and changing element to the property
                    presentation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-10">
              <div
                className="rounded lg:w-[33.6rem]  tab:w-[19rem] lg:p-4 tab:py-3 tab:pr-3"
                style={{ border: "1px solid rgba(18, 17, 18, 0.25)" }}
              >
                <h2 className="font-semibold lg:text-2xl text-head-dark lg:leading-8 pl-3 pb-2 tab:text-sm tab:leading-[1.12rem]">
                   Day-to-Night Transition
                </h2>
                <ul
                  className={`${manrope.className} lg:text-base lg:leading-6 text-head-dark list-disc pl-9 tab:text-[0.56rem] tab:leading-3`}
                >
                  <li className="pb-2">
                    Enable clients to experience the property's ambiance at
                    different times of the day, providing a holistic
                    understanding of lighting conditions.
                  </li>
                  <li>
                    {" "}
                    Enhances the appreciation of the property's atmosphere.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Image
            className="my-0 mx-auto lg:w-[68.75rem] tab:w-[40.31rem]"
            width={1100}
            height={645}
            src="/assets/Images/weather-mode.png"
            alt="project-overview"
          />
        </div>
        <div className="lg:py-[7.8rem] tab:py-[3.8rem]">
          <div className="lg:max-w-[73.5rem] m-auto">
            <div className="lg:mb-20 tab:mb-10 flex justify-center items-center flex-col">
              <h2 className="lg:text-7xl tab:text-[2rem] leading-[3.33rem] bg-prime-green px-6 inline">
                Window Mode
              </h2>
              <p className="text-amenities-para lg:text-7xl tab:text-[2rem] font-semibold lg:py-5 tab:py-2 text-center">
                Accurate Unit Views
              </p>
            </div>

            <div>
              <div className="flex tab:justify-center lg:justify-normal">
                <Image
                  className="lg:w-[35rem] tab:w-[19.68rem]"
                  width={560}
                  height={328}
                  src="/assets/Images/view-accuracy.png"
                  alt="project-overview"
                />

                <div className="lg:ml-16 tab:ml-8">
                  <h2 className="lg:text-5xl tab:text-[1.68rem] leading-[3.33rem] lg:py-5 tab:py-3 text-head-dark">
                    View Accuracy
                  </h2>
                  <div
                    className=" flex gap-2.5 items-center px-5 py-4 lg:w-[34rem] tab:w-[19.68rem] mt-0 lg:mb-5 tab:mb-3 rounded h-24 lg:h-24 tab:h-[3.4rem] tab:p-2"
                    style={{ border: "1px solid rgba(12, 17, 54, 0.16)" }}
                  >
                    <div
                      className="pr-4 "
                      style={{
                        borderRight: "0.75px solid rgba(14, 29, 41, 0.5)",
                      }}
                    >
                      <svg
                        className="tab:w-[1.25rem] lg:w-[2.56rem]"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_205_34086)">
                          <path
                            d="M38.8591 36.872L36.1251 28.668H33.1251L34.7911 36.668H5.45907L7.12507 28.668H4.12507L1.38907 36.872C0.69507 38.96 1.92507 40.668 4.12507 40.668H36.1251C38.3251 40.668 39.5551 38.96 38.8591 36.872ZM30.1251 10.668C30.1251 8.0158 29.0715 5.47226 27.1961 3.5969C25.3208 1.72154 22.7772 0.667969 20.1251 0.667969C17.4729 0.667969 14.9294 1.72154 13.054 3.5969C11.1786 5.47226 10.1251 8.0158 10.1251 10.668C10.1251 20.218 20.1251 30.668 20.1251 30.668C20.1251 30.668 30.1251 20.218 30.1251 10.668ZM14.7251 10.788C14.7251 10.0789 14.8648 9.37683 15.1362 8.72178C15.4076 8.06674 15.8054 7.47158 16.3068 6.9703C16.8083 6.46902 17.4036 6.07145 18.0587 5.80029C18.7139 5.52914 19.416 5.38971 20.1251 5.38997C21.557 5.38997 22.9302 5.95879 23.9427 6.9713C24.9552 7.98381 25.5241 9.35707 25.5241 10.789C25.5241 12.2209 24.9552 13.5941 23.9427 14.6066C22.9302 15.6191 21.557 16.188 20.1251 16.188C18.6929 16.188 17.3194 15.619 16.3067 14.6063C15.294 13.5936 14.7251 12.2201 14.7251 10.788Z"
                            fill="#0C1136"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_205_34086">
                            <rect
                              width="40"
                              height="40"
                              fill="white"
                              transform="translate(0.125 0.667969)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="pl-2">
                      <p
                        className={`${manrope.className} lg:text-base text-form-head lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                      >
                        Identify and highlight nearby points of interest, such
                        as schools, shopping centers, and recreational areas,
                        contributing to the property's appeal.
                      </p>
                    </div>
                  </div>
                  <div
                    className=" flex gap-2.5 items-center px-5 py-4 lg:w-[34rem] tab:w-[19.68rem] mb-5 rounded h-24 lg:h-24 tab:h-[3.4rem] tab:p-2"
                    style={{ border: "1px solid rgba(12, 17, 54, 0.16)" }}
                  >
                    <div
                      className="pr-4"
                      style={{
                        borderRight: "0.75px solid rgba(14, 29, 41, 0.5)",
                      }}
                    >
                      <svg
                        className="tab:w-[1.25rem] lg:w-[2.56rem]"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.2957 13.3684L30.8768 19.4761C31.0796 19.5954 31.1869 19.7982 31.1869 20.0248V32.2521C31.1869 32.5026 31.0438 32.7293 30.8171 32.8247L25.5683 35.8547L20.2599 38.9204C20.0452 39.0397 19.8424 39.0159 19.6277 38.9085L14.367 35.8428L9.07046 32.7889C8.86767 32.6696 8.76031 32.4668 8.76031 32.2402V20.0248C8.76031 19.7743 8.91538 19.5476 9.13011 19.4522C12.6373 17.4243 16.1563 15.3963 19.6635 13.3684C19.8663 13.2491 20.1048 13.2491 20.2957 13.3684ZM20.5343 2.33401L21.7868 4.77947L24.4947 5.20892C25.0077 5.29242 25.1985 5.91273 24.8407 6.2706L22.8962 8.21504L23.3257 10.9349C23.4092 11.4359 22.8724 11.8176 22.4191 11.591L19.9736 10.3503L17.5282 11.6029C17.0868 11.8295 16.5142 11.4717 16.6335 10.8991L17.051 8.22697L15.1066 6.28253C14.7487 5.92466 14.9396 5.29242 15.4644 5.22085L18.1604 4.7914L19.413 2.34594C19.6515 1.88071 20.3076 1.89264 20.5343 2.33401ZM5.61103 8.01225L6.86359 10.4577L9.57148 10.8872C10.0844 10.9707 10.2753 11.591 9.91742 11.9488L7.97299 13.8933L8.40243 16.6131C8.47401 17.1141 7.94913 17.4959 7.49582 17.2692L5.05037 16.0166L2.60491 17.2692C2.16354 17.4959 1.59094 17.138 1.71023 16.5654L2.12775 13.8933L0.183311 11.9488C-0.174561 11.591 0.016304 10.9587 0.541183 10.8872L3.23715 10.4577L4.4897 8.01225C4.72828 7.54701 5.38438 7.55894 5.61103 8.01225ZM35.4575 8.01225L36.7101 10.4577L39.418 10.8872C39.9309 10.9707 40.1218 11.591 39.7639 11.9488L37.8195 13.8933L38.2489 16.6131C38.3324 17.1141 37.7956 17.4959 37.3423 17.2692L34.8969 16.0166L32.4514 17.2692C32.01 17.4959 31.4375 17.138 31.5567 16.5654L31.9743 13.8933L30.0298 11.9488C29.6719 11.591 29.8628 10.9587 30.3877 10.8872L33.0837 10.4577L34.3362 8.01225C34.5748 7.54701 35.2309 7.55894 35.4575 8.01225ZM10.9553 32.431C12.0289 30.0929 14.2954 28.4706 16.884 28.2678C14.4147 26.3949 14.1642 22.7685 16.3591 20.5735C18.3513 18.5814 21.596 18.5814 23.6001 20.5735C25.795 22.7685 25.5445 26.3949 23.0752 28.2678C25.6638 28.4706 27.9303 30.0929 29.0039 32.431L29.9344 31.8942V20.3827L19.9736 14.6329C16.6573 16.5535 13.3291 18.4621 10.0129 20.3827V31.8942L10.9553 32.431ZM19.9736 20.323C17.8383 20.323 16.1205 22.0528 16.1205 24.1881C16.1205 26.3234 17.8503 28.0411 19.9736 28.0411C22.1089 28.0411 23.8267 26.3114 23.8267 24.1881C23.8386 22.0528 22.1089 20.323 19.9736 20.323Z"
                          fill="#0C1136"
                        />
                      </svg>
                    </div>

                    <div className="pl-2">
                      <p
                        className={`${manrope.className} lg:text-base text-form-head lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                      >
                        Transparency in showcasing views contributes to the
                        overall satisfaction of the clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex lg:justify-normal tab:justify-center lg:mt-20 tab:mt-10">
                  <div className="lg:mr-16 tab:mr-8">
                    <h2 className="lg:text-5xl tab:text-[1.68rem] leading-[3.33rem] lg:py-5 tab:py-3 text-head-dark">
                      Immersive Experience
                    </h2>
                    <div
                      className=" flex gap-2.5 items-center px-5 py-4 lg:w-[34rem] tab:w-[19.68rem] mt-0 lg:mb-5 tab:mb-3 rounded h-24 lg:h-24 tab:h-[3.4rem] tab:p-2"
                      style={{ border: "1px solid rgba(12, 17, 54, 0.16)" }}
                    >
                      <div
                        className="pr-4"
                        style={{
                          borderRight: "0.75px solid rgba(14, 29, 41, 0.5)",
                        }}
                      >
                        <svg
                          className="tab:w-[1.25rem] lg:w-[2.56rem]"
                          width="36"
                          height="40"
                          viewBox="0 0 36 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.438 24.9459L20.3113 23.2503L6.33668 7.82422L4.46453 9.51984L11.4415 17.2225L0 38.7767H13.5747V35.0538H5.67682L13.0639 19.0134L18.438 24.9459Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M19.9881 6.82938C18.1411 6.45967 16.9401 4.64251 17.313 2.77595C17.6886 0.905867 19.4961 -0.303221 21.3427 0.0664841C23.1937 0.437365 24.3887 2.24669 24.0143 4.11756C23.6414 5.98333 21.8383 7.19948 19.9881 6.82938Z"
                            fill="#0C1136"
                          />
                          <path
                            d="M34.8636 14.7423L27.4056 7.33483C26.9245 6.82203 26.3423 6.56445 25.6558 6.56445C24.9359 6.56445 23.7374 7.09059 23.3841 8.1899L21.7417 14.0636L20.8039 11.0052C20.5075 10.1208 19.5524 9.64167 18.664 9.93767C17.7771 10.2337 17.2999 11.1914 17.5952 12.0771L20.0644 19.4602C20.2954 20.1498 20.9411 20.6148 21.6684 20.6148C21.6708 20.6148 21.6731 20.6148 21.6751 20.6148C22.4043 20.6121 23.0505 20.1412 23.2759 19.4477L24.7854 14.8109L29.7204 19.7844V37.2225C29.7204 38.0113 29.9956 38.6708 30.5438 39.2047C31.0919 39.7348 31.7604 40.0002 32.5492 40.0002C33.3043 40.0002 33.956 39.7344 34.5041 39.2047C35.0518 38.6712 35.3263 38.0113 35.3263 37.2225V15.8749C35.3259 15.4284 35.1726 15.052 34.8636 14.7423Z"
                            fill="#0C1136"
                          />
                        </svg>
                      </div>

                      <div className="pl-2">
                        <p
                          className={`${manrope.className} lg:text-base text-form-head lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                        >
                          Enhance the overall immersive experience by allowing
                          clients to virtually stand in different rooms and
                          enjoy the view as if they were physically present.
                        </p>
                      </div>
                    </div>
                    <div
                      className=" flex gap-2.5 items-center px-5 py-4 lg:w-[34rem] tab:w-[19.68rem] mt-0 lg:mb-5 tab:mb-3 rounded h-24 lg:h-24 tab:h-[3.4rem] tab:p-2"
                      style={{ border: "1px solid rgba(12, 17, 54, 0.16)" }}
                    >
                      <div
                        className="pr-4"
                        style={{
                          borderRight: "0.75px solid rgba(14, 29, 41, 0.5)",
                        }}
                      >
                        <svg
                          className="tab:w-[1.25rem] lg:w-[2.56rem]"
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.1624 0C16.9811 0 10.3255 5.78768 10.3255 12.9014C10.3561 14.8482 10.8515 16.7596 11.7704 18.4762C12.6894 20.1928 14.0052 21.6649 15.6084 22.7699C15.5276 23.0204 15.4864 23.2819 15.4862 23.5451C15.5321 24.3566 15.8968 25.1171 16.501 25.6608C17.1052 26.2045 17.8998 26.4874 18.7116 26.4479C19.1855 26.4522 19.6548 26.356 20.0888 26.1658C20.5228 25.9755 20.9116 25.6955 21.2296 25.3442C22.5181 25.6501 23.8381 25.804 25.1624 25.8028C33.3438 25.8028 39.9994 20.0151 39.9994 12.9014C39.9994 5.78768 33.3438 0 25.1624 0ZM25.1624 24.5127C23.8038 24.5142 22.4508 24.3387 21.1376 23.9904C21.0037 23.955 20.862 23.9634 20.7333 24.0145C20.6046 24.0656 20.4957 24.1566 20.4226 24.2742C20.235 24.5538 19.9798 24.7814 19.6806 24.9358C19.3815 25.0903 19.0482 25.1666 18.7116 25.1577C18.601 25.1667 18.4907 25.1655 18.3818 25.1543L21.888 17.9422L25.3548 21.7691L26.5632 20.6753L17.5484 10.7244L16.3407 11.8182L20.8414 16.7869L17.4407 24.7684C17.4319 24.7613 17.4231 24.7541 17.4144 24.7469C17.0525 24.4453 16.8234 24.0138 16.7764 23.5451C16.7802 23.305 16.8469 23.0701 16.9698 22.8638C17.05 22.7228 17.0741 22.5567 17.0374 22.3986C17.0006 22.2406 16.9056 22.1022 16.7713 22.0111C13.4949 19.7899 11.6157 16.4695 11.6157 12.9014C11.6157 6.4989 17.693 1.29014 25.1624 1.29014C32.6319 1.29014 38.7092 6.4989 38.7092 12.9014C38.7092 15.4695 37.7315 17.8455 36.0784 19.7703C36.1962 19.5317 36.2552 19.2656 36.2552 18.9719V15.9143C36.255 15.6263 36.1561 15.3835 35.9568 15.1837L31.1458 10.4054C30.8354 10.0746 30.4598 9.90842 30.017 9.90842C29.5526 9.90842 28.7794 10.2478 28.5516 10.9569L27.4921 14.7459L26.8871 12.773C26.6959 12.2025 26.0798 11.8934 25.5067 12.0844C24.9345 12.2753 24.6267 12.8932 24.8172 13.4645L26.4101 18.2271C26.5591 18.6719 26.9756 18.9719 27.4448 18.9719H27.4491C27.9195 18.9701 28.3363 18.6664 28.4818 18.219L29.4555 15.2279L32.639 18.4362V20.9743C32.639 21.4831 32.8165 21.9085 33.1701 22.2529L33.2226 22.2284C30.9687 23.6631 28.1791 24.5127 25.1624 24.5127ZM24.6354 7.46516C24.3948 8.66923 25.1695 9.84142 26.361 10.0799C27.5546 10.3186 28.7177 9.53415 28.9583 8.33059C29.1998 7.12375 28.4289 5.95661 27.2349 5.71736C26.0436 5.47888 24.8777 6.25883 24.6354 7.46516ZM11.2133 39.9478C11.135 39.9802 11.0511 39.9969 10.9664 39.9969H0.645084C0.560364 39.9969 0.47647 39.9802 0.398195 39.9478C0.31992 39.9154 0.248797 39.8679 0.188892 39.808C0.128986 39.7481 0.0814699 39.677 0.0490592 39.5987C0.0166485 39.5204 -2.19921e-05 39.4365 2.1774e-08 39.3518V30.9659C0.00251941 30.1598 0.307395 29.384 0.854353 28.7919C1.40131 28.1997 2.15054 27.8344 2.9539 27.768C2.44591 27.2144 2.11004 26.5249 1.98727 25.7837C1.8645 25.0424 1.96013 24.2815 2.26251 23.5936C2.56488 22.9058 3.06092 22.3209 3.6901 21.9102C4.31928 21.4995 5.05439 21.2808 5.80575 21.2808C6.55711 21.2808 7.29223 21.4995 7.92141 21.9102C8.55059 22.3209 9.04663 22.9058 9.349 23.5936C9.65137 24.2815 9.74701 25.0424 9.62424 25.7837C9.50146 26.5249 9.16559 27.2144 8.6576 27.768C9.46097 27.8344 10.2102 28.1997 10.7572 28.7919C11.3041 29.384 11.609 30.1598 11.6115 30.9659V39.3518C11.6115 39.4365 11.5949 39.5204 11.5624 39.5987C11.53 39.677 11.4825 39.7481 11.4226 39.808C11.3627 39.8679 11.2916 39.9154 11.2133 39.9478ZM7.23931 23.0148C6.81498 22.7313 6.31609 22.58 5.80575 22.58C5.12163 22.5807 4.46573 22.8528 3.98199 23.3365C3.49824 23.8203 3.22615 24.4762 3.22542 25.1603C3.22542 25.6706 3.37675 26.1695 3.66028 26.5938C3.94381 27.0181 4.34681 27.3488 4.8183 27.5441C5.2898 27.7394 5.80862 27.7905 6.30915 27.691C6.80969 27.5914 7.26946 27.3457 7.63033 26.9848C7.99119 26.6239 8.23695 26.1642 8.33651 25.6637C8.43607 25.1631 8.38497 24.6443 8.18967 24.1728C7.99437 23.7014 7.66364 23.2984 7.23931 23.0148ZM1.85761 29.5981C1.4948 29.9609 1.29073 30.4528 1.29017 30.9659V38.7067H10.3213V30.9659C10.3208 30.4528 10.1167 29.9609 9.7539 29.5981C9.39109 29.2353 8.89918 29.0313 8.38609 29.0307H3.22542C2.71233 29.0313 2.22042 29.2353 1.85761 29.5981ZM13.22 24.5121C12.8372 24.5121 12.4631 24.6256 12.1448 24.8383C11.8266 25.0509 11.5785 25.3532 11.432 25.7068C11.2856 26.0604 11.2472 26.4495 11.3219 26.8249C11.3966 27.2003 11.5809 27.5451 11.8515 27.8158C12.1222 28.0864 12.467 28.2707 12.8424 28.3454C13.2178 28.4201 13.6069 28.3817 13.9606 28.2353C14.3142 28.0888 14.6164 27.8407 14.8291 27.5225C15.0417 27.2043 15.1552 26.8301 15.1552 26.4474C15.1547 25.9343 14.9506 25.4424 14.5878 25.0796C14.225 24.7168 13.7331 24.5127 13.22 24.5121ZM13.22 27.0924C13.0924 27.0924 12.9677 27.0546 12.8616 26.9837C12.7555 26.9128 12.6728 26.8121 12.624 26.6942C12.5752 26.5763 12.5624 26.4466 12.5873 26.3215C12.6122 26.1964 12.6736 26.0814 12.7638 25.9912C12.854 25.901 12.969 25.8396 13.0941 25.8147C13.2193 25.7898 13.349 25.8026 13.4668 25.8514C13.5847 25.9002 13.6855 25.9829 13.7563 26.089C13.8272 26.1951 13.8651 26.3198 13.8651 26.4474C13.8649 26.6184 13.7969 26.7824 13.6759 26.9033C13.555 27.0242 13.391 27.0923 13.22 27.0924ZM18.6656 32.3461C19.1274 32.2281 19.6107 32.2223 20.0752 32.3291C20.6143 32.4397 21.0968 32.7374 21.4374 33.1696C21.778 33.6018 21.9547 34.1405 21.9361 34.6905C21.9361 37.0137 19.0188 39.103 17.7645 39.8936C17.6615 39.9584 17.5423 39.9928 17.4206 39.9928C17.2988 39.9928 17.1796 39.9584 17.0766 39.8936C15.8223 39.103 12.905 37.0137 12.905 34.6905C12.8864 34.1404 13.0631 33.6015 13.4038 33.1693C13.7446 32.7371 14.2273 32.4394 14.7665 32.3291C15.2309 32.2222 15.7142 32.228 16.1759 32.346C16.6376 32.464 17.0643 32.6907 17.4206 33.0072C17.7769 32.6907 18.2038 32.464 18.6656 32.3461ZM14.1951 34.6905C14.1951 35.9702 15.862 37.5316 17.4206 38.5782C18.9791 37.5316 20.646 35.9702 20.646 34.6905C20.6619 34.4318 20.5824 34.1763 20.4223 33.9724C20.2623 33.7685 20.033 33.6305 19.7779 33.5846C19.4377 33.5011 19.0795 33.5311 18.758 33.67C18.4365 33.809 18.1692 34.0494 17.997 34.3544C17.9433 34.4612 17.8609 34.551 17.7591 34.6137C17.6573 34.6765 17.5401 34.7097 17.4206 34.7097C17.301 34.7097 17.1838 34.6765 17.082 34.6137C16.9802 34.551 16.8979 34.4612 16.8441 34.3544C16.7062 34.1019 16.501 33.8925 16.2514 33.7493C16.0018 33.6061 15.7175 33.5347 15.4299 33.543C15.3067 33.5426 15.1838 33.5566 15.0639 33.5846C14.8087 33.6304 14.5792 33.7683 14.419 33.9722C14.2588 34.1761 14.1792 34.4317 14.1951 34.6905Z"
                            fill="#0C1136"
                          />
                        </svg>
                      </div>

                      <div className="pl-2">
                        <p
                          className={`${manrope.className} lg:text-base text-form-head lg:leading-6 tab:text-[0.56rem] tab:leading-3`}
                        >
                          Creates a memorable and engaging experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Image
                    className="lg:w-[35rem] tab:w-[19.68rem]"
                    width={560}
                    height={328}
                    src="/assets/Images/immersive-exp.png"
                    alt="project-overview"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-prime-green lg:py-40 tab:py-20">
          <div className="lg:max-w-[71rem] tab:px-20 lg:px-0 m-auto">
            <div className="mb-12">
              <h2 className="lg:text-7xl tab:text-[2rem] lg:leading-[3.33rem] tab:leading-[1.87rem] bg-white px-6 inline">
                Floor Plan / Dollhouse
              </h2>
              <p className="text-amenities-para lg:text-7xl tab:text-[2rem] font-semibold lg:py-5 tab:py-1">
                Seamless Interior Exploration
              </p>
            </div>
            <Image
              className="mx-auto my-0 lg:w-[70.43rem] tab:w-[39.56rem]"
              width={1127}
              height={873}
              src="/assets/Images/floor-plan.png"
              alt="project-overview"
            />
            <div className="flex gap-6 mt-10">
              <div className="bg-white flex gap-2.5 items-center lg:px-5 lg:py-4 tab:p-2 w-[33.93rem]">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.09368 33.7661C3.80947 34.0909 3.89067 34.5781 4.21548 34.8623L10.1839 39.4096C10.5087 39.6533 11.0365 39.6127 11.2801 39.2472L13.7162 36.0804L6.52975 30.5586L4.09368 33.7661Z"
                    fill="#CDEA67"
                  />
                  <path
                    d="M35.6409 23.2081L30.1191 24.8727C30.1191 24.9945 30.1191 25.1569 30.1191 25.2787C30.0379 26.8216 28.9011 28.1208 27.3989 28.4456L27.0335 28.5268C25.044 28.9328 22.9733 29.1764 20.9433 29.217L19.2786 29.2576C18.7508 29.2576 18.3448 28.8516 18.3042 28.3644C18.3042 27.8366 18.7102 27.4306 19.1974 27.39L20.8621 27.3494C22.8109 27.3088 24.7598 27.0652 26.668 26.6998L27.0335 26.6186C27.7237 26.4968 28.2515 25.8877 28.2921 25.1569C28.3327 24.7509 28.1703 24.3449 27.8861 24.0201C27.6019 23.6953 27.2365 23.5329 26.7899 23.4923L17.9794 23.1269C17.005 23.0863 16.0305 23.3705 15.2185 23.9389L7.8291 29.2576L15.3809 35.023L22.7703 35.7944C24.0696 35.9162 25.3688 35.5508 26.3838 34.7794L37.265 26.375C37.671 26.0501 37.9146 25.6035 37.9552 25.0757C37.9958 24.5479 37.8334 24.0607 37.468 23.6953C37.0213 23.2081 36.2905 23.0051 35.6409 23.2081Z"
                    fill="#CDEA67"
                  />
                  <path
                    d="M28.0873 20.8134C33.5685 20.8134 37.994 16.3878 37.994 10.9067C37.9534 5.42553 33.5279 1 28.0873 1C22.6468 1 18.1807 5.42553 18.1807 10.9067C18.1807 16.3878 22.6062 20.8134 28.0873 20.8134ZM22.7686 11.0691L23.9866 9.85106C24.1896 9.64805 24.555 9.64805 24.7987 9.85106L26.7475 11.7999L31.376 7.17138C31.5791 6.96837 31.9445 6.96837 32.1881 7.17138L33.4061 8.38941C33.6091 8.59242 33.6091 8.95783 33.4061 9.20144L27.1535 15.454C26.9505 15.657 26.5851 15.657 26.3415 15.454L22.7686 11.8811C22.525 11.6781 22.525 11.3127 22.7686 11.0691Z"
                    fill="#CDEA67"
                  />
                </svg>

                <p
                  className={`${manrope.className} text-augment-para pl-4 lg:text-base tab:text-[0.56rem] font-bold opacity-80 capitalize`}
                  style={{ borderLeft: "1px solid #0E1D29" }}
                >
                  Clients seamlessly transition from 2D floor plans to 3D
                  dollhouse views, gaining a deeper understanding of the
                  interior layout.
                </p>
              </div>
              <div className="bg-white flex gap-2.5 items-center lg:px-5 lg:py-4 tab:p-2 w-[33.93rem]">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.4002 9.19922H31.4002C31.0819 9.19922 30.7767 9.32565 30.5517 9.55069C30.3266 9.77573 30.2002 10.081 30.2002 10.3992V13.3992C30.2002 13.7175 30.3266 14.0227 30.5517 14.2477C30.7767 14.4728 31.0819 14.5992 31.4002 14.5992H34.4002C34.7185 14.5992 35.0237 14.4728 35.2487 14.2477C35.4738 14.0227 35.6002 13.7175 35.6002 13.3992V10.3992C35.6002 10.081 35.4738 9.77573 35.2487 9.55069C35.0237 9.32565 34.7185 9.19922 34.4002 9.19922ZM31.4002 13.3992V10.3992H34.4002V13.3992H31.4002Z"
                    fill="#CDEA67"
                  />
                  <path
                    d="M8.59941 23.5996H4.99941C4.84028 23.5996 4.68767 23.6628 4.57515 23.7753C4.46263 23.8879 4.39941 24.0405 4.39941 24.1996C4.39941 24.3587 4.46263 24.5114 4.57515 24.6239C4.68767 24.7364 4.84028 24.7996 4.99941 24.7996H8.59941C8.75854 24.7996 8.91116 24.7364 9.02368 24.6239C9.1362 24.5114 9.19941 24.3587 9.19941 24.1996C9.19941 24.0405 9.1362 23.8879 9.02368 23.7753C8.91116 23.6628 8.75854 23.5996 8.59941 23.5996Z"
                    fill="#CDEA67"
                  />
                  <path
                    d="M4.99941 8.00078H9.19941C9.35854 8.00078 9.51116 7.93757 9.62368 7.82505C9.7362 7.71252 9.79941 7.55991 9.79941 7.40078C9.79941 7.24165 9.7362 7.08904 9.62368 6.97652C9.51116 6.864 9.35854 6.80078 9.19941 6.80078H4.99941C4.84028 6.80078 4.68767 6.864 4.57515 6.97652C4.46263 7.08904 4.39941 7.24165 4.39941 7.40078C4.39941 7.55991 4.46263 7.71252 4.57515 7.82505C4.68767 7.93757 4.84028 8.00078 4.99941 8.00078Z"
                    fill="#CDEA67"
                  />
                  <path
                    d="M35.0002 6.80078H30.8002C30.6411 6.80078 30.4885 6.864 30.3759 6.97652C30.2634 7.08904 30.2002 7.24165 30.2002 7.40078C30.2002 7.55991 30.2634 7.71252 30.3759 7.82505C30.4885 7.93757 30.6411 8.00078 30.8002 8.00078H35.0002C35.1593 8.00078 35.3119 7.93757 35.4245 7.82505C35.537 7.71252 35.6002 7.55991 35.6002 7.40078C35.6002 7.24165 35.537 7.08904 35.4245 6.97652C35.3119 6.864 35.1593 6.80078 35.0002 6.80078Z"
                    fill="#CDEA67"
                  />
                  <path
                    d="M8.59941 9.19922H5.59941C5.28115 9.19922 4.97593 9.32565 4.75089 9.55069C4.52584 9.77573 4.39941 10.081 4.39941 10.3992V13.3992C4.39941 13.7175 4.52584 14.0227 4.75089 14.2477C4.97593 14.4728 5.28115 14.5992 5.59941 14.5992H8.59941C8.91767 14.5992 9.2229 14.4728 9.44794 14.2477C9.67299 14.0227 9.79941 13.7175 9.79941 13.3992V10.3992C9.79941 10.081 9.67299 9.77573 9.44794 9.55069C9.2229 9.32565 8.91767 9.19922 8.59941 9.19922ZM5.59941 13.3992V10.3992H8.59941V13.3992H5.59941Z"
                    fill="#CDEA67"
                  />
                  <path
                    d="M35 2H5C4.20464 2.00095 3.44213 2.31733 2.87973 2.87973C2.31733 3.44213 2.00095 4.20464 2 5V24.2C2.00095 24.9954 2.31733 25.7579 2.87973 26.3203C3.44213 26.8827 4.20464 27.199 5 27.2H15.6548L19.2242 30.7694C19.28 30.8252 19.3242 30.8914 19.3544 30.9643C19.3846 31.0372 19.4001 31.1153 19.4 31.1942V32.1104C19.0503 32.2341 18.7473 32.4627 18.5325 32.7652C18.3177 33.0676 18.2015 33.429 18.2 33.8V36.2C18.2 36.6774 18.3896 37.1352 18.7272 37.4728C19.0648 37.8104 19.5226 38 20 38H27.2C27.6774 38 28.1352 37.8104 28.4728 37.4728C28.8104 37.1352 29 36.6774 29 36.2V33.8C28.9985 33.429 28.8824 33.0676 28.6675 32.7652C28.4527 32.4627 28.1497 32.2341 27.8 32.1104V31.163C27.7999 31.0447 27.835 30.9289 27.9008 30.8306L28.7 29.636C28.8962 29.3409 29.0006 28.9943 29 28.64V27.2H35C35.7954 27.199 36.5579 26.8827 37.1203 26.3203C37.6827 25.7579 37.9991 24.9954 38 24.2V5C37.9991 4.20464 37.6827 3.44213 37.1203 2.87973C36.5579 2.31733 35.7954 2.00095 35 2ZM27.8 36.2C27.8 36.3591 27.7368 36.5117 27.6243 36.6243C27.5117 36.7368 27.3591 36.8 27.2 36.8H20C19.8409 36.8 19.6883 36.7368 19.5757 36.6243C19.4632 36.5117 19.4 36.3591 19.4 36.2V33.8C19.4 33.6409 19.4632 33.4883 19.5757 33.3757C19.6883 33.2632 19.8409 33.2 20 33.2H27.2C27.3591 33.2 27.5117 33.2632 27.6243 33.3757C27.7368 33.4883 27.8 33.6409 27.8 33.8V36.2ZM27.8 28.64C27.8001 28.7583 27.765 28.8741 27.6992 28.9724L26.9 30.164C26.7033 30.4599 26.5989 30.8076 26.6 31.163V32H20.6V31.1942C20.6007 30.9576 20.5544 30.7233 20.4639 30.5047C20.3734 30.2862 20.2404 30.0878 20.0726 29.921C20.0726 29.921 16.583 26.354 15.3692 25.217C14.8256 24.7082 15.7112 23.8202 16.2248 24.377C16.7384 24.9338 18.3758 26.5286 18.3758 26.5286C18.4604 26.6108 18.5673 26.6665 18.6832 26.6886C18.7991 26.7107 18.919 26.6984 19.028 26.6531C19.137 26.6079 19.2303 26.5317 19.2964 26.4339C19.3625 26.3362 19.3985 26.2212 19.4 26.1032V17.6C19.4 17.4409 19.4632 17.2883 19.5757 17.1757C19.6883 17.0632 19.8409 17 20 17C20.1591 17 20.3117 17.0632 20.4243 17.1757C20.5368 17.2883 20.6 17.4409 20.6 17.6V24.2C20.6 24.3591 20.6632 24.5117 20.7757 24.6243C20.8883 24.7368 21.0409 24.8 21.2 24.8C21.3591 24.8 21.5117 24.7368 21.6243 24.6243C21.7368 24.5117 21.8 24.3591 21.8 24.2V20.6C21.8 20.4409 21.8632 20.2883 21.9757 20.1757C22.0883 20.0632 22.2409 20 22.4 20C22.5591 20 22.7117 20.0632 22.8243 20.1757C22.9368 20.2883 23 20.4409 23 20.6V24.2C23 24.3591 23.0632 24.5117 23.1757 24.6243C23.2883 24.7368 23.4409 24.8 23.6 24.8C23.7591 24.8 23.9117 24.7368 24.0243 24.6243C24.1368 24.5117 24.2 24.3591 24.2 24.2V21.2C24.2 21.0409 24.2632 20.8883 24.3757 20.7757C24.4883 20.6632 24.6409 20.6 24.8 20.6C24.9591 20.6 25.1117 20.6632 25.2243 20.7757C25.3368 20.8883 25.4 21.0409 25.4 21.2V24.2C25.4 24.3591 25.4632 24.5117 25.5757 24.6243C25.6883 24.7368 25.8409 24.8 26 24.8C26.1591 24.8 26.3117 24.7368 26.4243 24.6243C26.5368 24.5117 26.6 24.3591 26.6 24.2V22.4C26.6 22.2409 26.6632 22.0883 26.7757 21.9757C26.8883 21.8632 27.0409 21.8 27.2 21.8C27.3591 21.8 27.5117 21.8632 27.6243 21.9757C27.7368 22.0883 27.8 22.2409 27.8 22.4V28.64ZM20 15.8C19.5226 15.8 19.0648 15.9896 18.7272 16.3272C18.3896 16.6648 18.2 17.1226 18.2 17.6V17.7146C17.5137 17.3184 16.9773 16.7067 16.674 15.9746C16.3708 15.2424 16.3176 14.4306 16.5227 13.6652C16.7278 12.8997 17.1797 12.2233 17.8085 11.7408C18.4372 11.2584 19.2075 10.9969 20 10.9969C20.7925 10.9969 21.5628 11.2584 22.1915 11.7408C22.8203 12.2233 23.2722 12.8997 23.4773 13.6652C23.6824 14.4306 23.6292 15.2424 23.326 15.9746C23.0227 16.7067 22.4863 17.3184 21.8 17.7146V17.6C21.8 17.1226 21.6104 16.6648 21.2728 16.3272C20.9352 15.9896 20.4774 15.8 20 15.8ZM24.8 14.6C24.8033 13.7283 24.5691 12.8722 24.1227 12.1235C23.6763 11.3748 23.0344 10.7619 22.2659 10.3504C21.4975 9.93889 20.6315 9.74443 19.7609 9.78786C18.8903 9.83128 18.048 10.111 17.3243 10.5969C16.6006 11.0828 16.0229 11.7566 15.6532 12.546C15.2835 13.3354 15.1357 14.2106 15.2257 15.0776C15.3157 15.9446 15.6401 16.7707 16.1641 17.4674C16.6881 18.164 17.3919 18.7047 18.2 19.0316V21.56C16.6706 21.168 15.3121 20.2849 14.333 19.0463C13.3539 17.8076 12.8084 16.2819 12.7802 14.7033C12.752 13.1247 13.2426 11.5804 14.1768 10.3076C15.1109 9.03473 16.437 8.10365 17.9515 7.65724C19.4659 7.21083 21.085 7.27378 22.5602 7.83642C24.0355 8.39905 25.2853 9.43028 26.1178 10.7718C26.9503 12.1133 27.3196 13.691 27.1689 15.2627C27.0182 16.8343 26.3559 18.3131 25.2836 19.472C25.0566 19.4062 24.8187 19.3864 24.584 19.4139C24.3493 19.4414 24.1224 19.5157 23.9168 19.6322C23.7438 19.3585 23.4992 19.1373 23.2096 18.9925C22.9199 18.8477 22.5962 18.7849 22.2734 18.8108C23.0329 18.3994 23.6681 17.7916 24.1125 17.0509C24.5569 16.3102 24.7944 15.4638 24.8 14.6ZM36.8 24.2C36.8 24.6774 36.6104 25.1352 36.2728 25.4728C35.9352 25.8104 35.4774 26 35 26H29V22.4C28.9998 22.1067 28.9279 21.8179 28.7907 21.5588C28.6534 21.2996 28.4549 21.0779 28.2124 20.9129C27.9699 20.748 27.6908 20.6448 27.3993 20.6123C27.1078 20.5798 26.8129 20.6191 26.54 20.7266C26.4842 20.527 26.3945 20.3384 26.2748 20.1692C27.5858 18.7048 28.3382 16.8249 28.3995 14.8603C28.4608 12.8958 27.8272 10.9726 26.6102 9.4292L30.2192 5.6H35C35.1591 5.6 35.3117 5.53679 35.4243 5.42426C35.5368 5.31174 35.6 5.15913 35.6 5C35.6 4.84087 35.5368 4.68826 35.4243 4.57574C35.3117 4.46321 35.1591 4.4 35 4.4H29.96C29.8783 4.40005 29.7975 4.41679 29.7225 4.44918C29.6475 4.48158 29.5799 4.52895 29.5238 4.5884L25.7996 8.54C24.6759 7.45388 23.2693 6.70593 21.7405 6.38167C20.2118 6.05741 18.6226 6.16995 17.1548 6.7064L15.0242 4.5758C14.9117 4.46327 14.7591 4.40003 14.6 4.4H5C4.84087 4.4 4.68826 4.46321 4.57574 4.57574C4.46321 4.68826 4.4 4.84087 4.4 5C4.4 5.15913 4.46321 5.31174 4.57574 5.42426C4.68826 5.53679 4.84087 5.6 5 5.6H14.3516L15.98 7.2278C14.4773 8.045 13.2604 9.3022 12.4926 10.8307C11.7247 12.3593 11.4427 14.0861 11.6843 15.7795C11.9259 17.4729 12.6795 19.052 13.8442 20.3048C15.0088 21.5577 16.5287 22.4244 18.2 22.7888V24.6548L17.078 23.5328C15.5 21.8804 12.9122 24.35 14.4686 26H5C4.52261 26 4.06477 25.8104 3.72721 25.4728C3.38964 25.1352 3.2 24.6774 3.2 24.2V5C3.2 4.52261 3.38964 4.06477 3.72721 3.72721C4.06477 3.38964 4.52261 3.2 5 3.2H35C35.4774 3.2 35.9352 3.38964 36.2728 3.72721C36.6104 4.06477 36.8 4.52261 36.8 5V24.2Z"
                    fill="#CDEA67"
                  />
                  <path
                    d="M11.0004 24.7996C11.3318 24.7996 11.6004 24.531 11.6004 24.1996C11.6004 23.8682 11.3318 23.5996 11.0004 23.5996C10.669 23.5996 10.4004 23.8682 10.4004 24.1996C10.4004 24.531 10.669 24.7996 11.0004 24.7996Z"
                    fill="#CDEA67"
                  />
                </svg>

                <p
                  className={`${manrope.className} text-augment-para pl-4 lg:text-base tab:text-[0.56rem] font-bold opacity-80 capitalize`}
                  style={{ borderLeft: "1px solid #0E1D29" }}
                >
                  Facilitates a more intuitive exploration of the property's
                  design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[72.5rem] m-auto lg:py-20 tab:py-10 px-20">
          <div className="flex lg:justify-between">
            <Image
              className="mx-auto my-0 lg:w-[65.31rem] tab:w-[23.68rem]"
              width={675}
              height={396}
              src="/assets/Images/personalized-interior.png"
              alt="project-overview"
            />
            <div className="m-auto lg:pl-12 tab:pl-10">
              <h2 className="bg-prime-green px-4 lg:text-7xl tab:text-[2rem] lg:leading-[3.33rem] inline tab:leading-[1.87rem]">
                Interior
              </h2>
              <p className="lg:text-7xl tab:text-[2rem] font-semibold lg:leading-[3rem] tab:leading-[2.2rem] lg:pt-4 lg:pb-6 tab:py-2">
                Personalized Design
              </p>
            </div>
          </div>

          <div></div>
          <div className="flex lg:gap-6 tab:gap-3 px-4 pt-10 ">
            <div>
              <div
                className="rounded lg:w-[33.6rem] tab:w-[19rem] lg:pt-4 lg:px-4 tab:pt-3 tab:px-2 lg:pb-[3.2rem] tab:pb-[2.1rem]"
                style={{ border: "1px solid rgba(18, 17, 18, 0.25)" }}
              >
                <h2 className="font-semibold lg:text-2xl text-head-dark lg:leading-8 pl-3 pb-2 tab:text-sm tab:leading-[1.12rem]">
                   Design Flexibility
                </h2>
                <ul
                  className={`${manrope.className} lg:text-base lg:leading-6 text-head-dark list-disc pl-9 tab:text-[0.56rem] tab:leading-3`}
                >
                  <li className="pb-2 ">
                    Clients can experiment with various interior design options,
                    including color schemes, flooring, and furnishings.
                  </li>
                  <li> Fosters a sense of ownership and personalization.</li>
                </ul>
              </div>
            </div>
            <div className="lg:mb-6 tab:mb-3">
              <div
                className="rounded lg:w-[33.6rem] tab:w-[19rem] lg:pt-4 tab:pt-3 lg:px-4 tab:px-2 lg:pb-7 tab:pb-[0.6rem]"
                style={{ border: "1px solid rgba(18, 17, 18, 0.25)" }}
              >
                <h2 className="font-semibold lg:text-2xl text-head-dark lg:leading-8 pl-3 pb-2 tab:text-sm tab:leading-[1.12rem]">
                   Engagement Time Increase
                </h2>
                <ul
                  className={`${manrope.className} lg:text-base lg:leading-6 text-head-dark list-disc pl-9 tab:text-[0.56rem] tab:leading-3`}
                >
                  <li className="pb-2">
                    The freedom to customize interiors increases the time
                    clients spend exploring the property, deepening their
                    connection.
                  </li>
                  <li>
                    {" "}
                    Longer engagement translates to a higher likelihood of
                    conversion.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="rounded p-4 mx-4 lg:w-[68.75rem] tab:w-[38.79rem]"
            style={{ border: "1px solid rgba(18, 17, 18, 0.25)" }}
          >
            <h2 className="font-semibold lg:text-2xl text-head-dark lg:leading-8 pl-3 pb-2 tab:text-sm tab:leading-[1.12rem]">
               Virtual Walkthroughs
            </h2>
            <ul
              className={`${manrope.className} lg:text-base lg:leading-6 text-head-dark list-disc pl-9 tab:text-[0.56rem] tab:leading-3`}
            >
              <li className="pb-2 ">
                Provide virtual walkthroughs of customized interiors, allowing
                clients to experience their envisioned design in a realistic
                manner.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:mt-36 lg:mb-24 tab:mt-16 tab:mb-12">
          <div className="flex justify-center items-center flex-col mb-20">
            <h2 className="bg-prime-green text-5xl px-6 py-4">
              One Stop Solution
            </h2>
          </div>

          <Image
            className="mx-auto mt-0 lg:w-[75rem] tab:w-[42.18rem]"
            width={1200}
            height={478}
            src="/assets/Images/one-stop-solution.png"
            alt="project-overview"
          />
        </div>
        <div className="lgdesktop:max-w-[82rem] m-auto pt-40 pb-20 tab:pb-0 tab:pt-20 tab:px-[1.82rem] lg:px-14 lgdesktop:px-0">
          <RealEstate />
          <FooterSection />
        </div>
      </div>
    </>
  );
};
export default SalesToolSection;
