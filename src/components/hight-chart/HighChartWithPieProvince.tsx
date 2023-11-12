import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import { VIET_NAM_MAP } from "../../data/vietNamMap";
import { StackedBarChart } from "../chart/StackedBarChart";

highchartsMap(Highcharts);

function HighChartWithPieProvince() {
  const options = {
    chart: {
      map: VIET_NAM_MAP,
      width: 500,
      height: 700,
    },

    title: {
      text: "3 tỉnh kinh tế trọng điểm phía Nam",
    },

    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ["hc-key", "code"],
        tooltip: {
          headerFormat: "",
          pointFormat: "{point.name}",
        },

        states: {
          inactive: { opacity: 1 },
        },
      },
    },

    series: MAP_CHART,

    legend: {
      accessibility: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />

      <div className="w-[180px] h-[180px] absolute top-[230px] left-[240px]">
        <StackedBarChart name="Đồng Nai" />
      </div>

      <div className="w-[180px] h-[180px] absolute top-[100px] left-[40px]">
        <StackedBarChart name="Bình Dương" />
      </div>

      <div className="w-[180px] h-[180px] absolute top-[340px] left-[10px]">
        <StackedBarChart name="TP.HCM" />
      </div>
    </div>
  );
}

export default HighChartWithPieProvince;

const COLOR = ["rgb(147 197 253)", "rgb(167 139 250)", "rgb(110 231 183)"];

const MAP_CHART = [
  {
    name: "Đồng Nai",
    color: COLOR[0],
    data: [
      {
        code: "vn-331",
        color: COLOR[0],
      },
    ],
  },
  {
    name: "Hồ Chí Minh",
    color: COLOR[1],
    data: [
      {
        code: "79",
        color: COLOR[1],
      },
    ],
  },
  {
    name: "Bình Dương",
    color: COLOR[2],
    data: [
      {
        code: "74",
        color: COLOR[2],
      },
    ],
  },
];
