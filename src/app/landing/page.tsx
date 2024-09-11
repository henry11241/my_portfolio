import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

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
                  More Details
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
                <a href="#four" className="button next scrolly">
                  More Details
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Sections with popup detail */}
        <section id="four" className="spotlights">
          {/* Gaming section  */}
          <section>
            <div className="image">
              <img
                src="images/pic08.jpg"
                alt=""
                data-position="center center"
              />
            </div>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Gaming</h3>
                </header>
                <p>This is a brief intro for gaming</p>
                <ul className="actions">
                  <li>
                    <Dialog>
                      <DialogTrigger>Learn More</DialogTrigger>
                      <DialogContent>
                        <VisuallyHidden.Root>
                          <DialogHeader>
                            <DialogTitle>Gaming</DialogTitle>
                            <DialogDescription>
                              Detail for gaming section.
                            </DialogDescription>
                          </DialogHeader>
                        </VisuallyHidden.Root>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <DialogClose asChild>
                          <button type="button">Close</button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Table Tennis section */}
          <section>
            <div className="image">
              <img src="images/pic09.jpg" alt="" data-position="top center" />
            </div>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Table Tennis</h3>
                </header>
                <p>This is a brief intro for Table Tennis.</p>
                <ul className="actions">
                  <li>
                    <Dialog>
                      <DialogTrigger>Learn More</DialogTrigger>
                      <DialogContent>
                        <VisuallyHidden.Root>
                          <DialogHeader>
                            <DialogTitle>Table Tennis</DialogTitle>
                            <DialogDescription>
                              Detail for Table Tennis section.
                            </DialogDescription>
                          </DialogHeader>
                        </VisuallyHidden.Root>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <DialogClose asChild>
                          <button type="button">Close</button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Personal Growth section */}
          <section>
            <div className="image">
              <img src="images/pic10.jpg" alt="" data-position="25% 25%" />
            </div>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Personal Growth</h3>
                </header>
                <p>Learning Resources for Personal Growth</p>
                <ul className="actions">
                  <li>
                    <Dialog>
                      <DialogTrigger>Learn More</DialogTrigger>
                      <DialogContent>
                        <VisuallyHidden.Root>
                          <DialogHeader>
                            <DialogTitle>
                              Learning Resources for Personal Growth
                            </DialogTitle>
                            <DialogDescription>
                              Detail for Learning Resources and Personal Growth
                              section.
                            </DialogDescription>
                          </DialogHeader>
                        </VisuallyHidden.Root>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="inner">
                            <header className="major">
                              <h2>Beyond Coding</h2>
                            </header>
                            <p>
                              I developed a strong interest in table tennis and
                              gaming during my school days, and I found that
                              when I'm passionate about something and want a
                              deeper understanding, I need to actively seek
                              information online. To excel in a competitive
                              environment, I also need to know how to train
                              effectively and stick to a plan while putting in
                              hard work. Pursuing better performance in these
                              hobbies has benefited my personal life in many
                              ways, from physical aspects like fitness,
                              concentration, and reflexes to mental areas like
                              critical thinking, handling pressure, research,
                              and data analysis. If I ever get stuck and can't
                              find a way to improve, I turn to other resources
                              like books and podcasts. Though my self-taught
                              journey covers different topics, they all connect
                              and grow like a spider web. Click the links below
                              to explore more details.
                            </p>
                          </div>
                        </section>
                        <DialogClose asChild>
                          <button type="button">Close</button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>

      {/* <!-- Contact --> */}

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
