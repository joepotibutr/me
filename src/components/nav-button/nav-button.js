import React from 'react';

export default function NavButton(props) {
    return (
    <svg viewBox="0 0 10 10"  className="hamburger" {...props}>
        <path d="M8,3 L2,3" class="p1"/>
        <path d="M2,5 L8,5" class="p2"/>
        <path d="M8,7 L2,7" class="p3"/>     
    </svg>
    )
}