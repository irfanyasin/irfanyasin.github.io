---
layout:     post
title:      HTML5 video events
date:       2014-08-22 15:10:19
summary:    First post on my new Jekyll powered blog
categories: html5 video javascript
published:	false
---

```
<video id="myVideo" controls> 
  <source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm> 
  <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg> 
  <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
  <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
</video>

<script>
    var video = document.getElementById('myVideo');
    video.addEventListener('timeupdate',function(e){
        
    });
</script>
```