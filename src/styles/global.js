import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #f4f1de;
        color: #e07a5f;
        padding: 50px;
    }

    p {
        color: #81b29a;
    }
    
    div {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%
    }

    .buyProducts {
        background-color: #f2cc8f;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #e07a5f;
    }

    ul, form {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
    }

    li {
        width: 200px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    h3 {
        color: #3d405b;
    }

    span {
        font-size: 12px;
        text-decoration: line-through;
    }

    form {
        justify-content: center;
    }

    input {
        background-color: #81b29a;
        font-size: 15px;
        padding: 5px;
        border-radius: 10px;
        color: #f4f1de;
        border: 1px solid #f4f1de;
        margin: 10px 0 5px 0;
        ::placeholder {
            color:#f2cc8f;
        }
    }

    button {
        background-color: #f4f1de;
        font-size: 10px;
        padding: 5px;
        border-radius: 10px;
        color: #e07a5f;
        border: 1px solid #e07a5f;
    }
`;