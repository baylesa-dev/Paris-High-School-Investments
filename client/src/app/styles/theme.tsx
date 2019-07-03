import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

/* Color Theme Swatches in Hex
.Bitbunch-|-AI-powered-automated-trading-platform-1-hex { color: #4369D9; }
.Bitbunch-|-AI-powered-automated-trading-platform-2-hex { color: #3B67BF; }
.Bitbunch-|-AI-powered-automated-trading-platform-3-hex { color: #2D61A6; }
.Bitbunch-|-AI-powered-automated-trading-platform-4-hex { color: #F28066; }
.Bitbunch-|-AI-powered-automated-trading-platform-5-hex { color: #F2F2F2; }
*/

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2D61A6'
        },
        secondary: {
            main: '#F28066',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        }
    }
})

export default theme
