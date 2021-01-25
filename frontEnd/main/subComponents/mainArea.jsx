import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import List from './list/list';

const MainArea = ({ data, loadListings }) => {
  // console.log('ListArea data', data)
  const [itemInput, setIteminput] = useState('');
  const [optionsExtended, setOptionsExtended] = useState(false);

  const fastAdd = () => {
    console.log(`Adding ${itemInput}`);
    Axios.post('/newListItem', {
      itemInput,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error with new Item Post', err);
      });
    setIteminput('');
  };

  const showMoreOptions = () => {
    setOptionsExtended(!optionsExtended);
    console.log(`Options are now ${optionsExtended ? 'opened' : 'closed'}`);
  };

  return (
    <div>
      <div>
        <input onChange={(e) => setIteminput(e.target.value)}></input>
        <button onClick={() => fastAdd()}>Fast Add</button>
        <button onClick={() => showMoreOptions()}>More Options</button>
      </div>
      <div>
        {data.exampleListItems.map((listItem) => (
          <List type="main" details={listItem} key={listItem.id} />
        ))}
      </div>
    </div>
  );
};

export default MainArea;
