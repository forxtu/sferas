import React from 'react';

// Components
import SpheresList from 'features/main/components/SpheresList';
import MainLayout from 'components/layouts/MainLayout';

// Types
import type { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  return (
    <MainLayout>
      <SpheresList />
    </MainLayout>
  );
};

export default HomePage;
