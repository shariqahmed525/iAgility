module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: "#1daeef",
        red: {
          DEFAULT: "#f53d4c"
        }
      },
      textColor: {
        theme: "#1daeef",
        navyblue: "#0d0f59",
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f"
      }
    },
    boxShadow: {
      red:
        "0 0 26px 0 rgba(245, 61, 76, 0.16), 0 13px 14px 0 rgba(245, 61, 76, .08), 0 18px 16px 0 rgba(245, 61, 76, .08)",
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
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
