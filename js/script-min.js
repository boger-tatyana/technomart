var mapLink,modalMap,modalMapClose,feedbackButton=document.querySelector(".feedback-button"),modalFeedback=document.querySelector(".modal-feedback"),modalFeedbackClose=!!modalFeedback&&modalFeedback.querySelector(".button-feedback-close"),userName=!!modalFeedback&&modalFeedback.querySelector(".user-name"),modalFeedbackForm=!!modalFeedback&&modalFeedback.querySelector(".modal-feedback-form"),userEmail=!!modalFeedback&&modalFeedback.querySelector(".user-email"),textarea=!!modalFeedback&&modalFeedback.querySelector(".textarea");null!=feedbackButton&&(feedbackButton.addEventListener("click",function(e){e.preventDefault(),modalFeedback.classList.add("modal-show"),userName.focus()}),modalFeedbackClose.addEventListener("click",function(e){e.preventDefault(),modalFeedback.classList.remove("modal-show"),modalFeedback.classList.remove("modal-error")}),modalFeedbackForm.addEventListener("submit",function(e){userName.value&&userEmail.value&&textarea.value||(e.preventDefault(),modalFeedback.classList.remove("modal-error"),modalFeedback.offsetWidth,modalFeedback.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalFeedback.classList.contains("modal-show")&&(e.preventDefault(),modalFeedback.classList.remove("modal-show"),modalFeedback.classList.remove("modal-error"))}),mapLink=document.querySelector(".map"),modalMapClose=(modalMap=document.querySelector(".modal-map")).querySelector(".modal-map-close"),mapLink.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.add("modal-show")}),modalMapClose.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalMap.classList.contains("modal-show")&&(e.preventDefault(),modalMap.classList.remove("modal-show"),modalMap.classList.remove("modal-error"))}));var buy=document.querySelectorAll(".buy"),modalBasket=document.querySelector(".modal-basket"),addToBasket=document.querySelector(".basket");if(null!=modalBasket)for(var i=0;i<buy.length;i++){buy[i].addEventListener("click",function(e){e.preventDefault(),modalBasket.classList.add("modal-show"),next.focus(),addToBasket.classList.add("basket-add")});var next=modalBasket.querySelector(".continue"),modalBasketClose=modalBasket.querySelector(".modal-basket-close");modalBasketClose.addEventListener("click",function(e){e.preventDefault(),modalBasket.classList.remove("modal-show")}),next.addEventListener("click",function(e){e.preventDefault(),modalBasket.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalBasket.classList.contains("modal-show")&&(e.preventDefault(),modalBasket.classList.remove("modal-show"))})}var arrowRight=document.querySelector(".controls-middle-right"),arrowLeft=document.querySelector(".controls-middle-left"),sliderToggles=document.querySelectorAll(".controls-bottom-button"),firstSlide=document.querySelector(".slide-first"),secondSlide=document.querySelector(".slide-second");arrowRight.addEventListener("click",function(e){e.preventDefault,firstSlide.classList.remove("slide-current"),sliderToggles[0].classList.remove("controls-current"),secondSlide.classList.add("slide-current"),sliderToggles[1].classList.add("controls-current")}),arrowLeft.addEventListener("click",function(e){e.preventDefault,secondSlide.classList.remove("slide-current"),sliderToggles[1].classList.remove("controls-current"),firstSlide.classList.add("slide-current"),sliderToggles[0].classList.add("controls-current")}),sliderToggles[1].addEventListener("click",function(e){e.preventDefault,firstSlide.classList.remove("slide-current"),sliderToggles[0].classList.remove("controls-current"),secondSlide.classList.add("slide-current"),sliderToggles[1].classList.add("controls-current")}),sliderToggles[0].addEventListener("click",function(e){e.preventDefault,secondSlide.classList.remove("slide-current"),sliderToggles[1].classList.remove("controls-current"),firstSlide.classList.add("slide-current"),sliderToggles[0].classList.add("controls-current")});
