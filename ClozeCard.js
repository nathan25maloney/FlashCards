
module.exports = ClozeCard;

function ClozeCard(text,cloze){
	if(!(this instanceof ClozeCard)) {
    	return new ClozeCard(text,cloze);
	} else {		
		if (text.includes(cloze)){
			this.text = text;
			this.cloze = cloze;
			this.partial = function(){
				var partialtext = this.text.replace(cloze,"...");
				return partialtext;

			}
			this.fullText = function() {
				var fulltext = this.text;
				return fulltext;
			}
		} else {
			console.log("You done messed up A A Ron!");
		}
	}
}