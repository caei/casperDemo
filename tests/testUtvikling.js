/**
 * Utvikling test.
 */

casper.test.begin('Tests Utvikling', 1, function suite(test) {
  casper.start();
  //casper.siHei();

  // Open the homepage.
  casper.thenOpenPath('/utvikling/', function() {
    this.echo("Current url: " + this.getCurrentUrl());
    //this.echo("Current title: " + this.getTitle());
    this.test.assertTitle('Utvikling - digi.no', 'Siden har riktig tittel');
  });
    
  casper.run(function() {
    test.done();
  });
});
