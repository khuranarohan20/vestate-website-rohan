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
        mobile: "540px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        tab: "920px",
        desktop: "1280px",
        lgdesktop: "1440px",
        llgdesktop: "1620px",
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "real-estate": "url('/assets/Images/real-estate-bg.png')",
        "post-sales-logo": "url('/assets/Images/post-sales-logo.png')",
        "post-video-frame": "url('/assets/Images/Ipad.png')",
      },
      colors: {
        "prime-green": "#cdea67",
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
      },
    },
  },
  plugins: [],
};
export default config;
