import { Dialog } from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface Props {
  children: ReactNode;
  title: string;
}
export default function Popup({ children, title }: Props) {
  return (
    <Dialog>
      <DialogTrigger className="button">Popup To Learn More</DialogTrigger>
      <DialogContent>
        <VisuallyHidden.Root>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>Detail for {title} section.</DialogDescription>
          </DialogHeader>
        </VisuallyHidden.Root>
        {children}
        <DialogClose asChild>
          <button type="button" className="button small">
            Close
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
