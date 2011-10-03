
Cachet (Cache-it)
=========================

What is does do.
---------------------
Is a simple caching module that you can use to set an expiration objects, arrays or any value really. 

What is doesn't do.
---------------------
Cachet does not handle the processing and reprocessing of maintaining cached items. It is a simple library that assigns a name, and exiration date to a value, thats it. How that value built is up to you.

Where is this module useful?
---------------------
I found Cachet useful when calling external api's where the responses do not change often. For example calling Flickr or Twitter api. Requesting the collection of images in my Flickr profile does not change often so ideally I would like to store the response in memory for say, 6 to 12 hours.