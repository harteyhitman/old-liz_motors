import { useState } from "react";
import D from '../../dashboard/dashboard.module.css';
import { saleMarketing } from "../../data/data";
import Online from "./online";
import Dealership from "./dealership";

const SalesMarketing = () => {
  const [activeMindId, setActiveMindId] = useState(null);

  const handleMindClick = (event, mindId) => {
    event.preventDefault(); 
    setActiveMindId(mindId);
};

  const activeMind = saleMarketing.find(mind => mind.id === activeMindId);
  return (
  <div className={D.menu}>
  {saleMarketing.map((mind) => (
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
              <Online />
              <Dealership />
      </div>
  )}
</div>
)
}

export default SalesMarketing