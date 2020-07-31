import React, { Fragment } from 'react';
import SEO from './SEO'

export default (props) => {
    return(
        <Fragment>
            <SEO/>
            <main>{props.children}</main>
        </Fragment>
    )
}