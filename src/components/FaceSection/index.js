import React,{ useState} from 'react'
import { VideoWrap, Video, ButtonS, FaceContainer } from './FaceElement'

const Face = () => {
    const [playing, setPlaying] =useState(false);
    const Width=720;
    const height=560;

    const startVideo = () => {
        setPlaying(true)
        navigator.getUserMedia(
            {video: true, },
            (stream) =>{
                let video = document.getElementsByClassName('haha')[0];
                if (video){
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err) 
        )
    }

    const stopVideo = () => {
        setPlaying(false)
        let video = document.getElementsByClassName('haha')[0];
        video.srcObject.getTracks()[0].stop();
    }



    return (
        <FaceContainer>
            <VideoWrap>
                <Video startVideo={startVideo} className="haha" width={Width} height={height} autoPlay muted ></Video>
            </VideoWrap>
            {playing ? (<ButtonS onClick={stopVideo}>Stop</ButtonS>) : (<ButtonS onClick={startVideo}>Start</ButtonS>)}
        </FaceContainer>
    )
}

export default Face
