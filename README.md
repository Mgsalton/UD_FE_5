# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Overview

For this project, an unresponsive webpage has been converted to a single mobile-ready web application. It is responsive on different sized displays and should be accessible for screen reader use. It also leverages a service worker to cache the pages for offline use, which should help foster a seamless offline experience for viewers.


## Navigation

The web application itself takes the form of a restaurant reviews page that consists of a landing page followed by a reviews screen. Users can navigate through interactive elements on these pages using the Tab key should they so desire. Images are also ascribed with an 'alt' tag that should provide screen reader users with a verbal description of what is happening is each respective image.

## Credits
* The Mozilla MDN web docs pages have been incredibly useful throughout the life of this course
* The same can be said of W3 schools and CSS-tricks
* The following YouTube video was very helpful when implementing the service worker: https://www.youtube.com/watch?v=ksXwaWHCW6k
* This Google doc also helped in the definition of the service worker: https://developers.google.com/web/fundamentals/primers/service-workers/
* Another point of reference for service workers: https://www.foreach.be/blog/progressive-web-apps-using-service-workers-create-offline-page
* And as always, the numerous contributors to stack overflow that provide inspiration on a whim
* And while we're at it... The reviewers at Udacity for taking the time to review each project!

## Changelog
* Service worker: referenced Dbhelper.js in the files to be cached, and moved the initial load event to main.js
* Accessibility: added 'role=application' tags to the MapBox elements on each page
* Index.html: tidied up the formatting of index.html by applying flexbox attributes to the restaurant cards.
* Restaurant.html: redesigned the entire page to be mobile-first with a vertical layout
* Footer: slightly tweaked the colours of the footer to be in compliance with WCAG 1.4.3 (contrast)
