angular.module('textAngular-uploadImage', []).config(['$provide', function($provide) {
  $provide.decorator('taOptions', ['taRegisterTool', 'taToolFunctions', function(taRegisterTool, taToolFunctions) {
    taRegisterTool('uploadImage', {
      iconclass: "fa fa-picture-o",
      tooltiptext: 'Upload an image',
      onElementSelect: {
        element: 'img',
        action: taToolFunctions.imgOnSelectAction
      },
      action: function() {
        var $editor = this.$editor;

        // Create a virtual input element.
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = "image/*";

        input.onchange = function() {
          var reader = new FileReader();

          if (this.files && this.files[0]) {
            reader.onload = function(e) {
              $editor().wrapSelection('insertHtml', '<img src=' + e.target.result + '>', true);
            };

            reader.readAsDataURL(this.files[0]);
          }
        };

        // Click on a virtual input element.
        input.click();
      }
    });
  }]);
}]);
