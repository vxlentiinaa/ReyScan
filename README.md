**Proyecto de Diseño Industrial · Bronces Rey · 2026**  
Estado: Trabajo en proceso

# REYSCAN — Sistema Digital de Inventario y Localización de Piezas

---

## ¿Qué es REYSCAN?

REYSCAN es una interfaz web que permite a los trabajadores de Bronces Rey consultar en tiempo real la disponibilidad, ubicación y cantidad de piezas y componentes en planta, optimizando los tiempos de búsqueda y el control de inventario.

Interfaz digital que permite a los trabajadores consultar en tiempo real la disponibilidad, ubicación y cantidad de piezas en la planta, optimizando los tiempos de búsqueda y el control de inventario

### Propuesta

*ReyScan* es una herramienta simple e intuitiva que centraliza la información del inventario y la pone al alcance de los trabajadores de forma rápida y visual.

### Problema que resuelve
- Pérdida de tiempo buscando piezas en planta
- Inventario desactualizado
- Ubicaciones no claras
- Errores en registro de entradas y salidas
- Falta de trazabilidad

---

## Páginas

| Archivo | Descripción |
|---|---|
| `index.html` | Panel principal con estadísticas y accesos rápidos |
| `pages/inventario.html` | Listado completo con buscador y filtros |
| `pages/detalle.html` | Ficha individual de cada pieza |
| `pages/movimientos.html` | Historial + formulario para registrar entradas/salidas |
| `pages/ubicaciones.html` | Mapa visual de estanterías |

## Estructura de archivos

```
reyscan/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── data.js        ← aquí están todas las piezas y movimientos
└── pages/
    ├── inventario.html
    ├── detalle.html
    ├── movimientos.html
    └── ubicaciones.html
```

---

## Cómo usar

No requiere servidor ni instalación. Abre `index.html` directamente en el navegador.

Para agregar piezas o modificar el inventario, edita el archivo `js/data.js`.

---

## Sistema de ubicaciones

Cada pieza tiene un código de ubicación con el formato `X-NN-NN`:
- `X` = Letra de estantería (A, B, C, D)
- `NN` = Número de nivel (01, 02, 03)
- `NN` = Número de caja (01–05)

Ejemplo: `A-01-02` → Estantería A / Nivel 01 / Caja 02

---

## Próximas mejoras (roadmap)

- [ ] Escaneo QR real con cámara del dispositivo
- [ ] Exportar historial a Excel
- [ ] Alertas automáticas de stock bajo
- [ ] Sistema de usuarios y roles
- [ ] Foto de referencia por pieza

---

*Proyecto académico — Diseño Industrial · 2026*
