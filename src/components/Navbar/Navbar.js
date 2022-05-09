import React from 'react'
import "../Navbar/Nav.css"
function Navbar() {
  return (
<nav>
<div className="left">
    <div className='icon'><i class="ri-menu-line"></i></div>
    <div className="img">
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
        <h3>Keep</h3>
    </div>
</div>
<div className="centre">
<input type="text" className='inp' placeholder="search" />

</div>
<div className="right">
<i class="ri-refresh-line"></i>
<i class="ri-list-check"></i>
<i class="ri-settings-line"></i>
</div>
<hr />
</nav>  


)
}

export default Navbar