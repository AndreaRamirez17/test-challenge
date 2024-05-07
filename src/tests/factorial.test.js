const fac=require("../factorial.js");
describe ("Factoral function",()=>{
    it ("It should return the correct factorial for a positive integer ",()=>{
        expect(fac(3)).toBe(6);
    });
    it ("It should return 1 when the input is 0 ",()=>{
        expect(fac(0)).toBe(1);
    });
    it ("It should return 1 when the input is 1 ",()=>{
        expect(fac(1)).toBe(1);
    });
    it("should return null and log an error message for negative numbers", () => {
        console.log = jest.fn(); // Mocking console.log
        expect(fac(-1)).toBe(null);
        expect(console.log).toHaveBeenCalledWith("No se puede calcular el factorial de 0 o de números negativos.");
    });
    it("should return null and log an error message for non-integer inputs", () => {
        console.log = jest.fn(); // Mocking console.log
        expect(fac(2.5)).toBe(null);
        expect(console.log).toHaveBeenCalledWith("No se puede calcular el factorial de 0 o de números negativos.");
    });
});
