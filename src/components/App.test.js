import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App/>);

  const xd = {
    a: true,
  }

  it('Renders properly', () => {
    expect(app).toMatchSnapshot();
  });
});
