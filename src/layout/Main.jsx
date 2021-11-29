import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export default function Main(props){
    const {
        cards,
        handleClick
    } = props

    return (
        <main style={{maxWidth: 1200, margin: '0 auto' }}>
            <Grid container spacing={2}>
                {
                    cards.map((card, i)=>(
                        <Grid key={i} item xs={2} >
                            <Card variant="outlined" onClick={()=>handleClick(i)} sx={{paddingTop: 5, paddingBottom: 5}}>
                                {card.visible && card.icon}
                                {!card.visible && 
                                    <Typography as="p" sx={{
                                        padding: '30px'
                                    }}>
                                        Click to select
                                    </Typography>
                                }
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}