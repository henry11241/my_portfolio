"use client";

import { Dialog } from "@radix-ui/react-dialog";
import { ReactNode, useEffect, useState } from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface Props {
  children: ReactNode;
  title: string;
}
export default function Popup({ children, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const header = document.querySelector("#header") as HTMLElement | null;
    if (header) {
      if (isOpen) {
        header.style.display = "none"; // Hide the header when the popup is open
      } else {
        header.style.display = ""; // Reset the display property when popup is closed
      } 
    }
  }, [isOpen]);

  return (
    <Dialog>
      <DialogTrigger className="button" onClick={() => setIsOpen(true)}>
        Popup To Learn More
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden.Root>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>Detail for {title} section.</DialogDescription>
          </DialogHeader>
        </VisuallyHidden.Root>
        {children}
        <DialogClose asChild>
          <button
            type="button"
            className="button small"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
