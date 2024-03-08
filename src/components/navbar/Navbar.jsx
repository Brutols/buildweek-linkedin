import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedin } from "react-icons/fa";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import styles from "./navbar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allFilteredProfiles,
  filterProfiles,
} from "../../Slices/profilesSlice";
import Headings from "../headings/Headings";
import ProfilePic from "../profilePic/ProfilePic";
import { useNavigate } from "react-router-dom";
import ButtonLogout from "../buttonLogout/ButtonLogout";

function MyNav() {
  const filteredProfiles = useSelector(allFilteredProfiles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  console.log(showSearch);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value && !showSearch) {
      setShowSearch(true);
    } else if (!value) {
      setShowSearch(false);
    } else if (value && showSearch) {
      dispatch(filterProfiles(value));
    }
  };

  return (
    <Navbar expand="lg" className="bg-white">
      <Container className="px-5">
        <div className="d-flex position-relative">
          <FaLinkedin size="40px" color="#0a66c2" />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className={`${styles.myInput}`}
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
          <div
            className={`position-absolute ${styles.searchDropdown} ${
              showSearch ? styles.d_flex : styles.d_none
            }`}
          >
            {filteredProfiles &&
              filteredProfiles.map((profile, i) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/profile/${profile._id}`)
                      setShowSearch(false);
                    }}
                    key={i}
                    className={`${styles.profileCard} d-flex justify-content-between align-items-center p-2 border-bottom w-100`}
                  >
                    <Headings
                      variant="h2"
                      text={`${profile.name} ${profile.surname}`}
                    />
                    <ProfilePic width="32px" src={profile.image} />
                  </div>
                );
              })}
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="my-2 my-lg-0 d-flex align-items-center gap-4">
            <ButtonIcon iconName="IoHome" text="Home" />
            <ButtonIcon iconName="FaUserFriends" text="My Networks" />
            <ButtonIcon iconName="FaSuitCase" text="Jobs" />
            <ButtonIcon
              iconName="HiMiniChatBubbleLeftEllipsis"
              text="Messaging"
            />
            <ButtonIcon iconName="FaBell" text="Notifications" />
            <ButtonIcon text="Me" isDropdown={true} isProfile={true} />
            {/* icona profilo */}
            <div className="border-start d-flex align-items-center">
              <ButtonIcon
                iconName="CgMenuGridR"
                text="For Business"
                isDropdown={true}
              />
              <ButtonLogout />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
