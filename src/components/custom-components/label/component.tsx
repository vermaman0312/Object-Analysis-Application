import React from "react";
import { cn } from "../../../utils/cn";

type props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Label = ({ ...props }: props) => {
  return (
    <p
      onClick={props.onClick}
      className={cn(
        `text-sm font-display font-medium text-neutral-700 dark:text-neutral-200 select-none ${
          props.onClick && "cursor-pointer"
        }`,
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export default Label;
