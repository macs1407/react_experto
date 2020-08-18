export const getGifs = async(categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=ek0WEVmwafRHD0D19BP1hBQIOHqdXPcW`;
    const resp = await fetch(url);
    // Convertir el objeto a json y hacer destrcuturacion para solo traer del objeto la data
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        // Se itera sobre el arreglo y el RETURN hace la transformacion de lo que vamos a regresar
        return {
            id: img.id,
            url: img.images?.downsized_medium.url,
            title: img.title,
        }
    })
   return gifs;
}