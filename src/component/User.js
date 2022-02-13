import React from 'react';
import './style/User.css'


export default function User({ idx, name, lname, mobile, data, setData }) {


  function deleteBtn() {
    data = data.filter(function(item,i) {
      return i !== idx
  })
    setData(data);
  }




  return (
    <>
      <table >
        <thead>
          <tr>
            <th>{name}</th>
            <th>{lname}</th>
            <th>{mobile}</th>
          </tr>

        </thead>
      <button className='delete-cont' onClick={deleteBtn} >Delete </button>
      </table>
      </>
  );
}
