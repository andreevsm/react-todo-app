import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';

test('Header should be shown', () => {
  const component = renderer.create(
    <Header toDo={3} done={2} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
