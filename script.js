
//
/*
const equipos =["River Plate", "Boca Juniors", "Flamengo", "Palmeiras",
  "Atlético Mineiro", "Nacional", "Peñarol", "Colo-Colo",
  "Universitario", "Alianza Lima", "Barcelona SC", "LDU Quito",
  "Cerro Porteño", "Olimpia", "Bolívar", "The Strongest",
  "Independiente del Valle", "Melgar", "Sporting Cristal", "Tigre",
  "Estudiantes", "Racing Club", "Corinthians", "Sao Paulo",
  "Grêmio", "Internacional", "Atlético Paranaense", "Emelec",
  "Caracas FC", "América de Cali", "Junior", "Santa Fe"]



  function shufferArray(array){
    return array.sort(() => Math.random() - 0.5)
  }


  function generarGrupos(){
    const grupos={}
    const letras=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const equiposMezclados=shufferArray([...equipos])


letras.forEach(letra =>{
    grupos[letra]=[]
})


for (let i=0;i< equiposMezclados.length;i++){
    const grupo=letras[i%8]
    grupos[grupo].push(equiposMezclados[i])
}


  mostrarGrupos(grupos)

  }




  

  function mostrarGrupos(grupos){

    const container=document.getElementById("grupos")
    container.innerHTML = ""


    for (const grupo in grupos) {
        const div = document.createElement("div");
        div.classList.add("grupo");
    
        let html = `<h3>Grupo ${grupo}</h3><ul>`;
        grupos[grupo].forEach(eq => {
          html += `<li>${eq}</li>`;
        });
        html += `</ul>`;
    
        div.innerHTML = html;
        container.appendChild(div);
      }

  }*/












































//////////////////////////////////////////////////////////////////////////////////////////////////////////////


      // Equipos por bolillero (8 por bolillero, 4 bolilleros)



