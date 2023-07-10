import React from "react";

function Search() {
  return (
    <svg
      className="fill-white"
      width="20"
      height="20"
      viewBox="0 0 90 90"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="90" height="90" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_114_2" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_114_2"
          fill="#fff"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default Search;
