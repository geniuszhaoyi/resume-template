// import React from 'react';

export function Phone(props) {
    let phone = props.children;
    if (phone && typeof (phone) === 'string' && /^\d{10}$/.test(phone)) {
        phone = phone.substring(0, 3) + '.' + phone.substring(3, 6) + '.' + phone.substring(6, 10);
    }
    return phone;
}
