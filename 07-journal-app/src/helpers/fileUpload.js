export const fileUpload = async(file)=>{
    const cloudUlr = 'https://api.cloudinary.com/v1_1/dahiulobc/upload';
    // Crear un formulario
    const formData = new FormData();
    // Parametros que se tienen que enviar en el formulario
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    try {
        // Especificar el metodo ya que es un post
        const resp = await fetch(cloudUlr, {
            method:'POST',
            body:formData
        });
        // Comprobar si la respuesta fue ok 
        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch(error){
        throw error;
    }
}