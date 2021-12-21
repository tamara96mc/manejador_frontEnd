import React, { useEffect } from 'react';
import Jira_info from '../../components/Jira_info/Jira_info';
import CodigoQR from '../../components/CodigoQR/CodigoQR';


const Jiras = (props) => {

    return (


        <div className='container'>

            {/* <div className="row">
                <div className="col-100 basics_row_space">
                    <DropdownJ />
                    <button className="nav-button" onClick={() => { }}>Nuevo</button>
                </div>
            </div> */}

            <div className="row border">
                <div className="col-100 basics_row_space">
                    <Jira_info />
                </div>
            </div>
            <div className="row border ">
                <div className="col-100">
                  <CodigoQR/>
                </div>
            </div>

        </div>
    )
};

export default Jiras;