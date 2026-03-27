var sites = [
'video-1.html',
'video-2.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}