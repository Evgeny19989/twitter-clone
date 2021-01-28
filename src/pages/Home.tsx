import {Grid, Paper} from '@material-ui/core'
import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";

export const Home = () => {
    return <section>
        <Grid container spacing={2}>
            <Grid item xs={1}>
                    <ul>
                        <li><TwitterIcon color='primary'/></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            </Grid>
            <Grid item xs={7}>
                <Paper>2</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>33</Paper>
            </Grid>
        </Grid>
    </section>
}