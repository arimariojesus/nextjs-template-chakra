import { extendTheme } from '@chakra-ui/react';

import colors from './colors';

const theme = extendTheme({
  colors,
  styles: {
    global: {
      'html, body': {
        bg: 'black',
        color: 'white',
        height: '100vh'
      },
      '#__next': {
        height: '100%'
      }
    }
  }
});

export default theme;
