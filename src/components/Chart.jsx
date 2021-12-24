import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { EventTracker, HoverState } from "@devexpress/dx-react-chart";

const chartData = [
  { diagnose: "Mental Illness", Predication: "0%" },
  { diagnose: "Anxiety", Predication: "25%" },
  { diagnose: "Compulsive Behavior", Predication: "50%" },
  { diagnose: "Depression", Predication: "75%" },
  { diagnose: "Lack of Concetration", Predication: "65%" },
  { diagnose: "Mood Swing", Predication: "100%" },
  { diagnose: "Obsessive Thinking", Predication: "30%" },
  { diagnose: "Panic Attack", Predication: "100%" },
  { diagnose: "Tiredness", Predication: "30%" },
];

export default class ChartPie extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chartData,
    };
  }

  render() {
    const { chartData } = this.state;

    return (
      <Paper className="chart">
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />
         
          <BarSeries valueField="Predication" argumentField="diagnose" />
          <EventTracker />
          <HoverState />
        </Chart>
      </Paper>
    );
  }
}
