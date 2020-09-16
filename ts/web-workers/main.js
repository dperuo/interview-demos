(function () {
  if (window.Worker) {
    var worker = new Worker('worker.js');

    worker.postMessage({
      arrayLength: 500000
    });

    console.log('main.js working...');

    worker.onmessage = getArray;

    function getArray(e) {
      console.log('worker.js finished!', e.data);
    };

    console.log('main.js still working...');
  }
})();
