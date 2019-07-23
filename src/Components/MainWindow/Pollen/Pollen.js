import React, { Component, Fragment } from "react";
import { Months } from "./Data";
import { Data } from "./Data";
import {Iglaste} from "./Data";
import {Grass} from "./Data";
import treeImg from "../../../../img/tree1.png";
import tree2Img from "../../../../img/tree2.png";
import grassImg from "../../../../img/grass.png";

class Pollen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enlargeMonth: false,
      hideMonth: false,
      showDetail: false,
      bigImage: false,
      hideTree: false,
      monthArr: [],
      pollenArr: [],
      imageArr: []
    };
  }

  showDetails = month => {
    this.setState({
      enlargeMonth: !this.state.enlargeMonth,
      hideMonth: !this.state.hideMonth,
      monthArr: month
    });
  };

  showInfo = tree => {
    this.setState({
      showDetail: !this.state.showDetail,
      hideTree: !this.state.hideTree,
      pollenArr: tree
    });
  };

  closeInfo = () => {
    this.setState({
      showDetail: !this.state.showDetail,
      hideTree: !this.state.hideTree,
      bigImage: false,
      pollenArr: [],
      imageArr: []
    });
  };

  enlargeImage = (img) => {
    this.setState({
      bigImage: !this.state.bigImage,
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
        <span className="author">Opracowanie: dr med. Piotr Rapiejko na podstawie pomiarów Ośrodka Badania Alergenów Środowiskowych</span>
        <div className="month__wrapper">
          {Months.map(val => {
            return (
              <Fragment key={val.month}>
                {this.state.hideMonth &&
                !this.state.monthArr.includes(val.month) ? null : (
                  <div className={this.state.enlargeMonth && this.state.monthArr.includes(val.month)
                        ? "month__square__details"
                        : "month__square"}>
                    <span>{val.month}</span>
                    <button onClick={() => this.showDetails(val.month)}>
                      {this.state.enlargeMonth ? "Zamknij" : "Sprawdź"}
                    </button>
                    {this.state.enlargeMonth &&
                      this.state.monthArr.includes(val.month) && (
                        <div className="month__pollen__wrapper">
                          {val.trees != "" &&
                            val.trees.map((v, index) => {
                              return (
                              <Fragment key={v}>
                              {this.state.hideTree &&
                              !this.state.pollenArr.includes(v) ? null : (
                                <div className={this.state.showDetail && this.state.pollenArr.includes(v)
                                      ? "month__square__pollendetails"
                                      : "month__square__pollen"} key={v}>
                                  {this.state.showDetail && this.state.pollenArr.includes(v) ? (
                                    <Fragment>
                                      {Data.filter(t => t.name == v).map(
                                        tree => {
                                          return (
                                            <Fragment key={tree}>
                                              <div className="pollen__details__wrapper">
                                              <span className="pollen__details">{tree.name}</span>
                                              <span className="pollen__details">{tree.info}
                                                <blockquote>Źródło: Wikipedia</blockquote>
                                              </span>
                                              </div>
                                              <div className="pollen__details__wrapper">
                                              <button onClick={()=>this.enlargeImage(tree.name)} >
                                                {(this.state.bigImage && this.state.imageArr.includes(tree.name)) ? "X" : "Powiększ"}
                                              </button>
                                              <button onClick={() =>this.closeInfo(v)}>
                                                Zamknij
                                              </button>
                                              <img src={tree.image} className={(this.state.bigImage && this.state.imageArr.includes(tree.name)) ? "bigger" : ""}/>
                                              </div>
                                            </Fragment>
                                          );
                                        }
                                      )}
                                    </Fragment>
                                  ) : (
                                    <>
                                      <span>{v}</span>
                                      <img src={Grass.includes(v) ? grassImg : (Iglaste.includes(v) ? tree2Img : treeImg)} onClick={() => this.showInfo(v)}/>
                                    </>
                                    //
                                  )}
                                </div>)
                              }
                                </Fragment>
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
