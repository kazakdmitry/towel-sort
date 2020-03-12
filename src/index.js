
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix===undefined) {
		return [];}
  if  (matrix.length==0){
		console.log('here')
		return [];}
	var arr=[];	
	for(var i=0;i<matrix.length;i++){
		if ((i+1)%2==0){
			matrix[i].reverse();
		}
		for(var k=0;k<matrix[i].length;k++){
			arr.push(matrix[i][k]);
		}
	}	
	return arr;
}
