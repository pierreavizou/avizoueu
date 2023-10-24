"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRef, useState } from "react";

export default function EmailButton() {
  const [copied, setCopied] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const timeoutRef = useRef<number | null>();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("hi@avizou.eu");
    setCopied(true);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip disableHoverableContent open={tooltipOpen}>
        <TooltipTrigger asChild>
          <p
            className="mt-14 inline-block cursor-pointer rounded bg-blue-700 p-3 text-lg selection:bg-blue-300 hover:bg-blue"
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
          >
            hi<span className="hidden">&nbsp;</span>@
            <span className="hidden">&nbsp;</span>avizou
            <span className="hidden">&nbsp;</span>.
            <span className="hidden">&nbsp;</span>eu
          </p>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p>{copied ? "Copied" : "Copy"} to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
