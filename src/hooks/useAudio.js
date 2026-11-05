import { useState, useEffect, useCallback, useRef } from 'react';

// Shared singleton audio state across all components and route changes
let audioCtx = null;
let globalGain = null;
let ambientGain = null;
let ambientNodes = null;
let ambientInterval = null;
let chimeInterval = null;
let globalIsMuted = true;
const listeners = new Set();

const initAudio = () => {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
      globalGain = audioCtx.createGain();
      globalGain.gain.value = globalIsMuted ? 0 : 0.35;
      globalGain.connect(audioCtx.destination);
    }
  }
};

/**
 * Procedural Cinematic Cosmic Ambient Music Soundscape
 * Synthesizes warm deep space bass drone, cross-fading ethereal chords,
 * and crystalline celestial starlight chimes.
 */
const startAmbientCosmicMusic = () => {
  if (!audioCtx || ambientNodes) return;

  try {
    // 1. Master Ambient Soundscape Gain
    ambientGain = audioCtx.createGain();
    ambientGain.gain.setValueAtTime(0, audioCtx.currentTime);
    ambientGain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 1.8);
    ambientGain.connect(globalGain);

    // 2. Cosmic Warm Bass Drone
    const droneFilter = audioCtx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(320, audioCtx.currentTime);
    droneFilter.Q.setValueAtTime(1.5, audioCtx.currentTime);

    // Subtle LFO breathing filter resonance
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.06, audioCtx.currentTime); // ~16s breathing cycle
    lfoGain.gain.setValueAtTime(120, audioCtx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(droneFilter.frequency);
    lfo.start();

    // Warm Drone Oscillators (A1: 55Hz, Sub: 27.5Hz, E2: 82.41Hz)
    const oscRoot = audioCtx.createOscillator();
    const oscSub = audioCtx.createOscillator();
    const oscFifth = audioCtx.createOscillator();

    oscRoot.type = 'sawtooth';
    oscRoot.frequency.setValueAtTime(55.0, audioCtx.currentTime);

    oscSub.type = 'sine';
    oscSub.frequency.setValueAtTime(27.5, audioCtx.currentTime);

    oscFifth.type = 'triangle';
    oscFifth.frequency.setValueAtTime(82.41, audioCtx.currentTime);

    const droneGain = audioCtx.createGain();
    droneGain.gain.setValueAtTime(0.24, audioCtx.currentTime);

    oscRoot.connect(droneFilter);
    oscSub.connect(droneFilter);
    oscFifth.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(ambientGain);

    oscRoot.start();
    oscSub.start();
    oscFifth.start();

    // 3. Ethereal Celestial Pad Chords Progression (Am9 -> Fmaj9 -> Dm9 -> G7)
    const chords = [
      [220.0, 261.63, 329.63, 392.0, 493.88], // Am9: A, C, E, G, B
      [174.61, 220.0, 261.63, 329.63, 392.0], // Fmaj9: F, A, C, E, G
      [146.83, 174.61, 220.0, 261.63, 329.63], // Dm9: D, F, A, C, E
      [196.0, 246.94, 293.66, 349.23, 392.0],  // G7: G, B, D, F, G
    ];

    let chordIdx = 0;
    const playNextChord = () => {
      if (!audioCtx || !ambientGain || audioCtx.state !== 'running') return;

      const freqs = chords[chordIdx % chords.length];
      chordIdx++;

      const chordGain = audioCtx.createGain();
      const chordFilter = audioCtx.createBiquadFilter();
      chordFilter.type = 'bandpass';
      chordFilter.frequency.setValueAtTime(620, audioCtx.currentTime);
      chordFilter.Q.setValueAtTime(0.85, audioCtx.currentTime);

      const oscs = freqs.map((f, i) => {
        const o = audioCtx.createOscillator();
        o.type = i % 2 === 0 ? 'sine' : 'triangle';
        o.detune.setValueAtTime((Math.random() - 0.5) * 10, audioCtx.currentTime);
        o.frequency.setValueAtTime(f, audioCtx.currentTime);
        o.connect(chordFilter);
        o.start();
        return o;
      });

      chordFilter.connect(chordGain);
      chordGain.connect(ambientGain);

      // Smooth 3.2s attack, 3s sustain, 3.2s decay
      const now = audioCtx.currentTime;
      const duration = 8.5;
      chordGain.gain.setValueAtTime(0, now);
      chordGain.gain.linearRampToValueAtTime(0.16, now + 3.0);
      chordGain.gain.setValueAtTime(0.16, now + 5.5);
      chordGain.gain.linearRampToValueAtTime(0, now + duration);

      setTimeout(() => {
        oscs.forEach((o) => {
          try {
            o.stop();
            o.disconnect();
          } catch {}
        });
        try {
          chordGain.disconnect();
          chordFilter.disconnect();
        } catch {}
      }, duration * 1000);
    };

    playNextChord();
    ambientInterval = setInterval(playNextChord, 6500);

    // 4. Starlight Twinkle Chimes (Crystalline celestial space particles)
    const twinkleNotes = [880.0, 987.77, 1046.5, 1174.66, 1318.51, 1567.98];
    const triggerTwinkle = () => {
      if (!audioCtx || !ambientGain || audioCtx.state !== 'running') return;
      if (Math.random() > 0.6) return;

      const note = twinkleNotes[Math.floor(Math.random() * twinkleNotes.length)];
      const twOsc = audioCtx.createOscillator();
      const twGain = audioCtx.createGain();

      twOsc.type = 'sine';
      twOsc.frequency.setValueAtTime(note, audioCtx.currentTime);

      twGain.gain.setValueAtTime(0, audioCtx.currentTime);
      twGain.gain.linearRampToValueAtTime(0.035, audioCtx.currentTime + 0.04);
      twGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);

      twOsc.connect(twGain);
      twGain.connect(ambientGain);

      twOsc.start();
      twOsc.stop(audioCtx.currentTime + 1.9);
    };

    chimeInterval = setInterval(triggerTwinkle, 2600);

    ambientNodes = {
      lfo,
      lfoGain,
      droneFilter,
      droneGain,
      oscRoot,
      oscSub,
      oscFifth,
    };
  } catch (err) {
    console.warn('Ambient cosmic soundscape notice:', err);
  }
};

