/**
 * Menu tests.
 */

casper.test.begin('Tests menu structure', 1, function suite(test) {
  casper.start();

  // Open the homepage.
  casper.thenOpenPath('/', function() {
    var alink = document.querySelectorAll('div#main ul li a');
    var li = Array.prototype.map.call(alink, function(e) {
      //this.echo("Link: " + e.getAttribute('href'));
      return e.getAttribute('href');
    });
    this.echo("Li length: " + li.length);
    
    var links = this.evaluate(casper.getMenuLinks);
    
    this.test.assertExists("div#main ul li a");

    //test.assertEquals(links.length, 7, "7 meny linker funnet");
    //test.assert(casper.arrayContains(links, "Utvikling"), "Link til 'Utvikling' finnes");
    casper.siHei();
    
    // Verify that the main menu links are present.

    // 10 articles should be listed.
    // test.assertElementCount('article', 10, '10 articles are listed.');
  });

  casper.run(function() {
    test.done();
  });
});