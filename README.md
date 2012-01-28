## minislideshow


Lightweight jQuery plugin for simple slideshow. Only 1kb




## Add libraries

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
	<script type="text/javascript" src="minislideshow.js"></script>



## JS

	$(document).ready(function() {

			$('#fade').minislideshow({
				'waiting' : 0,
				'timeout' : 1000
			});

		});	




# CSS

	#fade {
		width: 300px;
		height: 200px;
	}




## HTML

	<div id="fade">
		<img src="img/img1.jpg" alt="" />
		<img src="img/img2.jpg" alt="" />
		<img src="img/img3.jpg" alt="" />
	</div>


