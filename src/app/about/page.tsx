import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Popup from "@/components/Popup";
import GamingCarousel from "@/components/GamingCarousel";
import Image from "next/image";
import banner_bg_pic02 from "../../../public/images/banner_bg_pic02.jpg";
import books from "../../../public/images/books.png";
import YoutubePlayer from "@/components/YoutubePlayer";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
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
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Career Shift</h2>
            </header>
            <p>
              I graduated from National Taiwan Ocean University with a
              bachelor&apos;s degree in marine engineering. I was previously
              recruited by Evergreen Aviation Technologies Corp. as an{" "}
              <b>aircraft maintenance engineer</b>. However, due to the high
              risk of injury and limited career flexibility, I decided to
              explore a different field. I developed an interest in computer
              science, which I couldn&apos;t pursue in college due to my exam
              results. Now, I&apos;m on a self-taught journey to become a
              software engineer.
            </p>
          </div>
        </section>

        {/* Skills and Progress section */}
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Skills and Progress</h2>
            </header>
            <p>
              I&apos;ve been self-taught for about three years, mainly focusing
              on fully understanding the courses I took. Starting with the
              basics of <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, I
              learned how to use tools like <b>VS Code</b>, the <b>terminal</b>,
              and <b>GitHub</b>. I then advanced to topics like{" "}
              <b>TypeScript</b> for type checking, <b>React</b> for front-end
              frameworks, the <b>MERN stack</b> for full-stack development, and{" "}
              <b>Next.js</b> as a modern approach to building apps. I believe
              that only after having a solid knowledge foundation can I
              contribute effectively in a real-world job under time pressure,
              while also quickly picking up new technologies when needed in the
              future.
            </p>
            <ul className="actions">
              <li>
                <a href="/learning-path" className="button next">
                  More Details in next page
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Beyond Coding section */}
        <section id="three">
          <div className="inner">
            <header className="major">
              <h2>Beyond Coding</h2>
            </header>
            <p>
              During my school days, I developed a strong interest in{" "}
              <b>table tennis</b> and <b>gaming</b>. This passion motivated me
              to seek information online, which in turn improved my English
              reading and comprehension skills. I learned how to train
              effectively, stick to a plan, and work hard to achieve better
              performance in these hobbies. This pursuit has positively impacted
              my life in many ways, enhancing my physical fitness,
              concentration, and reflexes, as well as my mental skills in
              critical thinking, problem solving and handling pressure. When I
              hit a roadblock, I turn to additional resources like <b>books</b>{" "}
              and <b>podcasts</b> for guidance. Although my self-taught journey
              spans various topics, they all interconnect and evolve, much like
              a spider&apos;s web.
            </p>
            <ul className="actions">
              <li>
                <Popup title="Beyond Coding">
                  {/* Spotlights */}
                  <section className="spotlights w-full">
                    {/* Gaming section */}
                    <section>
                      {/* Images */}
                      <div className="image">
                        <GamingCarousel />
                      </div>
                      {/* Content */}
                      <div className="content">
                        <header>
                          <h4>Gaming</h4>
                        </header>
                        <p>
                          For me, gaming isn&apos;t just a hobby—it&apos;s a way
                          to <b>connect with people</b>, build skills, and keep
                          life balanced. Whether playing as a team member,
                          taking on the role of a <b>leader</b>, or acting as an{" "}
                          <b>executor</b> in high-pressure moments, gaming
                          offers a dynamic environment where I can sharpen my{" "}
                          <b>decision-making</b> and <b>adaptability</b>. Beyond
                          the game itself, it also serves as a social outlet,
                          allowing me to relax and enjoy meaningful
                          interactions, which help balance the demands of
                          everyday life.
                        </p>
                      </div>
                    </section>

                    {/* Table Tennis section */}
                    <section className="flex items-center">
                      {/* Video */}
                      <YoutubePlayer />
                      {/* Content */}
                      <div className="content">
                        <header className="self-center">
                          <h4>Table Tennis</h4>
                        </header>
                        <p>
                          I push myself to the limit in this realm, constantly
                          striving for better performance like a{" "}
                          <b>dedicated craftsman</b>. I focus on every small{" "}
                          <b>detail</b> with <b>precision</b>, starting by
                          observing how my opponent moves. I predict the
                          ball&apos;s curve based on its spin and speed, and
                          then decide how to respond while keeping my overall{" "}
                          <b>strategy</b> in mind. Whether playing smart with
                          positioning or making a bold move with a powerful
                          strike, all within a reaction window of 0.2 to 0.3
                          seconds, I thrive on the challenge. This activity has
                          sharpened my <b>focus</b>, reflexes,{" "}
                          <b>self-awareness</b>, and ability to{" "}
                          <b>handle pressure</b>. It&apos;s improved my body
                          control, physical fitness, and even sparked my{" "}
                          <b>creativity</b>. The mindset I&apos;ve developed
                          here naturally carries over into other areas of my
                          life.
                        </p>
                      </div>
                    </section>

                    {/* Personal Growth section */}
                    <section>
                      {/* Images */}
                      <div className="image">
                        <Image
                          src={books}
                          alt="Image for Personal Growth"
                          data-position="center center"
                        />
                      </div>
                      {/* Content */}
                      <div className="content">
                        <header>
                          <h4>Personal Growth</h4>
                        </header>
                        <p>
                          I&apos;ve always had a <b>curiosity</b> and a drive to{" "}
                          <b>learn more</b> whenever I discover a better way to
                          approach something. Over time, I&apos;ve explored a
                          wide range of topics, from <b>economics</b> and{" "}
                          <b>psychology</b> to <b>nutrition</b> and{" "}
                          <b>body training</b>. I spend countless hours
                          researching through books and videos on subjects that
                          interest me, then actively apply what I&apos;ve
                          learned to my daily life.
                        </p>
                      </div>
                    </section>
                  </section>
                </Popup>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
