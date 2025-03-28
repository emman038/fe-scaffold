import { pageType, PageTypeKeys } from 'src/index.config';

const paths: { [key in PageTypeKeys]: string } = {
  [pageType.HOME_PAGE]: './',
};

export default paths;
