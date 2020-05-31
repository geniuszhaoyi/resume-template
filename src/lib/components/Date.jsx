import React from 'react';

export function Date(props) {
    let date = props.children;
    return date;
}

export function StartDate(props) {
    return <Date>{props.children}</Date>
}

export function EndDate(props) {
    return <Date>{props.children}</Date>
}
