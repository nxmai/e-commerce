import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        width: '220px',
        margin: '25px 10px',
        //borderRadius: '10px',
        border: 0,
        boxShadow: '0px 0px 0px 0px'

    },
    media: {
        height: 0,
        paddingTop: '100%',
        width: '100%',
        borderRadius: '20px',
        marginBottom: '15px',
        scale: '0.7'
    },
    content: {
        textAlign: 'left',
        margin: 0,
        padding: 0,
    },
    nameContent: {
        fontWeight: 500
    },
    priceContent: {
        fontWeight: 900
    },
    actionButton: {
        //width: '50px',
        //marginRight: '5px'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))