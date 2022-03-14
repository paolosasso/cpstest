var cps = 0
var maxcps = 0
var clicksthissecond = 0
var clicks = 0
if (localStorage.getItem('cps') != undefined) {
  cps = localStorage.getItem('cps')
  maxcps = localStorage.getItem('cps')
  clicksthissecond = localStorage.getItem('clicksthissecond')
  clicks = localStorage.getItem('clicks')
  document.getElementById('t').innerHTML = maxcps + ' Cps'
  document.getElementById('n').innerHTML = cps + " Max Cps"
  document.getElementById('m').innerHTML = 'Clicks: ' + clicks
}
setInterval(function () {
  cps = clicksthissecond;
  if (cps > maxcps) {
    maxcps = cps;
    document.getElementById('n').innerHTML = maxcps + ' Max Cps'
  }
  document.getElementById('t').innerHTML = cps + " Cps"
  clicksthissecond = 0;
}, 1000)
function press() {
  clicksthissecond++;
  clicks++;
  document.getElementById('m').innerHTML = 'Clicks: ' + clicks;
  store()
}
function store() {
  localStorage.setItem('cps', cps)
  localStorage.setItem('maxcps', maxcps)
  localStorage.setItem('clicksthissecond', clicksthissecond)
  localStorage.setItem('clicks', clicks)
}