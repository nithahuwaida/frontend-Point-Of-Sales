import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
// import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { getProduct } from '../../../../Public/Redux/Actions/product';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class TableProduct extends Component{
  constructor(props){
    super(props);
    this.state={
      data :'',
      addModalShow:false,
    }
  }
    componentDidMount = async () => {
      await this.props.dispatch (getProduct ());
      this.setState ({
        data: this.props.product.productList,
      });
    };

    // number= 0

    render(){
    const addModalClose =()=> this.setState({addModalShow:false});
      return (
      <div className="tableproduct" >
            
            <div>
              <h6><b>Data Products</b>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AddIcon />}
                    style ={{marginBottom:"10px", marginLeft:"73%"}}
                    onClick={()=>this.setState({addModalShow :true})}
                  >
                  Add Product
                  </Button>
              </h6>
              <AddProduct 
              show={this.state.addModalShow}
              onHide={addModalClose}/>
            </div>
            <Table striped bordered hover>
            <thead>
                <tr style={{textAlign:"center"}}>
                {/* <th>#</th> */}
                <th>Image</th>
                <th>Name Product</th>
                <th>Description Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {typeof this.state.data === 'object'
              ? this.state.data.map (item => {
                  return(
                <tr key={item.id_product}>
                  {/* <td>{this.number=this.number+1}</td> */}
                  <td>
                    {/* <Avatar alt="Natacha" src={item.image_product} /> */}
                    <img src={item.image_product} alt="Logo" style={{width:"50px", height: "40px"}}/>
                  </td>
                  <td>
                    {item.name_product}
                  </td>
                  <td>{item.desc_product}</td>
                  <td style={{textAlign:"center"}}>({item.id_category}){item.name_category}</td>
                  <td style={{textAlign:"center"}}>{item.price_product}</td>
                  <td style={{textAlign:"center"}}>{item.quantity_product}</td>
                  <td style={{textAlign:"center"}}>
                    <EditProduct id_product={item.id_product} items={item} />
                    <DeleteProduct id_product={item.id_product} items={item}/>
                  </td>
                </tr>
                );
              })
                : <img
                src="https://www.rhsports.com.au/images/DYO/loading-dyo.gif"
                width="100%"
                alt="gambar"
                style={{marginLeft:"150%"}}
              />
            }
            </tbody>
            </Table>
        </div>
      )
    }
};

const mapStateToProps = state =>{
  return {
    product : state.product,
  }
}

export default connect(mapStateToProps)(TableProduct);