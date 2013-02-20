// Script that will redirect victim to a new page when the first page
// loads

<script language=javascript>
function redirect(){
  window.location = "http://example.com";
}
</script>

<body onload="redirect()">