const stopAmbientCosmicMusic = () => {
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
  if (chimeInterval) {
    clearInterval(chimeInterval);
    chimeInterval = null;
  }
  if (ambientGain && audioCtx) {
    try {
      ambientGain.gain.setValueAtTime(ambientGain.gain.value, audioCtx.currentTime);
      ambientGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.7);
    } catch {}
  }
  setTimeout(() => {
    if (ambientNodes) {
      try {
        ambientNodes.oscRoot.stop();
        ambientNodes.oscSub.stop();
        ambientNodes.oscFifth.stop();
        ambientNodes.lfo.stop();
      } catch {}
      ambientNodes = null;
    }
  }, 800);
};

export function useAudio() {
  const [isMuted, setIsMutedState] = useState(globalIsMuted);
  const initialized = useRef(false);

  useEffect(() => {
    const syncState = (val) => setIsMutedState(val);
    listeners.add(syncState);
    return () => {
      listeners.delete(syncState);
    };
  }, []);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!initialized.current) {
        initAudio();
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        initialized.current = true;
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('keydown', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const toggleMute = useCallback(() => {
    if (!audioCtx) initAudio();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

    const nextMuted = !globalIsMuted;
    globalIsMuted = nextMuted;

    if (globalGain && audioCtx) {
      globalGain.gain.setTargetAtTime(nextMuted ? 0 : 0.35, audioCtx.currentTime, 0.08);
    }

    if (nextMuted) {
      stopAmbientCosmicMusic();
    } else {
      startAmbientCosmicMusic();
    }

    listeners.forEach((fn) => fn(nextMuted));
  }, []);

  const playHoverSound = useCallback(() => {
    if (!audioCtx || globalIsMuted || !globalGain) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(globalGain);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.09);
    } catch {}
  }, []);

  const playClickSound = useCallback(() => {
    if (!audioCtx || globalIsMuted || !globalGain) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, audioCtx.currentTime + 0.1);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(globalGain);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.18);
    } catch {}
  }, []);

  return { isMuted, toggleMute, playHoverSound, playClickSound };
}
