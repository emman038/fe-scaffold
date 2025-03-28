import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { menuOptions } from 'src/constants';

import Component from './UserMenu';

describe('UserMenu', () => {
  const renderComponent = () => render(<Component />);

  it('should open the User Menu when the Icon is clicked', () => {
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: /accounts menu/i }));

    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('should open the User Menu when the Icon is clicked', () => {
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: /accounts menu/i }));
    userEvent.click(screen.getByText(`${menuOptions[0]}`));

    expect(screen.getByRole('menu', { hidden: true })).toBeInTheDocument();
  });
});
