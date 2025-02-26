import { useNavigate, useLocation } from "react-router-dom";
import { Button, Signature } from "../../atoms";
import {
  StyledNavBarRow,
  StyledNavbarWrapper,
  StyledSignatureDesktop,
  StyledSignatureMobile,
} from "./styles";
import { AppRoutes, PageTitles } from "../../constants";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [route, setRoute] = useState({
    path: AppRoutes.HOME,
    title: PageTitles.ABOUT_ME,
  });
  useEffect(() => {
    if (pathname === AppRoutes.GET_IN_TOUCH) {
        setRoute({
            path: AppRoutes.MY_STORY,
            title: PageTitles.MY_STORY,
        });
      } else {
        setRoute({
            path: AppRoutes.GET_IN_TOUCH,
            title: PageTitles.GET_IN_TOUCH,
        });
      }
  }, [pathname]);
  return (
    <StyledNavbarWrapper>
      <StyledNavBarRow>
        <Button color="orangeGradient" onClick={() => navigate(AppRoutes.HOME)}>
          Back Home
        </Button>
        <StyledSignatureDesktop>
          <Signature onClick={() => navigate(AppRoutes.HOME)} variant="small" />
        </StyledSignatureDesktop>
        <Button
          color="blueGradient"
          onClick={() => navigate(route.path)}
        >
          {route.title}
        </Button>
      </StyledNavBarRow>
      <StyledSignatureMobile>
        <Signature onClick={() => navigate(AppRoutes.HOME)} variant="small" />
      </StyledSignatureMobile>
    </StyledNavbarWrapper>
  );
};

export default NavigationBar;
