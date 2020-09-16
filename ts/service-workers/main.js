((undefined) => {

  console.log('MAIN: main.js working...')

  if ('serviceWorker' in navigator) {
    runScript();
  } else {
    runFallback();
  }

  ////////////

  function runScript () {
    window.navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('MAIN: service worker installed'))
      .catch(err => console.log('MAIN: Error', err));
  }

  function runFallback () {
    console.log('MAIN: runFallback executed!')
  }

})();



// (function () {
//   if (window.Worker) {
//     var worker = new Worker('worker.js');

//     worker.postMessage({
//       arrayLength: 500000
//     });

//     console.log('main.js working...');

//     worker.onmessage = getArray;

//     function getArray(e) {
//       console.log('worker.js finished!', e.data);
//     };

//     console.log('main.js still working...');
//   }
// })();
