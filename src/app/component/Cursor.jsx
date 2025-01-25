'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('#custom-cursor');
        const cursorText = document.querySelector('.custom-text');
        const links = document.querySelectorAll('a');

        // Function to update cursor position
        const onMouseMove = (event) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, { x: clientX, y: clientY });

            // Store the current mouse position in local storage
            localStorage.setItem('mouseX', clientX);
            localStorage.setItem('mouseY', clientY);
        };

        // Restore cursor position on page load
        const savedX = localStorage.getItem('mouseX');
        const savedY = localStorage.getItem('mouseY');
        if (savedX && savedY) {
            gsap.set(cursor, { x: savedX, y: savedY });
        }

        document.addEventListener('mousemove', onMouseMove);

        const onMouseEnterLink = (event) => {
            const link = event.target;
            if (link.classList.contains('view')) {
                gsap.to(cursor, { scale: 4 });
                cursorText.style.display = 'block';
            } else {
                gsap.to(cursor, { scale: 4 });
            }
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1 });
            cursorText.style.display = 'none';
        };

        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach((link) => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <div id="custom-cursor" className="custom-cursor">
            <span className="custom-text">View</span>
        </div>
    );
};

export default Cursor;
