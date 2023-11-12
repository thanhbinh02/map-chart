import { Tabs, TabsProps } from "antd";
import "./App.css";
import {
  HighChartSelectProvince,
  HighChartWithBarChart,
  HighChartWithPieProvince,
  HighChartWithPieRegion,
  ReactMapSimpleSelectProvince,
  ReactMapSimpleWithBarChart,
  ReactMapSimpleWithPieProvince,
  ReactMapSimpleWithPieRegion,
} from "./components";

function App() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "HighChart",
      children: (
        <div>
          <div>
            <p>Click chọn từng tỉnh sẽ có biểu đồ Stacked Bar Char khác nhau</p>
            <HighChartSelectProvince />
          </div>

          <div className="mt-5">
            <p>Biểu đồ Bar Chart ứng với 3 miền</p>
            <HighChartWithBarChart />
          </div>

          <div className="mt-5">
            <p>Biểu đồ Pie Chart ứng với 8 vùng</p>
            <HighChartWithPieRegion />
          </div>

          <div className="mt-5">
            <p>Biểu đồ Pie Chart ứng với từng tỉnh</p>
            <HighChartWithPieProvince />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "React Simple Map",
      children: (
        <div>
          <div>
            <p>Click chọn từng tỉnh sẽ có biểu đồ Stacked Bar Char khác nhau</p>
            <ReactMapSimpleSelectProvince />
          </div>

          <div className="mt-5">
            <p>Biểu đồ Bar Chart ứng với 3 miền</p>
            <ReactMapSimpleWithBarChart />
          </div>

          <div>
            <p>Biểu đồ Pie Chart ứng với 8 vùng</p>
            <ReactMapSimpleWithPieRegion />
          </div>

          <div className="mt-5">
            <p>Biểu đồ Pie Chart ứng với từng tỉnh</p>
            <ReactMapSimpleWithPieProvince />
          </div>
        </div>
      ),
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
}

export default App;
