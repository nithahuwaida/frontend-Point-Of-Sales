import React from 'react';
import Table from 'react-bootstrap/Table';
import {connect, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeleteCategory from './DeleteCategory';
import EditCategory from './EditCategory';


const TableCategory = (props) => {
  const content = useSelector(state => state);


  const items = content.category.categoryList.map(item => {
      return(
        <tr key={item.id} >
          <td style={{textAlign:"center"}}>{item.category}</td>
          <td style={{textAlign:"center"}}>
            <div style={{width:"110px"}}>
              <EditCategory id_category={item.id} items={item}/>
              {' '}
              <DeleteCategory id_category={item.id} items={item}/>
            </div>
          </td>
        </tr>
      )
    })
    return(
      <div className="tableproduct" >
          <Table striped bordered hover>
          <thead>
              <tr style={{textAlign:"center"}}>
              <th>Category</th>
              <th></th>
              </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          </Table>
      </div>
    )
}
const mapStateToProps = state => {
    return {
      category: state.category,
    };
  };
  
export default connect(mapStateToProps)(withRouter(TableCategory));