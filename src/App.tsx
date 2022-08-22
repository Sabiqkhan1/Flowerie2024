import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import { createTheme, ThemeProvider } from '@mui/material/styles'
const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#000',
            contrastText: '#fff',
        },
    },
})

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color']
        }
    }

    interface Palette {
        neutral: Palette['primary']
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary']
    }

    interface PaletteColor {
        darker?: string
    }
    interface SimplePaletteColorOptions {
        darker?: string
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color']
        }
    }
}

declare module '@mui/material/Pagination' {
    interface PaginationPropsColorOverrides {
        neutral: true
    }
}

declare module '@mui/material/PaginationItem' {
    interface PaginationItemPropsColorOverrides {
        neutral: true
    }
}
const App: React.FC = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <AppRoutes />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
