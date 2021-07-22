import React from "react";
import CSS from "csstype";

interface Props {
  amount: number;
  totalAmount: number;
}

interface States {
  amount: number;
  totalAmount: number;
  backgroundCircles: boolean[];
}

export default class QuestionAmount extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      amount: 30,
      totalAmount: 38,
      backgroundCircles: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
    };
  }

  componentWillMount() {
    console.log(this.state.backgroundCircles);
  }

  fillCircles: CSS.Properties = {
    backgroundColor: "#ffbdbb",
    borderRadius: "50%",
    display: "inline-block",
    width: "100%",
    height: "100%",
  };

  backgroundCircles: CSS.Properties = {
    backgroundColor: "#fedb65",
    borderRadius: "50%",
    display: "inline-block",
    width: "100%",
    height: "100%",
  };

  /* CSSPicker = (number: boolean) => {
    for(let i = this.state.backgroundCircles.length; i >= 0; i--) {
      if(number) {
        this.state.circle.push(true);
      }
      else{
        console.log("out");
      }
    }

    this.state.circle.map((valueC) => {
      if(valueC === true){
        return this.fillCircles;
      }
      else{
        return this.backgroundCircles;
      }
    });
  }; */

  CSSPicker = (check: boolean) => {
    switch (check) {
      case true:
        return this.fillCircles;

      case false:
        return this.backgroundCircles;
    }
  };

  render() {
    return (
      <div>
        {/* /////////////////////////////////////////////////////////////////////////// */}
        {/* Text of questionAmount. */}
        <div>
          {this.props.amount}
          {"/"}
          {this.props.totalAmount}
          Questions
          <span style={this.fillCircles}></span>
          {this.state.backgroundCircles.map((value, index) => {
            return <span style={this.CSSPicker(value)}></span>;
          })}
        </div>
        {/* /////////////////////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////////////////////////// */}
        {/* The bubble of question amount. */}
        <div></div>
        {/* /////////////////////////////////////////////////////////////////////////// */}
      </div>
    );
  }
}
