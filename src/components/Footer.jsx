import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, RoomOutlined, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css"

const Container = styled.div`
    display:flex;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin:20px 0px;
`

const SocialContainer = styled.div`
    display:flex;
`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`

const Center = styled.div`
    flex:1;
    padding:20px;
`
const Title = styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
    // justify-content:center;
    // display:flex;
    // margin-left:25px;
    // align-items:center;
`

const Right = styled.div`
    flex:1;
    padding:20px;
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`

const Payment = styled.img`
    width:50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>RAY.</Logo>
                <Desc>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><NavLink className='NavLink' to="/">Home</NavLink></ListItem>
                    <ListItem><NavLink className='NavLink' to="/Cart">Cart</NavLink></ListItem>
                    <ListItem><NavLink className='NavLink' to="/">Men Fashion</NavLink></ListItem>
                    <ListItem><NavLink className='NavLink' to="/">Women Fashion</NavLink></ListItem>
                    <ListItem><NavLink className='NavLink' to="/">Accessories</NavLink></ListItem>
                    <ListItem><NavLink className='NavLink' to="/">My Account</NavLink></ListItem>
                    <ListItem><NavLink className='NavLink' to="/Product">Product</NavLink></ListItem>
                    <ListItem><NavLink className='NavLink' to="/">Wishlist</NavLink></ListItem>
                    <ListItem><NavLink className='NavLink' to="/ProductList">ProductList</NavLink></ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomOutlined style={{ marginRight: "10px" }} />
                    <NavLink className='NavLink' to="/"> Bangalore</NavLink>
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />
                    <NavLink className='NavLink' to="/">+91 998 788 3536</NavLink>
                </ContactItem>
                <ContactItem>
                    <MailOutlined style={{ marginRight: "10px" }} />
                    <NavLink className='NavLink' to="/">ray@gmail.com</NavLink>
                </ContactItem>
                <Payment src="18.png" />
            </Right>
        </Container>
    )
}

export default Footer
