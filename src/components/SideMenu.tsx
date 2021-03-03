import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import {Button, Hidden, Typography} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";
import CreateIcon from '@material-ui/icons/Create';
import {useHomeStyles} from '../pages/Home/theme';
import {ModalBlock} from "./ModalBlock";
import {AddTweetForm} from "./AddTweetForm";
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch} from "react-redux";
import {setUserLoadingStatus} from '../store/ducks/user/actionCreators';
import {LoadingStatus} from "../store/ducks/tweets/contracts/state";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}


export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {

    const [visibleAddTweetModal, setVisibleAddTweetModal] = React.useState<boolean>(false)
    const dispatch = useDispatch()
    const onCloseAddTweetModal = () => {
        setVisibleAddTweetModal(false)
    }

    const onOpenAddTweetModal = () => {
        setVisibleAddTweetModal(true)
    }

    const exitProfile = () => {
        window.localStorage.clear()
        window.location.reload();
    }

    return (
        <div style={{position: 'sticky', top: '0'}}>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <Link to={'/home'}>
                        <div>

                            <TwitterIcon style={{marginRight: '10px'}} className={classes.logo} color='primary'/>

                        </div>
                    </Link>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <SearchIcon style={{marginRight: '10px'}} color='primary'/>
                        <Hidden smDown>
                            <Typography variant='h6'>Поиск</Typography>
                        </Hidden>

                    </div>

                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <NotificationsIcon style={{marginRight: '10px'}} color='primary'/>
                        <Hidden smDown>
                            <Typography variant='h6'>Уведомления</Typography>
                        </Hidden>
                    </div>

                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <EmailIcon style={{marginRight: '10px'}} color='primary'/>
                        <Hidden smDown>
                            <Typography variant='h6'>Сообщения</Typography>
                        </Hidden>

                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <BookmarkIcon style={{marginRight: '10px'}} color='primary'/>
                        <Hidden smDown>
                            <Typography variant='h6'>Закладки</Typography>
                        </Hidden>

                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <ListAltIcon style={{marginRight: '10px'}} color='primary'/>
                        <Hidden smDown>
                            <Typography variant='h6'>Список</Typography>
                        </Hidden>

                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <PersonIcon style={{marginRight: '10px'}} color='primary'/>
                        <Hidden smDown>
                            <Typography variant='h6'>Профиль</Typography>
                        </Hidden>

                    </div>
                </li>
                <li onClick={exitProfile} className={classes.sideMenuListItem}>
                    <div>

                        <ExitToAppIcon style={{marginRight: '10px'}} color='primary'/>
                        <Hidden smDown>
                            <Typography variant='h6'>Выйти</Typography>
                        </Hidden>

                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Button onClick={onOpenAddTweetModal} className={classes.SideMenuTweetButton} variant='contained'
                            color='primary'
                            fullWidth={true}>
                        <Hidden smDown>
                            Твитнуть
                        </Hidden>
                        <Hidden mdUp>

                            <CreateIcon/>
                        </Hidden>
                    </Button>
                    <ModalBlock visible={visibleAddTweetModal} onClose={onCloseAddTweetModal}>
                        <div style={{width: '450px'}}>
                            <AddTweetForm maxRows={15} classes={classes}/>
                        </div>

                    </ModalBlock>
                </li>

            </ul>
        </div>
    )
}