import { Tooltip } from "antd";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import vietnam from "../../data/vietnam.json";
import { BarChart } from "../chart/BarChart";

type VietNamType = {
  features: {
    type: string;
    properties: { gid: number; code: string; ten_tinh: string };
  }[];
};

const ReactMapSimpleWithBarChart = () => {
  const VIET_NAM_DATA = vietnam as VietNamType;

  const MAP_CHART = [
    {
      name: "Miền Bắc",
      color: "rgb(34 197 94)",
      data: [
        37, 63, 18, 29, 34, 51, 22, 14, 4, 36, 60, 54, 43, 3, 48, 24, 26, 27,
        30, 39, 41, 53, 62, 23, 6,
      ],
    },
    {
      name: "Miền Trung",
      color: "rgb(6 182 212)",
      data: [
        55, 40, 25, 45, 49, 56, 33, 21, 16, 17, 35, 15, 46, 47, 8, 44, 31, 42,
        11,
      ],
    },
    {
      name: "Miền Nam",
      color: "rgb(165 180 252)",
      data: [
        10, 9, 19, 52, 2, 38, 20, 57, 1, 7, 61, 59, 28, 32, 50, 5, 12, 58, 13,
      ],
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

      <div className="h-[60px] absolute" style={{ top: "60px", left: "150px" }}>
        <BarChart label="Miền Băc" values={[40, 45, 50]} />
      </div>

      <div
        className="h-[60px] absolute"
        style={{ top: "300px", left: "260px" }}
      >
        <BarChart label="Miền Trung" values={[50, 80, 40]} />
      </div>

      <div
        className="h-[60px] absolute"
        style={{ top: "560px", left: "180px" }}
      >
        <BarChart label="Miền Nam" values={[70, 50, 65]} />
      </div>
    </div>
  );
};

export default ReactMapSimpleWithBarChart;
