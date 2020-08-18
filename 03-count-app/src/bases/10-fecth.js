const apiKey = 'ek0WEVmwafRHD0D19BP1hBQIOHqdXPcW';

// fecth Api, es una promesa
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// El resp.json retorna otra promesa por eso se hace otro then
peticion.then(resp=>resp.json())
        .then(({data})=>{
          // Hacer destructuring
          const {url} = data.images.original;
          const img = document.createElement("img");
          img.src = url;
          document.body.append(img);
        })
        .catch(err=>console.log(err));