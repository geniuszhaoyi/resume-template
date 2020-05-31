import React from 'react';

import { getChildren } from './utils';

export function Address(props) {
    if (typeof(props.children) === 'string') {
        return <span className='address'>{props.children}</span>
    } else {
        const children = getChildren(props.children);
        return <span className='address'>
            {children[Line1.name]} {children[Line2.name]} <br />
            {children[City.name]}, {children[State.name]} {children[ZipCode.name]}
        </span>
    }
}

export function Line1(props) {
    return <span className='line1'>{props.children}</span>
}

export function Line2(props) {
    return <span className='line2'>{props.children}</span>
}

export function City(props) {
    return <span className='city'>{props.children}</span>
}

export function State(props) {
    return <span className='state'>{props.children}</span>
}

export function ZipCode(props) {
    return <span className='zipCode'>{props.children}</span>
}
