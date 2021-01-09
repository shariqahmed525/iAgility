import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "@material/react-text-field/dist/text-field.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
