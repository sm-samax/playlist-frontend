import React from "react";
import { ReactComponent as SVGImage } from "../assets/download.svg";

export default function ResponsiveSVG(props) {
  return (
    <div className="svg-container">
      <SVGImage className="ico" />
    </div>
  );
}
