console.log("Ml5 Version", ml5.version);

classifier = imageClassifier("MobileNet", modelLoaded);

function modelLoaded(){
    consolr.log("Model Loaded!");
}

function Check(){
    image = document.getElementById("captured_img");
    classifier.classify(image, gotResult);
    }
    
    function gotResult(error, result){
        if(error){
            console.error("Error");
        }
    
        else{
            console.log(result);
         document.getElementById("1").innerHTML = result[0].label;   
        }
    }