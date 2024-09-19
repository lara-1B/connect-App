import React from 'react';

const TicketsList = ({ title }) => {
    return (
        <div className='tickets-list'>
            <p>{title}</p>
            <button>View All</button>
        </div>
    );
};

export default TicketsList;
