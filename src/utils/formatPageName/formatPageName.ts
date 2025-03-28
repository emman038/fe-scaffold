import { PageTypeKeys } from 'src/index.config';

const formatPageName = (pageKey: PageTypeKeys): string => {
  return pageKey
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());
};

export default formatPageName;
