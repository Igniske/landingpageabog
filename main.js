


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
      
    <div class="flex flex-col justify-center items-center relative container">
  <div class="h-16 w-16 border-white border-2"></div>
  <h3 class="text-white hover:text-red-900 cursor-pointer text-3xl text-center toggle-text">Ciberseguridad</h3>
  <div class="w-1/2">
    <p class="text-white hidden-text text-justify">Los asesoramos en la prevención y gestión de brechas de seguridad de la información a fin de prevenir ataques cibernéticos mediante ransomware, malware o cualquier otro tipo de software. Analizamos el estado de situación de tu organización y realizamos la política de ciberseguridad que mejor se ajusta a tus necesidades.</p>
  </div>
</div>

<div class="flex flex-col justify-center items-center relative container">
  <div class="h-16 w-16 border-white border-2"></div>
  <p class="text-white cursor-pointer text-center toggle-text">Proteccion y privacidad</p>
  <p class="text-white hidden-text">Te ayudamos con todo lo necesario para cumplir con los estándares necesarios en la materia. Los acompañamos en el diseño de nuevos productos y servicios con la metodología de privacidad desde el diseño.</p>
</div>




      <div class="md:w-3/5">
        <p class="text-2xl font-bold text-white">Si quieres conocer más sobre nuestro productos y servicios contáctanos</p>
      </div>
    </div>

    <div class="gradient-bg flex justify-center items-center h-full">
      <div class="text-white text-center">
        <h2 class="text-4xl font-bold">NOMBRE</h2>
        <p class="mt-4">Texto de relleno para poner a prueba el funcionamiento de este div</p>
        </div>
    </div>
    <div class="bg-red-800 w-full flex justify-center items-center">
      <p class="text-xl text-gray-600">Nombre 2024 | All rights reserved</p>
    </div>
</div>


`;

document.querySelector('#navbar').innerHTML = `
  <div>
    <nav class="absolute top-0 left-0 w-full z-10 bg-white bg-opacity-5">
      <div class="text-5xl ml-4 my-8 md:ml-72">NOMBRE</div>
    </nav>
  </div>
`;


document.querySelectorAll('.container').forEach(container => {
  container.addEventListener('click', function(event) {
    const toggleText = container.querySelector('.toggle-text');
    const hiddenText = container.querySelector('.hidden-text');
    if (event.target === toggleText) {
      const currentDisplay = window.getComputedStyle(hiddenText).display;
      hiddenText.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
  });
});

