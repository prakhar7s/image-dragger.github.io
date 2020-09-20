
const imageLink = document.getElementById("inp-img-link");
const btn = document.getElementById("btn");
const initialText1 = document.getElementById("init-text1"); 
const initialText2 = document.getElementById("init-text2"); 
const imageContainer = document.getElementById("img-container");

btn.addEventListener("click", dragImage);


function dragImage(){
    if(imageLink.value.trim() === '')
    {
        alert("Please provide image.");
    }
    else{
        const imgTag = document.createElement("img");

         Object.assign(imgTag,{
           "id": "img-to-drag",
           "src": imageLink.value,
           "alt": "image"
          });

        initialText1.remove();
        initialText2.remove();        

        imageContainer.appendChild(imgTag);

        let el = document.getElementById('img-to-drag');
    
        let  draggie = new Draggabilly(el);
    }
   
}