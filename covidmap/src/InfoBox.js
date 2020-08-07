import React from 'react'
import { Card, Typography, CardContent } from '@material-ui/core'

import './InfoBox.css'

function InfoBox({ title, cases, isRed, active, total, ...props }) {
    return (

        <Card
            onClick={props.onClick}
            className={`infoBox ${active && 'infobox--selected'} ${isRed && 'infobox--red'} `}
        >
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'} `}>{cases}</h2>

                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total

                    </Typography>
            </CardContent>
        </Card>


    )
}

export default InfoBox