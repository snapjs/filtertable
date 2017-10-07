function filtertable(myTable, searchInput) {
	var table = document.getElementById(myTable);
	table.setAttribute('style', 'table-layout: fixed');
	document.getElementById(searchInput).oninput = function() {
		var self = document.getElementById(searchInput);
		for (var i = 0; i < table.childNodes.length; i++) {
		    if (table.childNodes[i].tagName && table.childNodes[i].tagName.toLowerCase() === 'tbody') {
		      table = table.childNodes[i];
		      break;
		    }

		}
		for (var i = 0; i < table.childNodes.length; i++) {
			if (table.childNodes[i].tagName && table.childNodes[i].tagName.toLowerCase() === 'tr') {
		    	if(!table.childNodes[i].getAttribute('style')){
			    	table.childNodes[i].setAttribute('style','display: table-block');
		    	}

			    var input = self.value.toLowerCase();		    	
		    	var content = table.childNodes[i].innerHTML
		    		.replace(/\r?\n|\r/g,'')
		    		.replace(/(<([^>]+)>)/ig,'')
		    		.toLowerCase()
		    		.trim();
			    if (content.includes(input)) {
					table.childNodes[i].setAttribute('style', table.childNodes[i]
						.getAttribute('style')
						.replace(/display:[^;]+/g, 'display: table-block'));
			    } else {
					table.childNodes[i].setAttribute('style', table.childNodes[i]
						.getAttribute('style')
						.replace(/display:[^;]+/g, 'display: none'));
			    }

			}
		}

	}
}
module.exports = filtertable;