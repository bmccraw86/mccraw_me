---
layout: single
title:  "AAA Logging"
author: Brandon McCraw
date:   2017-12-26 22:01:43 -0600
categories: posts blog
comments: true
toc: true
excerpt: "Make your logging Available, Actionable, Automatable for an easier life."
header:
  overlay_image: /assets/images/apache_logs.png
  overlay_filter: 0.7 # same as adding an opacity of 0.5 to a black background
  #overlay_filter: rgba(105, 105, 105, 0.4)
---

You know those times where you're venting and a speck of gold just pops out of your head?  That happened to me a few years ago when I was attempting to figure out why one of our web applications wasn't functioning like we wanted it to.  After an hour of sifting through line after line of log entries, we finally found...nothing.  It ended up being an issue where some things were logged, but others weren't.  It took us tracking down the original developer to diagnose the problem.  It was then I realized our logging philosophy needed a little refreshing.

I sat down with one of my other administrators and we came up with a short list of what we needed logging to be.  

## The 'Triple-A' Framework


### Available
First and foremost, logs should be available.  In an attempt to not log too much, many times, we leave out some important logs that could help in the future.  Things like successes or integrations are often overlooked when it comes to logging.  If a transaction completes, log it.  If an API call succeeds, log it.  If a database query pulls back 500 records, log it. Success logging can be just as beneficial as error logging.  It allows for tracking and counting how many times a particular event has happened quickly over time, but be careful not to consider your log levels.  A simple one-line entry usually suffices for INFO logging.  We don't need to know every time something happens.  That's reserved for DEBUG logging.

### Actionable
Making the information available is step one, but just as important is to make that log entry actionable.  Error logs need to contain enough information to lead anyone investigating an issue with the application to the location where the error occurred. This cuts down on the amount of time it takes to identify the root cause, and therefore can decrease your return-to-service time drastically.  Also, the more unique an error can be, the more precise the action to be taken can be.  If the error can be accurately identified, and a consistent fix can be scripted, that single log entry can kick off an automated fix.

### Automatable
The holy grail of logging is for the issue to be available and actionable because the fix can be accurately scripted for an automated fix.  When the log is thrown by the application, it can be parsed and acted upon in less time than it takes someone to connect to the server.  The error has been documented and fixed.  Case closed.
