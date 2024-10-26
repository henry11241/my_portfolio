import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function CourseCard({ href, children }: Props) {
  return (
    <div className="col-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="image fit"
      >
        {children}
      </a>
    </div>
  );
}
