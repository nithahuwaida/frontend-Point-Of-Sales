import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, } from 'reactstrap';
import { getCategory } from '../../../../Public/Redux/Actions/category';
import { patchProduct } from '../../../../Public/Redux/Actions/product';
import { connect,useDispatch, useSelector } from 'react-redux';


const EditProduct = (props) => {
  const initialFormState = { 
    id_product:"",
    name_product: "",
    desc_product: "",
    image_product: "",
    id_category: "",
    price_product:"" ,
    quantity_product:""
  };
  
  const [input, setInput] = useState(initialFormState);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    items: [],
    isFetching: false
  })

  const handleSubmitedit = async (event) => {
    event.preventDefault();
    try {
      // console.log(input)
      const result = await props.dispatch(patchProduct(input))
      setOpen(false);
    } catch (err) {

    }
  };

   const updateProduct =(row)=>{
    setInput(row)
    setOpen(!open);
  }
  const handleChange = nameName => event => {
    setInput({ ...input, [nameName]: event.target.value });
  };
  const showModalEdit = () => {
    setInput(initialFormState)
    setOpen(!open);
  };
  const getItems = async () => {
    await dispatch (getCategory())
    const items = content.category.categoryList
    setState({items})
}

  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const items = content.category.categoryList.map(item => {
      return(
          <option value={item.id}>{item.category}</option>
      )
    })

  return (
    <div>
      <Button style={{padding:"0px", minWidth:"0px"}}><Icon button onClick={()=>updateProduct(props.items)} color="primary"> create </Icon></Button>
      <Modal isOpen={open} toggle={showModalEdit} style={{marginTop:"6rem"}}>
        <ModalHeader toggle={showModalEdit}>
          Edit {input.name_product}
        </ModalHeader>
        <ModalBody>
          <Form>
            <Input type="hidden" name="id_product"  placeholder="Enter id Product"
                onChange={handleChange("id_product")}
                value={ input.id_product} />
              <FormGroup>
                <Label >Name Product</Label>
                <Input type="text" name="name_product"  placeholder="Enter Name Product"
                onChange={handleChange("name_product")}
                value={input.name_product} />
              </FormGroup>
              <FormGroup>
                <Label >Description</Label>
                <Input type="text" name="desc_product" placeholder="Enter Description Product"
                onChange={handleChange("desc_product")}
                value={input.desc_product} />
              </FormGroup>
              <FormGroup>
                <Label >Url Image</Label>
                <Input type="text" name="image_product" placeholder="Enter Url Image Product" 
                onChange={handleChange("image_product")}
                value={input.image_product}/>
              </FormGroup>
              <FormGroup>
                <div className="form-group">
                  <label >Category</label>
                  <select className="form-control" onChange={handleChange("id_category")} value={input.id_category} id="exampleFormControlSelect1">
                      {items}
                  </select>
                </div>
              </FormGroup>
              <FormGroup>
                <Label >Price</Label>
                <Input type="number" name="price_product" placeholder="Enter Price Product"
                onChange={handleChange("price_product")}
                value={input.price_product} />
              </FormGroup>
              <FormGroup>
                <Label >Quantity</Label>
                <Input
                  type="number"
                  name="quantity_product"
                  placeholder="Enter Quantity Product"
                  onChange={handleChange("quantity_product")}
                  value={input.quantity_product}
                />
              </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmitedit} color="primary">
            Save changes
          </Button>
          <Button toggle={showModalEdit} color="secondary">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    product: state.product,
    category:state.category,
  };
};

export default connect (mapStateToProps) (EditProduct);