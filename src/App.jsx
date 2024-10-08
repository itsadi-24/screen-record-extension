import { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [videoMode, setVideoMode] = useState('demo');
  const videoRef = useRef(null);
  const recorder = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      recorder.current = new RecordRTC(stream, {
        type: 'video',
      });

      recorder.current.startRecording();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (recorder.current) {
      recorder.current.stopRecording(() => {
        const blob = recorder.current.getBlob();
        setRecordedBlob(blob);
        setIsRecording(false);
      });
    }
  };

  const playRecordedVideo = () => {
    if (recordedBlob && videoRef.current) {
      const player = videojs(videoRef.current, {});
      player.src({
        type: 'video/webm',
        src: URL.createObjectURL(recordedBlob),
      });
    }
  };

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Screen Recorder</h1>
      <div className='mb-4'>
        <button
          className={`mr-2 px-4 py-2 rounded ${
            videoMode === 'demo' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setVideoMode('demo')}
        >
          Demo Video Mode
        </button>
        <button
          className={`px-4 py-2 rounded ${
            videoMode === 'explainer' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setVideoMode('explainer')}
        >
          Explainer Video Mode
        </button>
      </div>
      <div className='mb-4'>
        {!isRecording ? (
          <button
            className='px-4 py-2 text-white bg-green-500 rounded'
            onClick={startRecording}
          >
            Start Recording
          </button>
        ) : (
          <button
            className='px-4 py-2 text-white bg-red-500 rounded'
            onClick={stopRecording}
          >
            Stop Recording
          </button>
        )}
      </div>
      {recordedBlob && (
        <div>
          <h2 className='mb-2 text-xl font-semibold'>Recorded Video:</h2>
          <video
            ref={videoRef}
            className='video-js'
            controls
            preload='auto'
            width='640'
            height='360'
          />
          <button
            className='px-4 py-2 mt-2 text-white bg-blue-500 rounded'
            onClick={playRecordedVideo}
          >
            Play Recorded Video
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
