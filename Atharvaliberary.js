function isTouching(mr,fr){
    if (mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2 && mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2){
     return true;
    }
    else {
     return false;
    }
  }
  
  function bounseOff(mr,fr){
    if (mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2){
       mr.velocityX= mr.velocityX*(-1);
       fr.velocityX= fr.velocityX*(-1);
    }
    if (mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2){
      mr.velocityY=mr.velocityY*(-1);
      fr.velocityY= fr.velocityY*(-1);
  }
  }
  
  function collide(){
      if (mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2){
         mr.velocityX= mr.velocityX*(0);
         fr.velocityX= fr.velocityX*(0);
      }
      if (mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2){
        mr.velocityY=mr.velocityY*(0);
        fr.velocityY= fr.velocityY*(0);
    }
  }