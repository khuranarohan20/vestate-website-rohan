import Image from "next/image";

const RealEstate = () => {
  return (
    <>
      <div className="flex justify-between relative ">
        <Image
          src="/assets/Images/real-estate-bg.png"
          width={1312}
          height={494}
          alt=""
          className="absolute lg:h-full tab:h-[21.06rem] z-10"
        />
        <div className="mx-0 my-auto tab:py-28 lg:py-10 pl-14 pr-6 relative z-20 mobile:pt-20">
          <h1 className="bg-white text-center head-3 leading-[2.63rem] inline px-4 tab:py-2 lg:py-0  mobile:leading-[1.12rem]">
            Bring Out The Best
          </h1>
          <p className="head-64 font-semibold lgdesktop:leading-[4rem]  lg:leading-[3rem] tab:leading-[2.25rem] tab:pt-6 tab:pb-5 lg:pt-5 lg:pb-3.5 mobile-leading-[1.6rem] mobile:py-2">
            Of Your Real Estate <br className="lg:block tab:hidden"></br>{" "}
            Project
          </p>
          {/* <p className="head-64 font-semibold lgdesktop:leading-[4rem] lg:leading-[3rem] tab:leading-[2.25rem] lg:pb-4 tab:pb-2"></p> */}
          <button
            className="flex items-center lg:px-[2.12rem] lg:py-1.5 tab:px-14  tab:py-2.5 rounded-full text-2xl mobile:text-lg mobile:px-5 mobile:py-0.5"
            style={{ border: "0.38px solid rgba(18, 17, 18, 0.5)" }}
          >
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
        <div
          className="pb-9 px-6 tab:pb-8 real-estate lg:flex tab:hidden mobile:hidden relative z-20"
          style={{ marginTop: "-1rem" }}
        >
          <Image
            width={535}
            height={463}
            className="lgdesktop:w-[33.45rem] lg:w-[25rem]"
            src="/assets/Images/realEstage-right.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default RealEstate;
