import styled from "styled-components";

export const styleHeader = styled.header`

header {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    margin: auto;
    width: 100%;
    min-width: 382px;
    height: 139px;
  
    background-color: var(--gray-0);
  }
  
  header .titulo {
    display: flex;
    justify-content: center;
  
    color: var (--gray-100);
  
    border: 2px solid transparent;
    height: 35px;
    margin: 10px auto;
  }
  
  header .titulo h2 {
    margin: 6px 0 0 6px;
  
    color: var(--color-secondary);
  }
  
  header > div {
    display: flex;
  
    width: 382px;
    height: 60px;
  
    border: 2px solid var(--gray-20);
    border-radius: 8px;
  }
  
  header div input {
    font-weight: 400;
    font-size: 16px;
  
    width: 90%;
    height: 100%;
  }
  
  header div button {
    font-weight: 500;
    font-size: 14px;
  
    width: 107px;
    height: 40px;
  
    color: white;
    background-color: var(--cor-primary);
    border: 2px solid var(--cor-primary);
    border-radius: 8px;
    margin: auto 5px;
  }
  
  @media (min-width:490px) {
  
    header  {
      flex-direction: row;
      justify-content: space-between;
    }
  
    header .titulo {
      margin: auto 0
    }
  
    header div {
      margin: 0 5%
    }
    
  }
`;
