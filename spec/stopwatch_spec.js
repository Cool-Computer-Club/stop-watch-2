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

QUnit.test( "Timer begins at 0", function( assert ) {
  assert.ok( timer === 0, "Passed!" );
});

QUnit.test( "Start function is triggered", function( assert ) {
  start();
  assert.ok( active == true, "Passed!" );
  clearInterval(intervalId);
});

// What do you about tests that contradict eachother? Should you not be breaking down this small or is it okay to do them and then comment them out?
// QUnit.test( "Stop function is triggered", function( assert ) {
//   assert.ok( active == false, "Passed!" );
// });

// QUnit.test( "Start adds 1 to timer", function( assert ) {
//   assert.ok( newTimer === 1, "Passed!" );
// });

QUnit.test( "newTimer totals 3, 3.5seconds after start is called", function(assert) {
  var done = assert.async();
  start();
  setTimeout(function(){
    assert.ok(timer === 3, "Passed!" );
    done();
  }, 3000);
});
