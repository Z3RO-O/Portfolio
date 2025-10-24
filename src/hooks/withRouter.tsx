import { useLocation, useNavigate, useParams } from 'react-router-dom';
import type { ComponentType } from 'react';
import type { WithRouterProps } from '@/types/component.types';

function withRouter<P extends object>(
  Component: ComponentType<P & WithRouterProps>
): ComponentType<Omit<P, keyof WithRouterProps>> {
  function ComponentWithRouterProp(props: Omit<P, keyof WithRouterProps>) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component
        {...(props as P)}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
