import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import { getCategory } from '../../../../Public/Redux/Actions/category';
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
            // name_category:"",
            price_product:"",
            quantity_product:"",
            data:[],
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch (getCategory());
        // console.log('ini',this.props.category.categoryList)
        this.setState ({
          data: this.props.category.categoryList,
        });
      };

    handlerChange=(e)=>{
      this.setState({[e.target.name]: e.target.value})
      }
    submit = async(e) => {
      e.preventDefault();
        //   console.log(this.state)
          await this.props.dispatch(postProduct(this.state))
          .then(res =>{
        //   console.log(res.data)
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
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                Name product
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="name_product" id="name_product" name="name_product" placeholder="Enter name product" onChange={this.handlerChange}/>
                                </Col>
                                <Form.Control.Feedback>Name product can't be blank</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm="2">
                                Description product
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control required  type="desc_product" id="desc_product" name="desc_product" placeholder="Enter descriptin product" onChange={this.handlerChange} />
                                </Col>
                                <Form.Control.Feedback>Description can't be blank</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm="2">
                                Image 
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control required type="image_product" id="image_product" name="image_product" placeholder="Enter image product" onChange={this.handlerChange} />
                                </Col>
                                <Form.Control.Feedback>Image can't be blank</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                 Category
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control as="select" id="id_category" name="id_category" value={this.state.id_category} onChange={this.handlerChange}> 
                                    {this.state.data.map (item => {
                                        return(
                                        <option value={item.id} onChange={this.handlerChange}> 
                                            {item.category}
                                        </option>
                                       );
                                    })
                                    }
                                    </Form.Control>
                                </Col>
                                <Form.Control.Feedback>Category can't be blank</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                Quantity
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="number" id="quantity_product" name="quantity_product" placeholder="Enter stock product..." onChange={this.handlerChange} />
                                </Col>
                                <Form.Control.Feedback>Quantity can't be blank</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                Price
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="number" min-value="0" id="price_product" name="price_product" placeholder="Enter price product..." onChange={this.handlerChange} />
                                </Col>
                                <Form.Control.Feedback>Price can't be blank</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary" onClick={this.props.onHide}>Save</Button>
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
      category : state.category,
    }
  }
export default connect(mapStateToProps)(AddProduct);