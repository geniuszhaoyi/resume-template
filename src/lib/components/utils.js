import React from 'react';

export function getChildren(children) {
    const map = {};
    React.Children.forEach(children, (child) => {
        if (!map.hasOwnProperty(child.type.name)) {
            map[child.type.name] = [];
        }
        map[child.type.name].push(child);
    });
    return map;
}