// Reverses images

<script src="http://jquery.jcubic.pl/jquery.rotate.js"></script>
    <script>
$(function() {
	var img = $('img');
	function rotate() {
		img.animate({rotate: '360'}, 2000, 'linear', function() {
			rotate();
		});
	}
	rotate();
});
    </script>
