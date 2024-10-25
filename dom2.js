let containerdiv=document.getElementById("container")
let imgtag=document.createElement("img")
imgtag.setAttribute("src","https://5.imimg.com/data5/SELLER/Default/2023/3/TF/BK/UW/103578143/3d-nature-wallpaper-500x500.jpg")
let ptag=document.createElement("p")
ptag.innerHTML="this is ptag"
let spantag=document.createElement("span")
spantag.innerText="this is span tag"
containerdiv.append(imgtag,ptag,spantag)
containerdiv.style.textAlign="center"
containerdiv.style.backgroundColor="pink"
// containerdiv.style.display="block-inline"
containerdiv.style.padding="30px"
containerdiv.style.margin="20px"
containerdiv.style.border="3px solid black"
containerdiv.style.borderRadius="5px"
imgtag.style.border="3px solid white"
imgtag.style.width="400px"
ptag.style.color="white"
ptag.style.fontSize="20px"
ptag.style.backgroundColor="red"
ptag.style.border="2px solid white"
ptag.style.padding="5px"
spantag.style.backgroundColor="blue"
spantag.style.color="white"
spantag.style.padding="10px"
spantag.style.fontSize="20px"
spantag.style.border="2px solid white"

