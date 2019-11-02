import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Divider from '@material-ui/core/Divider';
// import ImgCart from './logocart.png';
import ImgCartEmpty from './image/empty-cart.png';
import { connect } from 'react-redux';
import { getProduct } from '../../Public/Redux/Actions/product';

class Cart extends Component{
  state = {
    data: '',
  };
  componentDidMount = async () => {
    await this.props.dispatch (getProduct ());
    this.setState ({
      data: this.props.product.productList,
    });
  };

  render(){
    return (
      <div className="cart">
        <Container style={{maxWidth: "100%"}}>
          <Row>
            <Col sm={9}>
            <h4 style={{marginBottom:"2px", fontFamily:"Airbnb Cereal App Bold", textAlign:"center"}}>
              FOOD ITEMS
            </h4>
              <Card style={{paddingTop:"5px"}}>
                <Card.Body>
                  <Row>
                  {typeof this.state.data === 'object'
                  ? this.state.data.map (item => {
                      return (
                    <Col key={item.id_product} style={{backgroundColor:"white", paddingTop:"5px", paddingBottom:"5px"}} xs={6} md={4}>
                      <Card>
                        <Card.Img style={{ height: '12rem' }} variant="top" src={item.image_product} />
                        <Card.Body>
                          <Card.Title> {item.name_product}</Card.Title>
                          <Card.Text>
                            Rp. {item.price_product}
                          </Card.Text>
                          <Button variant="primary">Add</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    );
                    })
                      : <img
                      src="https://www.rhsports.com.au/images/DYO/loading-dyo.gif"
                      width="100%"
                      alt="gambar"
                      style={{marginLeft:"150%"}}
                    />
                  }
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card style={{minHeight:"100%", marginTop:"10%"}}>
                <Card.Body 
                style={{backgroundColor:"white",
                fontFamily:"Airbnb Cereal App Bold",
                 textAlign:"center"}}>
                  <h4 style={{marginBottom:"2px", fontFamily:"Airbnb Cereal App Bold", textAlign:"center"}}>
                    {/* <img src={ImgCart} alt="Logo" style={{width:"50px", height: "40px"}}/> */}
                    <p>CART</p>
                    <Divider />
                    <img src={ImgCartEmpty} alt="Logoempty" style={{width:"150px", height: "150px", marginTop:"100px"}}/>
                  </h4>        
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    product : state.product,
  }
}
export default connect(mapStateToProps)(Cart);