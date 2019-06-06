# Plain HTML/JS audio recording demo using vmsg
A simple HTML5/JS demo that uses [vmsg](https://github.com/Kagami/vmsg) to record mp3 audio in the browser. Works on both mobile - including Safari 11 - and desktop.

As opposed to earlier JavaScript mp3 encoding solutions, vmsg uses a faster WebAssembly version of the latest LAME mp3 encoder ([3.100](https://svn.code.sf.net/p/lame/svn/trunk/lame/doc/html/history.html) from october 2017). 

All the vmsg demos are React based so I thought I'd do a plain HTML/JS one. I've taken great care to make the demo as easy to use on mobile and desktop.

Live demo: [https://addpipe.com/simple-vmsg-demo/](https://addpipe.com/simple-vmsg-demo/)

Blog post: https://blog.addpipe.com/recording-mp3-audio-in-html5-using-vmsg-a-webassembly-library-based-on-lame/
