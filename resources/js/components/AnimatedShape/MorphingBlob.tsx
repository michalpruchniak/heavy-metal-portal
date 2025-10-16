import React from "react";
import { useSpring, animated } from "@react-spring/web";
import * as flubber from "flubber";

const blob1 =
  "M1500,2500C1460,2450 1430,2600 1470,2650C1510,2700 1560,2700 1580,2630C1600,2560 1540,2550 1500,2500Z";

const blob2 =
  "M1474.81,2591.76L1467.06,2597.05L1373.71,2867.29L1373.71,2871.76L1489.96,2760.18L1505.86,2759.79L1578.26,2811.59C1578.26,2811.59 1585.4,2811.95 1585.71,2808.16C1586.01,2804.37 1518.9,2600.16 1518.9,2600.16L1507.36,2589.7L1504.65,2588.44L1503.44,2372.68C1503.44,2372.68 1502.13,2356.34 1515.66,2345.88C1516.56,2345.88 1510.61,2314.25 1516.92,2288.33C1517.28,2288.39 1501.95,2271.56 1505.2,2271.76C1503.75,2271.79 1472.36,2355.13 1472.36,2355.13L1479.71,2366.32L1474.81,2591.76Z";

const morph = flubber.interpolate(blob1, blob2, { maxSegmentLength: 5 });

const MorphingBlob = () => {
  const { t } = useSpring({
    from: { t: 0 },
    to: { t: 1 },
    config: { duration: 500 },
    loop: { reverse: false },
  });

  return (
    <div className="">
      <svg
        width="250"
        height="350"
        viewBox="1300 2200 400 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.path
          d={t.to(morph)}
          fill="#60a5fa"
          stroke="#000"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default MorphingBlob;
