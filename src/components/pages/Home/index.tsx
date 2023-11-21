import { StyledAppRoutes, StyledHomeContainer, StyledHomeImage, StyledRouteItem, StyledRouteListItem } from './styles';
import landing from '../../../img/landing.png';

const Home: React.FunctionComponent = () => {
    return (
        <>
            <StyledHomeContainer>
                <StyledAppRoutes>
                    <StyledRouteListItem>
                        <StyledRouteItem>WHO?</StyledRouteItem>
                    </StyledRouteListItem>
                    <StyledRouteListItem>
                        <StyledRouteItem>EXPERIENCE</StyledRouteItem>
                    </StyledRouteListItem>
                    <StyledRouteListItem>
                        <StyledRouteItem>SHOWCASE</StyledRouteItem>
                    </StyledRouteListItem>
                    <StyledRouteListItem>
                        <StyledRouteItem>CONTACT</StyledRouteItem>
                    </StyledRouteListItem>
                </StyledAppRoutes>
                <div>World</div>
            </StyledHomeContainer>
            <StyledHomeImage src={landing} alt="logo" />
        </>
    );
};
export default Home;
