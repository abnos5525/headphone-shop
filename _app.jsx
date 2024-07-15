'use client'
import {ContextApp} from "@/context/ContextApp";
import {ToastContainer} from "react-toastify";
import ReduxProvider from "@/redux/ReduxProvider";
import {createTheme, ThemeProvider} from "@mui/material";
import InitialProducts from "@/utils/InitialProducts";

const MyApp = ({children}) => {

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 480,
                // => @media (min-width: 640px) { ... }
                sm: 640,
                // => @media (min-width: 640px) { ... }

                md: 768,
                // => @media (min-width: 768px) { ... }

                lg: 1024,
                // => @media (min-width: 1024px) { ... }

                xl: 1280,
            }
        }
    })

    return(
        <ReduxProvider>
            <ThemeProvider theme={theme}>
                <ContextApp>
                         <InitialProducts>
                             {children}
                         </InitialProducts>
                    <ToastContainer/>
                </ContextApp>
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default MyApp