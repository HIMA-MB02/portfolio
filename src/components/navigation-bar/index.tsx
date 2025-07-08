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
  
  const handleNavigation = (path: string, pageName: string) => {
    // Track page navigation in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_navigation', {
        page_title: pageName,
        page_location: path,
        event_category: 'navigation'
      });
    }
    navigate(path);
  };
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
        <Button color="orangeGradient" onClick={() => handleNavigation(AppRoutes.HOME, 'Home')}>
          Back Home
        </Button>
        <StyledSignatureDesktop>
          <Signature onClick={() => handleNavigation(AppRoutes.HOME, 'Home')} variant="small" />
        </StyledSignatureDesktop>
        <Button
          color="blueGradient"
          onClick={() => handleNavigation(route.path, route.title)}
        >
          {route.title}
        </Button>
      </StyledNavBarRow>
      <StyledSignatureMobile>
        <Signature onClick={() => handleNavigation(AppRoutes.HOME, 'Home')} variant="small" />
      </StyledSignatureMobile>
    </StyledNavbarWrapper>
  );
};

export default NavigationBar;
