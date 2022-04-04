import Caja from './Box';
import ColorButton from './ColorButton'
import './Styles/Main.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Crypto from './Styles/image.png';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Disc from './Styles/Discord.png';
import Face from './Styles/Facebook.png'
import Insta from './Styles/Instagram.png'
import Twit from './Styles/Twitter.png'
import { Twitter } from '@mui/icons-material';

function App() {
  return (
    <div className='Page'>
    <div className='Principal secondary-color'>   
      <Grid marginTop={'33px'} marginLeft= {'59px'}  className='Header'  container spacing={1}>   
        <Grid item xs={6} md={3}>
          <h3 className='primary-text'>WakeUp</h3>
        </Grid>     
        <Grid item xs={6} md={2}></Grid>
        <Grid item xs={6} md={1} textAlign={'center'}>
              <h3 className='subtitle-text'>Product</h3>
        </Grid> 
        <Grid item xs={6} md={1} textAlign={'center'}>
          <h3 className='subtitle-text'>Documentation</h3>            
        </Grid> 
        <Grid item xs={6} md={1} textAlign={'center'}>
              <h3 className='subtitle-text'>Community</h3>
        </Grid> 
        <Grid item xs={6} md={1}></Grid>
          <Grid  item xs={6} md={1}>
          <ColorButton button='0' text='Get Started'>              
          </ColorButton>    
          </Grid>             
        </Grid>  
     
      <Box sx={
          {
            width:541,
            height:406 , 
            float:'left'                
          }}>
        <h5 className='primary-color Container'>Your NFT Partner</h5>
        <h1 className='white-color Container'>The NFT protocol to wake up your App</h1>
        <h4 className='white-color Container'>We provide the NFT infraestructure so you can focus completely on your core business</h4>
        <Grid width={'750px'} container spacing={1}>   
          <Grid item xs={6} md={6}>
            <ColorButton button='1' text='Get Started'>              
            </ColorButton> 
          </Grid> 
          <Grid item xs={6} md={6}>
            <ColorButton button='2' text='Learn How'>              
            </ColorButton> 
          </Grid> 
        </Grid>  
      </Box>     
      <CardMedia sx={
          {
            width:400,
            height:400 ,
           float:'right',
           marginRight:16
          }} image={Crypto} title='WakeUp' ></CardMedia>
      <Grid width={'1050px'} marginTop={'500px'} marginLeft={'197px'} container spacing={1}>
        <Grid item xs={6} md={4}>
        <Caja Titulo='Plug-and-play API' divcolor ='#2DC071' Texto='Our API removes all the complexity 
                        and overhead of interacting with 
                        NFT protocols.'></Caja>
        </Grid>
        <Grid item xs={6} md={4}>
        <Caja Titulo='Security First' divcolor ='#2DC071' Texto='All our smart contracts are audited
by certified third parties to prevent 
any possible vulnerability.'></Caja>
        </Grid>
        <Grid item xs={6} md={4}>
        <Caja Titulo='Plug-and-play API' divcolor ='#2DC071' Texto='Our API removes all the complexity 
                        and overhead of interacting with 
                        NFT protocols.'></Caja>
        </Grid>        
      </Grid>      
    </div>
    <div className='Content'>
    <Divider style={{ background:'#FF685B' ,marginLeft:197 }} sx={{borderBottomWidth:7, width:94, marginTop:10 }}></Divider>
      <Box className='Container'>
          <h5 className='text-subtitle'>Expore our solution</h5>
          <h2 className='subtilte-text-black'>Our NFT infrastructure help you to focus completely on your users growth.</h2>
      </Box>
      <Grid width={'1050px'} marginLeft={'197px'} container spacing={1}>
        <Grid item xs={6} md={4}>
        <Caja Titulo='Games scholarships' divcolor ='#FF685B' Texto='Build your own scholarship program 
withouth worring about software 
development and maintenance.'></Caja>
        </Grid>
        <Grid item xs={6} md={4}>
        <Caja Titulo='Subscriptions' divcolor ='#FF685B' Texto='Generate a new revenue stream 
by NFT´ing your memebership 
suscriptions.'></Caja>
        </Grid>
        <Grid item xs={6} md={4}>
          <Caja Titulo='DeFi Protocols' divcolor ='#FF685B' Texto='Convert  liquidity injection in NFTs 
          wTokens, fostering composability 
          with other protocols.'></Caja>
        </Grid>  
        <Grid item xs={6} md={4}>
          <Caja Titulo='Identity' divcolor ='#FF685B' Texto='Convert your users profiles in NFTs, 
so they will be able to trade their 
reputation.'></Caja>
        </Grid>  
        <Grid item xs={6} md={4}>
          <Caja Titulo='Digital Art' divcolor ='#FF685B' Texto='Allow digital art owners to rent 
their NFTs, generating a new revenue
model for your collection/marketplace.'></Caja>
        </Grid>    
        <Grid item xs={6} md={4}>
          <Caja Titulo='And More..' divcolor ='#FF685B' Texto='Use cases have no limit: 
off-chain assets, metaverse items, 
music, social status, and more..'></Caja>
        </Grid>         
      </Grid>    
    </div>
    <div className='Footer'>
      <Box marginLeft={'450px'} marginTop={'25px'}>
      <Grid width={'815px'} container spacing={1}>
        <Grid item xs={4} md={4}>
          <h5> DAO</h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5> Resources</h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5> Contact</h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5> Community</h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5> Documentation</h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5> hello@wakeupdao.com</h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5> Partners</h5>
        </Grid>
      </Grid>
       
      </Box>
      <br></br>
      <Box marginLeft={30}>
        <h6 sx={{ float:'left'}} >Copyright © 2021 - 2022 Wake Up DAO. All rights reserved.</h6>
        <CardMedia sx={
          {  
            width:23,
            height:23 , 
            marginRight:5,        
           float:'right'          
          }} image={Twit} title='Twitter' ></CardMedia>
          <CardMedia sx={
          {  
            width:23,
            height:23 ,    
            marginRight:5,       
           float:'right'          
          }} image={Face} title='Facebook' ></CardMedia>
          <CardMedia sx={
          {  
            width:23,
            height:23 , 
            marginRight:5,          
           float:'right'          
          }} image={Insta} title='Instagram' ></CardMedia>
          <a href='https://discord.gg/xXT8zB5Nk9'>
          <CardMedia sx={
          {  
            width:23,
            height:23 ,    
            marginRight:5,       
           float:'right'          
          }} image={Disc} title='Discord' ></CardMedia></a>
      </Box>
          
    </div>
    </div>
  );
}

export default App;
