import React from "react";
import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Fa4, FaCalendar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/*dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul>
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="flex items-center gap-2"
            >
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="flex items-center gap-2"
            >
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="flex items-center gap-2">
              <FaShoppingCart></FaShoppingCart> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="flex items-center gap-2">
              <FaAd></FaAd> Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/booking"
              className="flex items-center gap-2"
            >
              <Fa4></Fa4>My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/" className="flex items-center gap-2">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="flex items-center gap-2">
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
