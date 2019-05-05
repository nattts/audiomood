
export const selectTrack = async e => {
 const audio = document.querySelector('.audio');
 let src = e.target.getAttribute('data-src');
 audio.setAttribute('src',src);
};