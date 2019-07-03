import { Theme, createStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2, 3),
        backgroundColor: '#F2F2F2',
        overflow: 'hidden'
    },
    rightGridContainer: {
        flex: 1,
    },
    rightGridItem: {
        flex: 1,
    },
    cardContainer: {
        flex: 1,
        height: '100%',
        boxShadow: 'none',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default styles