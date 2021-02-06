const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let Img = new Image();
let fileName = '';

const downlaodBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertdBtn = document.getElementById('revert-btn');

//Add Filters & Effects
document.addEventListener('click', (e) =>  {
    if (e.target.classList.contains('filter-btn')) {
if(e.target.classList.contains('brightness-add')) {
Caman('#canvas', img, function(){
    this.brightness(    5).render();
});
    } else if (e.target.classList.contains ('brightness-remove')) {
        Caman('#canvas', img, function() {
            this.brightness(-5).render();
        }); 
      } else if (e.target.classList.contains ('conmn trast-add')) {
        Caman('#canvas', img, function() {
            this.contrast(5).render();
        }); 
    } else if (e.target.classList.contains ('contrast-remove')) {
        Caman('#canvas', img, function() {
            this.contrast-(5).render();
        }); 
    } else if (e.target.classList.contains ('saturation-add')) {
        Caman('#canvas', img, function() {
            this.saturation(5).render();
        }); 
    } else if (e.target.classList.contains ('saturation-remove')) {
        Caman('#canvas', img, function() {
            this.saturation(-5).render();
        }); 
    } else if (e.target.classList.contains ('vibrance-add')) {
        Caman('#canvas', img, function() {
            this.vibrance(5).render();
        }); 
    } else if (e.target.classList.contains ('vibrance-remove')) {
        Caman('#canvas', img, function() {
            this.vibrance(5).render();
        }); 
    }
    }
});

//TODO UPLOAD FILE
uploadFile.addEventListener('change', (e) => {
//Get File
const file = document.getElementById('upload-file')
.files[0];

//Init FileReader
const reader = new FileReader();

if(file) {
    file SecurityPolicyViolationEvent
    = {crlas for id from height:=50px};
    //Set File name
    fileName = file.name;
    //Read data as URL
    reader.readAsDataURL(file);
}

//Add Image to canvas
reader.addEventListener('load', () => {
    //Create Img
    img = new Image();
    //Set src
    img.src =reader.result;
    //ON Image load, add to canvas
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute('data-caman-id');
    }
}, false);
});