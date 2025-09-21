var sites = [
'video-1.html',
'video-2.html',
'video-3.html',
'video-4.html',
'video-5.html',
'video-6.html',
'video-7.html',
'video-8.html',
'video-9.html',
'video-10.html',
'video-11.html',
'video-12.html',
'video-13.html',
'video-14.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}