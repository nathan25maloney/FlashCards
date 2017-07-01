
module.exports = BasicCard;

function BasicCard(front,back){
	if(!(this instanceof BasicCard)) {
    	return new BasicCard(front,back);
    } else {
		this.front = front;
		this.back = back;
	}
}

