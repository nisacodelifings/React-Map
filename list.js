import React from 'react';   
import ReactDOM from 'react-dom';   
  
function List(props) {  
  const myLists = props.myLists;  
  const listItems = myLists.map((myList) =>  
    <li>{myList}</li>  
  );  
  return (  
    <div>  
        <ul>{listItems}</ul>  
    </div>  
  );  
} 
export default List;  