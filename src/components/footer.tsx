import { Manrope } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["greek"] });
const inter = Inter({ subsets: ["greek"] });

const FooterSection = () => {
  return (
    <>
      <div
        className="xl:max-w-[82rem] lg:max-w-[62rem] m-auto lg:pb-12 pb-10"
        style={{ borderBottom: "1px solid #bbbbbb" }}
      >
        <div className="flex justify-between lg:mt-20 mt-10">
          <Image
            width={154}
            height={52}
            className="w-[8.75rem] lg:w-[9.65rem] lg:h-[3.4rem] h-[2.94rem]"
            src="/assets/Images/footer-logo.svg"
            alt="v-state"
          />

          <div>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="26.6677"
                cy="26.2732"
                rx="26.0271"
                ry="26.0271"
                fill="#CDEA67"
              />
              <path
                d="M27.0564 34.3647V18.9551M27.0564 18.9551L19.1328 26.8787M27.0564 18.9551L34.9801 26.8787"
                stroke="#18191B"
                stroke-width="1.98091"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-8 items-baseline">
          <div className="flex lg:w-[31.4rem] w-[19.4rem]">
            <div className="pr-14">
              <ul className="text-base text-form-head font-medium">
                <li className="font-semibold lg:text-base head-14 text-form-head lg:leading-4 leading-[0.9] pb-3">
                  <a href="">Home</a>
                </li>
                <li className="font-semibold lg:text-base head-14 text-form-head lg:leading-4 leading-[0.9] pb-3">
                  <a href="">Book A Demo</a>
                </li>
                <li className="font-semibold lg:text-base head-14 text-form-head lg:leading-4 leading-[0.9] pb-3">
                  <a href="">Projects</a>
                </li>
                <li className="font-semibold lg:text-base head-14 text-form-head lg:leading-4 leading-[0.9] ">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-base text-form-head font-medium">
                <li className="font-semibold lg:text-base head-14 text-form-head lg:leading-4 leading-[0.9] pb-3">
                  <a href="">Pre-Sale</a>
                </li>
                <li className="font-semibold lg:text-base head-14 text-form-head lg:leading-4 leading-[0.9] pb-3">
                  <a href="">Sales-Tool</a>
                </li>
                <li className="font-semibold lg:text-base head-14 text-form-head lg:leading-4 leading-[0.9]">
                  <a href="">Post-Sale</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-between">
            <div className="lg:pr-28 pr-0 w-2/4 lg:w-auto">
              <p className="font-semibold text-base pb-2">Address:</p>
              <p
                className={`${manrope.className} text-form-head leading-6 text-left head-14 `}
              >
                405, Corporate Annexe Sonawala Rd{" "}
                <br className="lg:block hidden"></br>
                Goregaon <br className="lg:hidden block"></br> (East),
                Mumbai,India
              </p>
            </div>
            <div>
              <p className="font-semibold text-base pb-2">Contact:</p>
              <p
                className={`${manrope.className} text-form-head lg:text-xl text-lg leading-5 font-semibold pb-1`}
              >
                +91 830-322-9629
              </p>
              <p
                className={`${manrope.className} text-form-head lg:text-xl text-lg leading-5 font-semibold pb-1`}
              >
                +91 915- 238- 7077
              </p>
              <p
                className={`${manrope.className} text-form-head head-14 text-lg leading-5 font-semibold leading-5`}
              >
                hello@v-estate.com
              </p>
              <div className="flex gap-2.5 pt-6">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 3.60742H8C5.23858 3.60742 3 5.846 3 8.60742V16.6074C3 19.3688 5.23858 21.6074 8 21.6074H16C18.7614 21.6074 21 19.3688 21 16.6074V8.60742C21 5.846 18.7614 3.60742 16 3.60742ZM19.25 16.6074C19.2445 18.4 17.7926 19.8519 16 19.8574H8C6.20735 19.8519 4.75549 18.4 4.75 16.6074V8.60742C4.75549 6.81477 6.20735 5.36291 8 5.35742H16C17.7926 5.36291 19.2445 6.81477 19.25 8.60742V16.6074ZM16.75 8.85742C17.3023 8.85742 17.75 8.4097 17.75 7.85742C17.75 7.30514 17.3023 6.85742 16.75 6.85742C16.1977 6.85742 15.75 7.30514 15.75 7.85742C15.75 8.4097 16.1977 8.85742 16.75 8.85742ZM12 8.10742C9.51472 8.10742 7.5 10.1221 7.5 12.6074C7.5 15.0927 9.51472 17.1074 12 17.1074C14.4853 17.1074 16.5 15.0927 16.5 12.6074C16.5027 11.4131 16.0294 10.267 15.1849 9.4225C14.3404 8.57801 13.1943 8.10476 12 8.10742ZM9.25 12.6074C9.25 14.1262 10.4812 15.3574 12 15.3574C13.5188 15.3574 14.75 14.1262 14.75 12.6074C14.75 11.0886 13.5188 9.85742 12 9.85742C10.4812 9.85742 9.25 11.0886 9.25 12.6074Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3.60742H19C20.1046 3.60742 21 4.50285 21 5.60742V19.6074C21 20.712 20.1046 21.6074 19 21.6074H5C3.89543 21.6074 3 20.712 3 19.6074V5.60742C3 4.50285 3.89543 3.60742 5 3.60742ZM8 18.6074C8.27614 18.6074 8.5 18.3835 8.5 18.1074V11.1074C8.5 10.8313 8.27614 10.6074 8 10.6074H6.5C6.22386 10.6074 6 10.8313 6 11.1074V18.1074C6 18.3835 6.22386 18.6074 6.5 18.6074H8ZM7.25 9.60742C6.42157 9.60742 5.75 8.93585 5.75 8.10742C5.75 7.27899 6.42157 6.60742 7.25 6.60742C8.07843 6.60742 8.75 7.27899 8.75 8.10742C8.75 8.93585 8.07843 9.60742 7.25 9.60742ZM17.5 18.6074C17.7761 18.6074 18 18.3835 18 18.1074V13.5074C18.0325 11.9182 16.8576 10.5619 15.28 10.3674C14.177 10.2667 13.1083 10.7818 12.5 11.7074V11.1074C12.5 10.8313 12.2761 10.6074 12 10.6074H10.5C10.2239 10.6074 10 10.8313 10 11.1074V18.1074C10 18.3835 10.2239 18.6074 10.5 18.6074H12C12.2761 18.6074 12.5 18.3835 12.5 18.1074V14.3574C12.5 13.529 13.1716 12.8574 14 12.8574C14.8284 12.8574 15.5 13.529 15.5 14.3574V18.1074C15.5 18.3835 15.7239 18.6074 16 18.6074H17.5Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0854 5.51748C18.164 4.59141 17.0665 3.85715 15.8569 3.35753C14.6473 2.85792 13.3499 2.60294 12.0402 2.60748C6.55276 2.60748 2.0804 7.05748 2.0804 12.5175C2.0804 14.2675 2.54271 15.9675 3.40704 17.4675L2 22.6075L7.27638 21.2275C8.73367 22.0175 10.3719 22.4375 12.0402 22.4375C17.5276 22.4375 22 17.9875 22 12.5275C22 9.87748 20.9648 7.38748 19.0854 5.51748ZM12.0402 20.7575C10.5528 20.7575 9.09548 20.3575 7.81909 19.6075L7.51759 19.4275L4.38191 20.2475L5.21608 17.2075L5.01508 16.8975C4.18869 15.5844 3.74989 14.0667 3.74874 12.5175C3.74874 7.97748 7.46734 4.27748 12.0301 4.27748C14.2412 4.27748 16.3216 5.13748 17.8794 6.69748C18.6507 7.46144 19.262 8.37014 19.6778 9.37091C20.0936 10.3717 20.3056 11.4446 20.3015 12.5275C20.3216 17.0675 16.603 20.7575 12.0402 20.7575ZM16.5829 14.5975C16.3317 14.4775 15.1055 13.8775 14.8844 13.7875C14.6533 13.7075 14.4925 13.6675 14.3216 13.9075C14.1508 14.1575 13.6784 14.7175 13.5377 14.8775C13.397 15.0475 13.2462 15.0675 12.995 14.9375C12.7437 14.8175 11.9397 14.5475 10.995 13.7075C10.2513 13.0475 9.75879 12.2375 9.60804 11.9875C9.46734 11.7375 9.58794 11.6075 9.71859 11.4775C9.82914 11.3675 9.96985 11.1875 10.0905 11.0475C10.2111 10.9075 10.2613 10.7975 10.3417 10.6375C10.4221 10.4675 10.3819 10.3275 10.3216 10.2075C10.2613 10.0875 9.75879 8.86748 9.55779 8.36748C9.35678 7.88748 9.14573 7.94748 8.99497 7.93748H8.51256C8.34171 7.93748 8.0804 7.99748 7.84925 8.24748C7.62814 8.49748 6.98492 9.09748 6.98492 10.3175C6.98492 11.5375 7.8794 12.7175 8 12.8775C8.1206 13.0475 9.75879 15.5475 12.2513 16.6175C12.8442 16.8775 13.3065 17.0275 13.6683 17.1375C14.2613 17.3275 14.804 17.2975 15.2362 17.2375C15.7186 17.1675 16.7136 16.6375 16.9146 16.0575C17.1256 15.4775 17.1256 14.9875 17.0553 14.8775C16.9849 14.7675 16.8342 14.7175 16.5829 14.5975Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:py-10 py-6 lg:max-w-[82rem] m-auto">
        <p
          className={`${inter.className} text-form-head text-xs leading-4 opacity-60`}
        >
          © 2024 - V-Estate{" "}
        </p>
        <div className="flex">
          <p
            className={`${inter.className} pr-10 text-form-head text-xs leading-4 opacity-60`}
          >
            Privacy Policy
          </p>
          <p
            className={`${inter.className} text-form-head text-xs leading-4 opacity-60`}
          >
            Terms of Service
          </p>
        </div>
      </div>
    </>
  );
};
export default FooterSection;
