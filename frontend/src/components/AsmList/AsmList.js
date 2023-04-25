import React from 'react';
import '../AsmList/AsmList.css';

const AsmList = (props) => {
  return (
    
        <tr>
            <td>{props.data.title}</td>
            <td>{props.data.due_date}</td>
            <td>{props.data.due_time}</td>
            <td>{props.data.status}</td>
        </tr>

   
  )
}

export default AsmList;