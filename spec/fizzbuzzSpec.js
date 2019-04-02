
describe('Javabuzz', function() {

  var javabuzz

  beforeEach(function(){
    javabuzz = new Javabuzz()
  })

  describe('prints fizz, buzz, fizzbuzz or number', function(){

    it('prints fizz when divisable by 3', function(){
      expect(javabuzz.prints(6)).toEqual('fizz')
    })

    it('prints buzz when divisable by 5', function(){
      expect(javabuzz.prints(10)).toEqual('buzz')
    })

    it('prints fizzbuzz when divisable by 15', function(){
      expect(javabuzz.prints(30)).toEqual('fizzbuzz')
    })

    it('prints a number in all other cases', function(){
      expect(javabuzz.prints(1)).toEqual(1)
    })

  })

})
