import '../styles/Personal.css'
import OpenIcon from '../assets/open.svg'
import { useState } from 'react'

export default function Personal({ info, setInfo }) {
  // individual visibility state for each personal
  const [visible, setVisible] = useState(true);

  return (
    <section className="personal">
      <div className="drop-down" onClick={() => setVisible(!visible)}>
        <h1>Personal Information</h1>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""}/>
      </div>
      <form className={visible ? "personal-form": "hide"}>
        <div className="input-data">
          <label>Full Name: </label>
          <input 
            type="text" 
            value={info.name}
            onChange={(e) => setInfo({...info, name: e.target.value})}
          />
        </div>
        
        <div className="input-data">
          <label>Phone number:</label>
          <input 
            type="text" 
            value={info.phoneNumber}
            onChange={(e) => setInfo({...info, phoneNumber: e.target.value})}
          />
        </div>
        <div className="input-data">
          <label>Email:</label>
          <input 
            type="text" 
            value={info.email}
            onChange={(e) => setInfo({...info, email: e.target.value})}
          />
        </div>
        <div className="input-data">
          <label>LinkedIn</label>
          <input 
            type="text" 
            value={info.linkedin}
            onChange={(e) => setInfo({...info, linkedin: e.target.value})}
          />
        </div>
        <div className="input-data">
          <label>Github</label>
          <input 
            type="text" 
            value={info.github}
            onChange={(e) => setInfo({...info, github: e.target.value})}
          />
        </div>
      </form>
      
    </section>
  )
}