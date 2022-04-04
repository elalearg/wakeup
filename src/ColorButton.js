import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Styles/Main.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonOrange = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: '#FF685B',
    width: '163px',
    height: '52px',   
    padding: '15px 25px',
    '&:hover': {
      backgroundColor: '#EF6054',
    }
    
  }));
  const ButtonOrangeMargin = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: '#FF685B',
    width: '163px',
    height: '52px',   
    marginLeft:'197px',
    padding: '15px 25px',
    '&:hover': {
      backgroundColor: '#EF6054',
    }
    
  }));

  const ButtonVariantOrange = styled(Button)(({ theme }) => ({        
    backgroundColor: "transparent",
    border: 'solid',
    borderColor:'#FF685B',
    width: '163px',
    height: '52px',   
    marginLeft:'15px',
    padding: '15px 25px',
    '&:hover': {
      backgroundColor: '#EF6054',
    }
    
  }));


  export default function ColorButton({button, text}) {
    if(button==='0')
    {
      return (
      <ButtonOrange variant="contained" endIconn={<ArrowForwardIcon/>}>
          <span className='subtitle-text'>{text}</span>
      </ButtonOrange>)
    }
    if(button==='1')
    {
      return (
        
        <ButtonOrangeMargin variant="outlined" color="error">
            <span className='subtitle-text'>{text}</span>
        </ButtonOrangeMargin>)
    }
    if(button==='2')
    {
      return (
        
        <ButtonVariantOrange variant="outlined" color="error">
            <span className='subtitle-text'>{text}</span>
        </ButtonVariantOrange>)
    }
  };