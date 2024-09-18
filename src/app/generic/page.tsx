import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { Metadata } from "next";
import Image from "next/image";
import pic11 from "../../../public/images/pic11.jpg";

export const metadata: Metadata = {
  title: "Code Learning Path",
};

export default function Generic() {
  return (
    <div id="wrapper">
      {/* <!-- Header --> */}
      <Header />

      {/* <!-- Menu --> */}
      <Menu />

      {/* <!-- Main --> */}
      <div id="main" className="alt">
        {/* <!-- One --> */}
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Code Learning Path</h1>
            </header>
            <span className="image main">
              <Image src={pic11} width={500} height={500} alt="" />
            </span>
            <h2>Rough start</h2>
            <p>
              In my first year, when I decided to become a software engineer, I
              enrolled in a course taught in Chinese. This caused a lot of
              difficulties because I couldn&apos;t fully grasp the basic
              concepts due to the language barrier. I understood the logical
              parts while following the course, but when it came to writing code
              from scratch for assignments, I got stuck. I couldn&apos;t make
              any progress without reading the answers first.
            </p>
            <p>
              As the course advanced, I had to read more and more documents in
              addition to the course materials, all of which were written in
              English. Due to my lack of foundational knowledge and limited
              English reading experience, I found it difficult to keep up. I
              tried repeating the course a few times but didn&apos;t make much
              progress. I realized I needed an alternative approach, so I found
              a highly-rated course on Udemy and started from scratch, this time
              in English.
            </p>
          </div>
        </section>
      </div>

      {/* <!-- Contact --> */}
      <Contact />

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}
