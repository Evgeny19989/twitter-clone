import React, {ReactElement} from 'react'
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import {Typography} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";
import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <div>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <IconButton aria-label='delete'>
                            <TwitterIcon className={classes.logo} color='primary'/>
                        </IconButton>
                    </div>

                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <SearchIcon color='primary'/>

                        <Typography variant='h6'>Поиск</Typography>
                    </div>

                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <NotificationsIcon color='primary'/>

                        <Typography variant='h6'>Уведомления</Typography>
                    </div>

                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <EmailIcon color='primary'/>

                        <Typography variant='h6'>Сообщения</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <BookmarkIcon color='primary'/>

                        <Typography variant='h6'>Закладки</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <ListAltIcon color='primary'/>

                        <Typography variant='h6'>Список</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>

                        <PersonIcon color='primary'/>

                        <Typography variant='h6'>Профиль</Typography>
                    </div>
                </li>

            </ul>
        </div>
    )
}