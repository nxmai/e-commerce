import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        width: '250px',
        margin: '12px',
        //borderRadius: '10px',
        border: 0,
        boxShadow: '0px 0px 0px 0px'

    },
    media: {
        height: 0,
        paddingTop: '130%',
        width: '100%',
        borderRadius: '20px',
        marginBottom: '15px',
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