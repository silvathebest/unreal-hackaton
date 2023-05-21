import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from '@mui/material'
import React, {useMemo} from 'react'


export const withTheme = (component: () => React.ReactNode) => () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      {/*<CssBaseline />*/}
      {component()}
    </ThemeProvider>
  )
}
