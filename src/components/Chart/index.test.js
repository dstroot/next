import React from 'react';
import { create } from 'react-test-renderer';

import Chart from '../Chart';

let data = [
  {
    year: 1,
    savings: 63573.31,
    investment: 686.2300000000032,
    annuity: 129.47999999999593,
  },
  {
    year: 2,
    savings: 77531.59,
    investment: 1568.449999999997,
    annuity: 297.84000000001106,
  },
  {
    year: 3,
    savings: 91885.76,
    investment: 2659.4000000000087,
    annuity: 508.1299999999901,
  },
  {
    year: 4,
    savings: 106647.04,
    investment: 3972.4900000000052,
    annuity: 763.570000000007,
  },
  {
    year: 5,
    savings: 121826.98,
    investment: 5521.830000000002,
    annuity: 1067.5599999999977,
  },
  {
    year: 6,
    savings: 137437.46,
    investment: 7322.200000000012,
    annuity: 1423.7300000000105,
  },
  {
    year: 7,
    savings: 153490.68,
    investment: 9389.170000000013,
    annuity: 1835.929999999993,
  },
  {
    year: 8,
    savings: 169999.21,
    investment: 11739.080000000016,
    annuity: 2308.209999999992,
  },
  {
    year: 9,
    savings: 186975.96,
    investment: 14389.089999999997,
    annuity: 2844.9000000000233,
  },
];

function createNodeMock() {
  const doc = document.implementation.createHTMLDocument();
  return { parentElement: doc.body };
}

describe('chart', () => {
  it('it should render', () => {
    let tree = create(<Chart data={data} />, { createNodeMock });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
