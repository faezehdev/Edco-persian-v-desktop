let swiperBanner=new Swiper(".swiper-banners",{pagination:{el:".swiper-pagination",clickable:!0},speed:1e3,autoplay:!0,effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),products=[...document.querySelectorAll(".product")];document.addEventListener("scroll",(()=>{products.map((e=>{e.getBoundingClientRect().top+100<window.innerHeight&&e.classList.add("fade-in")}))})),products.forEach((e=>{e.addEventListener("mouseover",(e=>{e.stopPropagation(),hover(e.currentTarget),e.currentTarget.classList.add("active")})),e.addEventListener("mouseleave",(t=>{e.classList.remove("active"),e.classList.remove("hover")}))}));let hover=()=>{products.map((e=>{e.classList.add("hover")}))},proContainer=document.querySelector(".Products-cat");proContainer.addEventListener("mouseleave",(e=>{products.map((e=>{e.classList.remove("hover")}))}));