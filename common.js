/**
 * Helper methods for navigating through a site.
 *
 * This file is included automagically by the "test" executable.
 */

/**
 * Wrapper for http://docs.casperjs.org/en/latest/modules/casper.html#open
 *
 * Uses url argument from the command line in order to open a URL path.
 */
casper.openPath = function (path) {
  var cleanPath = path.replace(/^\//, '');
  return casper.open(casper.cli.get('url') + '/' + cleanPath);
};

/**
 * Wrapper for http://docs.casperjs.org/en/latest/modules/casper.html#thenopen
 *
 * Uses url argument from the command line in order to open a URL path and
 * define a navigation step.
 */
casper.thenOpenPath = function (path, thenCallback) {
  var cleanPath = path.replace(/^\//, '');
  return casper.thenOpen(casper.cli.get('url') + '/' + cleanPath, thenCallback);
};

/**
 * Wrapper for http://docs.casperjs.org/en/latest/modules/casper.html#thenopen
 *
 * Uses url argument from the command line in order to open a URL path and
 * define a navigation step.
 */
casper.thenOpenPathActual = function (path, thenCallback) {
  var cleanPath = path.replace(/^\//, '');
  return casper.thenOpen(casper.cli.get('url') + cleanPath, thenCallback);
};

/**
 * Test
 */
casper.siHei = function siHei() {
  this.echo("Hei, jeg er inkludert fra commnon.js");
};

casper.getMenuLinks = function getMenuLinks() {
  var links = document.querySelectorAll("div#main ul li a");
  return Array.prototype.map.call(links, function(e) {
    return e.getAttribute('href');
  });
};

casper.arrayContains = function(arr, val) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === val) return true;
  }
  return false;
};
