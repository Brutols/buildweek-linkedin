import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedin } from "react-icons/fa";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import styles from "./navbar.module.css"

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="d-flex">
          <FaLinkedin size="40px" color="#0a66c2" />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className={`${styles.myInput}`}
              aria-label="Search"
            />
          </Form>
        </div>
        <div className="d-flex">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <ButtonIcon iconName="IoHome" text="Home"/>
              <ButtonIcon iconName="FaUserFriends" text="My Networks"/>
              <ButtonIcon iconName="FaSuitCase" text="Jobs"/>
              <ButtonIcon iconName="HiMiniChatBubbleLeftEllipsis" text="Messaging"/>
              <ButtonIcon iconName="FaBell" text="Notifications"/>
              <ButtonIcon text="Me" isDropdown={true} isProfile={true}/>
              {/* icona profilo */}
              <div className="border-start" >
              <ButtonIcon iconName="CgMenuGridR" text="For Business" isDropdown={true}/>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNav;
