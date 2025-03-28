import { useContext } from 'react';

import { ActiveTabContext } from 'src/components/activeTabProvider';

const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error('useActiveTab must be used within a ActiveTabProvider');
  }
  return context;
};

export default useActiveTab;
