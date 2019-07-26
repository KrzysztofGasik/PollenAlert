import React, { Component } from "react";

const Steps = [
  {
    id: 1,
    text:
      "Alergia to dolegliwość, której znaczenie pochodzi od greckich wyrazów: allos - inny i ergon” - działanie. Alergia oznacza więc nadwrażliwość – nadmierną reakcję organizmu przy kontakcie z alergenami (np. bakteriami, wirusami, środkami chemicznymi, pokarmami, lekami, itp.); jest chorobą cywilizacyjną XXI wieku. Niemożliwe jest trwałe i całkowite wyleczenie alergii."
  },
  {
    id: 2,
    text:
      "Alergia jest niewłaściwą reakcja układu odpornościowego człowieka na alergeny, które dosyć licznie występują w środowisku. Dolegliwość ta uważana jest za najczęściej występującą we współczesnym świecie. U zdrowych osób alergeny nie powodują żadnych objawów ani uczulenia. Układ odpornościowy odpowiedzialny jest za kontrolowanie, czy obce cząsteczki mogą negatywnie wpłynąć na zdrowie i podejmuje ewentualne działania, aby chronić organizm."
  },
  {
    id: 3,
    text:
      "Alergiczny nieżyt nosa, znany również jako katar sienny - jest to ostry, alergiczny katar nosa, który występuje głównie wiosną lub latem; powodują go pyłki niektórych roślin oraz grzyby i ich zarodniki."
  }
];

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  moveLeft = () => {
    if (this.state.step > 1) {
      this.setState({
        step: this.state.step - 1
      });
    }
  };

  moveRight = () => {
    if (this.state.step < 3) {
      this.setState({
        step: this.state.step + 1
      });
    }
  };

  render() {
    return (
      <>
        <i className="fas fa-arrow-left" onClick={this.moveLeft} />
        <div className="info__wrapper">
          <div className="info__wrapper__slider">
            {Steps.filter(s => s.id == this.state.step).map(info => {
              return <span key={info.id}>{info.text}</span>;
            })}
          </div>
        </div>
        <i className="fas fa-arrow-right" onClick={this.moveRight} />
      </>
    );
  }
}

export { Info };
