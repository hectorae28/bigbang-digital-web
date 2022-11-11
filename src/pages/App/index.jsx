import React, { useState } from 'react';
import { MenuList, Layout, HandlePages } from '@components';

const App = () => {
  const [pageSelected, setPageSelected] = useState(5);
  const handleClick = (index) => {
    setPageSelected(index);
  };
  return (
    <div>
      <Layout>
        <MenuList handleClick={handleClick} pageSelected={pageSelected} />
        <HandlePages pageSelected={pageSelected} />
      </Layout>
    </div>
  );
};

export default App;
