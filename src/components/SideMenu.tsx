import React, {ReactElement} from 'react'
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import {Hidden, Typography} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";

import {Button} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { useHomeStyles } from '../pages/Home/theme';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <div>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <TwitterIcon style={{marginRight: '10px'}} className={classes.logo} color='primary'/>

                    </div>

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
                <li className={classes.sideMenuListItem}>
                    <Button className={classes.SideMenuTweetButton} variant='contained' color='primary'
                            fullWidth={true}>
                        <Hidden smDown>
                            Твитнуть
                        </Hidden>
                        <Hidden mdUp>

                            <CreateIcon/>
                        </Hidden>
                    </Button>
                </li>

            </ul>
        </div>
    )
}