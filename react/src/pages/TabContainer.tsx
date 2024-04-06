import { memo, useState, useTransition } from 'react';
import PostsTab from '../components/function/PostsTab';

export function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <b>{children}</b>;
  }
  return <button onClick={onClick}>{children}</button>;
}

const TabContainer = memo(function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div>
      <h1>Current tab: {tab}</h1>
      <TabButton isActive={tab === 'about'} onClick={() => selectTab('about')}>
        about
      </TabButton>
      <TabButton isActive={tab === 'loremium'} onClick={() => selectTab('loremium')}>
        loremium
      </TabButton>
      <TabButton isActive={tab === 'slow'} onClick={() => selectTab('slow')}>
        slow
      </TabButton>
      {isPending && <div>Pending...</div>}
      {tab === 'about' && <div>about...</div>}
      {tab === 'loremium' && <div>loremium...</div>}
      {tab === 'slow' && <PostsTab posts={1000} />}
    </div>
  );
});

export default TabContainer;
