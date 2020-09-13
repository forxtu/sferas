import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { kebabCase } from 'lodash';

// Components
import Header from 'components/blocks/Header';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Types
import type { ReactElement } from 'react';

const { Sider, Content } = Layout;

type Props = {
  children: NonNullable<ReactElement>[] | NonNullable<ReactElement>;
};

const MainLayout = ({ children }: Props): ReactElement => {
  const { spheres } = useAppData();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleIsSidebarCollapsed = (): void => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Layout>
      <Sider
        style={{ background: '#fff' }}
        onCollapse={handleToggleIsSidebarCollapsed}
        collapsible
        collapsed={isSidebarCollapsed}
      >
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          {spheres.map(({ sphereId, title }: any) => (
            <Menu.Item key={sphereId}>
              <Link
                to={{
                  pathname: `/sphere/${kebabCase(title)}`,
                  state: { sphereId }
                }}
              >
                {title}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
