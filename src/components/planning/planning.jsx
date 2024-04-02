import { useState } from "react";
import D from '../../dashboard/dashboard.module.css';
import { planning } from "../../data/data";
import PRD from "./prd";
import SPECS from "./specs";

const Planning = () => {

  const [activeMindId, setActiveMindId] = useState(null);

  const handleMindClick = (event, mindId) => {
    event.preventDefault(); 
    setActiveMindId(mindId);
};
  

  const activeMind = planning.find(mind => mind.id === activeMindId);
  return (
    <div className={D.menu}>
    {planning.map((mind) => (
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
                <PRD />
                <SPECS />
        </div>
    )}
</div>
  )
}

export default Planning