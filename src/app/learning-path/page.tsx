import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import UdemyCourses from "@/components/UdemyCourses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Learning Path",
};

export default function LearningPath() {
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
            <h2>Rough start</h2>
            <p>
              In my first year, when I decided to become a software engineer, I
              enrolled in a course taught in <b>Chinese</b>. This caused a lot
              of difficulties because I couldn&apos;t fully grasp the basic
              concepts due to the <b>language barrier</b>. I understood the
              logical parts while following the course, but when it came to
              writing code from scratch for assignments, I got stuck. I
              couldn&apos;t make any progress without reading the answers first.
            </p>
            <p>
              As the course advanced, I had to read more and more documents in
              addition to the course materials, all of which were written in
              English. Due to my lack of foundational knowledge and limited
              English reading experience, I found it difficult to keep up. I
              tried repeating the course a few times but didn&apos;t make much
              progress. I realized I needed an alternative approach, so I found
              a highly-rated course on <b>Udemy</b> and started from scratch,
              this time in <b>English</b>.
            </p>
          </div>
        </section>

        {/* <!-- Two --> */}

        <section id="two">
          <div className="inner">
            <h2>Lay a Wide Foundation</h2>
            <UdemyCourses />
            <p>
              I took these courses at a slow and steady pace, listening to the
              instructions word by word and following along with every line of
              code. At the same time, I describe the concepts I&apos;ve learned
              or discuss the problems I encounter while coding with{" "}
              <b>ChatGPT</b> to deepen my understanding and retain the
              information in the <b>long term</b>.
            </p>
          </div>
        </section>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}
