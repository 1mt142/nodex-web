/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 13:49:14
 * @modify date 2021-06-15 16:02:39
 * @desc [description]
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Col,
} from "reactstrap";
// import { useSelector } from "react-redux";
// users

const ProfileMenu = () => {
  const [menu, setMenu] = useState(false);
  // const { profile } = useSelector((state) => state.authReducer);
  const toggle = () => setMenu(!menu);

  return (
    <Row>
      <Col>
        <Dropdown
          isOpen={menu}
          toggle={toggle}
          className="notification-list list-inline-item nav-pro-img"
          tag="li"
        >
          <DropdownToggle
            className="nav-link arrow-none nav-user waves-effect"
            tag="a"
          >
            <FontAwesomeIcon
              icon="user-circle"
              style={{ fontSize: "40px", marginTop: "15px" }}
            />
          </DropdownToggle>
          <DropdownMenu className="profile-dropdown" right>
            <Link to="/change-password">
              <DropdownItem>
                <FontAwesomeIcon icon="key" /> Change Password
              </DropdownItem>
            </Link>
            <DropdownItem tag="a" className="text-danger" href="/logout">
              <FontAwesomeIcon icon="sign-out-alt" /> Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default ProfileMenu;
