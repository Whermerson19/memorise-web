import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/auth";

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export default function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: IRouteProps) {
  const { user } = useAuth();

  return (
    <ReactRoute 
      { ...rest }
      render={({ location }) => {
        return isPrivate === !!user ?
        ( <Component /> ) :
        ( <Redirect 
          to={{
            pathname: isPrivate ? "/" : "/home",
            state: { from: location }
          }}
        /> )
      }}
    />
  );
}
