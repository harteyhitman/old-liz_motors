import { useState } from "react";
import D from '../../dashboard/dashboard.module.css';
import { manufacturing } from "../../data/data";
import Materials from "./materials";
import Production from "./production";

const Manufacturing = () => {
    const [activeMindId, setActiveMindId] = useState(false);

    const handleMindClick = (e, mindId) => {
        e.preventDefault(); 
        setActiveMindId(mindId);
    };
  
  
    const activeMind = manufacturing.find(mind => mind.id === activeMindId);
return (
  <div className={D.menu}>
  {manufacturing.map((mind) => (
      <div key={mind.id} className="mind">
          <ul>
              <li>
                  <a
                      href={`#${mind.id}`}
                      onClick={(e) => handleMindClick(e, mind.id)}
                  >
                      {mind.map}
                  </a>
              </li>
          </ul>
      </div>
  ))}
  {activeMind && (
      <div className={D.market}>
              <Materials />
              <Production />
      </div>
  )}
</div>
)
}

export default Manufacturing