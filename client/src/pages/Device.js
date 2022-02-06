import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/gameAPI';
import { login } from '../http/userAPI';

function Device() {
  const [game, setGame] = useState({ info:[]});
  const { id } = useParams();

  useEffect(() => {
      fetchOneDevice(id).then(data => setGame(data))
  }, [])

  return (
  <Container className='d-flex mt-4'>
      <Col md={4}>
          <Image width={370} height={460} src={process.env.REACT_APP_API_URL + '/' + game.img}/>
      </Col>
      <Col md={4}>
        <Row>
        <h2>{game.name}</h2>
        </Row>
        <h4>Цена: {game.price} руб.</h4>
        {game.info.map(item => <>{item.title} : {item.description}</>)}
      </Col>
      <Col md={4} style={{marginLeft: '20px'}}>
        <Button>Добавить в корзину</Button>
      </Col>

  </Container>
  );
}

export default Device;
