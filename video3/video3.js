window.document.getElementById("demo").innerHTML = "href=" + window.document.location.href
+ ", HostName=" + window.document.location.hostname + ", pathName=" + window.document.location.pathname
+ ", protocol=" + window.document.location.protocol + ", port=" + window.document.location.port;

function openNewDocument() {
   window.document.location.assign("https://www.w3schools.com");
}