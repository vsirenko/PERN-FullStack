import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import GameList from '../components/GameList';
import TypeBar from '../components/TypeBar';
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/gameAPI';

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(()=> {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands.apply().then(data => device.setBrands(data))
    fetchDevices.apply().then(data => device.setDevices(data.rows))
  }, [])
  return(
    <Container>
    <Row className="mt-5">
        <Col md={3}>
            <TypeBar/>
        </Col>
        <Col md={9}>
            <BrandBar />
            <GameList />
        </Col>
    </Row>
</Container>
  )
})

export default Shop;