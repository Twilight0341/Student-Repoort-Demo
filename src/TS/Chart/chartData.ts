import { title } from "process";

export const barChartData = {
  labels: [
    "Number strand",
    "Algebra Strand",
    "Measures Strand",
    "Shape and Space Strand",
    "Data Handling Strand",
  ],

  datasets: [
    {
      label: "# of Votes",
      data: [50, 46, 48, 52, 42],
      backgroundColor: [
        "rgba(244, 146, 136, 1)",
        "rgba(255, 219, 85, 1)",
        "rgba(4, 192, 202, 1)",
        "rgba(78, 117, 255, 1)",
        "rgba(196, 108, 228, 1)",
      ],
      borderColor: [
        "rgba(244, 146, 136, 0.2)",
        "rgba(255, 219, 85, 0.2)",
        "rgba(4, 192, 202, 0.2)",
        "rgba(78, 117, 255, 0.2)",
        "rgba(196, 108, 228, 0.2)",
      ],
      borderWidth: 1,
    },
  ],
};

export const barChartSetUp = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
    responsive: true,
    Plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Mathematic / 2020 6MC2 / 2 JUNE 2021",
      },
    },
  },
};

export const lineChartData = {
  labels: [
    "Jan 2021",
    "Feb 2021",
    "March 2021",
    "April 2021",
    "May 2021",
    "June 2021",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [62.5, 93.75, 50, 75, 87.5],
      fill: false,
      backgroundColor: "rgb(244, 99, 132, 1)",
      borderColor: "rgb(244, 99, 132, 1)",
    },
  ],
};

export const lineChartSetUp = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
