import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import vietnam from "../../data/vietnam.json";
import { scaleQuantile } from "d3-scale";
import LineBarAreaComposedChart from "../chart/LineBarAreaComposedChart";
import { useState } from "react";
import { Tooltip } from "antd";

type VietNamType = {
  features: {
    type: string;
    properties: { gid: number; code: string; ten_tinh: string };
  }[];
};

const ReactMapSimpleSelectProvince = () => {
  const VIET_NAM_DATA = vietnam as VietNamType;
  const [item, setItem] = useState();

  const colorScale = scaleQuantile<string>()
    .domain(VIET_NAM_DATA.features.map((d) => Number(d.properties.gid)))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618",
    ]);

  return (
    <div className="flex">
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
        <Geographies geography={VIET_NAM_DATA}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = geo?.properties?.gid;
              return (
                <Tooltip placement="top" title={geo.properties.ten_tinh}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      setItem(geo.properties.ten_tinh);
                    }}
                    style={{
                      default: {
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
                    fill={cur ? colorScale(cur) : "#EEE"}
                  />
                </Tooltip>
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {item && (
        <div className="w-[600px] h-[400px] flex items-center">
          <LineBarAreaComposedChart name={item} />
        </div>
      )}
    </div>
  );
};

export default ReactMapSimpleSelectProvince;
