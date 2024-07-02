import { type ReactNode } from 'react';
import PropTypes from 'prop-types';
import styles from './FlexContainer.module.scss';
// import clsx from 'clsx';

const FlexContainer = (props: { children: ReactNode; justify?: string; align?: string }) => {
  const { justify = 'flex-start', align = 'stretch', children } = props;
  return (
    <ul className={styles.list} style={{ justifyContent: justify, alignItems: align }}>
      {children}
    </ul>
  );

  /*
  // const classes = `container jc-${justContent} ai-${alignItems}`;

  const isJCCenter = justContent === 'center';

  const classes = clsx(styles.container, {
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
