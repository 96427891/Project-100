var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
variable = 0;
function start() {
    recognition.start();
    speak();
};


camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function () {
        variable +=1;
        if(variable == 1){
            img_id = "selfie1";
        }
        if(variable == 2){
            img_id = "selfie2";
        }if(variable == 3){
            img_id = "selfie3";
        }
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

};

function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        };
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        };
        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        };
    });
};