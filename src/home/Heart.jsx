import React from 'react';

function Heart(props){
    let {estilos} = props;
    return(
        <div className="like is-liked"  style={estilos}>
        </div>
    )
}

export default Heart