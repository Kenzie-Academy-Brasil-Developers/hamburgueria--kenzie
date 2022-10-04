import styled from "styled-components";

export const styleCartProduto = styled.div`
.product {
    display: flex;

    width: 362px;
    height: 80px;
    
    background-color: var(--gray-0);
    border: none;
    margin: 5px 0 10px 10px;
}

.product figure {
    width: 70px;
    height: 70px;

    background-color: var(--gray-20);
    border-radius: 5px;
}

.product > div {
    width: 150px;
}

.product > div > h2{
    font-weight: 700;
    font-size: 18px;

    color: var(--gray-100);
    margin: 10px 0 0 10px;
}

.product div p {
    margin: 10px 0 10px 10px;
}

.product button {
    color: var(--gray-50);
    background-color:  var(--gray-0);

    border: none
}
`