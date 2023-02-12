import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsSankey from "highcharts/modules/sankey";
import data from "./data.json";
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsSankey(Highcharts);

const getOptions = (type: any) => ({
  chart: {
    zoomType: "x",
    height: 80,
  },
  credits: {
    enabled: false,
  },
  navigation: {
    buttonOptions: {
      enabled: false,
    },
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    type: "",
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
  colors: ["#00A600"],
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, "#79FF79"],
          [1, "#Ffffff"],
        ],
      },
      marker: {
        radius: 2,
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      threshold: null,
    },
  },

  series: [
    {
      type: "area",
      name: "",
      data: data,
    },
  ],
});

const Graph = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={getOptions("sankey")} />{" "}
    </div>
  );
};

export default Graph;
