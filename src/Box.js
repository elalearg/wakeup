import React, { memo } from "react";
import Card from '@mui/material/Card';
import './Styles/Main.css';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import BoxUi from '@mui/material/Box';

const Box = memo(({Titulo, divcolor, Texto}) =>{
        return (
            <Card className="Card">
                <CardContent>
                    <h5 style={{marginTop:25,marginLeft:20, fontSize:16}}>{Titulo}</h5>
                    <Divider  style={{ background:divcolor  ,marginLeft:20 }} sx={{borderBottomWidth:2, width:50}}></Divider>
                    <br></br>
                                      
                    <BoxUi className="text" sx={{ width: 'auto', marginLeft:2}}> 
                        {Texto}
                    </BoxUi>
                   
                </CardContent>
            </Card>
        );
})	;
export default Box;