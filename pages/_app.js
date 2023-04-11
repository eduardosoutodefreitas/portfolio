import { Ubuntu, Roboto } from "next/font/google";
import "@/styles/globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["700", "500", "400", "300"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900", "700", "500", "400", "300", "100"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --Ubuntu-font: ${ubuntu.style.fontFamily};
            --Roboto-font: ${roboto.style.fontFamily};
          }
        `}
      </style>{" "}
      <Component {...pageProps} />
    </>
  );
}
