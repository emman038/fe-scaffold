import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { tabOptions } from 'src/constants';
import { useActiveTab } from 'src/hooks';

import NavigationTabs from './NavigationTabs';

jest.mock('src/hooks', () => ({
  useActiveTab: jest.fn(),
}));

describe('NavigationTabs', () => {
  test('should change active tab when a button is clicked', () => {
    const setActiveTabMock = jest.fn();
    (useActiveTab as jest.Mock).mockReturnValue({
      activeTab: tabOptions[0],
      setActiveTab: setActiveTabMock,
    });

    render(<NavigationTabs />);

    const firstTabButton = screen.getByText(tabOptions[0]);
    expect(firstTabButton).toHaveStyle('color: white');

    const secondTabButton = screen.getByText(tabOptions[1]);
    userEvent.click(secondTabButton);

    expect(setActiveTabMock).toHaveBeenCalledWith(tabOptions[1]);
  });
});
