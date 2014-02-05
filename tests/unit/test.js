describe('A simple test that should fail',function(){
    var $rootScope, $controller,childScope, $httpBackend, createController;
    beforeEach(module('myApp'));
    beforeEach(inject(function(_$rootScope_, _$controller_,_$httpBackend_){
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        childScope = $rootScope.$new();
        createController = function(){
            return $controller('MyController',{$scope: childScope});
        }
        $httpBackend.when('GET','/somejson').respond(202,[{name:"somerandomname",surname:"somesurname"},{name:"second random name", surname:"secondrandomsurname"}])
    }));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation(); 
        $httpBackend.verifyNoOutstandingRequest();
    });
    it('When a controller get initialized should make a call to the server to get data',function(){
        $httpBackend.expectGET('/somejson');
        createController();
        $httpBackend.flush();
        expect(childScope.serverData[0].name).toBe('somerandomname');
    });

});
