// One way to mock component
jest.mock('../../../components/Header');

// Another way to mock component
jest.mock('../../../components/Footer', () => {
  return {
    Footer: () => {
      const React = require('react');
      return (
        <div />
      )
    }
  }
})

import * as React from 'react';

import { observable } from 'mobx';
import { App } from '..';
import * as renderer from 'react-test-renderer';

describe('AppContainer', () => {
  let store;
  beforeEach(() => {

    store = observable({
      app: [],
      i18n: {
        t: () => 'some string'
      }
    });
  });

  test('Component is rendered properly', () => {
    const component = renderer.create(
      <App {...store}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})