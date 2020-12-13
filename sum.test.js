 const {sum,sumOf} = require('./sum');


//test 함수 사용
// test('1 + 2 = 3', () => {
//     expect(sum(1,2)).toBe(3);
// })

//test 함수는 새로운 테스트 케이스를 만드는 함수
//expect는 특정 값이 ~~ 일것이다 라고 사전에 정의를 하고, 통과를 하면 테스트를 성공시키고 통과를 하지 않으면 테스트를 실패시킨다.
//toBe는 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행이 됐는지, 에러가 났는지 등을 확인 할 수 있게 해준다.


//it 함수 사용
// it('calculates 1+2', () => {
//     expect(sum(1,2)).toBe(3);
// })


//describe를 이용하여 테스트 함수 한번에 묶기
describe('sum', () => {
    it('1+2더하기', () => {
        expect(sum(1,2)).toBe(3);
    });

    it('calculates all numbers', () => {
        const array = [1,2,3,4,5];
        expect(sumOf(array)).toBe(15);
    })
})

