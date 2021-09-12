import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        padding: '0px 200px',
        marginBottom: '80px',
    },
    productInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '15px',
        // border: '1px solid black',
        padding: '13px 0px',
    },
    image: {
        width: '130px',
        paddingRight: '15px',
    },
    textInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '600px',
        textAlign: 'justify',
    },
    group:{
        display: 'flex',
        alignItems: 'center',
    },
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
    },
    countButton: {
        borderRadius: '50%',
        //height: '25px',
        border: '1px solid black',
    },
    quantity: {
        margin: '15px 20px',
    },
    productTotalPrice: {
        margin: '0px 10px 0px 30px',
    },
    total: {
        display: 'flex',
        gap: '75px',
        justifyContent: 'flex-end',
        marginTop: '10px',
        alignItems: 'center',   
    }
}))