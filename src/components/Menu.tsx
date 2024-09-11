export default function Menu() {
  return (
    <nav id="menu">
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/landing">About Me</a>
        </li>
        <li>
          <a href="/generic">Code Learning Path</a>
        </li>
        <li>
          <a href="/elements">Elements</a>
        </li>
      </ul>
      <ul className="actions stacked">
        <li>
          <a href="#" className="button primary fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </nav>
  )
}
