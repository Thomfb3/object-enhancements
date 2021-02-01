describe("#createInstructor", function () {
    const testObj = {
        firstName: "John",
        lastName: "Smith"
    }

    const testObj2 = {
        firstName: "John",
        lastName: undefined
    }

    it("should return an object with given values", function () {
        expect(createInstructor("John", "Smith")).toEqual(testObj);
    });

    it("should return an object given value and undefined", function () {
        expect(createInstructor("John")).toEqual(testObj2);
    });

});


describe("#instructor object", function () {
    const testObj = {
        firstName: "Colt",
        42: "That is my favorite!"
    }

    const logObject = (obj) => {
        return obj;
    }

    it("should return array without odd numbers", function () {
        expect(logObject(testObj)).toEqual(testObj);
    });


});

describe("#otherInstructor ", function () {

    it("should return Hi!", function () {
        expect(otherInstructor.sayHi()).toEqual("Hi!");
    });

    it("should return Colt says Bye!", function () {
        expect(otherInstructor.sayBye()).toEqual("Colt says bye!");
    });

});



describe("#createAnimal ", function () {

    const d = createAnimal("dog", "bark", "Woooof!")
    const s = createAnimal("sheep", "bleet", "BAAAAaaaa")

    it("should return Woooof! from the d object", function () {
        expect(d.bark()).toEqual("Woooof!");
    });

    it("should return dog from the d object", function () {
        expect(d.species).toEqual("dog");
    });

    it("should return BAAAAaaaa from the s object", function () {
        expect(s.bleet()).toEqual("BAAAAaaaa");
    });

    it("should return sheep from the s object", function () {
        expect(s.species).toEqual("sheep");
    });
});