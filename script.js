import * as Tone from "https://cdn.skypack.dev/tone";

const synth = new Tone.Synth({
  oscillator: {
    type: "square"
  },
  envelope: {
    attack: 10,
    decay: 0.1,
    sustain: 0.5,
    release: 0.1
  },
  portamento: 1.8
}).toDestination();

// Call Tone.start() after user gesture
document.body.addEventListener("click", () => {
  Tone.start();
});

// Function to play the ambulance-like sound
function playAmbulanceSound() {
  const now = Tone.now();
  const interval = 0.3; // Adjust interval between notes
  const notes = ["E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "D#5", "D5", "C5", "B4", "A#4", "G#4", "G4", "F#4", "F4", "E4"];

  notes.forEach((note, index) => {
    synth.triggerAttackRelease(note, "4n", now + index * interval);
  });
}

// Call the function to start playing the ambulance-like sound after a delay
setTimeout(() => {
  playAmbulanceSound();
  // Use setInterval to repeatedly play the ambulance-like sound every 7 seconds
  setInterval(playAmbulanceSound, 7000);
}, 1000); // Start after 1 second delay
