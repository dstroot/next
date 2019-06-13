import React from 'react';
import PropTypes from 'prop-types';

// recharts
import {
  AreaChart,
  Area,
  // XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// currency formatter
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Chart = ({ data }) => (
  <>
    <ResponsiveContainer height={400}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 45, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis /> */}
        <YAxis tickFormatter={value => formatter.format(value).slice(0, -3)} />
        <Tooltip formatter={value => formatter.format(value).slice(0, -3)} />
        <Area
          type="monotone"
          dataKey="savings"
          stackId="1"
          stroke="#CCE1F1"
          fill="#CCE1F1"
        />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#3F92C8"
          fill="#3F92C8"
        />
        <Area
          type="monotone"
          dataKey="annuity"
          stackId="1"
          stroke="#007DBD"
          fill="#007DBD"
        />
      </AreaChart>
    </ResponsiveContainer>
    <div className="d-flex justify-content-between mb-3 text-muted">
      <div className="ml-5">Today</div>
      <div>30 Years</div>
    </div>
  </>
);

Chart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Chart;
