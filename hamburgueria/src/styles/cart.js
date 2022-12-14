import styled from "styled-components"

export const styleCart = styled.div`
.cart {
    width: 382px;
    height: 435px;
    margin: auto;
  
    background: var(--gray-0);
    border-radius: 0px 0px 5px 5px;
  }
  
  .carrinho {
    display: flex;
    justify-content: center;
  
    width: 382px;
    height: 65px;
  
    background-color: var(--cor-primary);
  
    border-radius: 5px 5px 0px 0px;
  }
  
  .cart h4 {
    font-weight: 700;
    font-size: 18px;
    align-self: center;
  
    color: white;
    text-align: center;
  }
  
  .cart__vazio {
    width: 100%;
    text-align: center;
  }
  
  .cart__vazio p {
    font-weight: 700;
    font-size: 18px;
  
    color: var(--gray-100);
  
    margin: 55px auto;
  }
  
  .cart__vazio span {
    font-weight: 400;
    font-size: 14px;
  
    color: var(--gray-50);
  }
  
  .cart > .cartProduct {
    display: flex;
    flex-direction: column;
  
    width: 100%;
    height: 350px;
    margin: 0;
    padding: 0;
  
    overflow-x: hidden;
  }
  
  @media (min-width: 490px) {
    .cart {
      margin-top: 25px;
    }
  
    .cart > .cartProduct {
      flex-direction: row;
      overflow-y: auto;
    }
  }
  `