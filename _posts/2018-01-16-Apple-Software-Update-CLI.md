---
layout: single
title:  "Apple Software Updates in the terminal"
author: Brandon McCraw
date:   2018-01-16 17:01:43 -0600
categories: posts blog technology
---

As a server administrator and a new devops convert, I love finding ways to keep my hands on the keyboard and automate things in terminal.  I recently stumbled upon a [9to5mac](https://9to5mac.com/2017/07/20/how-to-update-mac-using-terminal/) article showing how to update your mac using the built in `softwareupdate` cli.  This is awesome and so simple to use.  

I was disappointed I didn't have any updates to install, but I'm sure I'll find a use for it soon.  Here is my first invocation of the command:

```
macbook:~ brandon.mccraw$ softwareupdate -l
Software Update Tool

Finding available software
No new software available.

```

For anyone who is interested, I've posted the `--help` below so you can see what this tool can do.  Happy Scripting!

```
usage: softwareupdate <cmd> [<args> ...]

** Catalog Management:
	--set-catalog <URL>	Set the new catalog URL (requires privileges)
	--clear-catalog		Clear the catalog URL back to defaults (requires privileges)

** Manage Updates:
	-l | --list		List all appropriate update labels (options:  --no-scan)
	-d | --download		Download Only
	-e | --cancel-download		Cancel a download
	-i | --install		Install
		<label> ...	specific updates
		-a | --all		All appropriate updates
		-r | --recommended	Only recommended updates
	--background		Trigger a background scan and update operation
	--ignore <label> ...	Ignore specific updates
	--reset-ignored		Clear all ignored updates

** Other Tools:
	--suspend-background 	Suspend background operations from occurring temporarily (use --duration to specify duration to suspend in seconds)
		--duration <duration>)		Optional duration in seconds to suspend background operations (defaults to 5*60 seconds)
	--dump-state		Log the internal state of the SU daemon to /var/log/install.log
	--evaluate-products		Evaluate a list of product keys specified by the --products option

** Options:
	--no-scan		Do not scan when listing or installing updates (use available updates previously scanned)
	--products		A comma-separated (no spaces) list of product keys to operate on.
	--force			Force an operation to complete.  Use with --background to trigger a background scan regardless of "Automatically check" pref

--verbose	Enable verbose output
--help	Print this help
```
