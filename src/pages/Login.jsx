import styled from "styled-components"
import { tablet } from "../responsive"

const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url("21.png") center;

     display:flex;
     align-items:center;
     justify-content:center;
     background-size:cover;
`
const Wrapper=styled.div`
    padding:20px;
    width:25%;
    background-color:white;
    ${tablet({width:"75%"})};
    `
const Title=styled.h1`
    font-size:24px;
    font-weight:300;
`

const Form=styled.form`
    display:flex;
    flex-direction:column;
`

const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:5px;
`

const Button=styled.button`
    width:30%;
    border:none;
    padding:5px 10px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`
const Link=styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`

const Login = () => {
  return (
    <Container>
            <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOG IN</Button>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
