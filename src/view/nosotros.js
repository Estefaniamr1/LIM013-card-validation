
export default () => {
  const divElem = document.createElement('div');
  const viewNosotros = `
  <head>
    <title>Cadena de favores</title>
  </head>
  <body background="https://st2.depositphotos.com/1012885/5475/i/450/depositphotos_54754721-stock-photo-grunge-textures-and-backgrounds.jpg">
    <h1>Movimiento: Diseño con propósito</h1>
    <h2>Un abrigo para Perú</h2>
    <p1> ¿Quienes somos?
        Movimiento social que impulsa e incentiva el diseño para un fin social.
         Somos un puente entre las comunidades de bajos recursos o casas hogares determinadas
        y los diseñadores que quieran sumarse para la distribuciòn de diseños que se 
    entregarán para cubrir dicho fin social.
    <br/><br/>
        Objetivo general:
        Movimiento que busca incentivar el diseño para un fin social,
         basado en la entrega de un diseño específico, por parte de diseñadores
         que quieran sumarse a esta iniciativa, 
         para distribuirlos en diversas comunidades
         de bajos recursos, y de esta manera hacer de una forma 
         accesible la vestimenta a niños.
    </p1>
    <br/>

    <p2>Objetivos específicos:
        1. Establecer estrategias coherentes para llevar a cabo el objetivo general.
        2. Visitar casas hogares o comunidades para establecer un vìnculo y conocer sus necesidades.
        3. Hacer publicidad por medio de las redes sociales y contacto personal (radio y tv),
        para atraer diseñadores regionales a sumarse a esta iniciativa.
        4. Definir cuál será la comunidad o casa hogar donde se prestará el servicio, por mes.
        Basado en sus necesidades (tipo de vestimenta que más requieren; diario, escolar)
        5. Hacer llamado a los diseñadores a que aporten un diseño que se adapte a una necesidad
         de dicha comunidad o casa hogar.
         6. Recibir de diseñadores determinados diseños en la comunidad o casa hogar correspondiente.

    </p2>
    <p3> Terreno: Lima.
        Aspiraciones: nacional e Internacional/ vestimenta a niños, adultos de bajos recursos.
        Observaciones: Por el momento solo esta dirigido a niños, y el aporte de la vestimenta
         dependerá de la necesidad determinada.
         Fin social: Hacer de una forma más accesible la vestimenta a niños.
    </p3>
      <input name3="button" style="background-color:papayawhip;font-size:25px;" type="button" onclick="location.href='abrigo.html'" value="Apoya una causa y deja tu huella">
      </body>`

      divElem.innerHTML = viewNosotros;
};
