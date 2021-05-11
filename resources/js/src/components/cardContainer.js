import React from 'react'


const CardContainer = ({title,children}) => {
    return(
        <div className="Card__container">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;