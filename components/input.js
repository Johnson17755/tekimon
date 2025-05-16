import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef((props, ref) => {
  const { className, type, ...rest } = props;

  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full border border-[rgba(89,103,128,1)] rounded-3xl border-input px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});
Input.displayName = "Input";

export { Input };
