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
import { deleteCategory } from '../../../../Public/Redux/Actions/category';
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


const DeleteCategory = (props) => {
    const initialFormState = { 
      id_category:"",
      name_category:"",
    };
  const [input, setInput] = useState(initialFormState);
  const [open, setOpen] = React.useState(false);

  const handleSubmitdelete = async (event) => {
    event.preventDefault();
    try {
      // console.log(input)
      await props.dispatch(deleteCategory(input))
      setOpen(false);
    } catch (err) {

    }
  };
  const handleClose = () => {
    setInput(initialFormState)
    setOpen(false);
  };

  const delCategory =(row)=>{
    setInput(row)
    // console.log('row',row)
    setOpen(true);
  }
  const handleChange = nameName => event => {
    setInput({ ...input, [nameName]: event.target.value });
  };

  return (
    <div>
      <Button style={{padding:"0px", minWidth:"0px"}}><Icon onClick={()=>delCategory(props.id_category)} color="secondary"> delete </Icon></Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <h6>Are you sure delete category {props.name_category}?</h6>
            <Form>
              <FormGroup>
                <Input type="hidden" name="name_category" 
                onChange={handleChange("name_category")}
                value={props.id_category} />
              </FormGroup>
            </Form>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitdelete} color="primary">
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
    category: state.category,
  };
};

export default connect(mapStateToProps)(DeleteCategory);