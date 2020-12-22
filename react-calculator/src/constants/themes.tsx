const common = {
    "black": "#000",
    "white": "#fff"
}

export const boxShadow = "0 1px 15px 0 rgba(0, 0, 0, 0.1)"
export const typography = {
    "h1": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 300,
        "fontSize": "6rem",
        "lineHeight": 1.167,
        "letterSpacing": "-0.01562em"
    },
    "h2": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 300,
        "fontSize": "3.75rem",
        "lineHeight": 1.2,
        "letterSpacing": "-0.00833em"
    },
    "h3": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 400,
        "fontSize": "3rem",
        "lineHeight": 1.167,
        "letterSpacing": "0em"
    },
    "h4": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 400,
        "fontSize": "2.125rem",
        "lineHeight": 1.235,
        "letterSpacing": "0.00735em"
    },
    "h5": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 400,
        "fontSize": "1.5rem",
        "lineHeight": 1.334,
        "letterSpacing": "0em"
    },
    "h6": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 500,
        "fontSize": "1.25rem",
        "lineHeight": 1.6,
        "letterSpacing": "0.0075em"
    },
    "subtitle1": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 400,
        "fontSize": "1rem",
        "lineHeight": 1.75,
        "letterSpacing": "0.00938em"
    },
    "subtitle2": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 500,
        "fontSize": "0.875rem",
        "lineHeight": 1.57,
        "letterSpacing": "0.00714em"
    },
    "body1": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 400,
        "fontSize": "1rem",
        "lineHeight": 1.5,
        "letterSpacing": "0.00938em"
    },
    "body2": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 400,
        "fontSize": "0.875rem",
        "lineHeight": 1.43,
        "letterSpacing": "0.01071em"
    },
    "button": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 500,
        "fontSize": "0.875rem",
        "lineHeight": 1.75,
        "letterSpacing": "0.02857em",
        "textTransform": "uppercase"
    },
    "caption": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 400,
        "fontSize": "0.75rem",
        "lineHeight": 1.66,
        "letterSpacing": "0.03333em"
    },
    "overline": {
        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
        "fontWeight": 400,
        "fontSize": "0.75rem",
        "lineHeight": 2.66,
        "letterSpacing": "0.08333em",
        "textTransform": "uppercase"
    }
}

export const shape = {
    "borderRadius": 4
}

export const transitions = {
    "easing": {
        "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
        "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
        "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
        "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    "duration": {
        "shortest": 150,
        "shorter": 200,
        "short": 250,
        "standard": 300,
        "complex": 375,
        "enteringScreen": 225,
        "leavingScreen": 195
    }
}

export const zIndex = {
    "mobileStepper": 1000,
    "speedDial": 1050,
    "appBar": 1100,
    "drawer": 1200,
    "modal": 1300,
    "snackbar": 1400,
    "tooltip": 1500
}

export const themes: any = {
    light: {
        "palette": {
            common,
            "primary": {
                "main": "#1976d2",
                "light": "rgb(71, 145, 219)",
                "dark": "rgb(17, 82, 147)",
                "contrastText": "#fff"
            },
            "secondary": {
                "main": "rgb(220, 0, 78)",
                "light": "rgb(227, 51, 113)",
                "dark": "rgb(154, 0, 54)",
                "contrastText": "#fff"
            },
            "error": {
                "light": "#e57373",
                "main": "#f44336",
                "dark": "#d32f2f",
                "contrastText": "#fff"
            },
            "warning": {
                "light": "#ffb74d",
                "main": "#ff9800",
                "dark": "#f57c00",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            "info": {
                "light": "#64b5f6",
                "main": "#2196f3",
                "dark": "#1976d2",
                "contrastText": "#fff"
            },
            "success": {
                "light": "#81c784",
                "main": "#4caf50",
                "dark": "#388e3c",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            "text": {
                "light": "rgba(0, 0, 0, 0.87)",
                "main": "rgba(0, 0, 0, 0.54)",
                "dark": "rgba(0, 0, 0, 0.38)",
                "contrastText": "rgba(0, 0, 0, 0.38)"
            },
            "background": {
                "paper": "#fff",
                "default": "#fff",
                "level2": "#f5f5f5",
                "level1": "#fff"
            },

        },
        boxShadow,
        typography,
        shape,
        transitions,
        zIndex
    },
    dark: {
        palette: {
            common,
            "primary": {
                "main": "#90caf9",
                "light": "rgb(166, 212, 250)",
                "dark": "rgb(100, 141, 174)",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            "secondary": {
                "main": "#f48fb1",
                "light": "rgb(246, 165, 192)",
                "dark": "rgb(170, 100, 123)",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            "error": {
                "light": "#e57373",
                "main": "#f44336",
                "dark": "#d32f2f",
                "contrastText": "#fff"
            },
            "warning": {
                "light": "#ffb74d",
                "main": "#ff9800",
                "dark": "#f57c00",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            "info": {
                "light": "#64b5f6",
                "main": "#2196f3",
                "dark": "#1976d2",
                "contrastText": "#fff"
            },
            "success": {
                "light": "#81c784",
                "main": "#4caf50",
                "dark": "#388e3c",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            "text": {
                "light": "#fff",
                "main": "rgba(255, 255, 255, 0.7)",
                "dark": "rgba(255, 255, 255, 0.5)",
                "contrastText": "rgba(255, 255, 255, 0.5)",
            },
            "background": {
                "paper": "#424242",
                "default": "#121212",
                "level2": "#333",
                "level1": "#212121"
            },
        },
        boxShadow,
        typography,
        shape,
        transitions,
        zIndex
    }
}

