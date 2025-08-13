var sites = [
'video-1.html',
'video-2.html',
'video-3.html',
'video-4.html',
'video-5.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}