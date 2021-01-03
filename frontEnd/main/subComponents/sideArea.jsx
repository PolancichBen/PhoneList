import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import List from './list/list.jsx';

const getListItems = () => {
  Axios.get('/listItems')
    .then((res) => {
      console.log(`Recieved ${res.data}`);
    })
    .catch((err) => {
      console.log('Error getting new list Items', err);
    });
};

const SideArea = () => {
  const [expandSideBar, setExpandSideBar] = useState(false);
  const [listItems, setListItems] = useState('');

  useEffect(() => {
    getListItems();
  }, []);

  const sideBarExpansion = () => {
    setExpandSideBar(!expandSideBar);
    console.log(`Side Bar is now ${expandSideBar ? 'Open' : 'Closed'}`);
  };

  return (
    <div>
      <button onClick={() => sideBarExpansion()}>SideBar</button>
      {expandSideBar && (
        <div>
          <List />
        </div>
      )}
    </div>
  );
};

export default SideArea;
