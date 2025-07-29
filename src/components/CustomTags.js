// components/CustomTags.js
import clsx from "clsx";

export const P1 = ({ className, children, ...props }) => {
  return (
    <p className={clsx("p1", className)} {...props}>
      {children}
    </p>
  );
};

export const P2 = ({ className, children, ...props }) => {
  return (
    <p className={clsx("p2", className)} {...props}>
      {children}
    </p>
  );
};

export const P3 = ({ className, children, ...props }) => {
  return (
    <p className={clsx("p3", className)} {...props}>
      {children}
    </p>
  );
};
export const P4 = ({ className, children, ...props }) => {
  return (
    <p className={clsx("p4", className)} {...props}>
      {children}
    </p>
  );
};
export const P5 = ({ className, children, ...props }) => {
  return (
    <p className={clsx("p5", className)} {...props}>
      {children}
    </p>
  );
};
