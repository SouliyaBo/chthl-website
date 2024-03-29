import { makeStyles } from '@material-ui/core/styles';


export default makeStyles (() => ({
    root: {
    maxWidth: '100%'
    },

    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardActionLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));