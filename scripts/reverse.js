// Reverses images

<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="https://jqueryrotate.googlecode.com/files/jQueryRotate.2.2.js"></script>
<script type="text/javascript">

window.onload=function() {
	rotate();
}

function rotate() {
    \$("img").rotate(180);
    \$(":image").rotate(180);
}
</script>
