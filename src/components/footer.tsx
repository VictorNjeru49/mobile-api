import logo from '../images/logo.svg'
const Footing =()=>{


    return(
        <div className="footer">
            <div className="profiling">
            <img src={logo}/>
            </div>

<div className="products">
<h6>Product</h6>

<p>Overview</p>
<p>Pricing</p>
<p>Marketplace</p>
<p>Features</p>
<p>Integrations</p>
</div>

<div className="company">
<h6>Company</h6>

<p>About</p>
<p>Team</p>
<p>Blog</p>
<p>Careers</p>
</div>

<div className="connect">
<h6>Connect</h6>

<p>Contact</p>
<p>Newsletter</p>
<p>LinkedIn</p>
</div>
  
    </div>
    )
};

export default Footing