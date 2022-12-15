import { FC } from 'react';

export type TitleProps = {
  title: string;
  children?: any;
};

export const Title: FC<TitleProps> = ({ title, children }): JSX.Element => {
  return (
    <div>
      {title}
      {children}
    </div>
  );
};
