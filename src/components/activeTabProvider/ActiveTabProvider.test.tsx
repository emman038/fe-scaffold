import { ReactElement } from 'react';

import { render } from '@testing-library/react';
import { useActiveTab } from 'src/hooks';

describe('ActiveTabProvider', () => {
  const ComponentNoProvider = (): ReactElement => {
    const { setActiveTab } = useActiveTab();

    return (
      <button
        onClick={() => {
          setActiveTab('');
        }}
      ></button>
    );
  };

  it('should only allow context to be used within a ActiveTabProvider', () => {
    expect(() => render(<ComponentNoProvider />)).toThrow();
  });
});
