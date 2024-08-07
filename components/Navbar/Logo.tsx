interface proptypes {
  className: string;
}

const SVGComponent = (props: proptypes) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 750 300"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1,.cls-4{fill:var(--dark);}.cls-2{font-size:286.71px;}.cls-2,.cls-3{fill:#fffff1;}.cls-2,.cls-4,.cls-6{font-family:Anton-Regular, Anton;}.cls-4,.cls-6{font-size:65.63px;}.cls-5,.cls-6{fill:#6a6aff;}"
        }
      </style>
    </defs>
    <rect className="cls-1" width={750} height={300} />
    <text className="cls-2" transform="translate(127.6 275.7) scale(0.96 1)">
      {"ALEX"}
    </text>
    <rect className="cls-3" x={18.67} y={23} width={98.27} height={257.5} />
    <rect className="cls-3" x={631.58} y={23} width={97.01} height={257.5} />
    <text className="cls-4" transform="matrix(0, -1.61, 1, 0, 95.13, 242.11)">
      {"WHY"}
    </text>
    <path
      className="cls-1"
      d="M667.83,180.77V159q0-6.69,2.56-10.88a22.71,22.71,0,0,1,7.1-7.11,61.57,61.57,0,0,0,6.7-5.54,29,29,0,0,0,5.52-7.21,18.94,18.94,0,0,0,2.22-9.2q0-7.22-4-10.67T676.79,105a14.32,14.32,0,0,0-8.75,2.67,21.08,21.08,0,0,0-5.78,6.43,29.6,29.6,0,0,0-3,7L641,112.19a25.57,25.57,0,0,1,1.69-5A44.77,44.77,0,0,1,647,99.64a42.59,42.59,0,0,1,7.35-8,37.26,37.26,0,0,1,25-8.88,42,42,0,0,1,18.67,4A30.62,30.62,0,0,1,710.82,98a31.9,31.9,0,0,1,4.61,17.35A32.89,32.89,0,0,1,712,130.9a43.55,43.55,0,0,1-8.49,11.35q-5,4.75-9.44,8.2a15,15,0,0,0-5.61,6.59,27.47,27.47,0,0,0-1.44,9.83v13.9Zm9.83,45a12.63,12.63,0,0,1-10-5,18.19,18.19,0,0,1-4.17-12,18.49,18.49,0,0,1,4.17-12.23,12.63,12.63,0,0,1,10-5,12.77,12.77,0,0,1,10.18,5A18.44,18.44,0,0,1,692,208.69a18.14,18.14,0,0,1-4.18,12A12.77,12.77,0,0,1,677.66,225.73Z"
    />
  </svg>
);
export default SVGComponent;
