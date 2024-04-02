import React, { useState } from "react";
import D from '../../dashboard/dashboard.module.css';
import { designing } from "../../data/data";
import Hardware from "./hardware";
import Software from "./software";

const Design = () => {
    const [activeMindId, setActiveMindId] = useState(null);

    const handleMindClick = (event, mindId) => {
        event.preventDefault(); 
        setActiveMindId(mindId);
    };

    const activeMind = designing.find(mind => mind.id === activeMindId);

    return (
        <div className={D.menu}>
            {designing.map((mind) => (
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
                    <Hardware />
                    <Software />
                </div>
            )}
        </div>
    );
};

export default Design;
