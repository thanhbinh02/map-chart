import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import { VIET_NAM_MAP } from "../data/vietNamMap";

highchartsMap(Highcharts);

function HighChartWithPieRegion() {
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
        tooltip: {
          headerFormat: "",
          pointFormat: "{point.name}",
        },

        states: {
          inactive: { opacity: 1 },
        },
      },

      pie: {
        borderColor: "rgba(255,255,255,0.4)",
        borderWidth: 1,
        clip: true,
        dataLabels: {
          enabled: false,
        },
        states: {
          hover: {
            halo: {
              size: 0,
            },
          },

          inactive: {
            opacity: 1,
          },
        },

        accessibility: {
          enabled: false,
        },

        size: "40",
        tooltip: {
          headerFormat: "",
          pointFormatter() {
            const region = this as any;

            const hoverVotes = region.hoverVotes;

            return (
              "<b>" +
              region.series.name +
              "<br/>" +
              [
                ["Trồng trọt", region.series.processedYData[0], COLOR[0]],
                ["Chăn nuôi", region.series.processedYData[1], COLOR[1]],
                ["Thủy Sản", region.series.processedYData[2], COLOR[2]],
                ["Lâm Nghiệp", region.series.processedYData[3], COLOR[3]],
              ]
                .sort((a, b) => b[1] - a[1])
                .map(
                  (line) =>
                    '<span style="color:' +
                    line[2] +
                    '">\u25CF</span> ' +
                    (line[0] === hoverVotes ? "<b>" : "") +
                    line[0] +
                    ": " +
                    Highcharts.numberFormat(line[1], 0) +
                    (line[0] === hoverVotes ? "</b>" : "") +
                    "<br/>"
                )
                .join("") +
              "<hr/>Total: " +
              100
            );
          },
        },
      },
    },

    series: SERIES,

    legend: {
      accessibility: {
        enabled: false,
      },
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"mapChart"}
    />
  );
}

export default HighChartWithPieRegion;

const COLOR = [
  "rgba(74,131,240,0.80)",
  "rgba(220,71,71,0.80)",
  "rgba(240,190,50,0.80)",
  "rgba(90,200,90,0.80)",
];

const PIE_DATA = {
  TAY_BAC_BO: {
    data: [25, 25, 25, 25],
    title: "Tây Bắc Bộ",
    center: [100, 50],
  },
  DONG_BAC_BO: {
    data: [20, 20, 30, 30],
    title: "Đông Bắc Bộ",
    center: [175, 20],
  },
  DONG_BANG_SONG_HONG: {
    data: [15, 15, 35, 35],
    title: "Đồng Bằng Sông Hồng",
    center: [175, 80],
  },
  BAC_TRUNG_BO: {
    data: [10, 10, 40, 40],
    title: "Bắc Trung Bộ",
    center: [160, 160],
  },
  NAM_TRUNG_BO: {
    data: [5, 5, 45, 45],
    title: "Nam Trung Bộ",
    center: [290, 350],
  },
  TAY_NGUYEN: {
    data: [30, 30, 10, 30],
    title: "Tây Nguyên",
    center: [250, 380],
  },
  DONG_NAM_BO: {
    data: [40, 30, 15, 15],
    title: "Đông Nam Bộ",
    center: [200, 420],
  },
  DONG_BANG_SONG_CUU_LONG: {
    data: [5, 5, 85, 5],
    title: "Đồng Bằng Sông Cửu Long",
    center: [150, 500],
  },
};

const PIE_CHART = Object.keys(PIE_DATA).map((key) => {
  const regionData = PIE_DATA[key];
  const categories = ["Trồng trọt", "Chăn nuôi", "Thủy sản", "Lâm nghiệp"];

  return {
    type: "pie",
    name: regionData.title,
    center: regionData.center,
    zIndex: 9999,
    data: categories.map((category, i) => ({
      name: category,
      y: regionData.data[i],
      color: COLOR[i],
    })),
    states: {
      inactive: {
        enabled: false,
      },
    },
    accessibility: {
      enabled: false,
    },
  };
});

const MAP_CHART = [
  {
    name: "Tây Bắc Bộ",
    color: "rgb(252 165 165)",
    data: ["18", "15", "11", "17", "12", "14"].map((code) => ({
      code,
      color: "rgb(252 165 165)",
    })),
  },

  {
    name: "Đông Bắc Bộ",
    color: "rgb(254 215 170)",
    data: ["2", "4", "vn-307", "20", "8", "19", "25", "24", "22"].map(
      (code) => ({ code, color: "rgb(254 215 170)" })
    ),
  },
  {
    name: "Đồng bằng sông Hồng",
    color: "rgb(217 249 157)",
    data: ["27", "35", "1", "30", "31", "33", "36", "37", "34", "26"].map(
      (code) => ({ code, color: "rgb(217 249 157)" })
    ),
  },
  {
    name: "Bắc Trung Bộ",
    color: "rgb(187 247 208)",
    data: ["38", "40", "42", "44", "45", "46"].map((code) => ({
      code,
      color: "rgb(187 247 208)",
    })),
  },
  {
    name: "Nam Trung Bộ",
    color: "rgb(153 246 228)",
    data: [
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
      color: "rgb(153 246 228)",
    })),
  },
  {
    name: "Tây Nguyên",
    color: "rgb(196 181 253)",
    data: ["62", "64", "66", "67", "68"].map((code) => ({
      code,
      color: "rgb(196 181 253)",
    })),
  },
  {
    name: "Đông Nam Bộ",
    color: "rgb(161 161 170)",
    data: ["70", "74", "vn-331", "72", "77", "79"].map((code) => ({
      code,
      color: "rgb(161 161 170)",
    })),
  },
  {
    name: "Đồng bằng sông Cửu Long",
    color: "rgb(203 213 225)",
    data: [
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
      "92",
    ].map((code) => ({
      code,
      color: "rgb(203 213 225)",
    })),
  },
];

const SERIES = [...MAP_CHART, ...PIE_CHART];
