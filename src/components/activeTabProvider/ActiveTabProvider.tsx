import { createContext, ReactNode, useState } from 'react';

import { defaultTab } from 'src/constants';
import { ActiveTabConfig } from 'src/index.config';

export const ActiveTabContext = createContext<ActiveTabConfig | undefined>(
  undefined,
);

const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export default ActiveTabProvider;
