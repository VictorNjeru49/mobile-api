import logo from '../images/illustration-laptop-desktop.svg'

const Lowersection = ()=>{
    return(
        <div>
            <div className="lastsection">
          
          <div className="lengthen">
            <div className="imageprofile">
                <img src={logo}/>
            </div>
            <div className="textformat">
            <h4>Free, open, simple</h4>
            <p> Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>

          <h4>Powerful tooling</h4>
          <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.</p>
            </div>
          </div>

        </div>

        </div>
    )
}
export default Lowersection
