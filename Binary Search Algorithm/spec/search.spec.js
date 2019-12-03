describe('BinarySearch function.', function() {
    it('Should not break if no array has been input.', function() {
        let answer = BinarySearch();
        expect(answer).toEqual(answer);
    });

    it('Should not break if no items are in the array.', function() {
        let answer = BinarySearch([]);
        expect(answer).toEqual(answer);
    });

    it('It should find nothing in the array [1,2,3,4,5,6,7,8,9]', function() {
        let answer = BinarySearch([1,2,3,4,5,6,7,8,9]);
        expect(answer).toEqual(undefined);
    });

    it('It should find 9 in the array [1,2,3,4,5,6,7,8,9]', function() {
        let answer = BinarySearch([1,2,3,4,5,6,7,8,9], 9);
        expect(answer).toEqual(true);
    });

    it('It should find 24 in the array [1, 13, 51, 62, 37 ,12 ,74 ,86 ,97 ,100, 24].sort()', function() {
        let answer = BinarySearch([1, 13, 51, 62, 37 ,12 ,74 ,86 ,97 ,100, 24].sort(), 24);
        expect(answer).toEqual(true);
    });

});