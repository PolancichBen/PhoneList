import React, { useEffect, useState } from 'react';

import ListItems from './listItems';

const List = ({ type, details }) => {
  console.log('type:', type, 'Details:', details);
  return (
    <div>
      <h3>{details.name}</h3>
      {details.items.map((item) => (
        <ListItems listData={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
