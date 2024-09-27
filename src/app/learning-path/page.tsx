import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import TraversyCourses from "@/components/TraversyCourses";
import UdemyCourses from "@/components/UdemyCourses";
import FreeCodeCampLogo from "@/components/FreeCodeCampLogo";
import { Metadata } from "next";
import MyApps from "@/components/MyApps";

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

        {/* <!-- Three --> */}
        <section id="three">
          <div className="inner">
            <h2>Exploring More</h2>
            <p>
              When I took the React course mentioned earlier, I noticed that
              React was transitioning from class components to function
              components at that time, but the course didn&apos;t cover this
              shift yet. I looked for other resources and found a YouTube video
              titled{" "}
              <a
                href="https://www.youtube.com/watch?v=u72H_zZzkcw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>&quot;Web Development in 2023 - A Practical Guide.&quot;</b>
              </a>{" "}
              After watching the video, I gained a better understanding of the
              modern web development environment. As a result, I decided to take
              both a React course and a MERN stack course to explore these more
              modern approaches for building full-stack apps.
            </p>
            <TraversyCourses />
          </div>
        </section>

        {/* <!-- Four --> */}
        <section id="four">
          <div className="inner">
            <h2>Read & Write</h2>
            <p>
              At this stage, I realized that I wouldn&apos;t improve if I just
              kept following courses. However, I still felt a bit lost when
              coding without instructions. Then I came across a website called
              <FreeCodeCampLogo />
              that helped me <b>break through</b> this barrier. It provides
              practice exercises based on written instructions, guiding me to
              write code from scratch. Through this process, my learning path
              shifted from listening and following to <b>reading</b> and{" "}
              <b>writing</b>.
            </p>
            <p>
              I tried using React with some frontend exercises, and that&apos;s
              when I discovered that create-react-app had become deprecated. The
              React official documentation recommended using <b>Next.js</b> with{" "}
              <b>Tailwind CSS</b> instead. This time, I decided to{" "}
              <b>read the documentation</b> for both Next.js and Tailwind CSS on
              my own, without following any courses, and built a few simple apps
              with them.
            </p>
          </div>
          <MyApps />
        </section>

        {/* <!-- Five --> */}
        <section id="five">
          <div className="inner">
            <h2>Combining Knowledge for Design</h2>
            <p>
              At first, I wanted to create a site entirely on my own, but I soon
              realized that <b>design</b> and <b>UI/UX</b> are distinct topics
              separate from web development. I watched a few videos to get a
              basic understanding of the <b>Figma</b> design tool, but I still
              found it challenging and time-consuming to create a site from
              scratch by myself. So, I decided to use an open-source template as
              a starting point and combined it with what I had learned to
              ultimately build this site.
            </p>
          </div>
        </section>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}
