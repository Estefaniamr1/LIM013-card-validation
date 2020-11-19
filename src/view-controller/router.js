import { components } from '../view/index2.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': {
      return container.appendChild(components.inicio());
    }
    case '#/': {
      return container.appendChild(components.inicio());
    }
    case '#/nosotros': {
      return container.appendChild(components.nosotros());
    }
    case '#/proyectos': {
      return container.appendChild(components.proyectos());
    }
    default:
      return container.appendChild(components.different());
  }
};

export { changeView };
