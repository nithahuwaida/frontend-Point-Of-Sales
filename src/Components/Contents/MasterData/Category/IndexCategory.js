import React, {useState , useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import TableCategory from './TableCategory';
import { getCategory } from '../../../../Public/Redux/Actions/category';
import AddCategory from './AddCategory';


const IndexCategory = () => {
  const [state, setState] = useState({
    items: [],
    isFetching: false
  })
  const content = useSelector(state => state);
  const dispatch = useDispatch();

  const getItems = async () => {
      await dispatch (getCategory())
      const items = content.category.categoryList
      setState({items})
  }

  const updateState = (item) => {
      const itemIndex = state.items.findIndex(data => data.id === item.id)
      const newArray = [
      // destructure all items from beginning to the indexed item
      ...state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...state.items.slice(itemIndex + 1)
      ]
      setState({ items: newArray })
  }

  const deleteItemFromState = (id) => {
      const updatedItems = state.items.filter(item => item.id !== id)
      setState({ items: updatedItems })
  }

  useEffect(() => {
      setState({...state, isFetching: true})
      getItems()
      setState({isFetching: false})

  }, [])
  
  return(
    <div className="tableproduct" >
          <AddCategory/>
          <TableCategory items={state.items}  updateState={updateState} deleteItemFromState={deleteItemFromState} />
    </div>
    );
}
const mapStateToProps = state => {
    return {
      category: state.category,
    };
  };
  
export default connect(mapStateToProps)(IndexCategory);