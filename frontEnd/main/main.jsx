import React, { useEffect, useState } from 'react';

import SideArea from './subComponents/sideArea';
import ListArea from './subComponents/listArea';

import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.cover}>
      <SideArea />
      <ListArea />
    </div>
  );
};

export default Main;
