import React from 'react';

export function Email(props) {
    let { enableLink, link } = props;
    if (enableLink) {
        if (!link && typeof (props.children) === 'string') {
            link = props.children;
        }
        return <a href={'mailto:' + props.children}>{props.children}</a>
    } else {
        return props.children
    }
}
