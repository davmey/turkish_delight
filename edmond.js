var edmond = {
  lampPost: null,
  body: null,

  init: function () {
    lampPost = document.createElement('div');
    lampPost.id = "LampPost";
    console.log(lampPost);
    document.body.insertBefore(lampPost, document.body.firstChild);
  }
};

//Event Handling
document.onload = edmond.init();
