// const navBtn = document.getElementById("navbtn") 

// navBtn.addEventListener("click",function(e){
// 	e.preventDefault()
// 	document.querySelector(".nav-list").classList.toggle("active")
// })


document.querySelector('.nav-btn').addEventListener('click', function(){
	document.querySelector('.fa-solid').classList.toggle('fa-bars')
	document.querySelector('.fa-solid').classList.toggle('fa-chevron-left')
	document.querySelector('.nav-list').classList.toggle('active')
})
