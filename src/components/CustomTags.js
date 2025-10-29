// components/CustomTags.js
import { cn } from "@/lib/utils";

export const P1 = ({ className, children, ...props }) => {
  return (
    <p className={cn("p1", className)} {...props}>
      {children}
    </p>
  );
};

export const P2 = ({ className, children, ...props }) => {
  return (
    <p className={cn("p2", className)} {...props}>
      {children}
    </p>
  );
};

export const P3 = ({ className, children, ...props }) => {
  return (
    <p className={cn("p3", className)} {...props}>
      {children}
    </p>
  );
};
export const P4 = ({ className, children, ...props }) => {
  return (
    <p className={cn("p4", className)} {...props}>
      {children}
    </p>
  );
};
export const P5 = ({ className, children, ...props }) => {
  return (
    <p className={cn("p5", className)} {...props}>
      {children}
    </p>
  );
};
