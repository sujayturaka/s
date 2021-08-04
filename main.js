philtrumX = 0;
philtrumY = 0;

function preload()
{
    philtrum = loadImage('https://i.postimg.cc/9FVfYDNH/Clown-Nose-PNG-High-Quality-Image.png')
}

function setup()
{
    canvas = createCanvas (300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0 )
  {
      console.log(results);
      philtrumX =  results[0].pose.philtrum.x-15;
      philtrumY = results[0].pose.philtrum.y-15;
      console.log("philtrum x = " + results[0].pose.philtrum.x);
      console.log("philtrum y = " + results[0].pose.philtrum.y);
  }
  
}

function draw()
{
   image(video, 0, 0, 300, 300);
}

function take_snapshot()
{
    save('mustache.png');
}