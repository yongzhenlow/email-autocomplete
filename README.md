# jquery.email-autocomplete.js

> A jQuery plugin that suggests and autocompletes the domain whenever your users type in an email address field.

[![Build Status](https://travis-ci.org/yongzhenlow/email-autocomplete.svg?branch=master)](https://travis-ci.org/yongzhenlow/email-autocomplete)
[![CDNJS version](https://img.shields.io/cdnjs/v/email-autocomplete.svg)](https://cdnjs.com/libraries/email-autocomplete)


## What does it do?

When your user types in "user@gm", the plugin will suggest for e.g. "user@gmail.com", based on the first result from a list of predefined email domains.

![diagram](https://raw.github.com/10w042/email-autocomplete/master/doc_assets/example.png)

Press the tab-key, or simply click on the suggestion to automatically fill in the rest of the domain. (or tap on the suggestion for mobile users.)

You can also use the right arrow key.

See a live demo [here](http://10w042.github.io/email-autocomplete/demo/).

## Installation

**Bower**

```sh
bower install email-autocomplete --save
```

**Download** 

Download or clone this repo and copy `dist/jquery.email-autocomplete.min.js` into your javascripts directory.

## Usage (jQuery)

Add `jquery.email-autocomplete.min.js` into your HTML, before the closing `</body>` tag.

```html
<script src="jquery.min.js"></script>
<script src="jquery.email-autocomplete.min.js"></script>
```

You should also have a email input field.

```html
<input id="email" name="email" type="email" />
```

Now, attach the plugin to the email input field.

```html
<script>
$("#email").emailautocomplete({
  suggClass: "custom-classname",
  domains: ["example.com"]
});
</script>
```

## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
suggClass|string|'eac-sugg'|Classname for the suggestion text element.
domains|array|See list of domains below|Array of domains used for autocompleting.

## Styling

Use the following CSS to style the suggestion text color. Remember to update the classname if you've changed it to a custom one.

```css
.eac-sugg {
  color: #ccc;
}
```

## Domains

These are the plugin default domains if the `domains` option is not supplied.

* gmail.com
* googlemail.com
* yahoo.com
* yahoo.co.uk
* hotmail.com
* hotmail.co.uk
* live.com
* msn.com
* comcast.net
* sbcglobal.net
* verizon.net
* facebook.com
* outlook.com
* att.net
* gmx.com
* icloud.com
* me.com
* mac.com
* aol.com

## Author

- Low Yong Zhen


## Known Issues

* On Android stock browser, if "Settings > Accessibility > Scale text up and down" value is not at 100%, the text width will be calculated incorrectly.
