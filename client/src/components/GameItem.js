import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { DEVICE_ROUTE } from '../utils/consts';

const GameItem = ({game}) => {
    const history = useNavigate()
    console.log(history);
  return (
      <Col md={3} className={'mt-3'} onClick={() => history(DEVICE_ROUTE + '/' + game.id)}>
         <Card style={{width: 200, cursor: 'pointer'}} border={"light"}>
                <Image  src={game.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Рейтинг:</div>
                    <div className="d-flex align-items-center">
                        <div>{game.rating}</div>
                    </div>
                </div>
                <div>{game.name}</div>
            </Card>
      </Col>
  )
};

export default GameItem;
