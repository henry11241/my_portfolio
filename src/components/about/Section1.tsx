import AnimateOnView from "../ui/AnimationOnView";

export default function Section1() {
  return (
    <section id="one">
      <div className="inner">
        <AnimateOnView>
          <header className="major">
            <h2>Career Shift</h2>
          </header>
          <p>
            I graduated from National Taiwan Ocean University with a
            bachelor&apos;s degree in marine engineering. I was previously
            recruited by Evergreen Aviation Technologies Corp. as an{" "}
            <b>aircraft maintenance engineer</b>. However, due to the high risk
            of injury and limited career flexibility, I decided to explore a
            different field. I developed an interest in computer science, which
            I couldn&apos;t pursue in college due to my exam results. Now,
            I&apos;m on a self-taught journey to become a software engineer.
          </p>
        </AnimateOnView>
      </div>
    </section>
  );
}
