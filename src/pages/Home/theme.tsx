import { colors, makeStyles, Theme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

export const useHomeStyles = makeStyles((theme: Theme) => ({

    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth:'230px'
    },
    sideMenuListItem: {
        '& div' :{
            display:'inline-flex',
            alignItems:'center',
            padding:'0 10px' ,
            borderRadius:'30px',
            height:'50px',
            cursor:'pointer',
            transition:'background-color 0.15s ease-in-out',
            '&:hover':{
                backgroundColor: 'rgba(29,161,242,0.1)',
                '& h6':{
                    color:theme.palette.primary.main
                }

            }

        }
    },
    logo: {
        fontSize: 36,
        margin: '10px'
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addForm: {
        padding: 20,
    },
    wrapper: {
        height: '100vh'
    },
    tweetsWrapper: {
        borderRadius: '0px',
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        borderRadius: '0px',
        borderLeft: '0',
        borderRight: '0',
        borderTop: '0',
        background:'white',
        padding: '10px 15px',
        position:'sticky',
        top:'0',
        '& h6': {
            fontWeight: 800,

        }
    },
    tweet: {
        paddingTop:'15px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)'
        }

    },

    tweetsUserName: {
        color: grey[500],
        marginLeft: '5px'
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '450px',
        position:'relative',
        left:'-13px'

    },
    SideMenuTweetButton:{
        padding:theme.spacing(3.2 ),
        marginTop:theme.spacing(2)
    },






    centered: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },


    logoIcon: {
        fontSize: 36,
    },


    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },

    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
        marginLeft: '44%'},

    tweetsHeaderBackButton: {
        marginRight: 20,
    },

    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tweetContent: {
        flex: 1,
    },
    tweetUserName: {
        color: grey[500],
    },
    fullTweet: {
        padding: 22,
        paddingBottom: 0,
    },
    fullTweetText: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        lineHeight: 1.3125,
        wordBreak: 'break-word',
    },
    fullTweetFooter: {
        margin: '0 auto',
        borderTop: '1px solid #E6ECF0',
        left: 0,
        maxWidth: '100%',
        justifyContent: 'space-around',
        padding: '2px 0',
        marginTop: 20,
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },

    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },


    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },

    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    sideProfile: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        bottom: 30,
        padding: '10px 15px',
        width: 260,
        borderRadius: 50,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: colors.lightBlue[50],
        },
    },
    sideProfileInfo: {
        flex: 1,
        marginLeft: 10,
        '& b': {
            fontSize: 16,
        },
    },
    imagesList: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap',
    },
    imagesListItem: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginBottom: 10,
        position: 'relative',
        '& img': {
            width: '100%',
            height: '100%',
            'object-fit': 'cover',
            borderRadius: 6,
        },
        '& svg path': {
            fill: 'white',
        },
    },
    profileMenu: {
        top: 'auto !important',
        left: '17.5% !important',
        width: '250px !important',
        bottom: '110px !important',
        'box-shadow': '1px 1px 10px rgba(0, 0, 0, 0.08)',
        'border-radius': '20px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        },
    },
    imagesListItemRemove: {
        position: 'absolute',
        top: -8,
        right: -6,
        padding: '0 !important',
        backgroundColor: '#ff4d4d !important',
    },
}));
