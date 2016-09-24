var Edmond = {
  body: null,
  styleList: null,

  // Functions
  init: function () {
    this.LampPost.plantLampPost();
    this.getEmbeddedStyles();
    this.getLinkedStyles();
  },


  getEmbeddedStyles: function () {
    var styles = document.getElementsByTagName('style');
    for (var style in styles) {
    }
    console.log(styles);
  },

  getLinkedStyles: function() {
    var linkedStyles = document.querySelectorAll('link[rel="stylesheet"]');
    console.log(linkedStyles);
  },

  LampPost: {
    lampPost: null,
    title: 'Turkish Delight',
    backgroundColor: '#ffffcc',
    textEditor: null,

    plantLampPost: function() {
      lampPost = document.createElement('div');
      lampPost.id = "LampPost";

      //Styles
      lampPost.style.backgroundColor = this.backgroundColor;
      lampPost.style.padding = '20px';
      lampPost.style.position = 'fixed';
      lampPost.style.top = '10px';
      lampPost.style.right = '10px';

      document.body.insertBefore(lampPost, document.body.firstChild);
    },

    growLampPost: function(styles) {
      for (var style in styles) {
        if (object.hasOwnProperty(style)) {

        }
      }
    }

    hideLampPost: function () {

    },

    showLampPost: function () {

    },

    removeLampPost: function () {

    }

  }
};

//Event Handling
document.onload = Edmond.init();
