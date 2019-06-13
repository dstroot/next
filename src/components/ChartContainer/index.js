import React, { useState, useEffect } from 'react';

// slider
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

// chart
import Chart from '../Chart';

// images and styles

import './styles.scss';

const SliderWithTooltip = createSliderWithTooltip(Slider);

// This function calculates future value.  This function matches the
// MSFT Excel fv calculation.
function futureValue(rate, nper, pmt, pv, type) {
  let pow = Math.pow(1 + rate, nper);
  let fv = 0;

  if (rate) {
    fv = (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow;
  } else {
    fv = -1 * (pv + pmt * nper);
  }

  return fv.toFixed(2);
}

const ChartContainer = () => {
  // calculate a logarithmic slider position from a value
  const logPosInitial = value => {
    // position will be between 0 and 100
    var minp = 0;
    var maxp = 99;

    // The result should be between 500 and 1,000,000
    var minv = Math.log(500);
    var maxv = Math.log(1000000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
  };

  // need to make the slider logarithmic
  // https://stackoverflow.com/questions/846221/logarithmic-slider
  const logSlideInitial = position => {
    // position will be between 0 and 100
    var minp = 0;
    var maxp = 99;

    // The result should be between 500 and 1,000,000
    var minv = Math.log(500);
    var maxv = Math.log(1000000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    // calculate result
    let result = Math.exp(minv + scale * (position - minp));

    // round to nearest - but for a logarithmic scale!
    if (result < 1000) {
      result = Math.ceil(result / 500) * 500;
    }
    if (result >= 1000 && result < 10000) {
      result = Math.ceil(result / 1000) * 1000;
    }
    if (result >= 10000 && result < 100000) {
      result = Math.ceil(result / 10000) * 10000;
    }
    if (result >= 100000 && result < 999999) {
      result = Math.ceil(result / 100000) * 100000;
    }

    return result;
  };

  // calculate a logarithmic slider position from a value
  const logPosMonthly = value => {
    // position will be between 0 and 100
    var minp = 0;
    var maxp = 99;

    // The result should be between 25 and 25,000
    var minv = Math.log(25);
    var maxv = Math.log(25000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    return (Math.log(value) - minv) / scale + minp;
  };

  // need to make the slider logarithmic
  // https://stackoverflow.com/questions/846221/logarithmic-slider
  const logSlideMonthy = position => {
    // position will be between 0 and 100
    var minp = 0;
    var maxp = 99;

    // The result should be between 25 and 25,000
    var minv = Math.log(25);
    var maxv = Math.log(25000);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);

    // calculate result
    let result = Math.exp(minv + scale * (position - minp));

    // round to nearest - but for a logarithmic scale!
    if (result < 50) {
      result = Math.ceil(result / 5) * 5;
    }
    if (result >= 50 && result < 100) {
      result = Math.ceil(result / 10) * 10;
    }
    if (result >= 100 && result < 1000) {
      result = Math.ceil(result / 100) * 100;
    }
    if (result >= 1000 && result < 10000) {
      result = Math.ceil(result / 1000) * 1000;
    }
    if (result >= 10000 && result < 24999) {
      result = Math.ceil(result / 5000) * 5000;
    }

    return result;
  };

  const [initial, setInitial] = useState(50000);
  const [monthly, setMonthly] = useState(1000);
  const [risk, setRisk] = useState(4);
  const [riskDesc, setRiskDesc] = useState('Growth');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(createGraphData(initial, monthly, risk));
  }, [initial, monthly, risk]);

  // currency formatter
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // This function creates graph data.  It takes inputs from the sliders.
  function createGraphData(initialDeposit, monthlyDeposit, riskLevel) {
    const type = 0; // When payments are due: 0 = end of period, 1 = beginning of period.
    const data = []; // Array of data we will return

    // table to define rates to use by risk level
    var rates = [
      { risk: 0, savings: 0.028, investment: 0.03, annuity: 0.03225 },
      { risk: 1, savings: 0.028, investment: 0.0325, annuity: 0.03475 },
      { risk: 2, savings: 0.028, investment: 0.035, annuity: 0.03725 },
      { risk: 3, savings: 0.028, investment: 0.0375, annuity: 0.03975 },
      { risk: 4, savings: 0.028, investment: 0.04, annuity: 0.04225 },
      { risk: 5, savings: 0.028, investment: 0.0425, annuity: 0.04475 },
      { risk: 6, savings: 0.028, investment: 0.045, annuity: 0.04725 },
      { risk: 7, savings: 0.028, investment: 0.0475, annuity: 0.04975 },
      { risk: 8, savings: 0.028, investment: 0.05, annuity: 0.05225 },
      { risk: 9, savings: 0.028, investment: 0.0525, annuity: 0.05475 },
    ];

    // we need to turn "risk level" into return expectations. Risk level can vary between 0 and 9.
    // Risk 0 might be equal to treasuries (e.g. about 2.5-3%) and each tick up might add .25% or so.
    // For the savings rate we might assume a constant rate over time regardless of risk.  CD rates
    // are about 2.8% right now.
    var filteredRates = rates.filter(function(rate) {
      return rate.risk === riskLevel;
    });

    // create 30 years of data
    for (let year = 0; year <= 30; year++) {
      // calculate the fv for each year
      let savings = -futureValue(
        filteredRates[0].savings / 12, // convert annual rate to monthky rate
        year * 12, // convert years to months
        monthlyDeposit,
        initialDeposit,
        type
      );

      let investment = -futureValue(
        filteredRates[0].investment / 12,
        year * 12,
        monthlyDeposit,
        initialDeposit,
        type
      );

      let annuity = -futureValue(
        filteredRates[0].annuity / 12,
        year * 12,
        monthlyDeposit,
        initialDeposit,
        type
      );

      investment = investment - savings;
      annuity = annuity - investment - savings;

      data.push({ year, savings, investment, annuity });
    }

    return data;
  }

  const changeInitial = value => {
    setInitial(logSlideInitial(value));
  };

  const changeMonthly = value => {
    setMonthly(logSlideMonthy(value));
  };

  const changeRisk = value => {
    setRisk(value);

    // switch to set risk description
    switch (value) {
      case 0:
      case 1:
      case 2:
        setRiskDesc('Conservative');
        break;

      case 3:
      case 4:
      case 5:
        setRiskDesc('Balanced');
        break;

      case 6:
      case 7:
      case 8:
        setRiskDesc('Growth');
        break;

      case 9:
        setRiskDesc('Aggressive');
        break;

      default:
        setRiskDesc('Error');
        break;
    }
  };

  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-md-12" />
        <div className="col-md-12 text-center">
          <h1>Try Yourself</h1>
          <p>
            Use the slider to see how monthly income can change based on the
            monthly contribution amount and income start date.
          </p>
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <div>Initial Deposit</div>
              <div>
                <h4 className="text-primary">
                  {formatter.format(initial).slice(0, -3)}
                </h4>
              </div>
            </div>
            <Slider
              min={0}
              max={99}
              defaultValue={logPosInitial(50000)}
              onChange={changeInitial}
            />
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <div>Monthly Deposit</div>
              <div>
                <h4 className="text-primary">
                  {formatter.format(monthly).slice(0, -3)}
                </h4>
              </div>
            </div>
            <Slider
              min={0}
              max={99}
              defaultValue={logPosMonthly(1000)}
              onChange={changeMonthly}
            />
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <div>Risk Level</div>
              <div>
                <h4 className="text-primary">{riskDesc}</h4>
              </div>
            </div>
            <SliderWithTooltip
              dots
              min={0}
              max={9}
              step={1}
              defaultValue={risk}
              onChange={changeRisk}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <Chart data={data} />
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
