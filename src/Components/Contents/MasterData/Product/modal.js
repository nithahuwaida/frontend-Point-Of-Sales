import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import { postProduct } from '../../../../Public/Redux/Actions/product';
import { connect } from 'react-redux';

class AddProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            name_product:"",
            desc_product:"",
            image_product:"",
            id_category:"",
            price_product:"",
            quantity_product:"",
        }
    }

    handlerChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
        }
    submit = async(e) => {
        e.preventDefault();
            console.log(this.state)
            await this.props.dispatch(postProduct(this.state))
            .then(res =>{
            console.log(res.data)
            });
        }

    render(){
        return(
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Add Product
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={e => this.submit(e)}>
                    <Modal.Body>
                        <div className ="container">
                            <Form.Group as={Row} controlId="name_product">
                                <Form.Label column sm="2">
                                Name product
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="name_product" id="name_product" name="name_product" placeholder="Enter name product" onChange={this.handlerChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="desc_product">
                                <Form.Label column sm="2">
                                Description product
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control  type="desc_product" id="desc_product" name="desc_product" placeholder="Enter descriptin product" onChange={this.handlerChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="image_product">
                                <Form.Label column sm="2">
                                Image Password
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="image_product" id="image_product" name="image_product" placeholder="Enter image product" onChange={this.handlerChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="id_category">
                                <Form.Label column sm="2">
                                Password
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="id_category" id="id_category" name="id_category" placeholder="Enter category..." onChange={this.handlerChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="quantity_product">
                                <Form.Label column sm="2">
                                Quantity
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="quantity_product" id="quantity_product" name="quantity_product" placeholder="Enter stock product..." onChange={this.handlerChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="price_product">
                                <Form.Label column sm="2">
                                Password
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="price_product" id="price_product" name="price_product" placeholder="Enter price product..." onChange={this.handlerChange} />
                                </Col>
                            </Form.Group>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary" onClick={this.props.onHide}>Close</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}
const mapStateToProps = state =>{
    return {
      product : state.product,
    }
  }
export default connect(mapStateToProps)(AddProduct);