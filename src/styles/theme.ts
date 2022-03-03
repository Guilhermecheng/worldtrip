import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '46em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })
 

export const theme = extendTheme({
    breakpoints,
    colors: {
      "white": "#F5F8FA",
      "gray.600": "#47585B",
      "gray.300": "#DADADA",
      "yellow.400": "#FFBA08",
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
    }
})