import React, { Component, Fragment } from "react";
import { Months } from "./Data";
import { Trees } from "./Data";
import { Grasses } from "./Data";

class Pollen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enlarge: false,
      hide: false,
      show: false,
      bigger: false,
      monthArr: [],
      pollenArr: [],
      imageArr: []
    };
  }

  showDetails = month => {
    this.setState({
      enlarge: !this.state.enlarge,
      hide: !this.state.hide,
      monthArr: month
    });
  };

  showInfo = tree => {
    this.setState({
      show: !this.state.show,
      pollenArr: tree
    });
  };

  closeInfo = () => {
    this.setState({
      show: !this.state.show,
      pollenArr: [],
      bigger: false,
      imageArr: []
    });
  };

  enlargeImage = (img) => {
    this.setState({
      bigger: !this.state.bigger,
      imageArr: img
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
          {Months.map(val => {
            return (
              <Fragment key={val.month}>
                {this.state.hide &&
                !this.state.monthArr.includes(val.month) ? null : (
                  <div
                    className={
                      this.state.enlarge &&
                      this.state.monthArr.includes(val.month)
                        ? "month__square__details"
                        : "month__square"
                    }
                  >
                    <span>{val.month}</span>
                    <button onClick={() => this.showDetails(val.month)}>
                      {this.state.enlarge ? "Zamknij" : "Sprawdź"}
                    </button>
                    {this.state.enlarge &&
                      this.state.monthArr.includes(val.month) && (
                        <div className="month__pollen__wrapper">
                          {val.trees != "" &&
                            val.trees.map((v, index) => {
                              return (
                                <div
                                  className={
                                    this.state.show &&
                                    this.state.pollenArr.includes(v)
                                      ? "month__square__pollendetails"
                                      : "month__square__pollen"
                                  }
                                  key={v}
                                >
                                  {this.state.show &&
                                  this.state.pollenArr.includes(v) ? (
                                    <>
                                      {Trees.filter(t => t.name == v).map(
                                        tree => {
                                          return (
                                            <Fragment key={tree}>
                                              <span className="pollen__details">
                                                {tree.name}
                                              </span>
                                              <span className="pollen__details">
                                                {tree.info}
                                                <blockquote>Źródło: Wikipedia</blockquote>
                                              </span>
                                              <button onClick={()=>this.enlargeImage(tree.name)} >
                                                {(this.state.bigger && this.state.imageArr.includes(tree.name)) ? "X" : "Powiększ"}
                                              </button>
                                              <img src={tree.image} className={(this.state.bigger && this.state.imageArr.includes(tree.name)) ? "bigger" : ""}/>
                                              <button
                                                onClick={() =>
                                                  this.closeInfo(v)
                                                }
                                              >
                                                Zamknij
                                              </button>
                                            </Fragment>
                                          );
                                        }
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <span>{v}</span>
                                      <i
                                        className="fas fa-tree"
                                        onClick={() => this.showInfo(v)}
                                      />
                                    </>
                                  )}
                                </div>
                              );
                            })}

                          {val.grass != "" &&
                            val.grass.map((v, index) => {
                              return (
                                <div
                                  className={
                                    this.state.show &&
                                    this.state.pollenArr.includes(v)
                                      ? "month__square__pollendetails"
                                      : "month__square__pollen"
                                  }
                                  key={v}
                                >
                                  {this.state.show &&
                                  this.state.pollenArr.includes(v) ? (
                                    <>
                                      {Grasses.filter(g => g.name == v).map(
                                        grass => {
                                          return (
                                            <Fragment key={grass}>
                                              <span className="pollen__details">
                                                {grass.name}
                                              </span>
                                              <span className="pollen__details">
                                                {grass.info}
                                                <blockquote>Źródło: Wikipedia</blockquote>
                                              </span>
                                              <button onClick={()=>this.enlargeImage(grass.name)} >
                                                {(this.state.bigger && this.state.imageArr.includes(grass.name)) ? "X" : "Powiększ"}
                                              </button>
                                              <img src={grass.image} className={(this.state.bigger && this.state.imageArr.includes(grass.name)) ? "bigger" : ""}/>
                                              <button
                                                onClick={() =>
                                                  this.closeInfo(v)
                                                }
                                              >
                                                Zamknij
                                              </button>
                                            </Fragment>
                                          );
                                        }
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <span>{v}</span>
                                      <i
                                        className="fas fa-seedling"
                                        onClick={() => this.showInfo(v)}
                                      />
                                    </>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      )}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export { Pollen };
