describe("stopwatch", function() {
  it("timer starts at 0", function() {
    expect(timer).toEqual(0);
  });

  it("Count adds 1 to timer after 1.5seconds", function(done) {
    setTimeout(function() {
      expect(timer).toEqual(1);
      done();
    },1500);
  });

  it("Start function is triggered", function() {
    expect(bool).toEqual(true);
  });

  // it("Timer totals 1, 1.5seconds after start is called", function(done) {
  //   start();
  //   setTimeout(function() {
  //     expect(timer).toEqual(1);
  //     done();
  //   },2500);
  // });
});
