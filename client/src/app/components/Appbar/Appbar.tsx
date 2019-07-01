import React from 'react'
import {
    AppBar,
    IconButton,
    InputBase,
    Toolbar,
    Typography
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import EuroSymbol from '@material-ui/icons/EuroSymbol'

import useStyles from './Appbar.style'

export default function Appbar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} >
                <Toolbar>
                    <IconButton edge="start" className={classes.iconButton}>
                        <EuroSymbol />
                    </IconButton>
                    <Typography variant="h5" noWrap className={classes.title}>
                        High School Investments
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon color='primary' />
                        </div>
                        <InputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'Search' }}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}