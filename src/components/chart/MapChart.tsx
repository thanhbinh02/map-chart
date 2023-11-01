import Highcharts from "highcharts";
import HighchartsReact, {
  HighchartsReactProps,
} from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import React, { FC } from "react";

highchartsMap(Highcharts);

type Props = {
  options?: HighchartsReactProps;
};

const MapChart: FC<Props> = ({ options }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"mapChart"}
    />
  );
};

export default React.memo(MapChart);
