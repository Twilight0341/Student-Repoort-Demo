import React from "react";
import Styles from "../CSS/ScreenPage.module.scss";

import Board from "../graph/meter.svg";
import Pin from "../graph/pin.svg";

interface State {
  name: string;
  paper: string;
  date: { day: number; month: number; year: number };
  time: number;
  result: { sore: number; totalSore: number };
  mean: { member: number; totalMember: number };
  star: number;
  ranking: number;
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
      star: 5,
      ranking: 4,
    };
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#f2928c";
  }

  render() {
    return (
      <div id={Styles["background-wrapper"]}>
        <div>
          {/* Title */}
          <div>
            <div id={Styles["title"]}>Andy's Record Card</div>
          </div>

          {/* Student's personal information */}
          <div id={Styles["information-list"]}>
            <div>
              <div className={Styles["information-border"]}>
                Name : {this.state.name}
              </div>
              <div
                className={Styles["information-border"]}
                style={{ width: "max-content" }}
              >
                Paper : {this.state.paper}
              </div>
              <div className={Styles["information-border"]}>
                Date : {this.state.date.year}-{this.state.date.month}-
                {this.state.date.day}
              </div>
              <div className={Styles["information-border"]}>
                Time : {this.state.time} mins
              </div>
              <div className={Styles["information-border"]}>
                Result : {this.state.result.sore} {" / "}
                {this.state.result.totalSore}
              </div>
              <div className={Styles["information-border"]}>
                Means of class : {this.state.mean.member} {" / "}
                {this.state.mean.totalMember}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
