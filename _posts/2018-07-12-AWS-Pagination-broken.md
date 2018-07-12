---
layout: single
title:  "AWS Pagination is broken"
author: Brandon McCraw
date:   2018-07-12 13:47:43 -0600
categories: posts blog technology
---

I utilize the AWS console daily and it's become a real pain. In multiple services, I've noticed filtering on the page showing nothing has been found even though I know it's there. I can insert a new Parameter Store, then immediately go search for it only for my results to come back blank. I can commit a new Docker Image to my Elastic Container Registry (ECR) and then search for it with zero results found...and on, and on, and on.

However, there is hope.  I was on a call with an AWS engineering team to show them my parameters weren't showing up and they said "in the top right corner where it says 'Page 1 of 1' go ahead and hit the next arrow."  EUREKA! There's my missing parameters.

It turns out, pagination on many of the AWS Console pages is completely broken. I can only assume they're rendering the entire dataset of parameters in my account, then filtering them from view if they don't match my desired search. But, they aren't actually pulling the filtered entries to the front page. It's infuriating. Please AWS...FIX THIS!!
