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
});
