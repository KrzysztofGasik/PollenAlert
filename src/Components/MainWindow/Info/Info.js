import React, { Component, Fragment, useState, useEffect } from "react";
import Steps from "./Steps";

export const Info = () => {
  const [step, updateStep] = useState(0);

  return (
    <>
      <i className="fas fa-arrow-left" onClick={() => updateStep(step > 0 ? step - 1 : Steps.length - 1)}/>
      <div className="info__wrapper">
        <div className="info__wrapper__slider">
          {Steps.filter(s => s.index == step).map(info => {
            return (
              <Fragment key={info.index}>
                <p>{info.text}</p>
                <p id="break">{info.break}</p>
                <blockquote>
                  <a href="http://www.medonet.pl/magazyny/abc-alergii,alergia---objawy--rodzaje-i-leczenie-alergii--uczulenie-na-pylki,artykul,1587489.html"
                    target="_blank">Źródło www.medonet.pl</a>
                </blockquote>
              </Fragment>
            );
          })}
        </div>
      </div>
      <i className="fas fa-arrow-right" onClick={() => updateStep(step < Steps.length - 1 ? step + 1 : 0)}/>
    </>
  );
};
