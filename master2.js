checkValues = function () {
	
	let count = 1;
	const myList = ['الأول','الثاني','الثالث','الرابع','الخامس','السادس','السابع','الثامن','التاسع'];
	
	let sems1 = '<input id = "sumLastSems1" placeholder = "الرجاء إدخال مجموع الدرجات للمستوى الأول"><br/><br/>' + '<input id = "nlastSems1" placeholder = "الرجاء إدخال عدد مواد المستوى الأول"><br/><br/>';
	let sems2 = '<input id = "sumLastSems2" placeholder = "الرجاء إدخال مجموع الدرجات للمستوى الثاني"><br/><br/>' + '<input id = "nlastSems2" placeholder = "الرجاء إدخال عدد مواد المستوى الثاني"><br/><br/>';
	let sems3 = '<input id = "sumLastSems3" placeholder = "الرجاء إدخال مجموع الدرجات للمستوى الثالث"><br/><br/>' + '<input id = "nlastSems3" placeholder = "الرجاء إدخال عدد مواد المستوى الثالث"><br/><br/>';
	let sems4 = '<input id = "sumLastSems4" placeholder = "الرجاء إدخال مجموع الدرجات للمستوى الرابع"><br/><br/>' + '<input id = "nlastSems4" placeholder = "الرجاء إدخال عدد مواد المستوى الرابع"><br/><br/>';
	let sems5 = '<input id = "sumLastSems5" placeholder = "الرجاء إدخال مجموع الدرجات للمستوى الخامس"><br/><br/>' + '<input id = "nlastSems5" placeholder = "الرجاء إدخال عدد مواد المستوى الخامس"><br/><br/>';
	let sems6 = '<input id = "sumLastSems6" placeholder = "الرجاء إدخال مجموع الدرجات للمستوى السادس"><br/><br/>' + '<input id = "nlastSems6" placeholder = "الرجاء إدخال عدد مواد المستوى السادس"><br/><br/>';
	let sems7 = '<input id = "sumLastSems7" placeholder = "الرجاء إدخال مجموع الدرجات للمستوى السابع"><br/><br/>' + '<input id = "nlastSems7" placeholder = "الرجاء إدخال عدد مواد المستوى السابع"><br/><br/>';
	let sems8 = '<input id = "sumLastSems8" placeholder = "الرجاء إدخال مجموع الدرجات للمستوى الثامن"><br/><br/>' + '<input id = "nlastSems8" placeholder = "الرجاء إدخال عدد مواد المستوى الثامن"><br/><br/>';
		
	
	if (document.getElementById('field1').value == 1) {
	
		let myDiv = document.createElement('div');
		
		let level = document.getElementById('field1').value;
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
	    
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
	
		
	
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		
		document.getElementById('field1').disabled = true;
		
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
	
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
			
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
		
		myDiv.after(btn2);
		
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);
				
			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}		
		})
		
		
		
		
	} else if (document.getElementById('field1').value == 2) {
		
		let myDiv = document.createElement('div');
		let level = document.getElementById('field1').value;
		
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
		let message = document.createElement('div');
		
			
		message.innerHTML = '<p>تنبيه : يتوجب عليك حساب مجموع درجات المواد ومعرفة عدد المواد للمستويات السابقة وتزويدنا به هنا في الحقول التالية ثم قم بإدخال الدرجات للمستوى الحالي لنتمكن من حساب المعدل التراكمي للمستوى الحالي.</p>' + '<br>' + sems1 + '<br>' + '<p>بعد إدخال البيانات  أعلاه قم بإضافة مواد المستوى الحالي </p>' + '<br>';
		
		myDiv.append(message);
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
		
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		document.getElementById('field1').disabled = true;
	
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
		
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
			
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
		
		myDiv.after(btn2);
		
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);
				
			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}	
			
					
		})
	

	} else if (document.getElementById('field1').value == 3) {
		
		let myDiv = document.createElement('div');
		let level = document.getElementById('field1').value;
		
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
		let message = document.createElement('div');

		message.innerHTML = '<p>تنبيه : يتوجب عليك حساب مجموع درجات المواد ومعرفة عدد المواد للمستويات السابقة وتزويدنا به هنا في الحقول التالية ثم قم بإدخال الدرجات للمستوى الحالي لنتمكن من حساب المعدل التراكمي للمستوى الحالي.</p>' + '<br>' + sems1 + sems2 + '<br>' + '<p>بعد إدخال البيانات  أعلاه قم بإضافة مواد المستوى الحالي </p>' + '<br>';
	
		myDiv.append(message);
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
	
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		document.getElementById('field1').disabled = true;
		
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
	
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
				
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
				
		myDiv.after(btn2);
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
	
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);

			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}	
					
		})
		
	} else if (document.getElementById('field1').value == 4) {
		
		let myDiv = document.createElement('div');
		let level = document.getElementById('field1').value;
		
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
		let message = document.createElement('div');
	
		message.innerHTML = '<p>تنبيه : يتوجب عليك حساب مجموع درجات المواد ومعرفة عدد المواد للمستويات السابقة وتزويدنا به هنا في الحقول التالية ثم قم بإدخال الدرجات للمستوى الحالي لنتمكن من حساب المعدل التراكمي للمستوى الحالي.</p>' + '<br>' + sems1 + sems2 + sems3 + '<br>' + '<p>بعد إدخال البيانات  أعلاه قم بإضافة مواد المستوى الحالي </p>' + '<br>';
		
		myDiv.append(message);
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
		
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		document.getElementById('field1').disabled = true;
		
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
	
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
				
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
				
		myDiv.after(btn2);
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);
				
			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}	
		})
		
	} else if (document.getElementById('field1').value == 5) {
		
		let myDiv = document.createElement('div');
		let level = document.getElementById('field1').value;
		
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
		let message = document.createElement('div');
	
		message.innerHTML = '<p>تنبيه : يتوجب عليك حساب مجموع درجات المواد ومعرفة عدد المواد للمستويات السابقة وتزويدنا به هنا في الحقول التالية ثم قم بإدخال الدرجات للمستوى الحالي لنتمكن من حساب المعدل التراكمي للمستوى الحالي.</p>' + '<br>' + sems1 + sems2 + sems3 + sems4 + '<br>' + '<p>بعد إدخال البيانات  أعلاه قم بإضافة مواد المستوى الحالي </p>' + '<br>';
	
		myDiv.append(message);
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
		
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		document.getElementById('field1').disabled = true;
		
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
	
	
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
				
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
				
		myDiv.after(btn2);
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);
				
			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}	
					
		})
		
	} else if (document.getElementById('field1').value == 6) {
		
		let myDiv = document.createElement('div');
		let level = document.getElementById('field1').value;
		
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
		let message = document.createElement('div');
	
		message.innerHTML = '<p>تنبيه : يتوجب عليك حساب مجموع درجات المواد ومعرفة عدد المواد للمستويات السابقة وتزويدنا به هنا في الحقول التالية ثم قم بإدخال الدرجات للمستوى الحالي لنتمكن من حساب المعدل التراكمي للمستوى الحالي.</p>' + '<br>' + sems1 + sems2 + sems3 + sems4 + sems5 + '<br>' + '<p>بعد إدخال البيانات  أعلاه قم بإضافة مواد المستوى الحالي </p>' + '<br>';

		myDiv.append(message);
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
		
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		document.getElementById('field1').disabled = true;
		
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
	
	
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
				
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
				
		myDiv.after(btn2);
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);
				
			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}	
					
		})
		
	} else if (document.getElementById('field1').value == 7) {
		
		let myDiv = document.createElement('div');
		let level = document.getElementById('field1').value;
		
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
		let message = document.createElement('div');
	
		message.innerHTML = '<p>تنبيه : يتوجب عليك حساب مجموع درجات المواد ومعرفة عدد المواد للمستويات السابقة وتزويدنا به هنا في الحقول التالية ثم قم بإدخال الدرجات للمستوى الحالي لنتمكن من حساب المعدل التراكمي للمستوى الحالي.</p>' + '<br>' + sems1 + sems2 + sems3 + sems4 + sems5 + sems6 + '<br>' + '<p>بعد إدخال البيانات  أعلاه قم بإضافة مواد المستوى الحالي </p>' + '<br>';
	
		myDiv.append(message);
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
		
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		document.getElementById('field1').disabled = true;
		
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
	
	
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
				
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
				
		myDiv.after(btn2);
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);
				
			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}	
					
		})
		
	} else if (document.getElementById('field1').value == 8) {
		
		let myDiv = document.createElement('div');
		let level = document.getElementById('field1').value;
		
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
		let message = document.createElement('div');
	
		message.innerHTML = '<p>تنبيه : يتوجب عليك حساب مجموع درجات المواد ومعرفة عدد المواد للمستويات السابقة وتزويدنا به هنا في الحقول التالية ثم قم بإدخال الدرجات للمستوى الحالي لنتمكن من حساب المعدل التراكمي للمستوى الحالي.</p>' + '<br>' + sems1 + sems2 + sems3 + sems4 + sems5 + sems6 + sems7 + '<br>' + '<p>بعد إدخال البيانات  أعلاه قم بإضافة مواد المستوى الحالي </p>' + '<br>';
		
		myDiv.append(message);
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
		
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		document.getElementById('field1').disabled = true;
		
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
	
	
	
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
				
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
				
		myDiv.after(btn2);
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);
				
			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}	
					
		})
		
		
	} else if (document.getElementById('field1').value == 9) {
		
		let myDiv = document.createElement('div');
		let level = document.getElementById('field1').value;
		
		let sub = document.getElementById('subjects');
		let btn = document.createElement('button');
		let message = document.createElement('div');
	
		message.innerHTML = '<p>تنبيه : يتوجب عليك حساب مجموع درجات المواد ومعرفة عدد المواد للمستويات السابقة وتزويدنا به هنا في الحقول التالية ثم قم بإدخال الدرجات للمستوى الحالي لنتمكن من حساب المعدل التراكمي للمستوى الحالي.</p>' + '<br>' + sems1 + sems2 + sems3 + sems4 + sems5 + sems6 + sems7 + sems8 + '<br>' + '<p>بعد إدخال البيانات  أعلاه قم بإضافة مواد المستوى الحالي </p>' + '<br>';
	
		myDiv.append(message);
		
		myDiv.id = 'div' + level;
		
		sub.append(myDiv);
	
		btn.innerHTML = 'أضف مادة';

		myDiv.append(btn);

		btn.type = "button";
		
		document.getElementById('selected-element').innerHTML = 'تم اختيار المستوى ' + myList[level-1];
	
		document.getElementById('field1').disabled = true;
		
		if (document.getElementById('field1').disabled) {
			
			document.getElementById('field1').style.backgroundColor = 'red';
			document.getElementById('field1').style.color = 'white';
			
		} 
	
	
		btn.addEventListener("click", () => {
				
			let elem = document.createElement('div');
				
			elem.innerHTML = `<label> ادخل درجة المادة رقم ${count} </label></br>`;
				
			myDiv.append(elem);
				
			let input = document.createElement('input');
				
			myDiv.append(input);
				
			input.id = 'myId' + count;
				
			count++;
				
		})
		
		let btn2 = document.createElement('button');
				
		btn2.innerHTML = 'احسب';
				
		btn2.type = "button";
				
		myDiv.after(btn2);
		
		btn2.addEventListener("click",() => {
					
			let sum = 0;
			let semsAvg = 0;
			let GPA = 0;
			let numOfSubjects = 0;
			let levels = myList[level-1];
			
			for (let i = 1;i < count;i++) {
						
				sum += Number(document.getElementById('myId' + i).value);
						
			}
					
			for (let i = 1;i < level;i++) {
				
				GPA += Number(document.getElementById('sumLastSems' + i).value);
				numOfSubjects += Number(document.getElementById('nlastSems' + i).value);
				
			}
				
			count--;
					
			semsAvg = sum / count;
			GPA = (GPA + sum)  / (numOfSubjects + count);
					
			semsAvg = semsAvg.toFixed(2);
			GPA = GPA.toFixed(2);
				
			document.getElementById('div' + level).remove();			
					
			document.getElementById('result1').innerHTML = `عدد مواد المستوى ${levels} : ${count}`;
			document.getElementById('result2').innerHTML = ` مجموع درجات المستوى ${levels} : ${sum}`;
			document.getElementById('result3').innerHTML = `معدلك الفصلي للمستوى ${levels} : ${semsAvg}`;
			document.getElementById('result4').innerHTML = `معدلك التراكمي للمستوى ${levels} : ${GPA}`;
			
			document.getElementById('field1').value = 0;
			document.getElementById('field1').disabled = false;
			btn2.remove();
			
			if (!(document.getElementById('field1').disabled)) {
			
				document.getElementById('field1').style.backgroundColor = 'gray';
				document.getElementById('field1').style.color = 'black';
			
			}	
					
		})
	}
} 


