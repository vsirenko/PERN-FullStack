import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { Row } from 'react-bootstrap';
import GameItem from './GameItem';


const GameList = observer((props) => {
  const { device } = useContext(Context);
  return (
      <Row className='d-flex'>
        {device.devices.map(item => 
            <GameItem key={item.id} game={item}/>
        )}
      </Row>
  )
});



export default GameList;
