import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    subscribe: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '450px',
    },
    setionSub: {
        height: '300px',
        backgroundColor: '#FBBCA9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '90px 0px 90px 0px',
        borderRadius: '20px',
        gap: '80px',
    },
    catalogButton: {
        width: '150px',
        height: '40px',
        color: 'white',
        fontWeight: '800',
        borderRadius: '10px',

        '&:hover': {
            transition: '0.5s',
        }
    },
}))