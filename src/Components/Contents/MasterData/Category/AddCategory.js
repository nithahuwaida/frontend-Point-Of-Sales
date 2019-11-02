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
import { Form, FormGroup,Input, Label} from 'reactstrap';
import { postCategory } from '../../../../Public/Redux/Actions/category';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';

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


const PostCategory = (props) => {
    const initialFormState = { 
      id:"",
      name_category:"",
    };
  const [input, setInput] = useState(initialFormState);
  const [open, setOpen] = React.useState(false);

  const Submitadd = async (event) => {
    event.preventDefault();
    try {
      console.log(input)
      await props.dispatch(postCategory(input))
      setOpen(false);
    } catch (err) {

    }
  };
  const handleClose = () => {
    setInput(initialFormState)
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = nameName => event => {
    setInput({ ...input, [nameName]: event.target.value });
  };

  return (
    <div>
      <h6>
        <b>Data Category</b>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            style ={{marginBottom:"10px", marginLeft:"73%"}}
            onClick={handleOpen}
          >
           Add Category
          </Button>
      </h6>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Category
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Form>
              <FormGroup>
                <Label >Name Category</Label>
                <Input type="text" name="name_category"  placeholder="Enter name category"
                onChange={handleChange("name_category")}
                value={input.name_category} />
              </FormGroup>
            </Form>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={Submitadd} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} >
            Cancel
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

export default connect(mapStateToProps)(PostCategory);