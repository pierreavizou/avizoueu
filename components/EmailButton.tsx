import TooltipClipboard from "./ui/tooltip-clipboard";

export default function EmailButton() {
  return (
    <TooltipClipboard
      text="contact@avizou.eu"
      className="mt-14 inline-block rounded bg-blue-700 p-3 text-lg transition-transform selection:bg-blue-300 hover:bg-blue active:scale-90"
    >
      contact<span className="hidden">&nbsp;</span>@
      <span className="hidden">&nbsp;</span>avizou
      <span className="hidden">&nbsp;</span>.
      <span className="hidden">&nbsp;</span>eu
    </TooltipClipboard>
  );
}
