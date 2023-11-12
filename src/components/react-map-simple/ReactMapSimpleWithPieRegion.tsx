import { Tooltip } from "antd";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import vietnam from "../../data/vietnam.json";
import RePieChart from "../chart/RePieChart";

type VietNamType = {
  features: {
    type: string;
    properties: { gid: number; code: string; ten_tinh: string };
  }[];
};

const ReactMapSimpleWithPieRegion = () => {
  const VIET_NAM_DATA = vietnam as VietNamType;

  const MAP_CHART = [
    {
      name: "Tây Bắc Bộ",
      color: "rgb(252 165 165)",
      data: [27, 63, 18, 29, 34, 51],
      top: 50,
      left: 110,
    },
    {
      name: "Đông Bắc Bộ",
      color: "rgb(254 215 170)",
      data: [22, 14, 4, 36, 60, 54, 43, 3, 48],
      top: 30,
      left: 190,
    },
    {
      name: "Đồng bằng sông Hồng",
      color: "rgb(217 249 157)",
      data: [24, 26, 27, 30, 39, 41, 53, 62, 23, 6],
      top: 90,
      left: 210,
    },
    {
      name: "Bắc Trung Bộ",
      color: "rgb(187 247 208)",
      data: [55, 40, 25, 45, 49, 56],
      top: 250,
      left: 220,
    },
    {
      name: "Nam Trung Bộ",
      color: "rgb(153 246 228)",
      data: [15, 46, 47, 8, 44, 31, 42, 11],
      top: 450,
      left: 300,
    },
    {
      name: "Tây Nguyên",
      color: "rgb(196 181 253)",
      data: [33, 21, 16, 17, 35],
      top: 430,
      left: 350,
    },
    {
      name: "Đông Nam Bộ",
      color: "rgb(161 161 170)",
      data: [10, 9, 19, 52, 2, 58],
      top: 520,
      left: 240,
    },
    {
      name: "Đồng bằng sông Cửu Long",
      color: "rgb(203 213 225)",
      data: [38, 20, 57, 1, 7, 61, 59, 28, 32, 50, 5, 12, 13],
      top: 580,
      left: 200,
    },
  ];

  return (
    <div className="relative">
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
              const gid = geo?.properties?.gid;
              const region = MAP_CHART.filter((item) =>
                item.data.includes(gid)
              );

              return (
                <Tooltip placement="top" title={geo.properties.ten_tinh}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
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
                    fill={region.length > 0 ? region[0].color : "#EEE"}
                  />
                </Tooltip>
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {MAP_CHART.map((region, index) => {
        return (
          <div
            key={index}
            className="absolute"
            style={{ top: `${region.top}px`, left: `${region.left}px` }}
          >
            <RePieChart />
          </div>
        );
      })}
    </div>
  );
};

export default ReactMapSimpleWithPieRegion;
