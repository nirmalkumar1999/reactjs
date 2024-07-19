import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>About</h1>
        <div className="parent" style={{display:"flex",gap:"50px"}}>
          <div>
            <Link to="Website">Website</Link><br />
            <Link to="Services">Services</Link><br />
            <Link to="Subscription">Subscription</Link><br />
          </div>
          <div>
            <Outlet/>
          </div>
        </div>

    </div>
  )
}

export default About