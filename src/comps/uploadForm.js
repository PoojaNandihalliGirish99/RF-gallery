import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    //array of allowed file types
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        //set state only if we have file inside selected. If there, is it a allowed file type.
        if(selected && types.includes(selected.type)){ 
            setFile(selected);
            setError('');
        } else{
            setFile(null);
            setError("Please select a png/jpeg file format");
        } 
      }

return (
    <form>
    <label>
    <input type="file" onChange={changeHandler}/>
    <span>+</span>
    </label>
    <div className="output">
{error && <div className="error">{error}</div>} 
    {file && <div>{file.name}</div>} 
    {file && <ProgressBar file={file} setFile={setFile}/>}
    </div>
    </form>
)

};

export default UploadForm;