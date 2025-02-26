import { Navigate } from "react-router-dom";
import { GetInTouch, Home, Journey } from "./pages";

export enum AppRoutes {
  HOME = "/",
  JOURNEY = "/journey",
  GET_IN_TOUCH = "/get-in-touch",
}
export const RouteConfig: Record<AppRoutes | "*", React.ComponentType<any>> = {
  [AppRoutes.HOME]: Home,
  [AppRoutes.JOURNEY]: Journey,
  [AppRoutes.GET_IN_TOUCH]: GetInTouch,
  "*": () => (<Navigate to={AppRoutes.HOME} replace />),
};
