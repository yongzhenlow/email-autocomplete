jquery.email-autocomplete.js
=========

[![Build Status](https://travis-ci.org/yzlow/email-autocomplete.png?branch=master)](https://travis-ci.org/yzlow/email-autocomplete)

A jQuery plugin that suggests and autocompletes the domain whenever your users type in an email address field.

What does it do?
----------------

When your user types in "user@gm", the plugin will suggest for e.g. "user@gmail.com", based on the first result from a list of predefined email domains.

![diagram](https://raw.github.com/yzlow/email-autocomplete/master/doc_assets/example.png)

Press the tab-key, or simply click on the suggestion to automatically fill in the rest of the domain. (or tap on the suggestion for mobile users.)

See a live demo [here](http://yzlow.github.io/email-autocomplete/demo/).

Installation
------------

To use, download the minified library into your javascripts directory. jquery.email-autocomplete.js is also available unminimized.

Usage with jQuery
-----------------

Include jQuery and Email Autocomplete into your HTML.

```html
<script src="jquery.min.js"></script>
<script src="jquery.email-autocomplete.min.js"></script>
```

You should have a text field.

```html
<input id="email" name="email" type="email" />
```

Now, attach the plugin to the text field.

```html
<script>
$("#email").emailautocomplete({
  domains: ["example.com"] //additional domains (optional)
});
</script>
```

Domains
-------

Email Autocomplete has its own default domains if the `domains` option isn't provided.

* yahoo.com
* google.com
* hotmail.com
* gmail.com
* me.com
* aol.com
* mac.com
* live.com
* comcast.net
* googlemail.com
* msn.com
* hotmail.co.uk
* yahoo.co.uk
* facebook.com
* verizon.net
* sbcglobal.net
* att.net
* gmx.com
* mail.com
* outlook.com
* icloud.com

Author
-------

- Low Yong Zhen, [@lowyongzhen](https://twitter.com/lowyongzhen).

License
-------

Copyright (c) 2014

Licensed under the MIT License.


Known Issues:
----------------

- On android stock browser, if "Settings > Accessibility > Scale text up and down" value is not at 100%, text width is unabled to be retrieved correctly.