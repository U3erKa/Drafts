// @ts-check
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexContainer.module.scss';
// import cx from 'classnames';

const FlexContainer = (
  /** @type {{ children: React.ReactElement[] | React.ReactElement; justify?: string; align?: string; }} */ props
) => {
  const { justify = 'flex-start', align = 'stretch', children } = props;
  return (
    <ul className={styles.list} style={{ justifyContent: justify, alignItems: align }}>
      {children}
    </ul>
  );

  /*
  // const classes = `container jc-${justContent} ai-${alignItems}`;

  const isJCCenter = justContent === 'center';

  const classes = cx(styles.container, {
    [styles.jcCenter]: isJCCenter,
    [styles.jcFlexStart]: justContent === 'flex-start',
    [styles.aiCenter]: alignItems === 'center',
  });

  return <div className={classes}>{children}</div>;
  */
};
FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
  align: PropTypes.string,
};

export default FlexContainer;
