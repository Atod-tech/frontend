// THIS FILE IS CREATED TO MAINTAIN CONSISTENCY ACROSS SOME TAGS
import { classNames } from "@src/helpers";

interface Typography extends RcProps {
  className?: string;
}

export const HeadingLevel3 = ({ children, className = "" }: Typography) => (
  <h3 className={classNames("text-gray-700 text-xl font-medium", className)}>
    {children}
  </h3>
);

export const HeadingLevel4 = ({ children, className = "" }: Typography) => (
  <h4
    className={classNames(
      "text-gray-700 text-base font-semibold",
      className ? className : "my-2" // default styling
    )}
  >
    {children}
  </h4>
);

export const HeadingLevel2 = ({ children, className = "" }: Typography) => (
  <h2
    className={classNames(
      "text-2xl text-center font-semibold leading-7 text-gray-900 lg:text-left lg:text-2xl lg:mt-20",
      className
    )}
  >
    {children}
  </h2>
);
