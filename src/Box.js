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
                    <h5 style={{marginTop:35,marginLeft:40, fontSize:16}}>{Titulo}</h5>
                    <Divider  style={{ background:divcolor  ,marginLeft:40 }} sx={{borderBottomWidth:2, width:50}}></Divider>
                    <br></br>
                    <div style={{
                        width: 257,
                        height: 60,
                        marginLeft:40
                    }}>                   
                    <span className="text">{Texto}</span>
                </div>
                </CardContent>
            </Card>
        );
})	;
export default Box;