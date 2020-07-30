import React, { Fragment } from 'react';

export default (props) => {
    return(
        <Fragment>
            <main>{props.children}</main>
        </Fragment>
    )
}