import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["greek"] });
const ContactSection = () => {
  return (
    <>
      <div className="bg-pure-black lg:h-[47.8rem] h-[30.8rem]">
        <HeaderSection />
        <div className="main-banner px-14">
          <div className="flex 2xl:justify-between pb-10 lgdesktop:mt-16 tab:mt-8">
            <div className="lg:mr-36 mr-0 marginRight">
              <h2 className="text-white font-medium lg:text-7xl text-[2.5rem] lg:leading-[5rem] leading-[2.82rem]">
                Let's
                <br></br>
                <span className="text-prime-green flex items-center ">
                  Get in Touch
                  <svg
                    className="pl-3.5"
                    width="39"
                    height="40"
                    viewBox="0 0 39 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.7914 20.2295L0 20.2295"
                      stroke="#E7E7E7"
                      stroke-width="3.49787"
                    />
                    <path
                      d="M33.1174 6.50783L5.68774 33.9375"
                      stroke="#E7E7E7"
                      stroke-width="3.49787"
                    />
                    <path
                      d="M33.1174 33.9365L5.68774 6.50684"
                      stroke="#E7E7E7"
                      stroke-width="3.49787"
                    />
                    <path
                      d="M19.3955 39.6264L19.3955 0.834961"
                      stroke="#E7E7E7"
                      stroke-width="3.49787"
                    />
                  </svg>
                </span>
              </h2>
              <p
                className={`${manrope.className} text-white  lg:text-base text-[0.57rem] lg:leading-5 lg:w-[34rem] leading-3 w-3/4 opacity-70`}
              >
                Our experts are available to answer any questions you might
                have. We’ve got the answers.
              </p>
            </div>
            <div className="flex items-center  lg:w-[38.5rem]  lg:mt-20 tab:w-[auto] mt-[2.2rem]">
              <div className="lg:mr-20 tab:mr-8">
                <h3 className="text-white font-medium lg:text-3xl text-base">
                  Visit Us
                </h3>
                <p
                  className={`${manrope.className} text-white lg:text-base text-xs opacity-70 lg:leading-[1.4rem] leading-[0.88rem]`}
                >
                  405, Corporate Annexe <br className="lg:hidden block"></br>{" "}
                  Sonawala Rd{" "}
                  <br className="tab:hidden lg:hidden lgdesktop:block "></br>{" "}
                  Goregaon <br className="lg:hidden block"></br> (East),
                  Mumbai,India
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium lg:text-3xl text-base">
                  Contact
                </h3>
                <p
                  className={`${manrope.className} text-white lg:text-base text-xs opacity-70 lg:leading-[1.65rem] leading-[0.88rem] `}
                >
                  hello@v-estate.com
                </p>
                <p
                  className={`${manrope.className} text-white lg:text-base  text-xs opacity-70 lg:leading-[1.65rem] leading-[0.88rem]`}
                >
                  +91 915-238-7077
                </p>
              </div>
            </div>
          </div>

          {/* <div className="w-100"> */}
          <Image
            width={1920}
            height={645}
            src="/assets/Images/contact-banner.png"
            alt=""
          />
          {/* </div> */}
        </div>
        <div className="bg-prime-green lg:mt-24 mt-12">
          <div className=" flex justify-between lg:py-[7.63rem] py-16 px-20">
            <div>
              <h2 className="text-form-head font-semibold lg:text-7xl text-[2.5rem] lg:leading-[5rem] leading-[2.85rem]">
                Have A <br></br> Project? <br></br> Let's <br></br> Discuss
              </h2>
            </div>
            <div className="discuss-form-container">
              <form>
                <div className="flex gap-5 lg:mb-16 mb-9">
                  <input
                    className={`${manrope.className} tab:w-[10.63rem] lg:w-[18.94rem] llgdesktop:w-[24rem]  input-style placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium`}
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className={`${manrope.className} tab:w-[10.63rem] lg:w-[18.94rem] llgdesktop:w-[24rem] input-style placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium`}
                    type="email"
                    placeholder="Your Email"
                  />
                </div>

                <div className="flex gap-5 lg:mb-16 mb-9">
                  <input
                    className={`${manrope.className} tab:w-[10.63rem] lg:w-[18.94rem] llgdesktop:w-[24rem] input-style placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium`}
                    type="phone"
                    placeholder="Phone Number"
                  />
                  <input
                    className={`${manrope.className} tab:w-[10.63rem] lg:w-[18.94rem] llgdesktop:w-[24rem] input-style placeholder:text-form-head focus:outline-none lg:text-lg text-[0.63rem] font-medium`}
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
                  className={`${manrope.className} bg-white lg:rounded-full rounded-2xl lg:px-[2.21rem] lg:py-[1rem] tab:px-[1.2rem] tab:py-[0.5rem] mt-8 font-semibold lg:text-base tab:text-[0.57rem]`}
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
