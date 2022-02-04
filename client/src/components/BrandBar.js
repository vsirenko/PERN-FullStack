import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context);
  return (
  <Row className='d-flex'>
        {device.brands.map(brand =>
            <Card 
            key={brand.id} 
            className={'p-3'} 
            style={{width: '150px', cursor: 'pointer'}}
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id && 'danger'}
            >
                {brand.name}
            </Card>
        )}
  </Row>
  );
});

export default BrandBar;
