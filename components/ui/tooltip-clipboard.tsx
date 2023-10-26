"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useCallback, useRef, useState } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  text: string;
};

export default function TooltipClipboard({
  text,
  children,
  className,
  ...rest
}: Props) {
  const [copied, setCopied] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const timeoutRef = useRef<number | null>();

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  }, [text]);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip disableHoverableContent open={tooltipOpen}>
        <TooltipTrigger asChild>
          <div
            className={cn("cursor-pointer", className)}
            onClick={copyToClipboard}
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
              setCopied(false);
              setTooltipOpen(true);
            }}
            onMouseLeave={() => {
              setTooltipOpen(false);
              timeoutRef.current = setTimeout(
                () => setCopied(false),
                1000,
              ) as unknown as number;
            }}
            {...rest}
          >
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p>{copied ? "Copied" : "Copy"} to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
