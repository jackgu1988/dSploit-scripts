// Moves the page a few pixels up and then down constantly

<script type="text/javascript">
window.onload=function() {
    var move=document.getElementsByTagName("body")[0];
    setInterval(function() {
        move.style.marginTop=(move.style.marginTop=="4px")?"-4px":"4px";
    }, 5);
}
</script>
