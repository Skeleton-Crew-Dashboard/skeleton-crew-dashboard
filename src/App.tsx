import { Layout } from 'antd';
import React from 'react';
const { Header,  } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header className="header"></Header>
    </Layout>
  );
};

export default App;