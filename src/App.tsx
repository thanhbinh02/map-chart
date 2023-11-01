import "./App.css";
import HighChartSelectProvince from "./components/HighChartSelectProvince";
import { HighChartWithBarChart } from "./components/HighChartWithBarChart";
import HighChartWithPieProvince from "./components/HighChartWithPieProvince";
import HighChartWithPieRegion from "./components/HighChartWithPieRegion";

function App() {
  return (
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
  );
}

export default App;