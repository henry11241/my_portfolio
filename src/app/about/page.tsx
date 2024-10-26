import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import banner_bg_pic02 from "../../../public/images/banner_bg_pic02.jpg";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Page() {
  return (
    <>
      {/* <!-- Header --> */}
      {/* <!-- Note: The "styleN" className below should match that of the banner element. --> */}
      <Header style="style2" alt={true} />
      {/* <!-- Banner --> */}
      {/* <!-- Note: The "styleN" className below should match that of the header element. --> */}
      <section id="banner" className="style2">
        <div className="inner">
          <span className="image">
            <Image
              src={banner_bg_pic02}
              alt="Background image of banner for About Me"
            />
          </span>
          <header className="major">
            <h1>About Me</h1>
          </header>
          <div className="content">
            <p>
              Welcome to my journey! From self-taught coding to passions in
              sports and gaming, these experiences have shaped my path and drive
              for continuous growth.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Main --> */}
      <div id="main">
        {/* Career Shift section */}
        <Section1 />

        {/* Skills and Progress section */}
        <Section2 />

        {/* Beyond Coding section */}
        <Section3 />
      </div>
      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
