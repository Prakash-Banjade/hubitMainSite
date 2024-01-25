import Analytics from "../components/SEO/Seo";
import "../styles/globals.css";
import "../styles/SCSS/master.scss";

function MyApp({ Component, pageProps }) {
  return <div>
    <Analytics />
    <Component {...pageProps} />
  </div>
}

export default MyApp;
