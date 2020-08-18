import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({title, url}) => {
    return ( 
        <div className="card animate__bounceOutUp">
            <img src={url} title={title} alt={title}/>
            <p>{title}</p>
        </div>
     );
}

GridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
 
export default GridItem;