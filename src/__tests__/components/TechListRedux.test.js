import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import TechListRedux from '~/components/TechListRedux';

jest.mock('react-redux');

describe('TechList component', () => {

  it('', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Node.js', 'ReactJS']
    }));

    const { getByTestId, getByText } = render(<TechListRedux />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));

  })
});