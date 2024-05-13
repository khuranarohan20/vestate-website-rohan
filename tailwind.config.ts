import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "72rem": "72rem",
      },
      screens: {
        mobile: "320px",
        tab: "720px",
        laptop: "1024px",
        desktop: "1280px",
        lgdesktop: "1440px",
        llgdesktop: "1620px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "real-estate": "url('/assets/Images/real-estate-bg.png')",
        "post-sales-logo": "url('/assets/Images/vestate-logo.png')",
        "post-video-frame": "url('/assets/Images/Ipad.png')",
        "jp-infra-xv": "url('/assets/Images/jp-infra-xv.png')",
      },
      colors: {
        "prime-green": "#cdea67",
        "neutral-white": "#F4F4F8",
        "neutral-grey": "#A8A9B2",
        "head-light": "#fafafa",
        "head-dark": "#0c1136",
        "pure-black": "#000000",
        "amenities-primary": "#20273c",
        "head-menu": "#C7C7C7",
        "amenities-para": "#303454",
        "para1-dark": "#949494",
        "para2-light": "#6a6a6a",
        "form-head": "#121112",
        "bottom-br": "#909090",
        "post-sales": "#000519",
        "light-grey": "#F6F6F6",
        "augment-para": "#25294B",
        "window-txt": "#1D2540",
      },
    },
  },
  plugins: [],
};
export default config;
