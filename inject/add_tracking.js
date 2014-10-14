	var tracking = document.createElement('script');
	tracking.innerHTML = "window._vds = window._vds || []; \
						window._vds.push(['setAccountId', '2222-2222-2222-2222']); \
				   var vds = document.createElement('script'); \
				   vds.type = 'text/javascript'; \
				   vds.src = 'http://192.168.1.99:3002/vds.js'; \
				   var s = document.getElementsByTagName('script')[0]; \
		    		s.parentNode.insertBefore(vds, s);";
			document.body.appendChild(tracking);
