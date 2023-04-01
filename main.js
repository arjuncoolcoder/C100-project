var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
       document.getElementById("textbox").innerHTML = "";
       recognition.start();
}

recognition.onresult = function(event) {

   console.log(event);

var Content = event.results[0][0].transcript;

   document.getElementById("textbox").innerHTML = Content;
   console.log(Content);





}




Webcam.set({
   width:360,
   height:250,
   image_format : 'jpeg',
   jpeg_quality:90
});


camera = document.getElementById("camera");


function speak()
{
   var synth = window.speechSynthesis

   speak_data = "Taking your selfie in 5 seconds";
   
   var utterThis = new SpeechSynthesisUtterance(speak_data);

   synth.speak(utterThis);

   Webcam.attach(camera);





}




setTimeout(function()
{
   img_id = "selie1";
   take_snapshot();
   speak_data = "Taking your next selfie in 5 seconds";
   var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);


},5000);


setTimeout(function()
{
   img_id = "selie2";
   take_snapshot();
   speak_data = "Taking your next selfie in 10 seconds";
   var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);


},10000);

setTimeout(function()
{
   img_id = "selie3";
   take_snapshot();
   speak_data = "Taking your next selfie in 5 seconds";
   var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);


},15000);