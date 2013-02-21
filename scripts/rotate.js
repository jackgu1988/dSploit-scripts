// Rotates images in webpage

<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="https://jqueryrotate.googlecode.com/files/jQueryRotate.2.2.js"></script>
<script type="text/javascript">
var angle = 0;

window.onload=function() {
	setInterval (function () {
	    rotate();
	}, 100 );
}

function rotate() {
    angle = angle + 1;
    \$("img").rotate(angle);
    \$(":image").rotate(angle);
}
</script>
