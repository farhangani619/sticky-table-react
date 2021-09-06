import React, { Component } from "react";
import "./index.css";
class FixedCoulmnTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedHeaders: this.props.headers.slice(0, this.props.frozen),
      regularHeaders: this.props.headers.slice(
        this.props.frozen,
        this.props.headers.length
      )
    };   
  }
  componentDidMount() {
    console.log(this.props.headers.slice(0, this.props.frozen));
    console.log(
      this.props.headers.slice(this.props.frozen, this.props.headers.length)
    );
  }
  addTd = (arr) => {
    return arr.map((e, index) => {
      return <td key={index}>{e}</td>;
    });
  };
  renderFrozenTd = (arr) => {
    const sliceArr = arr.slice(0, this.state.fixedHeaders.length);
    return sliceArr.map((e, index) => <td key={index}>{e}</td>);
  };
  renderFrozen = (arr) => {
    return arr.map((e, index) => {
      return <tr key={index}>{this.renderFrozenTd(e)}</tr>;
    });
  };
  renderReularTd = (arr) => {
    const sliceArr = arr.slice(this.state.fixedHeaders.length, arr.length);
    return sliceArr.map((e, index) => <td key={index}>{e}</td>);
  };
  renderReular = (arr) => {
    return arr.map((e, index) => {
      return <tr className="border" key={index}>{this.renderReularTd(e)}</tr>;
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          <table className="fixed">
            <div>
              <thead>
                <tr>
                    {this.addTd(this.state.fixedHeaders)}
                    </tr>
              </thead>
              <tbody>{this.renderFrozen(this.props.data)}</tbody>
            </div>
          </table>
        </div>
        <div>
          <table className="scrollable">
            <div className="scroll" id="scroll">
              <thead>
                <tr>{this.addTd(this.state.regularHeaders)}</tr>
              </thead>
              <tbody>{this.renderReular(this.props.data)}</tbody>
            </div>
          </table>
        </div>
      </div>
    );
  }
}

export default FixedCoulmnTable;
