import React, { Component,Fragment } from "react";

const months = [
  {
    month: "Styczeń",
    details: "Szczegoły odnośnie stycznia"
  },
  {
    month: "Luty",
    details: "Szczegoły odnośnie lutego"
  },
  {
    month: "Marzec",
    details: "Szczegoły odnośnie marca"
  },
  {
    month: "Kwiecień",
    details: "Szczegoły odnośnie kwietnia"
  },
  {
    month: "Maj",
    details: "Szczegoły odnośnie maja"
  },
  {
    month: "Czerwiec",
    details: "Szczegoły odnośnie czerwca"
  },
  {
    month: "Lipiec",
    details: "Szczegoły odnośnie lipca"
  },
  {
    month: "Sierpień",
    details: "Szczegoły odnośnie sierpnia"
  },
  {
    month: "Wrzesień",
    details: "Szczegoły odnośnie września"
  },
  {
    month: "Październik",
    details: "Szczegoły odnośnie października"
  },
  {
    month: "Listopad",
    details: "Szczegoły odnośnie listopada"
  },
  {
    month: "Grudzień",
    details: "Szczegoły odnośnie grudnia"
  }
];

class Pollen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enlarge: false,
      hide: false,
      monthArr: []
    };
  }

  showDetails = month => {
    this.setState({
      enlarge: !this.state.enlarge,
      hide: !this.state.hide,
      monthArr: month,
    });
  };

  render() {
    return (
      <div className="pollen__wrapper">
        <h2 className="home">
          Aby sprawdzić jaka alergia jest w danym miesiącu kliknij przycisk
          Sprawdź
        </h2>
        <div className="month__wrapper">
          {months.map(val => {
            return (
              <Fragment key={val.month}>
              {(this.state.hide && !this.state.monthArr.includes(val.month)) ? null :
              <div
                className={
                  this.state.enlarge && this.state.monthArr.includes(val.month)
                    ? "month__square__details"
                    : "month__square"
                }
                
              >
                <span>{val.month}</span>
                <button onClick={() => this.showDetails(val.month)}>
                  {this.state.enlarge ? "Zamknij" : "Sprawdź"}
                </button>
                {this.state.enlarge && this.state.monthArr.includes(val.month) && 
                <>
                {val.details}
                </>}
              </div>
              }
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export { Pollen };
