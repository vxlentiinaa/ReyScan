// =============================================
// REYSCAN — Datos de inventario
// Bronces Rey · San Joaquín
// =============================================

const PIEZAS = [
  {
    id: 'CA-59',
    code: 'CA-59',
    name: 'Cerrojo Arcon',
    material: 'Fierro',
    tipo: 'Fierro Negro',
    diametro: 'Ø59',
    ubicacion: 'A-01-02',
    estante: 'A', nivel: '01', caja: '02',
    stock: 320,
    minStock: 50
  },
  {
    id: 'CT-70',
    code: 'CT-70',
    name: 'Cerradura Tubular llave/llave',
    material: 'Acero inoxidable',
    tipo: 'Cerraduras y cilindros',
    diametro: 'Ø60',
    ubicacion: 'A-01-03',
    estante: 'A', nivel: '01', caja: '03',
    stock: 150,
    minStock: 30
  },
  {
    id: 'AS-18',
    code: 'AS-18',
    name: 'Asa embutida ovalada',
    material: 'Zamac',
    tipo: 'Tiradores',
    diametro: 'Ø18',
    ubicacion: 'A-01-04',
    estante: 'A', nivel: '01', caja: '04',
    stock: 280,
    minStock: 100
  },
  {
    id: 'PC-30',
    code: 'PC-30',
    name: 'Parrilla Camping"',
    material: 'Fierro',
    tipo: 'Parrillas',
    diametro: '30"',
    ubicacion: 'B-02-01',
    estante: 'B', nivel: '02', caja: '01',
    stock: 18,
    minStock: 50
  },
  {
    id: 'CA-50',
    code: 'CA-50',
    name: 'Candado de seguridad',
    material: 'Hierro',
    tipo: 'Candados',
    diametro: 'Ø50',
    ubicacion: 'C-01-02',
    estante: 'C', nivel: '01', caja: '02',
    stock: 95,
    minStock: 20
  },
  {
    id: 'EZ-8',
    code: 'EZ-8',
    name: 'Engranaje Zamac #8',
    material: 'Zamac',
    tipo: 'Engranaje recto',
    diametro: '—',
    ubicacion: 'B-03-01',
    estante: 'B', nivel: '03', caja: '01',
    stock: 12,
    minStock: 25
  },
  {
    id: 'CJ-90',
    code: 'CJ-90',
    name: 'Cubrejunta plata"',
    material: 'Aluminio',
    tipo: 'Accesorios',
    diametro: '90x3.7cm"',
    ubicacion: 'D-01-03',
    estante: 'D', nivel: '01', caja: '03',
    stock: 450,
    minStock: 200
  },
  {
    id: 'BLL-23',
    code: 'BLL-23',
    name: 'Bocallave real bronceado',
    material: 'Bronce',
    tipo: 'Manillas',
    diametro: '13',
    ubicacion: 'D-01-04',
    estante: 'D', nivel: '01', caja: '04',
    stock: 380,
    minStock: 150
  },
];

const MOVIMIENTOS = [
  {
    pieza: 'TB-M10',
    tipo: 'salida',
    cantidad: 20,
    responsable: 'Valentina Ruz',
    fecha: '25/05/2026 10:23',
    observacion: 'Pedido #1041'
  },
  {
    pieza: 'BB-2030',
    tipo: 'entrada',
    cantidad: 50,
    responsable: 'Anais Marschhausen',
    fecha: '24/05/2026 15:10',
    observacion: 'Reposición mensual'
  },
  {
    pieza: 'PB-08',
    tipo: 'salida',
    cantidad: 30,
    responsable: 'Sofía Cartes',
    fecha: '24/05/2026 09:45',
    observacion: 'Orden de producción'
  },
  {
    pieza: 'AR-10',
    tipo: 'entrada',
    cantidad: 100,
    responsable: 'Camila García',
    fecha: '23/05/2026 11:30',
    observacion: 'Compra #889'
  },
  {
    pieza: 'EZ-8',
    tipo: 'salida',
    cantidad: 5,
    responsable: 'Pedro Rojas',
    fecha: '22/05/2026 14:20',
    observacion: 'Mantención preventiva'
  },
];
