import React, { useEffect, useState } from 'react';

import ListItems from './listItems';

const List = ({type, details}) => {
  console.log('type:',type, 'Details:',details)
  return (
  <div>
    <h3>{details.name}</h3>

    {Object.entries(details.items).map((stuff)=>(console.log('STUFF:', stuff)))}
  </div>
  )
};

export default List;
