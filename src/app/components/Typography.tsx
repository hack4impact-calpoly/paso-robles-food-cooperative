import React, { ReactNode } from "react";

interface TypographyProps {
  type: "heading" | "paragraph" | "text";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
  children: ReactNode;
  weight?: "normal" | "bold";
  className?: string;
  [key: string]: any;
}

const sizeClasses: Record<string, string> = {
  xlarge: "text-5xl",
  large: "text-3xl",
  medium: "text-xl",
  small: "text-sm",
  xsmall: "text-xs",
};

const weightClasses: Record<string, string> = {
  normal: "font-normal",
  bold: "font-bold",
};

const Typography: React.FC<TypographyProps> = ({
  type,
  level,
  size = "medium",
  children,
  weight = "normal",
  className = "",
  ...rest
}) => {
  const sizeClass = sizeClasses[size];
  const weightClass = weightClasses[weight];
  const combinedClasses = `${sizeClass} ${weightClass} ${className}`;

  let result: JSX.Element | null = null;
  if (type === "heading" && level) {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    result = (
      <HeadingTag className={combinedClasses} {...rest}>
        {children}
      </HeadingTag>
    );
  } else if (type === "paragraph") {
    result = (
      <p className={combinedClasses} {...rest}>
        {children}
      </p>
    );
  } else if (type === "text") {
    result = (
      <span className={combinedClasses} {...rest}>
        {children}
      </span>
    );
  }

  return result;
};

export default Typography;
