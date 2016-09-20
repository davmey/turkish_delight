var edmond = {
  lampPost: null,
  body: null,
  styleList: null,

  // Functions
  init: function () {
    this.plantLampPost();
    this.getEmbeddedStyles();
    this.getLinkedStyles();
  },

  plantLampPost: function() {
    lampPost = document.createElement('div');
    lampPost.id = "LampPost";
    document.body.insertBefore(lampPost, document.body.firstChild);
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
  }
};

//Event Handling
document.onload = edmond.init();
