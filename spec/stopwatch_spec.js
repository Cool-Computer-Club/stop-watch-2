// describe("stopwatch", function() {
//   it("timer starts at 0", function() {
//     expect(timer).toEqual(0);
//   });
//
//   it("Start function is triggered", function() {
//     expect(bool).toEqual(true);
//   });

  // it("Start adds 1 to timer after 1.5seconds", function(done) {
  //   setTimeout(function() {
  //     expect(timer).toEqual(1);
  //     done();
  //   },1500);
  // });

  // it("Timer totals 1, 1.5seconds after start is called", function(done) {
  //   start();
  //   setTimeout(function() {
  //     expect(timer).toEqual(1);
  //     done();
  //   },2500);
  // });
// });

QUnit.test( "Timer starts at 0", function( assert ) {
  assert.ok( timer == 0, "Passed!" );
});

QUnit.test( "Start function is triggered", function( assert ) {
  assert.ok( bool == true, "Passed!" );
});
