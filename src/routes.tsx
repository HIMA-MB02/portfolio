import { Navigate } from "react-router-dom";
import { GetInTouch, Home, MyStory } from "./pages";
import { AppRoutes } from "./constants";

export const RouteConfig: Record<AppRoutes | "*", React.ComponentType<any>> = {
  [AppRoutes.HOME]: Home,
  [AppRoutes.MY_STORY]: MyStory,
  [AppRoutes.GET_IN_TOUCH]: GetInTouch,
  "*": () => (<Navigate to={AppRoutes.HOME} replace />),
};
