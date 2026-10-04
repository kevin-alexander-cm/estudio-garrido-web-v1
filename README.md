# Estudio Garrido — Sitio web V1

Primera versión estática y responsive del sitio corporativo de Estudio Garrido.

## Estructura

- `index.html`: contenido y estructura del sitio.
- `css/styles.css`: diseño completo, paleta y responsive.
- `js/main.js`: menú móvil, animaciones y lightbox del portafolio.
- `assets/logos/`: isotipo y marca.
- `assets/images/projects/`: fotografías optimizadas para web.

## Probar localmente

Puedes abrir `index.html` directamente en el navegador. Para una prueba más cercana a producción, desde la carpeta del proyecto puedes ejecutar:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Datos ya configurados

- WhatsApp: `+56 9 7990 8765`
- Instagram: `@estudio.garrido`
- Ubicación mostrada: `Santiago, Chile`

## Antes de publicar

1. Confirmar que textos, servicios, teléfono y ubicación estén correctos.
2. Reemplazar/agregar fotografías originales sin marcas de agua cuando estén disponibles.
3. Añadir más proyectos duplicando la estructura de `project-feature`.
4. Definir dominio final y, si corresponde, correo corporativo.
5. Al publicar, convertir `og:image` a una URL absoluta del dominio.

## Tecnologías

HTML5 + CSS3 + JavaScript vanilla. Sin dependencias externas.
