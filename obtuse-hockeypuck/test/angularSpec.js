describe('Person', function () {
  var Person, visitor, $httpBackend;

  beforeEach(module('myApp'));

  beforeEach(module(function ($provide) {
    visitor = {};
    $provide.value('visitor', visitor);
  }));

  beforeEach(inject(function (_Person_, _$httpBackend_) {
    Person = _Person_;
    $httpBackend = _$httpBackend_;
  }));


  describe('#greet', function () {
    it('greets Australian visitors correctly', function () {
      visitor.country = 'Australia';
      expect(new Person('Daniel').greet()).to.equal('G\'day Daniel, ya cunt!');
    });
    it('greets others visitors like normal human beings', function () {
      expect(new Person('Alex').greet()).to.equal('Hey, Alex!');
    });
  });

  describe('Contructor', function () {
    it('assigns a name', function () {
      expect(new Person('Alex')).to.have.property('name', 'Alex');
    });
  });

  describe('#create', function () {

    it('creates the person on the server', function () {
      $httpBackend
        .expectPOST('/people', {
          name: 'Ben'
        })
        .respond(200);
      var succeeded;

      new Person('Ben').create()
        .then(function () {
          succeeded = true;
        });
      $httpBackend.flush();
      expect(succeeded).to.be.true;
    });

  });
});