import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

function Device() {
  const game =  {id: 1, name: 'TOM CLANCYS RAINBOW SIX SIEGE', price: 2500, rating: 5, img: `https://static.gabestore.ru/product/0_j1Ci2n2Vnd2zVuX4WATB4juk1xtRzq.jpg`}
  return (
  <Container className='d-flex mt-4'>
      <Col md={4}>
          <Image width={370} height={460} src={game.img}/>
      </Col>
      <Col md={4}>
        <Row>
        <h2>{game.name}</h2>
        </Row>
        <h4>Цена: {game.price} руб.</h4>
      </Col>
      <Col md={4} style={{marginLeft: '20px'}}>
        <Button>Добавить в корзину</Button>
      </Col>

  </Container>
  );
}

export default Device;
