// StylePage.js

import React, { useEffect } from "react";
import '../public/style.css'; // Import your "bubbles.css" here
import './styleBasic'
const StylePage = () => {
    useEffect(() => {
        let bublesArr = [];
        document.addEventListener("mousemove", (e) => {
            let bubles = document.createElement("div");
            bubles.classList.add("bubbles"); // Add the .bubbles class to the element
            let x = e.pageX;
            let y = e.pageY;
            bubles.style.left = x + "px";
            bubles.style.top = y + "px";
            bublesArr.push(bubles);
            document.body.appendChild(bubles);
            setTimeout(() => {
                bubles.remove();
                bublesArr = bublesArr.slice(1);
            }, 2000);
        });
    }, []);

    return <div>Welcome to the orders</div>;

}

export default StylePage;