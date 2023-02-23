import React from "react";

function Header() {
  return (
    <div className='wrapper'>
      <div className='Header'>
        <h1>Compare School</h1>
        <p>
          Compare top four schools you’re interested in and pick the right one
          for you. <br></br>Use the search field to add schools to compare. You
          can drag to reorder schools after selection.
        </p>
        <input type={"text"} placeholder='Search' />
      </div>
    </div>
  );
}

export default Header;
