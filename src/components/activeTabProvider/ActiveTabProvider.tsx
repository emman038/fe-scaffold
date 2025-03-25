import { ActiveTabConfig } from '@AppTypes';
import { createContext, ReactNode, useState } from 'react';
import { tabOptions } from 'src/constants';

export const ActiveTabContext = createContext<ActiveTabConfig | undefined>(
  undefined,
);

const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>(tabOptions[0]);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export default ActiveTabProvider;
