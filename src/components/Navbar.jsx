import { NavLink } from "react-router-dom";
import { FaHome, FaGraduationCap, FaCode, FaCloudSun, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaGraduationCap /> Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaCode /> Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaCloudSun /> Weather
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaEnvelope /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}