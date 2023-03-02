import styled from 'styled-components';

const StyledResultCard = styled.div`

  .listcard-wrapper img {
    width: 100%;
    border-radius: 1rem;
    height: 18rem;
    object-fit: cover;
  }

  .listcard-wrapper header{
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    align-items: center;
  }

  .listcard-wrapper footer{
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  `;

export default StyledResultCard;
