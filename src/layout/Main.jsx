import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export default function Main(props){
    const {
        cards,
        disabled, 
        handleClick
    } = props

    return (
        <main style={{maxWidth: 1200, margin: '0 auto' }}>
            <Grid container spacing={2}>
                {
                    cards.map((card, i)=>{
                        return  (
                            <Grid key={i} item xs={2} >
                                {!card.isMatched &&
                                    <Card variant="outlined" onClick={()=>handleClick(i)} sx={{paddingTop: 5, paddingBottom: 5}}>
                                        {card.faceUp && card.icon}
                                        {!card.faceUp && 
                                            <Typography as="p" sx={{
                                                padding: '30px',
                                                color: (disabled ? '#999' : '#000')
                                            }}>
                                                Click to select
                                            </Typography>
                                        }
                                    </Card>
                                }
                            </Grid>
                        )
                    })
                }
            </Grid>
        </main>
    )
}