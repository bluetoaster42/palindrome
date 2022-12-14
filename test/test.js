let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function(){
	describe("#palindrome", function(){
		it("should return false for a non-palindrome", function(){
			let nonPalindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
		});
		it("should return true for a plain palindrome", function(){
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});
		it("should return true for a mix-cased palindrome", function(){
			let mixedPalindrome = new Phrase("Racecar");
			assert(mixedPalindrome.palindrome());
		});
		it("should return true for a palindrome with punctuation", function(){
			let punctPalindrome = new Phrase("Madam, I'm Adam.");
			assert(punctPalindrome.palindrome());
		});
		it("should return true for an empty string", function(){
			let emptyPalindrome = new Phrase("");
			assert(emptyPalindrome.palindrome());
		});
	});
	
	describe("#letters", function(){
		it("should return only letters", function(){
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
		});
		it("should return the empty string when given the empty string", function(){
			let emptyPalindrome = new Phrase("");
			assert.strictEqual(emptyPalindrome.letters(), "");
		});
		it("should return empty string on no match", function(){
			let noLetters = new Phrase("12345");
			assert.strictEqual(noLetters.letters(), "");
		});
	});
});
