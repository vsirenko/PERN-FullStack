import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';

const CreateItem = ({show, onHide}) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        const filter = info.filter(info => info.number !== number) 
        setInfo(filter)
    }
  return(
    <Modal show={show} onHide={onHide}>
       
    <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Form>
            <div className='d-flex justify-content-between'>
            <Dropdown>
                <Dropdown.Toggle>Выбирите тип:</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type => 
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle>Выбирите бренд:</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map(brand => 
                        <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            </div>
            <Form.Control placeholder='Введите название устройства!' className='mt-3' />
            <Form.Control placeholder='Введите стоимость устройства!' className='mt-3' />
            <Form.Control className='mt-3' type='file' />
                        <hr />
            <Button variant='outline-dark'
                onClick={addInfo}
            >Добавить новое свойство</Button>
            {
                info.map(i => 
                <Row className='mt-3 mb-3' key={i.number}>
                    <Col md={4}>
                        <Form.Control placeholder='Название' />
                    </Col>
                    <Col md={4}>
                        <Form.Control placeholder='Описание' />
                    </Col>
                    <Col md={4}>
                        <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Удалить</Button>
                    </Col>
                </Row>
                )
            }
        </Form>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success">Добавить</Button>
    </Modal.Footer>

</Modal>
  );
};

export default CreateItem;
