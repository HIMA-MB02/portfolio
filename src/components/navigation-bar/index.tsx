import { useNavigate } from "react-router-dom";
import { Button, Signature } from "../../atoms";
import {
  StyledNavBarRow,
  StyledNavbarWrapper,
  StyledSignatureDesktop,
  StyledSignatureMobile,
} from "./styles";
import { AppRoutes } from "../../routes";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <StyledNavbarWrapper>
    <StyledNavBarRow>
        <Button
        color="orangeGradient"
        onClick={() => navigate(AppRoutes.HOME)}
        >
        Back Home
        </Button>
        <StyledSignatureDesktop>
            <Signature onClick={() => navigate(AppRoutes.HOME)} variant="small" />
        </StyledSignatureDesktop>
        <Button
        color="blueGradient"
        onClick={() => {
            const currentPath = window.location.pathname;
            if (currentPath === AppRoutes.GET_IN_TOUCH) {
            navigate(AppRoutes.JOURNEY);
            } else {
            navigate(AppRoutes.GET_IN_TOUCH);
            }
        }}
        >
        {window.location.pathname === AppRoutes.GET_IN_TOUCH ? "My Journey" : "Get In Touch"}
        </Button>
    </StyledNavBarRow>
    <StyledSignatureMobile>
        <Signature onClick={() => navigate(AppRoutes.HOME)} variant="small" />
    </StyledSignatureMobile>
    </StyledNavbarWrapper>
  );
};

export default NavigationBar;
