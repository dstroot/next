import React, { useState } from 'react';
import './styles.scss';

// slider component
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const NextSliders = () => {
  const [value, setValue] = useState(500);

  const handleChange = num => {
    setValue(num);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mt-4">
            <span>Intial Value</span>
            <span>{value}</span>
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

export default NextSliders;
