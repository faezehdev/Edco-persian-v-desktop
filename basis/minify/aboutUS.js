let secs=document.querySelectorAll(".VideoBox"),videos=document.querySelectorAll(" .Video");console.log(videos),videos.forEach((e=>{e.setAttribute("data-IS",!1)})),videos.forEach((e=>{e.addEventListener("click",(function(e){let t=e.currentTarget.getAttribute("data-IS");console.log(t),"false"===t?(e.currentTarget.parentElement.classList.toggle("toggle"),console.log(e.currentTarget.querySelector("video")),e.currentTarget.querySelector("video").play(),e.currentTarget.setAttribute("data-IS",!0)):(console.log("umm"),e.currentTarget.parentElement.classList.toggle("toggle"),e.currentTarget.querySelector("video").pause(),e.currentTarget.setAttribute("data-IS",!1))}))}));