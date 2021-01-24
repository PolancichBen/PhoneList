import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import List from './list/list.jsx';

const SideArea = ({data, loadListings}) => {
  const [expandSideBar, setExpandSideBar] = useState(false);
  // console.log('Side Area Data', data);

  const sideBarExpansion = () => {
    setExpandSideBar(!expandSideBar);
    console.log(`Side Bar is now ${expandSideBar ? 'Open' : 'Closed'}`);
  };

  return (
    <div>
      <button onClick={() => sideBarExpansion()}>SideBar</button>
      {expandSideBar && (
        <div>
          {data && data.exampleListItems.map((listItem,i)=>(
            <List type='side' details={listItem} key={i}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideArea;
