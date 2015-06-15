(function () {
  self.onmessage = getArray;

  function getArray(e) {
    var array = [];
    
    for (var i = e.data.arrayLength; i--;) {
      array.push(JSON.stringify(i));
    }
 
    self.postMessage(array.reverse());
    self.close();
  }
})();
