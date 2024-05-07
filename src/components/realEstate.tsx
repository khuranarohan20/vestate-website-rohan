import Image from "next/image";

const RealEstate = () => {
  return (
    <>
      <div className="flex justify-between bg-real-estate bg-no-repeat bg-contain px-10 ">
        <div className="mx-0 my-auto pt-10">
          <h1 className="bg-white text-center head-3  leading-[2.63rem] inline px-4">
            Bring Out The Best
          </h1>
          <p className="head-64 font-semibold lgdesktop:leading-[4rem] lg:leading-[3rem] pt-4 pb-2">
            Of Your Real Estate{" "}
          </p>
          <p className="head-64 font-semibold lgdesktop:leading-[4rem] lg:leading-[3rem]  pb-4">
            Project
          </p>
          <button
            className="flex items-center px-12 py-2 rounded-full text-2xl"
            style={{ border: "1px solid #121112" }}
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
        <div className="pb-9" style={{ marginTop: "-1rem" }}>
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
