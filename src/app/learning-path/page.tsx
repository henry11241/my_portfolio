import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { Metadata } from "next";
import Section1 from "@/components/learning-path/Section1";
import Section2 from "@/components/learning-path/Section2";
import Section3 from "@/components/learning-path/Section3";
import Section4 from "@/components/learning-path/Section4";
import Section5 from "@/components/learning-path/Section5";

export const metadata: Metadata = {
  title: "Code Learning Path",
};

export default function Page() {
  return (
    <>
      {/* <!-- Header --> */}
      <Header />

      {/* <!-- Menu --> */}
      <Menu />

      {/* <!-- Main --> */}
      <div id="main" className="alt">
        {/* <!-- One --> */}
        <Section1 />

        {/* <!-- Two --> */}
        <Section2 />

        {/* <!-- Three --> */}
        <Section3 />

        {/* <!-- Four --> */}
        <Section4 />

        {/* <!-- Five --> */}
        <Section5 />
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
