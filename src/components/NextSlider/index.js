import React, { useState } from 'react';
import './styles.scss';

// slider component
// https://github.com/react-component/slider/
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import FutureValue from '../FutureValue';

const NextSlider = () => {
  const [value, setValue] = useState(100);
  // set value to slider position
  const handleChange = num => {
    setValue(num);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mt-4">
            <div id="Monthly">
              <span>Monthly contribution amount:</span>
              <span>{value}</span>
            </div>
            <Slider
              min={1}
              max={1000}
              defaultValue={value}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <FutureValue pv={value} rate={2} years={30} />
    </div>
    // TODO create funcitons to enter a value on rate and years to pass into the calc engine (FutureValue Component)
  );
};

export default NextSlider;
