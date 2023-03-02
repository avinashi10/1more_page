import styled from 'styled-components';

const StyledApp = styled.div`
  .home {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .home_panel_wrapper,
  .home_list_wrapper {
    overflow-y: auto;
  }

  .home_panel-list_wrapper {
    display: flex;
    flex: 1;
    height: 100vh;
  }

  .home_panel_wrapper {
    background: #D4A373;
    flex-basis: 18rem;
    height: 100vh;
    padding: 1rem;
  }

  .home_list_wrapper {
    background: #CCD5AE;
    flex: 1;
    height: 100vh;
    padding: 1rem;
  }
`;

export default StyledApp;
