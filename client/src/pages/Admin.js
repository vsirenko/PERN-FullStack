import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Chat from '../components/Chat';
import CreateBrand from '../components/modals/CreateBrand';
import CreateItem from '../components/modals/CreateItem';
import CreateType from '../components/modals/CreateType';


const Admin = () => {
    const [hideBrand, setHideBrand] = useState(false)  
    const [hideType, setHideType] = useState(false)
    const [hideItem, setHideItem] = useState(false)
  
  return(
    <Container className='mt-4'>
      <Button variant={'outline-dark'} onClick={() => setHideType(!hideType)} style={{marginRight: '40px'}}>Добавить тип</Button>
      <Button variant={'outline-dark'} onClick={() => setHideBrand(!hideBrand)} style={{marginRight: '40px'}}>Добавить бренд</Button>
      <Button variant={'outline-dark'} onClick={() => setHideItem(!hideItem)} style={{marginRight: '40px'}}>Добавить игру</Button>
      <CreateBrand show={hideBrand} onHide={() => setHideBrand(false)}/>
      <CreateItem show={hideItem} onHide={() => setHideItem(false)}/>
      <CreateType show={hideType} onHide={() => setHideType(false)}/>
      <Chat />
    </Container>
  )
}

export default Admin;