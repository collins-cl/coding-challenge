import { useState } from "react";
import ChartsDummyText from "../Components/ChartsDummy";

const useCharts = () => {
  const Topcharts = ChartsDummyText;

  const chart = Topcharts.map();

  return {
    chart
  };
};

export default useCharts;
