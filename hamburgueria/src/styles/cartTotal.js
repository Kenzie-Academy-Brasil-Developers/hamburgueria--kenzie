import styled from "styled-components";

export const styleCartProduto = styled.div`
.cartTotal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: var(--gray-0);
    
    width: 382px;
    height: 150px;
    margin: -20px auto;

    border-top: 2px solid var(--gray-20);
}

.cartTotal h5 {
    color: var(--gray-100);
    font-weight: 600;
    font-size: 14px;
    margin: 25px 
}

.cartTotal p {
    color: var(--gray-50);
    font-weight: 600;
    font-size: 14px;
    margin: 25px 
}

#remove {
    display:flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 16px;

    color:  var(--gray-50);
    width: 343px;
    height: 60px;

    margin: -70px auto;
}
`