import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const soundsDic = [
    {
      id: "Q",
      keycode: 81,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      id: "W",
      keycode: 87,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      id: "E",
      keycode: 69,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      id: "A",
      keycode: 65,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      id: "S",
      keycode: 83,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      id: "D",
      keycode: 68,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      id: "Z",
      keycode: 90,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      id: "X",
      keycode: 88,
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      id: "C",
      keycode: 67,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const soundName = {
    "Q": "Heater-1",
    "W": "Heater-2",
    "E": "Heater-3",
    "A": "Heater-4",
    "S": "Clap",
    "D": "Open-HH",
    "Z": "Kick-n'-Hat",
    "X": "Kick",
    "C": "Closed-HH"
  };

  

  const [activeName, setActiveName] = useState("\u00A0");

  function playAudio(id) {
    if (power) {
      let sound = document.getElementById(id);
      sound.play();
      setActiveName(soundName[id]);
    }
    
  }

  const [audioVolume, setVolume] = useState(100);
  
  useEffect(() => {
    document.addEventListener("keydown", function(event){
      playAudio(event.key.toUpperCase());
    });

    soundsDic.forEach(element => {
      let audio = document.getElementById(element.id);
      audio.volume = audioVolume/100;
    });

  });

  const [power, setPower] = useState(true);

  function handlePower(e) {
    if (e.target.checked) {
      setPower(true);
    }
    else{
      setPower(false);
      setActiveName("\u00A0");
    }
  }


  return (
    <div id="drum-machine" className="text-center">
      
      <div id="all-pad">
        {soundsDic.map((sound) => (
          <div key={sound.url} className="drum-pad" id={"drum-" + sound.id} onClick={()=> {playAudio(sound.id)}}>{sound.id}
            <audio className="clip" id={sound.id} src={sound.url}></audio>
          </div>
        ))}
      </div>

      <div id="controls">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="power-switch" onChange={handlePower} checked={power}/>
          <label class="form-check-label" for="power-switch" id="power-switch-label">POWER</label>
        </div>
        <div id="display">
          <p>{activeName}</p>
        </div>
        <div id="volume-slider">
          <input type="range" min={0} max={100} step={1} value={audioVolume} onChange={(event) => setVolume(event.target.value)} />
          <div><p>Volume: {audioVolume}</p></div>
        </div>
      </div>
      
    </div>
  );
}


export default App;
