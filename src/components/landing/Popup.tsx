import { Dialog } from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface ContentProps {
  imgSrc: string;
  title: string;
  description: string;
  dataPosition: string;
}

interface Props {
  children: ReactNode;
  content: ContentProps;
}
export default function Popup({ children, content }: Props) {
  const { imgSrc, title, description, dataPosition } =
    content;

  return (
    <section>
      <div className="image">
        <img src={imgSrc} alt={title} data-position={dataPosition} />
      </div>
      <div className="content">
        <div className="inner">
          <header className="major">
            <h3>{title}</h3>
          </header>
          <p>{description}</p>
          <ul className="actions">
            <li>
              <Dialog>
                <DialogTrigger>Learn More</DialogTrigger>
                <DialogContent>
                  <VisuallyHidden.Root>
                    <DialogHeader>
                      <DialogTitle>{title}</DialogTitle>
                      <DialogDescription>
                        Detail for {title} section.
                      </DialogDescription>
                    </DialogHeader>
                  </VisuallyHidden.Root>
                  {children}
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
  );
}
