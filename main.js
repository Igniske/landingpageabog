document.querySelector('#app').innerHTML = `
  <div class="relative">
    <div id="navbar"></div>
    <div style="background-image: url('/abogacia.jpg');" class="h-screen md:h-screen md:bg-cover">
      <div class="absolute inset-x-0 mt-32 flex justify-center items-center">
        <div class="max-w-md mx-auto mt-16 md:ml-72 rounded-lg z-20">
          <h2 class="text-3xl mx-4 md:text-5xl text-white font-bold">ABOGACIA, SEGURIDAD Y OTRAS</h2>
          <p class="md:text-lg mx-4 text-blue-700 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi magni similique doloribus quidem in perferendis fugiat, exercitationem eveniet veritatis numquam? Quos, dolores. In repudiandae soluta quas pariatur expedita magni ad!</p>
        </div>
      </div>
    </div>
    <div class="h-full bg-black flex flex-col space-y-8 justify-center items-center m-auto">
      <div class="flex flex-col justify-center items-center">
        <div class="h-16 w-16 border-white border-2">
        </div>
        <p class="text-white text-center">Texto de relleno</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-16 w-16 border-white border-2">
        </div>
        <p class="text-white text-center">Texto de relleno</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-16 w-16 border-white border-2">
        </div>
        <p class="text-white text-center">Texto de relleno</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="h-16 w-16 border-white border-2">
        </div>
        <p class="text-white text-center">Texto de relleno</p>
      </div>

      <div class="md:w-3/5">
        <p class="text-2xl font-bold text-white">Si quieres conocer más sobre nuestro productos y servicios contáctanos</p>
      </div>
    </div>

    <div class="h-full bg-black flex flex-col space-y-8 justify-center items-center m-auto" id="formContainer">
      <div class="flex flex-col justify-center items-center">
        <input type="text" class="input-field" placeholder="Nombre y Apellido">
      </div>
      <div class="flex flex-col justify-center items-center">
        <input type="text" class="input-field" placeholder="Teléfono">
      </div>
      <div class="flex flex-col justify-center items-center">
        <input type="email" class="input-field" placeholder="Email">
      </div>
      <div class="flex flex-col justify-center items-center">
        <textarea class="input-field" rows="4" placeholder="Comentario"></textarea>
      </div>
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
    </div>
  </div>
`;

document.querySelector('#navbar').innerHTML = `
  <div>
    <nav class="absolute top-0 left-0 w-full z-10 bg-white bg-opacity-5">
      <div class="text-5xl ml-4 my-8 md:ml-72">Nombre</div>
    </nav>
  </div>
`;
