
describe('build.js', function(){
  it('is included', function(){
    if (!require || !require('testling-preprocess-test'))
      throw new Error("build.js was not included");
  });
});

