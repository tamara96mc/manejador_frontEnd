import React, { useEffect } from 'react';
import DropdownJ from '../../components/DropdownJ/DropdownJ';
import Jira_info from '../../components/Jira_info/Jira_info';
import Jira_proyectos from '../../components/Jira_proyectos/Jira_proyectos';

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
                    <Jira_proyectos />
                </div>
            </div>

        </div>
    )
};

export default Jiras;