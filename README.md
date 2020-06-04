# AccessibleAccordionMegaMenu

Menú tipo "acordeón" (collapsible menu) accesible de acuerdo a las pautas WCAG 2.0 y 2.1.

## Ejemplo en funcionamiento
Puedes                     encontrar un ejemplo funcional así como un tutorial en el blog del autor Javier Rodríguez (https://wwww.tecnologiaaccesible.com)
                   
### Pre-requisitos 📋

Este menú tipo acordeón hace uso de los frameworks JQuery y Bootstrap, por lo que es necesario incluir las dependencias necesarias antes de utilizar el componente:
```
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

<script src="libs/jquery.min.js"></script>
<script src="libs/bootstrap.bundle.min.js"></script>
<script src="js/accordion.js"></script>

```

### Instalación 🔧

Una vez se han incluido los estilos, librerías y el script, el código html deberá respetar la siguiente estructura:

```
<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h3 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Button 1
        </button>
      </h3>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion" role="region">
      <div class="card-body">
<!-- Meter contenido aquí -->
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h3 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Button 2
        </button>
      </h3>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion" role="region">
      <div class="card-body">
<!-- Meter contenido aquí -->
      </div>
    </div>
  </div>
</div>
```

Para que el atributo data-toggle="tooltip" funcione correctamente y muestre tooltips accesibles, es necesario inicializarlo:
```
$(document).ready(function() {
$('[data-toggle="tooltip"]').tooltip();
});// documentready.

```








## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/tecnologiaaccesible/AccessibleAccordionMegaMenu) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Web del Autor

Puedes encontrar mucho más de cómo utilizar este proyecto en mi  blog(https://www.tecnologiaaccesible.com/menu-acordeon-accesible/)

## Autor ✒️

* **Javier Rodríguez** - *Desarrollo y tutorial completos* - [tecnologiaaccesible](https://github.com/tecnologiaaccesible)

## Licencia 📄

Este proyecto está bajo la Licencia (GNU GENERAL PUBLIC LICENSE) - mira el archivo LICENSE para detalles

