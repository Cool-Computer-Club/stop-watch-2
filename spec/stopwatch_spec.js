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
//
// QUnit.test( "Start adds 1 to timer", function( assert ) {
//   assert.ok( newTimer === 1, "Passed!" );
// });

QUnit.test( "\'Seconds\' begins at 0", function( assert ) {
  assert.ok( seconds === 0, "Passed!" );
});

QUnit.test( "Start function is triggered (check after 1 second)", function( assert ) {
  var done = assert.async();
  start();
  setTimeout(function(){
    assert.ok( active == true, "Passed!" );
    clearInterval(intervalId);
    done();
  }, 1000);
});

QUnit.test( "Stop function has been triggered after start function", function( assert ) {
  start();
  stop();
  assert.ok( active == false, "Passed!" );
});

QUnit.test("Start function increments seconds (after 3 seconds)", function( assert ) {
  var done = assert.async();
  start();
  setTimeout(function(){
    assert.ok( seconds === 3, "Passed!" );
    clearInterval(intervalId);
    done();
  }, 3100);
});

QUnit.test("Stop function pauses seconds (checking at 3 seconds)", function( assert ) {
  clearInterval(intervalId);
  var done = assert.async();
  var seconds1;
  var seconds2;
  start();
  stop();
  setTimeout(function(){
    seconds1 = seconds;
    setTimeout(function(){
      seconds2 = seconds;
      assert.ok( seconds1 === seconds2, "Passed!" );
      clearInterval(intervalId);
      done();
    }, 3100);
  },5000);
});

QUnit.test( "Reset function has been triggered after start function", function( assert ) {
  start();
  reset();
  assert.ok( active == false, "Passed!" );
});

QUnit.test( "Reset function pauses seconds (checking at 3 seconds)", function( assert ) {
  clearInterval(intervalId);
  var done = assert.async();
  var seconds1;
  var seconds2;
  start();
  reset();
  setTimeout(function(){
    seconds1 = seconds;
    setTimeout(function(){
      seconds2 = seconds;
      assert.ok( seconds1 === seconds2, "Passed!" );
      clearInterval(intervalId);
      done();
    }, 3100);
  },5000);
});

QUnit.test( "Reset function returns seconds to 0 (3 seconds) after start triggered", function( assert ) {
  var done = assert.async();
  start();
  setTimeout(function(){
    reset();
    assert.ok( seconds === 0, "Passed!" );
    done();
  }, 3100);
});


QUnit.test( "When start button is clicked, start function is called", function(assert) {
  startButton.onclick();
  assert.ok( active === true, "Passed!");
});

QUnit.test( "When start button is clicked display equals seconds", function(assert) {
  startButton.onclick();
  assert.ok( document.getElementsByClassName("display")[0].textContent == seconds, "Passed!");
});
