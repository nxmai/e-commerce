import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginLeft: '8vw',
        marginBottom: '40px',
        width: '16vw',
        //border:'1px solid black',
        height: '780px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // border: '1px solid black',
        // width: '100%'
    }, 
    clearButton: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    searchField: {
        marginBottom: '30px'
    },
    searchIcon: {
        "&:hover" : {
            backgroundColor: 'transparent',
        },
        ":active": {
            backgroundColor: 'transparent',
        },
        marginBottom: '5px',
    }
}))