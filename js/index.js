window.onload = function(){
	var product = document.querySelector(".product")
	// console.log(product)

	var foam = document.querySelector(".foam")
	var lather = document.querySelector(".lather")
	var soap = document.querySelector(".soap")

	var foamFlag1 = true
	var foamFlag2 = true

	var latherFlag1 = true
	var latherFlag2 = true

	var soapFlag1 = true
	var soapFlag2 = true

	var flag1 = true
	var flag2 = true



	function animationOpacity(el, position){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		// console.log(scrollTop)
		if(scrollTop >= position){
			var opacity = 0.1
			if(flag1){
				flag1 = false
				var timer1 = setInterval(function(){
					opacity += 0.01
					el.style.opacity = opacity
					// console.log(el.style.opacity)
					if(el.style.opacity >= 1){
						clearInterval(timer1)
					}
				},12)
			}
		}
	}

	function animationTranslate(el, position){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop >= position){
			var y = 0.4
			if(flag2){
				flag2 = false
				var timer2 = setInterval(function(){
					y += 0.2
					el.style.transform = "translateY(" + y + "px)"
					// console.log(el.style.transform)
					if(y >= 20){
						clearInterval(timer2)
					}
				},10)
			}
		}
	}

	function foamOpacity(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		// console.log(scrollTop)
		if(scrollTop >= foam.offsetTop - 500){
			var opacity = 0.1
			if(foamFlag1){
				foamFlag1 = false
				var timerFoam1 = setInterval(function(){
					opacity += 0.02
					foam.style.opacity = opacity
					if(foam.style.opacity >= 1){
						clearInterval(timerFoam1)
					}
				},12)
			}
		}
	}

	function foamTranslate(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop >= foam.offsetTop - 500){
			// console.log(scrollTop)
			var y = 0.4
			if(foamFlag2){
				foamFlag2 = false
				var timerFoam2 = setInterval(function(){
					y += 0.4
					foam.style.transform = "translateY(" + y + "px)"
					if(y >= 20){
						clearInterval(timerFoam2)
					}
				},10)
			}
		}
	}

	function latherOpacity(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop >= lather.offsetTop - 600){
			var opacity = 0.1
			if(latherFlag1){
				latherFlag1 = false
				var timerLather1 = setInterval(function(){
					opacity += 0.02
					lather.style.opacity = opacity
					if(lather.style.opacity >= 1){
						clearInterval(timerLather1)
					}
				},12)
			}
		}
	}

	function latherTranslate(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop >= lather.offsetTop - 600){
			// console.log(scrollTop)
			var y = 0.4
			if(latherFlag2){
				latherFlag2 = false
				var timerLather2 = setInterval(function(){
					y += 0.4
					lather.style.transform = "translateY(" + y + "px)"
					// console.log(lather.style.transform)
					if(y >= 20){
						clearInterval(timerLather2)
					}
				},10)
			}
		}
	}

	function soapOpacity(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop >= soap.offsetTop - 600){
			var opacity = 0.1
			if(soapFlag1){
				soapFlag1 = false
				var timerSoap1 = setInterval(function(){
					opacity += 0.02
					soap.style.opacity = opacity
					if(soap.style.opacity >= 1){
						clearInterval(timerSoap1)
					}
				},12)
			}
		}
	}

	function soapTranslate(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop >= soap.offsetTop - 600){
			// console.log(scrollTop)
			var y = 0.4
			if(soapFlag2){
				soapFlag2 = false
				var timerSoap2 = setInterval(function(){
					y += 0.4
					soap.style.transform = "translateY(" + y + "px)"
					// console.log(soap.style.transform)
					if(y >= 20){
						clearInterval(timerSoap2)
					}
				},10)
			}
		}
	}

	window.addEventListener("wheel", foamTranslate)
	window.addEventListener("wheel", foamOpacity)

	window.addEventListener("wheel", latherTranslate)
	window.addEventListener("wheel", latherOpacity)

	window.addEventListener("wheel", soapTranslate)
	window.addEventListener("wheel", soapOpacity)


	animationOpacity(product, 0)
	animationTranslate(product, 0)


	var li = document.querySelectorAll(".guarantee ul li")
	var div = document.querySelectorAll(".content div")
	for(var i = 0; i < li.length ; i++){
		(function(i){
			li[i].onmouseover = function(){
				li[i].classList.add("active")
				div[i].classList.add("active")
				if(i === 0){
					li[i + 1].classList.remove("active")
					div[i + 1].classList.remove("active")
				}else{
					li[i - 1].classList.remove("active")
					div[i - 1].classList.remove("active")
				}
			}
		})(i)
	}
}