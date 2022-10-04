import styled, { createGlobalStyle } from "styled-components"

export const styledList = styled.ul`

ul, .productsFiltered{
    display: flex;
    width: 90%;
    min-width: 400px;
    height: 360px;
    overflow-x: scroll ;
}

li {
    width: 300px;
    height: 93%;

    background: white;
    border: 2px solid var(--gray-20);
    border-radius: 5px;

    margin: 10px 
}

li figure {
    width: 295px;
    height: 150px;

    margin: auto;
    background-color: var(--gray-0);
}

li figure img {
    display: flex;
    width: 80%;
    height: 100%;

    margin: auto ;
}

li h2 {
    font-weight: 700;
    font-size: 18px;

    color: var (--gray-100);
    margin: 20px
}

li p {
    font-weight: 400;
    font-size: 12px;

    color: var( --gray-50);
    margin: 13px 20px
}

li .preco {
    font-weight: 600;
    font-size: 14px;

    color: var(--cor-primary);
}

li button{
    width: 106px;
    height: 40px;

    font-weight: 600;
    font-size: 14px;

    color: white;
    background: var(--cor-primary);
 
    margin: 0 20px;
    border: 2px solid var(--cor-primary);
    border-radius: 8px;
}

@media (min-width:490px) {
    ul {
        flex-direction: row;
        flex-wrap: wrap;

        width: 100%;
        height: 100%;

        overflow: hidden;
    }

    li {
        height: 330px;
    }
}

`