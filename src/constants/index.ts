import { pageType, PageTypeKeys } from 'src/index.config';

export const menuOptions = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const tabOptions = ['All time', 'Year', 'Month'];

export const defaultTab = tabOptions[0];

export const pageKeysList: PageTypeKeys[] = Object.values(pageType);