const bolilleros = [
  [ // Bolillero 1
    { nombre: "Botafogo", escudo: "https://th.bing.com/th/id/OIP.FhUCK3ZzSme4fmN79pcnYwHaIX?rs=1&pid=ImgDetMain" },
    { nombre: "River Plate", escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_River_Plate.png/120px-Logo_River_Plate.png" },
    { nombre: "Palmeiras", escudo: "https://th.bing.com/th/id/OIP.YhpBd8JpLrx2zV4Gg1zmJgHaHa?rs=1&pid=ImgDetMain" },
    { nombre: "Flamengo", escudo: "https://logopng.com.br/logos/flamengo-15.png" },
    { nombre: "Peñarol ", escudo: "https://th.bing.com/th/id/OIP.ZiyGbRycwmeIEM1z8sgFggHaIh?rs=1&pid=ImgDetMain" },
    { nombre: "Nacional", escudo: "https://logodownload.org/wp-content/uploads/2019/04/nacional-do-uruguai-.png" },
    { nombre: "Sao Paulo", escudo: "https://th.bing.com/th/id/R.a798a7bd01f45fb60d85a7b47721d179?rik=1D9psrfqvgYkkg&pid=ImgRaw&r=0" },
    { nombre: "Racing", escudo: "https://logodownload.org/wp-content/uploads/2018/10/racing-logo-escudo-0-1.png" }
  ],
  [ // Bolillero 2
    { nombre: "Olimpia", escudo: "https://th.bing.com/th/id/OIP.dV6BHdJvIHAkW33-h-aMsgHaHa?rs=1&pid=ImgDetMain" },
    { nombre: "LDU Quito", escudo: "https://logodetimes.com/times/ldu-liga-de-quito/logo-ldu-liga-de-quito-4096.png" },
    { nombre: "Internacional", escudo: "https://logodetimes.com/times/internacional/logo-internacional-1536.png" },
    { nombre: "Libertad", escudo: "https://logodownload.org/wp-content/uploads/2018/04/club-libertad-logo-escudo-1.png" },
    { nombre: "Independiente del Valle", escudo: "https://th.bing.com/th/id/OIP.9toUjXC60tUhKC-5T64UWwHaIn?rs=1&pid=ImgDetMain" },
    { nombre: "Colo Colo", escudo: "https://th.bing.com/th/id/OIP.sN3cKCkhiU_IofTk3up2oAHaHa?rs=1&pid=ImgDetMain" },
    { nombre: "Estudiantes", escudo: "https://logodownload.org/wp-content/uploads/2018/06/estudiantes-logo-escudo-4.png" },
    { nombre: "Bolivar", escudo: "https://th.bing.com/th/id/OIP.e24j70Qq1jfBqQ7Xwy8wtgHaHa?rs=1&pid=ImgDetMain" }
  ],
  [ // Bolillero 3
    { nombre: "Atletico Nacional", escudo: "https://th.bing.com/th/id/R.97e63e2025fc017ea2fb88f46456fbab?rik=8CwPPXU18NV95A&pid=ImgRaw&r=0" },
    { nombre: "Velez Sarsfield", escudo: "https://th.bing.com/th/id/R.4e28c9a8e96e97e77dc70c1d1eece8eb?rik=eQg2%2fQiJBKMpGw&pid=ImgRaw&r=0" },
    { nombre: "Fortaleza", escudo: "https://logodetimes.com/times/fortaleza/logo-fortaleza-4096.png" },
    { nombre: "Sporting Cristal", escudo: "https://logodownload.org/wp-content/uploads/2019/04/sporting-cristal-logo-escudo-1.png" },
    { nombre: "Universitario", escudo: "https://th.bing.com/th/id/OIP.jyUBqQyJIEEWeP5Yjds7lgHaHa?rs=1&pid=ImgDetMain" },
    { nombre: "Talleres", escudo: "https://th.bing.com/th/id/R.2c5e257c223e6b22d96059f2692343fa?rik=q2y9C2GnF%2fN5%2fA&pid=ImgRaw&r=0" },
    { nombre: "Deportivo Tachira", escudo: "https://logodetimes.com/times/deportivo-tachira/deportivo-tachira-4096.png" },
    { nombre: "Universidad de Chile", escudo: "https://th.bing.com/th/id/OIP.dZKuDZ_xwNy-dLSjLraF9gAAAA?rs=1&pid=ImgDetMain" }
  ],
  [ // Bolillero 4
    { nombre: "Carabobo", escudo: "https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/07/Carabobo-FC-apresenta-seu-novo-escudo-3-585x434.jpg" },
    { nombre: "Atletico Bucaramanga", escudo: "https://th.bing.com/th/id/OIP.UYHu2MG1BSDZRmCZTR_zogHaKd?rs=1&pid=ImgDetMain" },
    { nombre: "Central Cordoba", escudo: "https://th.bing.com/th/id/R.00136aa5c4dd23f610cde326d978f21c?rik=TbKQszE1rgCluw&pid=ImgRaw&r=0" },
    { nombre: "San Antonio Bulo Bulo", escudo: "https://s2-oglobo.glbimg.com/awsL_ZIHYRQMtStVcOc6dUC4uhA=/0x0:328x325/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/9/a/O12TsOTXOAjahnESVsfQ/b39e5173-d072-44d5-9c7c-641e19c83c42.jpg" },
    { nombre: "Alianza Lima", escudo: "https://logodownload.org/wp-content/uploads/2019/04/alianza-lima-logo-escudo-1.png" },
    { nombre: "Cerro Porteño", escudo: "https://logodetimes.com/times/cerro-porteno/logo-cerro-porteno-1536.png" },
    { nombre: "Barcelona sc", escudo: "https://th.bing.com/th/id/OIP.bobQE1WDL1eYWUf1ZkKgMQHaEV?rs=1&pid=ImgDetMain" },
    { nombre: "Bahia", escudo: "https://th.bing.com/th/id/OIP.FHYr6x-L9Pqq0w3KOyF3QAHaHa?rs=1&pid=ImgDetMain" }
  ]
];



// Mostrar los bolilleros



function mostrarBolilleros() {
  const contenedor = document.getElementById("lista-bolilleros");
  bolilleros.forEach((bolillero, i) => {
    const div = document.createElement("div");
    div.className = "bolillero";
    div.innerHTML = '<h3>Bolilleros + ${i+1}</h3>';

    bolillero.forEach(equipo => {
      const equipoDiv = document.createElement("div");
      equipoDiv.className = "equipo";
      equipoDiv.innerHTML = `<img src="${equipo.escudo}" alt="escudos no disponibles en este momento"><span>${equipo.nombre}</span>`;
      div.appendChild(equipoDiv);
    });
    contenedor.appendChild(div);
  });
}








mostrarBolilleros();










// Sorteo
function sortearGrupos() {
  const grupos = Array.from({ length: 8 }, () => []);

  for (let b = 0; b < bolilleros.length; b++) {
    const equiposMezclados = [...bolilleros[b]].sort(() => Math.random() - 0.5);
    for (let i = 0; i < 8; i++) {
      grupos[i].push(equiposMezclados[i]);
    }
  }

  mostrarGrupos(grupos);
}







// Mostrar grupos con animación
function mostrarGrupos(grupos) {
  const contenedor = document.getElementById("vista-grupos");
  contenedor.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const grupoDiv = document.createElement("div");
    grupoDiv.className = "grupo";
    grupoDiv.innerHTML = `<h3>Grupo ${String.fromCharCode(65 + i)}</h3>`;
    contenedor.appendChild(grupoDiv);
  }

  let delay = 0;
  for (let ronda = 0; ronda < 4; ronda++) {
    for (let g = 0; g < 8; g++) {
      const equipo = grupos[g][ronda];
      const div = document.createElement("div");
      div.className = "equipo-animado";
      div.innerHTML = `<img src="${equipo.escudo}" width="24" height="24"> ${equipo.nombre}`;
      setTimeout(() => {
        contenedor.children[g].appendChild(div);
      }, delay);
      delay += 200;
    }
  }
}




























