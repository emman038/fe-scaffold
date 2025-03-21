import '@testing-library/jest-dom';
import 'jest-styled-components';

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
