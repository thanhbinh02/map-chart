import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { VIET_NAM_MAP } from "../data/vietNamMap";
import { BarChart } from "./chart/BarChart";

highchartsMap(Highcharts);

export const HighChartWithBarChart = () => {
  const options = {
    chart: {
      map: VIET_NAM_MAP,
      width: 500,
      height: 700,
    },

    title: {
      text: VIET_NAM_MAP.title,
    },

    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ["hc-key", "code"],

        states: {
          inactive: { opacity: 1 },
        },
      },
    },

    series: MAP_CHART,

    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="relative">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />

      <div className="h-[60px] absolute" style={{ top: "80px", left: "100px" }}>
        <BarChart label="Miền Băc" values={[40, 45, 50]} />
      </div>

      <div
        className="h-[60px] absolute"
        style={{ top: "300px", left: "240px" }}
      >
        <BarChart label="Miền Trung" values={[50, 80, 40]} />
      </div>

      <div
        className="h-[60px] absolute"
        style={{ top: "520px", left: "140px" }}
      >
        <BarChart label="Miền Nam" values={[70, 50, 65]} />
      </div>
    </div>
  );
};

const MAP_CHART = [
  {
    name: "Miền Bắc",
    color: "rgb(34 197 94)",
    data: [
      "18",
      "15",
      "11",
      "17",
      "12",
      "14",
      "2",
      "4",
      "vn-307",
      "20",
      "8",
      "19",
      "25",
      "24",
      "22",
      "1",
      "30",
      "31",
      "33",
      "36",
      "37",
      "34",
      "26",
    ].map((code) => ({
      code,
      color: "rgb(34 197 94)",
    })),
  },
  {
    name: "Miền Trung",
    color: "rgb(6 182 212)",
    data: [
      "38",
      "40",
      "42",
      "44",
      "45",
      "46",
      "62",
      "64",
      "66",
      "67",
      "68",
      "48",
      "49",
      "51",
      "52",
      "54",
      "56",
      "58",
      "60",
      "hs01",
      "truongsa",
    ].map((code) => ({
      code,
      color: "rgb(6 182 212)",
    })),
  },
  {
    name: "Miền Nam",
    color: "rgb(165 180 252)",
    data: [
      "70",
      "74",
      "vn-331",
      "72",
      "77",
      "80",
      "87",
      "82",
      "89",
      "83",
      "86",
      "84",
      "93",
      "91",
      "94",
      "95",
      "96",
      "79",
      "92",
    ].map((code) => ({
      code,
      color: "rgb(165 180 252)",
    })),
  },
];
