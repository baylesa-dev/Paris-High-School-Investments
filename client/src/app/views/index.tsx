import * as React from 'react'
import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import routes from 'app/routes'

import Appbar from 'app/components/Appbar'
import Home from './Home'

import theme from 'app/styles/theme'


const Root: React.StatelessComponent<{}> = () => (
    <Fragment>
        <ThemeProvider theme={theme}>
        <Appbar/>
        <Switch>
            <Route path={routes.ROOT} component={Home}/>
        </Switch>
        </ThemeProvider>
    </Fragment>
)

export default Root

