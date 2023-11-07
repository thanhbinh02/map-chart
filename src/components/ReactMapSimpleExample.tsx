// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup,
// } from "react-simple-maps";

// import vnTopo from "./data/topoJSON.json";

// const ReactMapSimpleExample = () => {
//   return (
//     <ComposableMap projection="geoAlbersUsa">
//       <Geographies geography={vnTopo}>
//         {({ geographies }) => {
//           return geographies.map(
//             (geography, i) =>
//               geography.id !== "ATA" && (
//                 <Geography
//                   key={i}
//                   geography={geography}
//                   style={{
//                     default: {
//                       fill: "#808080",
//                       stroke: "#212529",
//                       strokeWidth: 0.75,
//                       outline: "none",
//                     },
//                     hover: {
//                       fill: "#e6dfd9",
//                       stroke: "#212529",
//                       strokeWidth: 0.75,
//                       outline: "none",
//                     },
//                   }}
//                 />
//               )
//           );
//         }}
//       </Geographies>
//     </ComposableMap>
//   );
// };

// export default ReactMapSimpleExample;

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import vietnam from "./data/vietnam.json";
import { Tooltip } from "antd";

const ReactMapSimpleExample = () => {
  return (
    <ComposableMap
      data-tip=""
      projection="geoMercator"
      projectionConfig={{
        scale: 5000,
        center: [105, 15],
      }}
      style={{
        width: "400px",
        height: "800px",
      }}
    >
      <Geographies geography={vietnam}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Tooltip placement="top" title={geo.properties.ten_tinh}>
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  console.log("Enter");
                }}
                onMouseLeave={() => {
                  console.log("Leave");
                }}
                style={{
                  default: {
                    fill: "#808080",
                    stroke: "white",
                    strokeWidth: 0.25,
                    outline: "none",
                  },
                  hover: {
                    fill: "#e6dfd9",
                    stroke: "#212529",
                    strokeWidth: 0.25,
                    outline: "none",
                  },
                }}
              />
            </Tooltip>
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default ReactMapSimpleExample;
