function filtertable(myTable, searchInput) {
	var table = document.getElementById(myTable);
	table.setAttribute('style', 'table-layout: fixed');
	addEventHandler(document, 'DOMContentLoaded', function() {
	    addEventHandler(document.getElementById(searchInput), 'input', function() {
			var self = this;
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

	    });
	});

	function addEventHandler(elem, eventType, handler) {
	    if (elem.addEventListener) {
	        elem.addEventListener (eventType, handler, false);
	    } else if (elem.attachEvent) {
	        elem.attachEvent ('on' + eventType, handler); 
	    }
	}

}
module.exports = filtertable;