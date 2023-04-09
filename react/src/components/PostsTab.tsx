import { memo } from 'react';

const PostsTab = memo<{ posts?: number }>(function PostsTab({ posts = 500 }) {
  console.log(`Rendering ${posts} <SlowPost />`);

  const items: JSX.Element[] = [];
  for (let i = 0; i < posts; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowPost({ index }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{index + 1}</li>;
}

export default PostsTab;
