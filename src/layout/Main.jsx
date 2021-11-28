import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

export default function Main(props){
    const {
        cards
    } = props
    console.log(cards)
    return (
        <main>
            <Grid container spacing={2}>
                {
                    cards.map((card, i)=>(
                        <Grid key={i} item xs={2} >
                            <Card variant="outlined" sx={{
                            paddingTop: 10, 
                            paddingBottom: 10
                        }}>
                                {card.icon}
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}