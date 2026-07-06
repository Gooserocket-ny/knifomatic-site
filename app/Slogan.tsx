"use client";
import { useEffect, useRef } from "react";

// Sets the slogan SVG's viewBox to the text's natural width once, so the SVG
// (width:91% of the wordmark) then scales with the window via CSS, keeping
// normal letter spacing — mirrors the app login screen's adjustsFontSizeToFit.
export function Slogan() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const t = svg.querySelector("text");
    const size = () => {
      if (!t) return;
      const len = (t as SVGTextContentElement).getComputedTextLength();
      if (len > 0) svg.setAttribute("viewBox", `0 0 ${Math.ceil(len)} 135`);
    };
    size();
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(size);
    }
  }, []);
  return (
    <svg
      ref={ref}
      className="slogan"
      viewBox="0 0 1800 135"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Your Knife Collection. Engineered."
    >
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central">
        YOUR KNIFE COLLECTION. ENGINEERED.
      </text>
    </svg>
  );
}
