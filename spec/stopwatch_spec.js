// describe("stopwatch", function() {
//   it("timer starts at 0", function() {
//     expect(timer).toEqual(0);
//   });
//
//   it("Start function is triggered", function() {
//     expect(bool).toEqual(true);
//   });
//
//   it("Start adds 1 to timer after 1.5seconds", function(done) {
//     setTimeout(function() {
//       expect(timer).toEqual(1);
//       done();
//     },1500);
//   });
//
//   it("Timer totals 1, 1.5seconds after start is called", function(done) {
//     start();
//     setTimeout(function() {
//       expect(timer).toEqual(1);
//       done();
//     },2500);
//   });
// });

QUnit.test( "Timer begins at 0", function( assert ) {
  assert.ok( timer === 0, "Passed!" );
});

QUnit.test( "Stop function is triggered", function( assert ) {
  start();
  stop();
  assert.ok( active == false, "Passed!" );
});

QUnit.test( "Start function is triggered", function( assert ) {
  var done1 = assert.async();
  start();
  setTimeout(function(){
    assert.ok( active == true, "Passed!" );
    clearInterval(intervalId);
    done1();
  }, 1000);
});


// QUnit.test( "Start adds 1 to timer", function( assert ) {
//   assert.ok( newTimer === 1, "Passed!" );
// });

QUnit.test("timer totals 3, 3 seconds after start is called", function( assert ) {
  var done2 = assert.async();
  start();
  setTimeout(function(){
    assert.ok( seconds === 3, "Passed!" );
    clearInterval(intervalId);
    done2();
  }, 3100);
});

QUnit.test("Stop pauses seconds variable", function( assert ) {
  var done3 = assert.async();
  start();
  stop();
  setTimeout(function(){
    seconds1 = seconds;
    setTimeout(function(){
      seconds2 = seconds;
      assert.ok( seconds1 === seconds2, "Passed!" );
      clearInterval(intervalId);
      done3();
    }, 3100);
  },5000);
});
