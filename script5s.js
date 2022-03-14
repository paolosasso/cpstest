var cps = 0
var maxcps = 0
var clicksthissecond = 0
var clicks = 0
if (localStorage.getItem('cps') != undefined) {
  clicksthissecond = localStorage.getItem('clicksthissecond')
  document.getElementById('m').innerHTML = 'Clicks: ' + clicks
}
if (localStorage.getItem('clicks') > 1) {
  setTimeout(calcolo(), 5000);

}
function press() {
  clicks++;
  document.getElementById('m').innerHTML = 'Clicks: ' + clicks;
}
function calcolo() {
  alert('Hai fatto '+ clicks/5);
}
