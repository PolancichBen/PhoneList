import React from 'react';

const ListItems = ({ listData }) => {
  console.log('Listdata', listData);
  return <div>{listData.item}</div>;
};

export default ListItems;
