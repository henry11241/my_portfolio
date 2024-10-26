import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import Image from "next/image";
import bg_pic01 from "../../public/images/bg_pic01.jpg";
import bg_pic02 from "../../public/images/bg_pic02.jpg";
import bg_pic03 from "../../public/images/bg_pic03.jpg";
import bg_pic04 from "../../public/images/bg_pic04.jpg";
import bg_pic05 from "../../public/images/bg_pic05.jpg";
import bg_pic06 from "../../public/images/bg_pic06.jpg";

export const metadata: Metadata = {
  title: "Home Page",
  description: 'My portfolio using the template from "Forty by HTML5 UP"',
};

export default function Page() {
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
              <br />
              These are the topics I&apos;m going to talk about.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  Get Stated
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
              <Image src={bg_pic01} alt="Picture of the Courses" />
            </span>
            <header className="major">
              <h3>
                <a href="/about" className="link">
                  Courses
                </a>
              </h3>
              <p>The online courses I take</p>
            </header>
          </article>
          <article>
            <span className="image">
              <Image src={bg_pic02} alt="Picture of the Career Path" />
            </span>
            <header className="major">
              <h3>
                <a href="/about" className="link">
                  Career Path
                </a>
              </h3>
              <p>College major and previous job</p>
            </header>
          </article>
          <article>
            <span className="image">
              <Image src={bg_pic03} alt="Picture of the Sports and Gaming" />
            </span>
            <header className="major">
              <h3>
                <a href="/about" className="link">
                  Sports and Gaming
                </a>
              </h3>
              <p>
                Where the self-taught journey begins
                <br />
                And what shapes my personality
              </p>
            </header>
          </article>
          <article>
            <span className="image">
              <Image src={bg_pic04} alt="Picture of the Struggles" />
            </span>
            <header className="major">
              <h3>
                <a href="/about" className="link">
                  Struggles
                </a>
              </h3>
              <p>What took me so long and the keypoints that I break through</p>
            </header>
          </article>
          <article>
            <span className="image">
              <Image src={bg_pic05} alt="Picture of the Knowledge" />
            </span>
            <header className="major">
              <h3>
                <a href="/about" className="link">
                  Knowledge
                </a>
              </h3>
              <p>The knowlegde resouces that benefits my personal growth</p>
            </header>
          </article>
          <article>
            <span className="image">
              <Image src={bg_pic06} alt="Picture of the ChatGPT" />
            </span>
            <header className="major">
              <h3>
                <a href="/about" className="link">
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
              This is the website I built after reading an article on{" "}
              <a
                href="https://dev.to/itzsaga/portfolio-site-how-to-for-new-developers-537p"
                target="_blank"
                rel="noopener noreferrer"
              >
                dev.to
              </a>
              . <br />I used a template designed and created by{" "}
              <a
                href="https://html5up.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML5 UP
              </a>{" "}
              <br />
              then restructured it using{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>{" "}
              with
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                shadcn/ui
              </a>
              .
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://github.com/henry11241/my_portfolio"
                  className="button next"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Details in Github Repo
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
