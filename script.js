let noBtn = document.getElementById('no-btn');
let yesBtn = document.getElementById('yes-btn');
let responseDiv = document.getElementById('response');
let noCount = 0;
let yesClicked = false;

let alyasan = document.getElementById('alyasan'); 
let mikuu = document.getElementById('mikuu'); 
let senpai = document.getElementById('senpai');
let cozy = document.getElementById('cozy');
let crybaby = document.getElementById('crybaby');
let wantmeVideo = document.getElementById('wantme'); // define the video variable

// Initially hide all images except alyasan
mikuu.style.display = 'none';
senpai.style.display = 'none';
cozy.style.display = 'none';
crybaby.style.display = 'none';

yesBtn.addEventListener('click', () => {
    responseDiv.innerHTML = 'YIEE SHE LOVES ME, LOVE YOU TO MWUAH😘';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    yesClicked = true;
    alyasan.style.display = 'none'; // hide the alyasan image
    wantmeVideo.style.display = 'block'; // show the video
    wantmeVideo.play(); // play the video
});

noBtn.addEventListener('click', () => {
    if (!yesClicked) {
        let x = Math.floor(Math.random() * 300);
        let y = Math.floor(Math.random() * 300);
        noBtn.style.position = 'absolute';
        noBtn.style.top = y + 'px';
        noBtn.style.left = x + 'px';

        noCount++;

        if (noCount === 5) {
            responseDiv.innerHTML = 'Are you really sure??? You can still change your mind';
            alyasan.src = 'mikuu.jpg'; // replace alyasan image with mikuu
            alyasan.style.display = 'block'; // show the mikuu image
            mikuu.style.display = 'none'; // hide the mikuu image
        } else if (noCount === 10) {
            responseDiv.innerHTML = 'Maybe you\'re just scared to admit it, oh come on';
            alyasan.src = 'senpai.jpg'; // replace alyasan image with senpai
            alyasan.style.display = 'block'; // show the senpai image
            senpai.style.display = 'none'; // hide the senpai image
        }  else if (noCount === 11) {
            noBtn.style.transform = 'scale(0.2)'; // make the "no" button 5 times smaller
        } else if (noCount === 12) {
            noBtn.style.transform = 'scale(0.5)'; // make the "no" button double small
        } else if (noCount === 13) {
            noBtn.style.transform = 'scale(1)'; // reset the "no" button size
            noBtn.style.opacity = '0.5'; // make the "no" button half opaque
        } else if (noCount === 14) {
            noBtn.style.transform = 'scale(1)'; // reset the "no" button size
            noBtn.style.opacity = '1'; // reset the "no" button opacity    
        }else if (noCount === 15) {
            responseDiv.innerHTML = 'Just say YES!!!, YOU WANT ME!!!';
            alyasan.src = 'cozy.jpg'; // replace alyasan image with cozy
            alyasan.style.display = 'block'; // show the cozy image            
            crybaby.style.display = 'none'; // hide the cozy image            
        } else if (noCount === 20) {
            responseDiv.innerHTML = 'YOU LOVE ME!!! NOW DO YOU GET IT😭😭😭';
            noBtn.style.display = "none";
            alyasan.src = 'crybaby.jpg'; // replace alyasan image with cozy
            alyasan.style.display = 'block'; // show the cozy image            
            crybaby.style.display = 'none'; //hide the cozy image   
            yesBtn.style.transform = 'scale(2)'; // make the "yes" button double small
            
        }
    }
});
