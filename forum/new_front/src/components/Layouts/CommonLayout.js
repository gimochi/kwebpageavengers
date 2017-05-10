import React from 'react';

import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

import styles from './CommonLayout.css';

const CommonLayout = ({children}) => {
    return (
      <div><Header/>{children}<Footer/></div>
    );
}

export default CommonLayout;