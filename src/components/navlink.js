import { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [open, setOpen] = useState(false);

    // function onClickmenu(){
    //     document.getElementById("menu").classList.toggle("icon")
    //     document.getElementById("nav").classList.toggle("change")
    //  }
    return (
        <div className="App">

            {/* <!-- Header section Start --> */}
            <header>
                <div id="navigation">
                    <div className="design-nav">
                    <div className="design">
                        <div className="agency">
                        <h2>DESIGN</h2>
                        <p> AGENCY</p>
                        </div>
                    <div id="menu"className='M enu'onClick={onClickMenu}>
                        <div id="bar1" className="bar"></div>
                        <div id="bar2" className="bar"></div>
                        <div id="bar3" className="bar"></div>
                    </div>
                    <div className="wrap">
                        <div id="nav" className="nav">
                            <ul>
                                <li> Specialize in</li>
                                <li> Case Study </li>
                                <li> Process </li>
                                <li> Industries </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="btn">
                      <button className="download"> <b> Schedule A Call</b></button>
                      <button className="download2"> <b>We are Hiring</b></button>
                    </div>
                    </div>
                    </div>
            </header>
        </div>
    );
}
export default Nav;