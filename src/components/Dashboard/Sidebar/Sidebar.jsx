import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { AiFillDelete, AiOutlineSetting } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiList } from "react-icons/fi";
import { MdManageAccounts, MdRateReview } from "react-icons/md";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navigation handleShow={handleShow} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Link to="/">
            <img
              className="img-fluid"
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2017/01/logo.png"
              alt=""
            />
          </Link>
        </Offcanvas.Header>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem icon={<CgProfile />}>
              <Link to="/dashboard/profile" onClick={handleClose}>
                My Profile
              </Link>
            </MenuItem>
            <MenuItem icon={<MdRateReview />}>
              <Link to="/dashboard/addReview" onClick={handleClose}>
                Add Review
              </Link>
            </MenuItem>

            <MenuItem icon={<FiList />}>
              <Link to="/dashboard/myBook" onClick={handleClose}>
                My Book
              </Link>
            </MenuItem>

            <SubMenu title="Admin panel" icon={<AiOutlineSetting />}>
              <MenuItem icon={<BiMessageSquareAdd />}>
                <Link to="/dashboard/addService" onClick={handleClose}>
                  Add Services
                </Link>
              </MenuItem>
              <MenuItem icon={<MdManageAccounts />}>
                <Link to="/dashboard/manageServices" onClick={handleClose}>
                  Manage Services
                </Link>
              </MenuItem>

              <MenuItem icon={<MdManageAccounts />}>
                <Link to="/dashboard/manageBookings" onClick={handleClose}>
                  Manage Booking
                </Link>
              </MenuItem>

              <MenuItem icon={<MdRateReview />}>
                <Link to="/dashboard/addAdmin" onClick={handleClose}>
                  Add Admin
                </Link>
              </MenuItem>

              <MenuItem icon={<AiFillDelete />}>
                <Link to="/dashboard/addAdmin" onClick={handleClose}>
                  Remove Admin
                </Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
