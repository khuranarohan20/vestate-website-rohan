import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";

const ContactSection = () => {
  return (
    <>
      <div className="bg-pure-black h-[47.8rem]">
        <HeaderSection />
        <div className="main-banner max-w-[82rem] m-auto">
          <div className="flex pb-10 mt-16">
            <div className="mr-36">
              <h2 className="text-white font-medium text-7xl leading-[5rem]">
                Let's
                <br></br>
                <span className="text-btn flex items-center">
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
              <p className="text-white text-base leading-5 w-[34rem]">
                Our experts are available to answer any questions you might
                have. We’ve got the answers.
              </p>
            </div>
            <div className="flex items-center  max-w-[38.5rem] mt-20">
              <div className="mr-20">
                <h3 className="text-white font-medium text-3xl">Visit Us</h3>
                <p className="text-white text-base ">
                  405, Corporate Annexe Sonawala Rd <br></br>Goregaon (East),
                  Mumbai,India
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium text-3xl">Contact</h3>
                <p className="text-white text-base">hello@v-estate.com</p>
                <p className="text-white text-base">+91 915-238-7077</p>
              </div>
            </div>
          </div>

          <div className="w-100">
            <img src="/assets/Images/contact-banner.png" alt="" />
          </div>
        </div>
        <div className="bg-prime-green mt-24">
          <div className="max-w-[81rem] m-auto flex justify-between py-[7.63rem]">
            <div>
              <h2 className="text-form-head font-semibold text-7xl ">
                Have A <br></br> Project? <br></br> Let's <br></br> Discuss
              </h2>
            </div>
            <div className="discuss-form-container">
              <form>
                <div className="flex gap-5 mb-16">
                  <input
                    className="input-style placeholder:text-form-head focus:outline-none text-lg"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="input-style placeholder:text-form-head focus:outline-none text-lg"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>

                <div className="flex gap-5 mb-16">
                  <input
                    className="input-style placeholder:text-form-head focus:outline-none text-lg"
                    type="phone"
                    placeholder="Phone Number"
                  />
                  <input
                    className="input-style placeholder:text-form-head focus:outline-none text-lg"
                    type="text"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <input
                    className="input-full placeholder:text-form-head focus:outline-none text-lg"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <button className="bg-white rounded-full px-[2.21rem] pt-[1rem] pb-3.5 mt-8">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    </>
  );
};
export default ContactSection;
