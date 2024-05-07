const validateDNA=require("../dna.js");
describe ("DNA CHAIN",()=>{
    it ("It should return true",()=>{
        expect(validateDNA("CTAG")).toBe(true);
    });
    it ("It should return false due to 'X' ",()=>{
        expect(validateDNA("CTXG")).toBe(false);
    });
    it ("It should return false due to lowercase",()=>{
        expect(validateDNA("ctag")).toBe(false);
    });
    it("It should return false for empty string", () => {
        expect(validateDNA("")).toBe(false);
    });
});