import { cn } from "@/lib/utils"

interface Props {
  style?: string,
  alt?: boolean,
}

export default function Header({style, alt} : Props) {
  const styleFallback = style || ""
  return (
    <header
      id="header"
      className={cn({
        alt: alt,
        [styleFallback]: style,
      })}
    >
      <a href="/" className="logo">
        <strong>Henry</strong> <span>Showcasing My Self-Taught Journey</span>
      </a>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>
  )
}


