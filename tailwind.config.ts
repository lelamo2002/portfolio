import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        firaCode: ['var(--Fira-Code)', 'monospace'],
      },

      
    },
    fontSize: {
      "headline" : "62px",
      "subheadline" : "32px",
      "body" : "18px",
      "lable" : "16px",
      "codeSnippets" : "14px",
    },
    colors: {
      primary: {
        "black" : "#01080E",
        "darker-blue" : "#011221",  
        "dark-blue" : "#011627",
      },
      secondary: {
        "grey": "#607B96",
        "cyan" : "#3C9D93",
        "light-blue" : "#4D5BCE",
        "white" : "#FFFFFF",
      },

      accent: {
        "orange" : "#FEA55F",
        "light-cyan" : "#43D9AD",
        "pastel-oragne" : "#E99287",
        "purple" : "#C98BDF",
      },

      line: {
        DEFAULT: "#1E2D3D",
      },

      gradient: {
        "gradient-1" : "linear-gradient(180deg, #4D5BCE 0%, #43D9AD 100%)",
      }
    },
  },
  plugins: [],
}
export default config
