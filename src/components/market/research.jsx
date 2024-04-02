import { useState } from "react";
import { marketResearch } from "../../data/data";
import D from '../../dashboard/dashboard.module.css';
import Internal from "./internal/internal";
import External from "./external/external";

const Research = () => {
    const [activeMindId, setActiveMindId] = useState(null);

    const handleMindClick = (event, mindId) => {
        event.preventDefault(); 
        setActiveMindId(mindId);
    };

    const activeMind = marketResearch.find(mind => mind.id === activeMindId);

    return (
        <div className={D.menu}>
            {marketResearch.map((mind) => (
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
                    <External />
                    <Internal />
                </div>
            )}
        </div>
    );
};

export default Research;
