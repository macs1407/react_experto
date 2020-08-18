import React from 'react'
import { startSaveNote, startUploading } from '../../actions/notes';
import { useSelector, useDispatch } from 'react-redux';

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state=>state.notes);
    const handleSave = ()=>{
        dispatch(startSaveNote(active));
        
    }

    const handlePictureUpload = ()=>{
        document.querySelector("#fileSelector").click();
    }

    const handleFileChange = (e)=>{
       const file = e.target.files[0];
       if(file){
           dispatch(startUploading(file));
       }
    }
    return (
        <div className="notes__appbar">
            <span>29 de julio de 2020</span>
            <input  type="file" 
                    name="file"
                    style={{display:'none'}} 
                    onChange={handleFileChange} 
                    id="fileSelector"
            />
            <div>
                <button className="btn"
                    onClick={handlePictureUpload}
                >Imagen</button>
                <button className="btn"
                    onClick={handleSave}
                >Guardar</button>
            </div>
        </div>
    )
}
