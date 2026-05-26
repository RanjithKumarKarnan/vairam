import Hero from "../../components/Hero";
import About from "../../components/About";
import Collections from "../../components/Collections";
import WhyVairam from "../../components/Whyvairam";
import Diamonds from "../../components/Diamond";
import Process from "../../components/Process";
import Offers from "../../components/Offers";
import SavingsScheme from "../../components/SavingsScheme";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <WhyVairam />
      <SavingsScheme />
      <Process />
      <Diamonds />
      <Offers />
    </>
  );
}