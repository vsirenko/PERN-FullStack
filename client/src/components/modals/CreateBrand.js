import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/gameAPI';

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const addBrand = () => {
       createBrand({name: value}).then(data => setValue(''))
      onHide()
    }
  return (
   <Modal show={show} onHide={onHide}>
       
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <Form>
                <Form.Control
                    placeholder={"Введите название типа"}
                    onChange={e => setValue(e.target.value)}
                />
                </Form>
            </Modal.Body>
        
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
       
   </Modal>
  )
};

export default CreateBrand;
