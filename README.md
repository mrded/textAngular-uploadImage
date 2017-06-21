# textAngular-uploadImage
This plugin allows adds possibility to upload images into [textAngular](https://github.com/textAngular/textAngular) Text-Editor/Wysiwyg.

After picking a file - it injects `<img>` tag with `base64` right into the content. No actual file upload to a backend is required.

## Installation

- [Latest release](https://github.com/mrded/textAngular-uploadImage/releases)
- Bower: `bower install textAngular-uploadImage`
- NPM: `npm install textAngular-uploadImage`

## Usage
```javascript
// Add 'textAngular-uploadImage' module to your project.
var myApp = angular.module('myApp', ['textAngular-uploadImage']);

// Add 'uploadImage' to the toolbar.
myApp.config(function($provide) {
  $provide.decorator('taOptions', function($delegate) {
    $delegate.toolbar[1].push('uploadImage');
    return $delegate;
  });
});
```
