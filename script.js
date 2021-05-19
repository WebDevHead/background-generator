'use strict';

const solid = val => (document.body.style.backgroundColor = val);
const gradient = (d, v1, v2) => (document.body.style.backgroundImage = `linear-gradient(${d}, ${v1}, ${v2})`);
const radial = (v1, v2) => (document.body.style.backgroundImage = `radial-gradient(${v1}, ${v2})`);

// backgroundSwitch = (backgroundStyle) => {
//     const background;
//     case 'linear':

// }
