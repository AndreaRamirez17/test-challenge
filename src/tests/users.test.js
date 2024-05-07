// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want
describe("getUser",()=>{
    it("should return the correct  user object for an ID",async()=>{
        const user=await getUser(3);
        expect(user).toBeDefined();
        expect(user.id).toBe(3);
    });
    it ("should throw an error for an invalid ID",async ()=>{
        try{
            await getUser(999);
            throw new Error ("getUser should have thrown an error for invalid ID");
        } catch (error){
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe("User not found");
        }
    });
});

// READ documentation

