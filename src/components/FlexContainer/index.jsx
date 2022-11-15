// @ts-check
'use strict';

import React from 'react';
import styles from './FlexContainer.module.scss';
import PropTypes from 'prop-types';

const FlexContainer = (
  /** @type {{ children: React.ReactElement[] | React.ReactElement; justify?: string; align?: string; }} */ props
) => {
  const { justify = 'flex-start', align = 'stretch', children } = props;
  return (
    <ul className={styles.list} style={{ justifyContent: justify, alignItems: align }}>
      {children}
    </ul>
  );
};
FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
  align: PropTypes.string,
};

export default FlexContainer;
