import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import vietnam from "../../data/vietnam.json";
import { StackedBarChart } from "../chart/StackedBarChart";

type VietNamType = {
  features: {
    type: string;
    properties: { gid: number; code: string; ten_tinh: string };
  }[];
};

const ReactMapSimpleWithPieProvince = () => {
  const VIET_NAM_DATA = vietnam as VietNamType;

  const DATA = {
    features: VIET_NAM_DATA.features.filter((province) =>
      [9, 19, 58].includes(province.properties.gid)
    ),
  };

  const MAP_CHART = [
    {
      name: "Bình Dương",
      color: "rgb(252 165 165)",
      data: [9],
      top: 50,
      left: 110,
    },
    {
      name: "Đồng Nai",
      color: "rgb(217 249 157)",
      data: [19],
      top: 50,
      left: 110,
    },
    {
      name: "Thành phố Hồ Chí Minh",
      color: "rgb(187 247 208)",
      data: [58],
      top: 50,
      left: 110,
    },
  ];

  return (
    <div className="relative">
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        projectionConfig={{
          scale: 22000,
          center: [107, 11],
        }}
        style={{
          width: "700px",
          height: "550px",
        }}
      >
        <Geographies geography={DATA}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const gid = geo?.properties?.gid;
              const region = MAP_CHART.filter((item) =>
                item.data.includes(gid)
              );

              return (
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
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <div className="w-[180px] h-[180px] absolute top-[160px] left-[320px]">
        <StackedBarChart name="Đồng Nai" />
      </div>

      <div className="w-[180px] h-[180px] absolute top-[80px] left-[140px]">
        <StackedBarChart name="Bình Dương" />
      </div>

      <div className="w-[180px] h-[180px] absolute top-[240px] left-[100px]">
        <StackedBarChart name="TP.HCM" />
      </div>
    </div>
  );
};

export default ReactMapSimpleWithPieProvince;
