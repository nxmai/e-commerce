import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '25px 8vw',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'white',
        zIndex: '999',
        
        //border: '1px solid black'
    }, 
    link: {
        '& a': {
            listStyle: 'none',
            padding: '10px',
            margin: '20px',
            fontSize: '20px',
            color: 'black',
            
            //border: '1px solid green'
        },
        '& a:hover': {
            textDecoration: 'none',
            cursor: 'pointer',
        }
    },
    crushy:{
        '& a': {
            listStyle: 'none',
            padding: '10px',
            margin: '20px',
            color: 'black',
        },
        '& a:hover': {
            textDecoration: 'none',
            cursor: 'pointer',
        }
    },
    cartIcon: {
        position: 'relative',
    },
    iconSpan: {
        position: 'absolute',
        background: 'crimson',
        borderRadius: '20px',
        color: 'white',
        padding: '3px 5px',
        right: '0px',
        top: '-5px',
        zIndex: '999',
    },
    iconGroup: {
        display: 'flex',
    }
    
}))