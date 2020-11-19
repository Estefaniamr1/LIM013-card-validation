const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));
  };
  
  window.addEventListener('load', init); // llama a init una vez que la pagina este cargada