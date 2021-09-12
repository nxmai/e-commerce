import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    product: {
        marginTop: '100px',
        display: 'flex',
        height: '520px',
    },
    root: {
        margin: '150px 230px 0px 230px',
    },
    image: {
        // height: '80vh',
        // width: '30vw',
        borderRadius: '15px',
        marginRight: '30px',
    },
    information: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

    },
    tabs: {
        marginBottom: '20px',
        marginTop: '10px',
    },
    name: {
        margin: '20px 0px',
        textAlign: 'left',
    },
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
    },
    countButton: {
        borderRadius: '50%',
        //height: '25px',
        border: '1px solid black',
    },
    quantity: {
        margin: '15px 20px',
    },
    addToCartButton: {
        width: '150px',
        height: '40px',
        // backgroundColor: '#84A594',
        color: 'white',
        fontWeight: '800',
        borderRadius: '10px',

        '&:hover': {
            // backgroundColor: '#266057',
            transition: '0.5s',
        }
    },
    recommendProduct: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
    },
    reSection: {
        marginTop: '120px',
    }
}))