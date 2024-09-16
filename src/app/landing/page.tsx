import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Popup from "@/components/Popup";
import GamingCarousel from "@/components/GamingCarousel";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Landing() {
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
            <img src="/images/banner_bg_pic02.jpg" alt="" />
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
              bachelor's degree in marine engineering. I was previously
              recruited by Evergreen Aviation Technologies Corp. as an aircraft
              maintenance engineer. However, due to the high risk of injury and
              limited career flexibility, I decided to explore a different
              field. I developed an interest in computer science, which I
              couldn't pursue in college due to my exam results. Now, I'm on a
              self-taught journey to become a software engineer.
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
              I've been self-taught for about three years, mainly focusing on
              fully understanding the courses I took. Starting with the basics
              of HTML, CSS, and JavaScript, I learned how to use tools like VS
              Code, the terminal, and GitHub. I then advanced to topics like
              TypeScript for type checking, React for front-end frameworks, the
              MERN stack for full-stack development, and Next.js as a modern
              approach to building apps. I believe that only after having a
              solid knowledge foundation can I contribute effectively in a
              real-world job under time pressure, while also quickly picking up
              new technologies when needed in the future.
            </p>
            <ul className="actions">
              <li>
                <a href="/generic" className="button next">
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
              During my school days, I developed a strong interest in table
              tennis and gaming. This passion motivated me to seek information
              online, which in turn improved my English reading and
              comprehension skills. I learned how to train effectively, stick to
              a plan, and work hard to achieve better performance in these
              hobbies. This pursuit has positively impacted my life in many
              ways, enhancing my physical fitness, concentration, and reflexes,
              as well as my mental skills in critical thinking, problem solving
              and handling pressure. When I hit a roadblock, I turn to
              additional resources like books and podcasts for guidance.
              Although my self-taught journey spans various topics, they all
              interconnect and evolve, much like a spider's web.
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
                          For me, gaming isn't just a hobby—it's a way to
                          connect with people, build skills, and keep life
                          balanced. Whether playing as a team member, taking on
                          the role of a leader, or acting as an executor in
                          high-pressure moments, gaming offers a dynamic
                          environment where I can sharpen my decision-making and
                          adaptability. Beyond the game itself, it also serves
                          as a social outlet, allowing me to relax and enjoy
                          meaningful interactions, which help balance the
                          demands of everyday life.
                        </p>
                      </div>
                    </section>

                    {/* Table Tennis section */}
                    <section>
                      {/* Images */}
                      <a href="generic.html" className="image">
                        <img
                          src="images/pic08.jpg"
                          alt=""
                          data-position="center center"
                        />
                      </a>
                      {/* Content */}
                      <div className="content">
                        <header className="self-center">
                          <h4>Table Tennis</h4>
                        </header>
                        <p>
                          I push myself to the limit in this realm, constantly
                          striving for better performance like a dedicated
                          craftsman. I focus on every small detail with
                          precision, starting by observing how my opponent
                          moves. I predict the ball's curve based on its spin
                          and speed, and then decide how to respond while
                          keeping my overall strategy in mind. Whether playing
                          smart with positioning or making a bold move with a
                          powerful strike, all within a reaction window of 0.2
                          to 0.3 seconds, I thrive on the challenge. This
                          activity has sharpened my focus, reflexes,
                          self-awareness, and ability to handle pressure. It's
                          improved my body control, physical fitness, and even
                          sparked my creativity. The mindset I've developed here
                          naturally carries over into other areas of my life.
                        </p>
                      </div>
                    </section>

                    {/* Personal Growth section */}
                    <section>
                      {/* Images */}
                      <a href="generic.html" className="image">
                        <img
                          src="images/pic08.jpg"
                          alt=""
                          data-position="center center"
                        />
                      </a>
                      {/* Content */}
                      <div className="content">
                        <header>
                          <h4>Personal Growth</h4>
                        </header>
                        <p>
                          Things that I I've always got the curiosity and crave
                          to learn more.
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
