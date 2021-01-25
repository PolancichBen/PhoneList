require('regenerator-runtime/runtime');
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LoadingScreen from './subComponents/loadingScreen';
import SideArea from './subComponents/sideArea';
import MainArea from './subComponents/mainArea';

import styles from './main.module.css';

const Main = () => {
  const [listItems, setListItems] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getListItems = () => {
    Axios.get('/listItems')
      .then((res) => {
        setListItems(res.data);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Error getting new list Items', err);
      });
  };

  useEffect(() => {
    getListItems();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className={styles.cover}>
        <SideArea
          className={styles.sideArea}
          loadListings={getListItems}
          data={listItems}
        />
        <MainArea
          className={styles.listArea}
          loadListings={getListItems}
          data={listItems}
        />
      </div>
    );
  }
};
export default Main;
