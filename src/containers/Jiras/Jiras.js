import React from 'react';
import { connect } from 'react-redux';
import Jira_info from '../../components/Jira_info/Jira_info';
import CodigoQR from '../../components/CodigoQR/CodigoQR';


const Jiras = (props) => {

    return (


        <div className='container-jira'>

            <div className="row border">
                <div className="col-100">
                    <Jira_info />
                </div>
            </div>
             {props.jiras.jira?.telefono && <div className="row border ">
                <div className="col-100">
                  <CodigoQR/>
                </div>
            </div>}

        </div>
    )
};

export default connect((state) => ({
    credentials: state.credentials,
    jiras: state.jiras
  }))(Jiras);