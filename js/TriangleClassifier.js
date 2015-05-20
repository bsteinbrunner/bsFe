var TriangleClassifier = function() {

  this.classify = function(a,b,c) {

    if(a == b || b == c || c == a){
    	return "isosceles";
    }
    else if(a == b && b == c && c == a){
    	return "equilateral";
    }
    else{
    	return "scalene";
    }

  };
};

classify(4,4,4);
