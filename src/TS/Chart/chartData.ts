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
      label: ["# of Votes"],
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
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Mathematic / 2020 6MC2 / 2 JUNE 2021",
    },
    fontSize: "88",
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
      // label: "# of Votes",
      data: [62.5, 93.7, 65, 75, 87.5, 90],
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
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      position: "top",
      text: "Mathematic / 2020 6MC2 / 2 JUNE 2021",
    },
  },
};

export const radarChartData = {
  labels: [
    "Numeracy",
    "Problem Solving",
    "Creativity",
    "Critical Thinking",
    "Collaboration Skill",
    "Information Technology",
  ],
  datasets: [
    {
      label: ["# of Votes"],
      data: [1, 2, 3, 4, 5, 6],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export const radarChartSetUp = {
  scale: {
    ticks: { beginAtZero: true },
    y: {
      suggestedMax: 0,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Question Type Performance",
      fontSize: "22",
    },
  },
};

export const barChartData2 = {
  labels: [
    "Columnar",
    "Multiple Choices",
    "Fill in the blank",
    "Calculation",
    "Chart",
  ],

  datasets: [
    {
      //label: "# of Votes",
      data: [100, 80, 90, 85, 98],
      backgroundColor: [
        "rgba(108, 229, 233, 1)",
        "rgba(108, 229, 233, 1)",
        "rgba(108, 229, 233, 1)",
        "rgba(108, 229, 233, 1)",
        "rgba(108, 229, 233, 1)",
      ],
      borderColor: [
        "rgba(108, 229, 233, 1)",
        "rgba(108, 229, 233, 1)",
        "rgba(108, 229, 233, 1)",
        "rgba(108, 229, 233, 1)",
        "rgba(108, 229, 233, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const barChartSetUp2 = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Question Type Performance",
    },
  },
};

export const doughnutChartData = {
  labels: ["NS09", "MS02", "MS11", "SS03", "SS04"],
  datasets: [
    {
      label: "# of Votes",
      data: [19.1, 20.6, 14.7, 22.1, 23.5],
      backgroundColor: [
        "rgba(7, 187, 201, 1)",
        "rgba(0, 152, 189, 1)",
        "rgba(3, 106, 159, 1)",
        "rgba(0, 64, 126, 1)",
        "rgba(15, 26, 82, 1)",
      ],
      borderColor: [
        "rgba(7, 187, 201, 1)",
        "rgba(0, 152, 189, 1)",
        "rgba(3, 106, 159, 1)",
        "rgba(0, 64, 126, 1)",
        "rgba(15, 26, 82, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const doughnutChartSetUp = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Units for Advancement",
    },
  },
};

export const doughnutChartData2 = {
  labels: ["AS02", "NS07", "NS10", "DH01", "DH04"],
  datasets: [
    {
      label: "# of Votes",
      data: [18.8, 18.8, 17.4, 21.7, 23.2],
      backgroundColor: [
        "rgba(249, 25, 25, 1)",
        "rgba(253, 69, 105, 1)",
        "rgba(255, 117, 178, 1)",
        "rgba(253, 167, 230, 1)",
        "rgba(255, 209, 253, 1)",
      ],
      borderColor: [
        "rgba(249, 25, 25, 1)",
        "rgba(253, 69, 105, 1)",
        "rgba(255, 117, 178, 1)",
        "rgba(253, 167, 230, 1)",
        "rgba(255, 209, 253, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const doughnutChartSetUp2 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Units for Improvement",
    },
  },
};
