import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { useLoader } from 'hooks/dataLoader';
import React from 'react';

export default function Posts(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.POSTS)

  const mapList = data.map(({ id, title, body }) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>{body}</p>
    </li>
  ));
  return <ul>{mapList}</ul>;
}
