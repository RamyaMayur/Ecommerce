import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import {tablet} from "../responsive"
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css"

const Container = styled.div`
    height:60px;
    ${tablet({height:"50px"})};
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Language = styled.span`
    font-size:14px;
    ${tablet({display:"none"})};
    cursor:pointer;
`

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:25px;
`

const Input = styled.input`
    border:none;
    ${tablet({width:"50px"})};
`

const Center = styled.div`
    flex:1;
    text-align:center;
`
const Logo = styled.h1`
    ${tablet({fontSize:"24px"})};
    font-weight:bold;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${tablet({flex:2, justifyContent:"center"})};
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    ${tablet({fontSize:"12px",marginLeft:"10px"})};
    margin-left:25px;
`

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    ${tablet({padding:"10px 0px"})};
    justify-content:space-between;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo><NavLink className="NavLink" to="/">RAY.</NavLink></Logo></Center>
                <Right>
                    <NavLink className='NavLink' to="/Register">
                        <MenuItem>REGISTER</MenuItem>
                    </NavLink>
                    <NavLink className="NavLink" to="/Login">
                        <MenuItem>SIGN IN</MenuItem>
                    </NavLink>
                    <NavLink className="NavLink" to="/Cart">
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </NavLink>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar