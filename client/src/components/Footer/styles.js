import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FBBCA9',
        width: '100%',
        padding: '5vw 10vw',
        justifyContent: 'space-between',
        fontSize: '14px',
        lineHeight: '30px',
    },
    faq: {
       '& a': {
           color: 'black',
       },
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'flex-start',
       
    },
    about: {
        '& a': {
            color: 'black',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    iconText: {
        display: 'flex',
        flexDirection: 'row',

    },
    icon: {
        marginRight: '5px',
    },
    logo: {
        margin: '0px 50px 0px 0px',
    }
}))