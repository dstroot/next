import React, { useState } from 'react';
import './styles.scss';

// slider component
// https://github.com/react-component/slider/
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const NextSlider = () => {
  const [value, setValue] = useState(500);

  // set value to slider position
  const handleChange = num => {
    setValue(num);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <span>Intial Value</span>
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
    </div>
  );
};

export default NextSlider;
