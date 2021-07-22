import React from "react";
import Styles from "../CSS/ScreenPage.module.scss";
import CSS from "csstype";
import { Bar, Line } from "react-chartjs-2";

import {
  barChartData,
  barChartSetUp,
  lineChartData,
  lineChartSetUp,
} from "./Chart/chartData";
import QuestionAmount from "./questionAmount";

import Star from "../graph/star.svg";
import Board from "../graph/meter.svg";
import Pin from "../graph/pin.svg";

interface State {
  name: string;
  paper: string;
  date: { day: number; month: number; year: number };
  time: number;
  result: { sore: number; totalSore: number };
  mean: { member: number; totalMember: number };
  star: number[];
  ranking: number;
  Question: { amount: number; totalAmount: number };
}

export default class Report extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      name: "Andy Lam",
      paper: "2020MC2/HKEAA",
      date: { day: 5, month: 6, year: 2021 },
      time: 48,
      result: { sore: 50, totalSore: 58 },
      mean: { member: 36, totalMember: 58 },
      star: [1, 1, 1, 1, 1],
      ranking: 4,
      Question: { amount: 30, totalAmount: 38 },
    };
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#f2928c";
  }

  pinRotate: CSS.Properties = {
    position: "absolute",
    alignItems: "flex-end",
    width: "40%",
    height: "90%",
    top: "45%",
    right: "50%",
    transform: "rotate(10deg)",
    transformOrigin: "86% 50%",
    transition: "100ms",
  };

  render() {
    return (
      <div id={Styles["background-wrapper"]}>
        <div>
          {/* Title */}
          <div>
            <div id={Styles["title"]}>Andy's Record Card</div>
          </div>

          {/* /////////////////////////////////////////////////////////////////////////// */}

          {/* Student's personal information */}
          <div id={Styles["upper-content-grid-wrapper"]}>
            <div id={Styles["upper-content-grid-wrapper-left"]}>
              <div id={Styles["information-list"]}>
                <div>
                  {/* Student's name */}
                  <div className={Styles["information-border"]}>
                    Name : {this.state.name}
                  </div>

                  {/* /////////////////////////////////////////////////////////////////////////// */}

                  {/* Student's paper code */}
                  <div
                    className={Styles["information-border"]}
                    style={{ width: "max-content", paddingRight: "5%" }}
                  >
                    Paper : {this.state.paper}
                  </div>

                  {/* /////////////////////////////////////////////////////////////////////////// */}

                  {/* Student's testing date */}
                  <div className={Styles["information-border"]}>
                    Date : {this.state.date.year}-{this.state.date.month}-
                    {this.state.date.day}
                  </div>

                  {/* /////////////////////////////////////////////////////////////////////////// */}

                  {/* Student's testing date */}
                  <div className={Styles["information-border"]}>
                    Time : {this.state.time} mins
                  </div>

                  {/* /////////////////////////////////////////////////////////////////////////// */}

                  {/* Student's result */}
                  <div className={Styles["information-border"]}>
                    Result : {this.state.result.sore} {" / "}
                    {this.state.result.totalSore}
                  </div>

                  {/* /////////////////////////////////////////////////////////////////////////// */}

                  {/* Student's means */}
                  <div className={Styles["information-border"]}>
                    Means of class : {this.state.mean.member} {" / "}
                    {this.state.mean.totalMember}
                  </div>

                  {/* /////////////////////////////////////////////////////////////////////////// */}
                </div>
              </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////// */}

            {/* star and ranking dashboard display */}
            <div id={Styles["upper-content-grid-wrapper-right"]}>
              {/* /////////////////////////////////////////////////////////////////////////// */}

              {/* star and ranking dashboard display */}
              <div id={Styles["iconic-data-list"]}>
                <div id={Styles["iconic-data-content"]}>
                  <div id={Styles["iconic-data-star-wrapper"]}>
                    {this.state.star.map((value, index) => {
                      return (
                        <img
                          id={Styles["iconic-data-star-icon"]}
                          src={Star}
                          alt="I am star"
                        ></img>
                      );
                    })}
                  </div>

                  {/* /////////////////////////////////////////////////////////////////////////// */}

                  {/* Ranking dashboard display */}
                  <div id={Styles["iconic-data-dashboard"]}>
                    <div id={Styles["iconic-data-rank"]}>Ranking</div>
                    <img
                      id={Styles["iconic-data-board"]}
                      src={Board}
                      alt="I am Pin"
                    />
                    <img
                      id={Styles["iconic-data-pin"]}
                      style={{ transform: "rotate(30deg)" }}
                      src={Pin}
                      alt="I am Pin"
                    />
                  </div>
                </div>

                {/* /////////////////////////////////////////////////////////////////////////// */}
              </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////// */}
          </div>

          {/* /////////////////////////////////////////////////////////////////////////// */}
          {/* chart list */}
          <div id={Styles["bottom-content-grid-wrapper"]}>
            {/* /////////////////////////////////////////////////////////////////////////// */}
            {/* Horizontal bar chart 1 */}
            <div id={Styles["bar-chart1-grid"]}>
              <div id={Styles["bar-chart1-wrapper"]}>
                <Bar data={barChartData} options={barChartSetUp} />
                {/* <QuestionAmount
                  amount={this.state.Question.amount}
                  totalAmount={this.state.Question.totalAmount}
                /> */}
              </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////////////////////////////////// */}
            {/* Line chart */}
            <div id={Styles["line-chart-grid"]}>
              <div>
                <Line data={lineChartData} options={lineChartSetUp} />
              </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////////////////////////////////// */}
            {/* Radar Chart */}
            <div id={Styles["radar-chart-grid"]}></div>
            {/* /////////////////////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////////////////////////////////// */}
            {/* Horizontal bar chart 2 */}
            <div id={Styles["bar-chart2-grid"]}></div>
            {/* /////////////////////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////////////////////////////////// */}
            {/* Pie chart */}
            <div id={Styles["pie-chart-grid"]}></div>
            {/* /////////////////////////////////////////////////////////////////////////// */}
          </div>
          {/* /////////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    );
  }
}
