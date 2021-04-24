import { useState, useEffect } from 'react';
import { projStorage, projFirestore, timeStamp } from '../firebase/config'

//hooks to handle file uploads

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    // useEffect is a hook that takes two parameters: function and dependency
    //everytime the dependency changes - the function gets fired
    //here everythime we have change file value
    useEffect(()=>{
        //getting reference to where file should be saved
        const storageRef = projStorage.ref(file.name);
        const collectionRef = projFirestore.collection('images');

        //Asynchronous - needs some time to process, so on() is a listener when there is a change in progress,
        //1st arg. of listener is the type of event,
        //2nd arg. is a function that is triggered when there is change in event
        //3rd arg. is the function that is triggered when there is an error
        //4th arg. is the function that gets triggered 
        //snapshot object - time of upload of file
        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },(error)=>{
            setError(error);
        },async()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            collectionRef.add({url, createdAt});
            setUrl(url);

        })

    },[file]);

    return {progress, url, error}


}

export default useStorage;