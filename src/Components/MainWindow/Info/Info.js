import React, { Component,Fragment } from "react";
import Steps from "./Steps";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  moveLeft = () => {
    this.setState(
      {
        step: this.state.step - 1
      },
      () => {
        if (this.state.step == -1) {
          this.setState({
            step: Steps.length-1
          });
        }
      }
    );
  };

  moveRight = () => {
    this.setState(
      {
        step: this.state.step + 1
      },
      () => {
        if (this.state.step == Steps.length) {
          this.setState({
            step: 0
          });
        }
      }
    );
  };

  render() {
    return (
      <>
        <i className="fas fa-arrow-left" onClick={this.moveLeft} />
        <div className="info__wrapper">
          <div className="info__wrapper__slider">
            {Steps.filter(s => s.index == this.state.step).map(info => {
              return (
                  <Fragment key={info.index}>
                  <p>{info.text}</p>
                  <p id="break">{info.break}</p>
                  <blockquote><a href="http://www.medonet.pl/magazyny/abc-alergii,alergia---objawy--rodzaje-i-leczenie-alergii--uczulenie-na-pylki,artykul,1587489.html"
                  target="_blank">Źródło</a></blockquote>
                  </Fragment>
              );    
            })}
          </div>
        </div>
        <i className="fas fa-arrow-right" onClick={this.moveRight} />
      </>
    );
  }
}

export { Info };
