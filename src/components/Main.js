import React from "react";
import { NavLink } from "react-router-dom";
import Card1 from "../assets/img/Group 664.png";
import Card2 from "../assets/img/Frame 5.png";
import Card3 from "../assets/img/kids1.png";
import Card4 from "../assets/img/kids2.png";
import Card5 from "../assets/img/kid3.png";

function Main() {
  return (
    <>
      <ul className='Main-links'>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to='/'
          >
            FINDEET RATING
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to='/'
          >
            KEY SCHOOL STATS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to='/'
          >
            ACADEMIC STATS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to='/'
          >
            TEACHERS STATS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "Linkactive" : "")}
            to='/'
          >
            FEE STRUCTURE
          </NavLink>
        </li>
      </ul>
      <div className='main-wrapper'>
        <Maincard />
        <Maintable />
      </div>
    </>
  );
}

function Maincard() {
  return (
    <div className='card-wrapper'>
      <div className='card' id='card-item-1'>
        <img src={Card1} alt='' />
        <div id='card-1'>
          <input type={"checkbox"} />
          <p>Hide same features</p>
        </div>
      </div>
      <div className='card' id='card-item-2'>
        <img src={Card2} alt='' />
        <h4>Deal School District, New Jersey</h4>
      </div>
      <div className='card' id='card-item-3'>
        <img src={Card3} alt='' />
        <h4>Salem City School, New Jersey</h4>
      </div>
      <div className='card' id='card-item-4'>
        <img src={Card4} alt='' />
        <h4>Paulsboro Public Schools, New Jersey</h4>
      </div>
      <div className='card' id='card-item-5'>
        <img src={Card5} alt='' />
        <h4>Andover Regional School, New Jersey</h4>
      </div>
    </div>
  );
}

function Maintable() {
  return (
    <div className='Table-sort'>
      <table>
        <tr>
          <th>FINDEET RATING</th>
          {/* <th>Contact</th>
          <th>Country</th> */}
        </tr>
        <tr>
          <td>Overall rating</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Criteria 1</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Criteria 2</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Criteria 3</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Criteria 4</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Criteria 5</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Criteria 6</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>

        <tr>
          <th>KEY SCHOOL STATS</th>
          {/* <th>Contact</th>
          <th>Country</th> */}
        </tr>

        <tr>
          <td>Ownership</td>
          <td>Private</td>
          <td>Private</td>
          <td>Private</td>
          <td>Private</td>
          <td>Private</td>
        </tr>
        <tr>
          <td>Curriculum</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Year of establishment</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Co-ed status</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Campus size</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Campus type</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Awards</td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>A</td>
          <td>B</td>
        </tr>
      </table>
    </div>
  );
}
export default Main;
