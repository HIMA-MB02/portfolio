import styled from 'styled-components';
import Home from './components/pages/Home';

const StyledPageContainer = styled.div`
    flex-grow: 1;
`;
const StyledNavigationContainer = styled.div`
    height: 100px;
    margin: 20px;
    margin-left: 40px;
`;

function App() {
    return (
        <>
            <StyledNavigationContainer>
                <h2>HIMANSHU G</h2>
            </StyledNavigationContainer>
            <StyledPageContainer>
                <Home />
            </StyledPageContainer>
        </>
    );
}

export default App;
