jest.mock('../../../components/Header', () => {
  return {
    Header: () => {
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

  test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <App {...store}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})