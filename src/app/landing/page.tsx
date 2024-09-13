import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Popup from "@/components/landing/Popup";

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
            <img src="/images/bg_pic02.jpg" alt="" />
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
              I developed a strong interest in table tennis and gaming during my
              school days, and I found that when I'm passionate about something
              and want a deeper understanding, I need to actively seek
              information online. To excel in a competitive environment, I also
              need to know how to train effectively and stick to a plan while
              putting in hard work. Pursuing better performance in these hobbies
              has benefited my personal life in many ways, from physical aspects
              like fitness, concentration, and reflexes to mental areas like
              critical thinking, handling pressure, research, and data analysis.
              If I ever get stuck and can't find a way to improve, I turn to
              other resources like books and podcasts. Though my self-taught
              journey covers different topics, they all connect and grow like a
              spider web. Click the links below to explore more details.
            </p>
            <ul className="actions">
              <li>
                <a href="#four" className="button scrolly">
                  More Details Below
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Sections with popup detail */}
        <section id="four" className="spotlights">
          {/* Gaming section  */}
          <Popup
            content={{
              imgSrc: "images/pic08.jpg",
              title: "Gaming",
              description:
                "Gaming has enriched my life by building teamwork, strategy, and focus skills. It serves as both a source of enjoyment and personal development, helping me balance challenges inside and outside the virtual world.",
              dataPosition: "center center",
            }}
          >
            <section>
              <div className="inner">
                <section></section>
                <p>
                  <span className="text-[1.75em] font-semibold">Gaming</span>{" "}
                  has always been more than just a hobby for me—it's a way to{" "}
                  <b>connect with others</b>, develop important life skills, and{" "}
                  <b>maintain balance</b> in my daily routine. Whether playing
                  as a team member, taking on the role of a leader, or acting as
                  an executor in high-pressure moments, gaming offers a dynamic
                  environment where I can sharpen my decision-making and
                  adaptability. Beyond the game itself, it also serves as a
                  social outlet, allowing me to unwind and enjoy meaningful
                  interactions, which help balance the demands of everyday life.
                </p>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <h3 id="content">League of Legend</h3>
                    <p>
                      <span className="image left">
                        <img src="images/pic09.jpg" alt="" />
                      </span>
                      League of Legends is a popular multiplayer online battle
                      arena (MOBA) game where players control champions with
                      unique abilities to engage in strategic 5v5 matches. Its
                      popularity meant that I could easily find four other
                      classmates to queue with during high school. As I spent
                      more time playing, I began to wonder whether I was simply
                      chasing the rush from winning games or if I was genuinely
                      learning something valuable. Although I have to admit it
                      provided a much-needed dopamine boost to balance the
                      pressure from the strict Asian education system, I still
                      found that I improved a lot in the aspect of{" "}
                      <b>teamwork</b> and <b>comminucation</b>. Maintain a{" "}
                      <b>positive mindset</b>, stay <b>calm under pressure</b>,
                      and provide useful information to help the team. Taking
                      responsibility for decisions, supporting teammates, and
                      having each other's back became practices I try to apply
                      beyond the game.
                    </p>
                  </div>
                  <div className="col-6 col-12-small">
                    <h3>Overwatch, Apex Legend and Valorant</h3>
                    <p>
                      <span className="image left">
                        <img src="images/pic09.jpg" alt="" />
                      </span>
                      Overwatch, Apex Legends, and Valorant are popular
                      first-person shooter (FPS) games where players rely on
                      quick reflexes, precise aim, and sharp decision-making to
                      outplay their opponents. As I spent more time with these
                      games, I noticed how they sharpened my <b>reflexes</b>,
                      enhanced my concentration, and trained my ability to make
                      <b>micro-adjustments</b> during intense moments. Each game
                      demands constant <b>awareness of the surroundings</b> and
                      quick adaptation to shifting team strategies. Whether
                      switching between offensive and defensive roles or
                      executing split-second tactics, these FPS games taught me
                      to stay <b>focused</b>, <b>remain calm under pressure</b>,
                      and quickly adapt to new challenges. These experiences not
                      only honed my gaming skills but also helped me develop a
                      mindset that can be applied to real-life situations
                      requiring <b>precision</b> and{" "}
                      <b>quick decision-making</b>.
                    </p>
                  </div>

                  {/* <!-- Break --> */}
                  <section className="spotlights">
                    <h3>Path Of Exile</h3>
                    <section>
                      <div className="image">
                        <img src="images/pic08.jpg" alt="" />
                      </div>
                      <div className="content">
                        <p>
                          Playing Path of Exile has been an unexpected boost to
                          my <b>English reading</b> and <b>comprehension</b>{" "}
                          skills. The game's deep mechanics and complex skill
                          trees require careful attention to item descriptions
                          and patch notes, all in English. This has
                          significantly improved my ability to quickly
                          understand and absorb new information. Additionally,
                          the in-game economy mirrors real-world capital
                          markets, with its intricate trade system teaching me
                          the value of supply and demand. I learned that
                          providing rare and high-demand services or items
                          allows you to gain more value, reinforcing key
                          economic principles that apply to both the game and
                          real-world market dynamics.
                        </p>
                      </div>
                    </section>
                  </section>
                </div>
              </div>
            </section>
          </Popup>

          {/* Table Tennis section */}
          <Popup
            content={{
              imgSrc: "images/pic09.jpg",
              title: "Table Tennis",
              description: "This is a brief intro for Table Tennis.",
              dataPosition: "top center",
            }}
          >
            <section>
              <div className="inner">
                <header className="major">
                  <h2>Beyond Coding</h2>
                </header>
                <p>
                  I developed a strong interest in table tennis and gaming
                  during my school days, and I found that when I'm passionate
                  about something and want a deeper understanding, I need to
                  actively seek information online. To excel in a competitive
                  environment, I also need to know how to train effectively and
                  stick to a plan while putting in hard work. Pursuing better
                  performance in these hobbies has benefited my personal life in
                  many ways, from physical aspects like fitness, concentration,
                  and reflexes to mental areas like critical thinking, handling
                  pressure, research, and data analysis. If I ever get stuck and
                  can't find a way to improve, I turn to other resources like
                  books and podcasts. Though my self-taught journey covers
                  different topics, they all connect and grow like a spider web.
                  Click the links below to explore more details.
                </p>
              </div>
            </section>
          </Popup>

          {/* Personal Growth section */}
          <Popup
            content={{
              imgSrc: "images/pic10.jpg",
              title: "Personal Growth",
              description: "Learning Resources for Personal Growth",
              dataPosition: "25% 25%",
            }}
          >
            <section>
              <div className="inner">
                <header className="major">
                  <h2>Beyond Coding</h2>
                </header>
                <p>
                  I developed a strong interest in table tennis and gaming
                  during my school days, and I found that when I'm passionate
                  about something and want a deeper understanding, I need to
                  actively seek information online. To excel in a competitive
                  environment, I also need to know how to train effectively and
                  stick to a plan while putting in hard work. Pursuing better
                  performance in these hobbies has benefited my personal life in
                  many ways, from physical aspects like fitness, concentration,
                  and reflexes to mental areas like critical thinking, handling
                  pressure, research, and data analysis. If I ever get stuck and
                  can't find a way to improve, I turn to other resources like
                  books and podcasts. Though my self-taught journey covers
                  different topics, they all connect and grow like a spider web.
                  Click the links below to explore more details.
                </p>
              </div>
            </section>
          </Popup>
        </section>
      </div>

      {/* <!-- Contact --> */}

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
