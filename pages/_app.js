import { Philosopher, Poppins } from "next/font/google";
import "@/styles/globals.css";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["700", "400"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "400", "300"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --philosopher-font: ${philosopher.style.fontFamily};
            --poppins-font: ${poppins.style.fontFamily};
          }
        `}
      </style>{" "}
      <Component {...pageProps} />
    </>
  );
}
