
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: '95px',
    },
    catalogButton: {
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
    image: {
        height: '400px',
    },
    banner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBBCA9',
        gap: '40px',
        padding: '20px 00px',
        height: '600px',
    },
    textBanner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: '60px',
        textAlign: 'left',
    },
    description: {
        fontSize: '20px',
        margin: '20px 0px',
    },
    newProduct: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
    },
    main: {
        padding: '0px 250px',
        marginTop: '90px',
    },
    smallImg: {
        height: '200px',
    },
    smallRect: {
        borderRadius: '30px',
        backgroundColor: '#FBBCA9',
        height: '250px',
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    largeRect: {
        borderRadius: '30px',
        backgroundColor: '#FBBCA9',
        height: '250px',
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    largeImg: {
        height: '200px',
    },
    largeText: {
        margin: '10px 0px',
    },
    sectionGrid: {
        margin: '100px 0px',
    },
    sectionLaroche: {
        height: '250px',
        backgroundColor: '#FBBCA9',
        margin: '70px 0px',
        display: 'flex'
    },
    sectionIntro: {
        display: 'flex',
        gap: '40px',
        marginTop: '70px',
    },
    textSectionIntro: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
        textAlign: 'left',
    },
    imgSectionIntro: {
        width: '300px',
    },
    
}))