import React from 'react'
import D from '../dashboard/dashboard.module.css'
import Research from '../components/market/research'
import Planning from '../components/planning/planning'
import Design from '../components/design/design'
import Manufacturing from '../components/manufacture/manufacturing'
import SalesMarketing from '../components/sales/sales'

const Navbar = () => {
  return (
    <div className={D.container}>
        <h1 className={D.h1}>Lizmotors</h1>
        <div className={D.navmenu_con}>
             <Research />
             <Planning />
             <Design />
             <Manufacturing />
             <SalesMarketing />
        </div>
       
    </div>
  )
}

export default Navbar