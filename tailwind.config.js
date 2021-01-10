module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        display: "display"
      },
      colors: {
        theme: {
          DEFAULT: "#1daeef",
          yellow: "#ffc800",
          darkgray: "#b5bdc4",
          red: "#f53d4c",
          darkblue: "#141660",
          blue: "#2e319e",
          navyblue: "#0d0f59",
          mediumblue: "#161865",
          green: "#47a835",
          purple: "#b428a4",
          lightblue: "#eaf7ff",
          orange: "#fd7832"
        }
      },
      textColor: {
        red: "#f53d4c",
        theme: "#1daeef",
        themegray: "#cdd5dd",
        themedarkgray: "#b5bdc4",
        navyblue: "#0d0f59",
        orange: "#fd7832",
        primary: "#3490dc",
        green: "#46a835",
        secondary: "#ffed4a",
        danger: "#e3342f",
        purple: "#b428a4",
        yellow: "#ffc800"
      },
      spacing: {
        "m-15": "-15px",
        "m-53": "-53px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px"
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "32": "32%",
        "47": "47%",
        "190px": "190px",
        "200px": "200px",
        "250px": "250px"
      }
    },
    minHeight: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "90": "93%",
      full: "100%"
    },
    minWidth: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "200px": "200px",
      "250px": "250px"
    },
    boxShadow: {
      red:
        "0 0 26px 0 rgba(245, 61, 76, 0.16), 0 13px 14px 0 rgba(245, 61, 76, .08), 0 18px 16px 0 rgba(245, 61, 76, .08)",
      orange:
        "0 0 26px 0 rgba(253, 120, 50, 0.16), 0 13px 14px 0 rgba(253, 120, 50, .08), 0 18px 16px 0 rgba(253, 120, 50, .08)",
      yellow:
        "0 0 26px 0 rgba(255, 200, 0, 0.16), 0 13px 14px 0 rgba(255, 200, 0, .08), 0 18px 16px 0 rgba(255, 200, 0, .08)",
      green:
        "0 0 26px 0 rgba(70, 168, 53, 0.16), 0 13px 14px 0 rgba(70, 168, 53, .08), 0 18px 16px 0 rgba(70, 168, 53, .08)",
      theme:
        "0 0 26px 0 rgba(29, 174, 239, 0.16), 0 13px 14px 0 rgba(29, 174, 239, .08), 0 18px 16px 0 rgba(29, 174, 239, .08)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none"
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
      "12": "12px"
    },
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  variants: {
    extend: {
      padding: ["hover"],
      height: ["hover"]
    }
  },
  plugins: []
};
