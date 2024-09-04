import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      {/* <!-- Header --> */}
      <Header alt={true} />

      {/* <!-- Banner --> */}
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, my name is Henry</h1>
          </header>
          <div className="content">
            <p>
              A self-taught developer exploring the open source world and
              <br />
              continually learning through new projects and experiences.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  Brief Intro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Main --> */}
      <div id="main">
        {/* <!-- One --> */}
        <section id="one" className="tiles">
          <article>
            <span className="image">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <a href="/landing" className="link">
                  Courses
                </a>
              </h3>
              <p>The online courses I take</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic02.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <a href="/landing" className="link">
                  Background
                </a>
              </h3>
              <p>My personality, College major and previous job</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic03.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <a href="/landing" className="link">
                  Sports and Gaming
                </a>
              </h3>
              <p>
                Where the self-taught journey begins <br /> And the true passion
                of life
              </p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic04.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <a href="/landing" className="link">
                  Struggles
                </a>
              </h3>
              <p>What took me so long and the keypoints that I break through</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic05.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <a href="/landing" className="link">
                  Knowledge
                </a>
              </h3>
              <p>The knowlegde resouces that benefits my personal growth</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic06.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <a href="/landing" className="link">
                  ChatGPT
                </a>
              </h3>
              <p>Huge assistant that helps a lot in thought process</p>
            </header>
          </article>
        </section>

        {/* <!-- Two --> */}
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>About this site</h2>
            </header>
            <p>
              This is the website I built after reading the article from{" "}
              <a
                href="https://dev.to/itzsaga/portfolio-site-how-to-for-new-developers-537p"
                target="_blank"
              >
                dev.to
              </a>
              . <br />
              Taking the template that design and created by{" "}
              <a href="https://html5up.net/" target="_blank">
                HTML5 UP
              </a>
              .
            </p>
            <ul className="actions">
              <li>
                <a href="/landing" className="button next">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* <!-- Contact --> */}
      <Contact />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
