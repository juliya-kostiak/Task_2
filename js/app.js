window.onload = function () {

	document.forms.array.onsubmit = function() {

  		var str = this.arr.value;
      console.log(str);
      var n1 = this.n1.value;
      var n2 = this.n2.value;
      let str2=str.replace(n1,n2);    

      
  		let div1=ce("div",undefined,"min");
  		div1.innerHTML="Строка до смены: "+str;
  		document.body.append(div1);

  		let div2=ce("div",undefined,"min");
  		div2.innerHTML="Строка после смены: "+str2;
  		document.body.append(div2);



  		return false;
	};
	
}


//функция создания эл-та
function ce(name,text,className,event,fn) {
	let element = document.createElement(name);
	if(text!=undefined) {
		element.innerHTML = text;
	}

	if(className!=undefined) {
		element.className = className;
	}

	if(event!=undefined && fn!=undefined) {
		element.addEventListener(event,fn);

	}

	return element;
}




