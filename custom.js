(function() {
  "use strict";
  kintone.events.on('app.record.index.show', function(event) {
    alert('Hello from GitHub Pages!');
    return event;
  });
})();
