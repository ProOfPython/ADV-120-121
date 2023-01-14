var preRes = ''

function setup() {
	canvas = createCanvas(300, 300);
	canvas.center();
	video = createCapture(VIDEO);
	video.hide();
	classifier = ml5.imageClassifier('MobilaNet', modelLoaded())
}

function modelLoaded(){
	console.log('model_is_LOAD')
}

function draw(){
	image(video, 0, 0, 300, 300)
	classifier.classify(video, gotResult())
}

function gotResult(error, results){
	if (error){
		consele.log(error)
	} else if( (results[0].confidence > 0.5) && (preRes != results[0].label) ) {
		console.log(results)
		preRes = results[0].label
		document.getElementById('resObj').innerHTML = results[0].label
		document.getElementById('resAcc').innerHTML = results[0].confidence.toFixed(2) + "%"
	}
}