import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Form, FormGroup,Input, } from 'reactstrap';
import { deleteProduct } from '../../../../Public/Redux/Actions/product';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const DeleteProduct = (props) => {
    const initialFormState = { 
      id_product:"",
      name_product:"",
    };
  const [input, setInput] = useState(initialFormState);
  const [open, setOpen] = React.useState(false);

  const handleSubmitdelete = async (event) => {
    event.preventDefault();
    try {
      console.log(input)
      await props.dispatch(deleteProduct(input))
      setOpen(false);
    } catch (err) {

    }
  };
  const handleClose = () => {
    setInput(initialFormState)
    setOpen(false);
  };

  const delProduct =(row)=>{
    setInput(row)
    console.log('row',row)
    setOpen(true);
  }
  const handleChange = nameName => event => {
    setInput({ ...input, [nameName]: event.target.value });
  };

  return (
    <div>
      <Button style={{padding:"0px", minWidth:"0px"}}><Icon onClick={()=>delProduct(props.id_product)} color="secondary"> delete </Icon></Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <h6>Are You sure delete product {props.items.name_product}?</h6>
            <Form>
              <FormGroup>
                <Input type="hidden" name="name_product" 
                onChange={handleChange("name_product")}
                value={props.id_product} />
              </FormGroup>
            </Form>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleSubmitdelete} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.product,
  };
};

export default connect(mapStateToProps) (DeleteProduct);