import { useState } from 'react'
import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import upside from '../images/icon-arrow-dark.svg'
import downside from '../images/icon-arrow-light.svg'
import close from '../images/icon-close.svg'

const Headings =()=>{

    const [closed, setclosed] = useState<boolean>(false)

    
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);


    const dropdownside = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index);
      };


      

    const menushow= ()=>{
         setclosed(!closed)
         if(closed){
             document.body.style.overflow = 'hidden';
         }
         else{
             document.body.style.overflow = 'auto';
         }
}
    return(
        <div className="one">

        <div className="header">

           <img src={logo} alt="no image"/>
            <nav>
            <ul className='toplevel'>
                <li>Product
                <button onClick={() => dropdownside(0)}>
            <img src={activeDropdown === 0 ? downside : upside} />
                 </button>
                    <ul className={`toggle ${activeDropdown === 0 ? 'show' : ''}`}>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </li>
                <li>Company
                <button onClick={() => dropdownside(0)}>
            <img src={activeDropdown === 0 ? downside : upside} />
                 </button>

                    <ul className={`toggle ${activeDropdown === 0 ? 'show' : ''}`}>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </li>
                <li>Connect
                <button onClick={() => dropdownside(0)}>
                      <img src={activeDropdown === 0 ? downside : upside} />
                 </button>
                    <ul className={`toggle ${activeDropdown === 0 ? 'show' : ''}`}>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </li>
                </ul>
                </nav>
                <div className= 'signiningup'>
                    <button>Login</button>
                    <button className='active'>Sign Up</button>

                </div>
                <div className="btn">
        <span onClick={menushow}>
          <img src={closed? close : menu} className="arrow" />
        </span>
      </div>

        </div>



        <div className= 'times'>
        <div className="uppersection">
          <h2>A modern publishing platform</h2>
          <p>Grow your audience and build your online brand</p>
          <div className="logins">
            <button className='active'>Start for Free</button>
            <button>Learn More</button>
          </div>
        </div>
        </div>



        </div>
    )
}

export default Headings