import React from 'react';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Components
import SpheresItem from 'features/main/components/SpheresItem';

// Types
import type { ReactElement } from 'react';
import type { Sphere } from 'features/main/reducers/appDataReducer';

const SpheresList = (): ReactElement => {
  const { spheres } = useAppData();

  return (
    <div>
      {spheres.map(
        (sphere: Sphere): ReactElement => (
          <SpheresItem key={sphere.title} sphere={sphere} />
        )
      )}
    </div>
  );
};

export default SpheresList;
