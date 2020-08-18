
// async / await
// Asyn hace que una funcion se convierta en asincronica
export const getImagen = async()=>{
  try{
    const apiKey = 'ek0WEVmwafRHD0D19BP1hBQIOHqdXPcW';
    // Para utilizar los AWAIT se necesita ASYNC
    // Con await se le dice que espere a ejecutar la promesa para pasar a la siguiente linea
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    // Se hac lo mismo, se tiene que ejecutar la promesa para pasar a la siguiente linea
    const { data } = await resp.json();

    const {url} = data.images.original;
    return url;
  } catch(error){
    return "Se encontro un error";
  }
}