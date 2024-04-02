import { useState } from 'react';
import D from '../../../dashboard/dashboard.module.css'
import B2c from '../b2c';


const External = () => {

  const [showB2c, setShowB2C] = useState(null);

  const handleMouseOver = (mindId) => {
      setShowB2C(mindId);
  };

  return (
    <div onClick={handleMouseOver} className={D.external}>
        <h2>External</h2>
        {showB2c && (
             <B2c />
        )

        }
    </div>
  )
}

export default External