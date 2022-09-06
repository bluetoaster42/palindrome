//Section 7.3, adds "reverse" to all strings
String.prototype.reverse = function(){
	return Array.from(this).reverse().join("");
}

//Exercise 7.3.1.1
//add a blank() method to the String object prototype that returns true
//if the string is empty or consists only of whitespace characters.
String.prototype.blank = function(){
	return !!this.match(/^\s*$/);
}

//Exercsie 7.3.1.2
//add a last() method to Array that returns the last element
Array.prototype.last = function(){
	return this.slice(-1);
}


// Defines a Phrase object, from section 7.1
function Phrase(content){
	this.content = content;
	
	//Exercise 7.2.1
	//eliminate the duplication of toLowerCase() by defiing an appropriate
	//processor() method.
	this.processor = function processor(string){
		return string.toLowerCase();
	}
	
	this.processedContent = function processedContent(){
		return this.processor(this.content);
	}
	
	this.palindrome = function palindrome(){
		return this.processedContent() === this.processedContent().reverse();
	}
	
	//Exercise 7.1.1
	//makes the phrase LOUDER
	this.louder = function louder(){
		let louderContent = content.toUpperCase();
		return louderContent;
	}
	
	

}

//Section 7.2

function TranslatedPhrase(content, translation){
	this.content = content;
	this.translation = translation;
	//returns a translation processed for palindrome testing
	this.processedContent = function processedContent(){
		return this.processor(this.translation);
	}
}
TranslatedPhrase.prototype = new Phrase();
