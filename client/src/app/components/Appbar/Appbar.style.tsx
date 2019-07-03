import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        appbar: {
            boxShadow: 'none',
            border: 0,
            backgroundColor: fade(theme.palette.primary.main, 0.99)
        },
        iconButton: {
            marginRight: theme.spacing(1),
            color: fade(theme.palette.common.white, 0.69)
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: 'white'
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.95),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.98),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary'
        },
        inputRoot: {
            color: 'primary',
        },
        inputInput: {
            color: 'primary',
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 120,
                '&:focus': {
                    width: 200,
                },
            }
        }
    })
)

export default useStyles