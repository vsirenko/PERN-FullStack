import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { DEVICE_ROUTE } from '../utils/consts';

const GameItem = ({game}) => {
    const navigate = useNavigate()
  return (
      <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + game.id)}>
         <Card style={{width: 200, cursor: 'pointer'}} border={"light"}>
                <Image  src={process.env.REACT_APP_API_URL + '/' + game.img}/>
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
