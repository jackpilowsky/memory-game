import React from 'react'
import { Typography, Grid, Box } from '@mui/material';
import styled from 'styled-components';

const StyledBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'flipped',
  })(({ flipped, theme }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
    ...(flipped && {
        transform: 'rotateY(180deg)'
    }),
}));


const cardFaceStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    border: '1px solid #f1f1f1'
}
  

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
                                    <Box onClick={()=>handleClick(i)}
                                        sx={{
                                            backgroundColor: 'transparent',
                                            perspective: 1000,
                                            height: 200
                                        }}>
                                        <StyledBox flipped={(card.faceUp ? 'flipped' : '')}>
                                            <Box sx={cardFaceStyles}>
                                                <Typography as="p" sx={{
                                                    padding: '88px 0',
                                                    color: (disabled ? '#999' : '#000')
                                                }}>
                                                    Click to select
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                ...cardFaceStyles,
                                                transform: 'rotateY(180deg)',
                                                paddingTop: '52px',
                                                height: 'calc(100% - 52px)'
                                            }}>
                                                {card.icon}
                                            </Box>
                                        </StyledBox>
                                    </Box>
                                    
                                }
                            </Grid>
                        )
                    })
                }
            </Grid>
        </main>
    )
}