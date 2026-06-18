// =============================================
// REYSCAN — Datos de inventario Bronces Rey
// San Joaquín · Actualizado 2026
// =============================================

const PIEZAS = [
  {
    id: 'BL-001', code: 'BL-001',
    name: 'Bocallave Real Bronceado',
    material: 'Bronce', tipo: 'Bocallave', diametro: 'Ø25mm',
    ubicacion: 'A-01-02', estante: 'A', nivel: '01', caja: '02',
    stock: 340, minStock: 60,
    shape: 'cylinder', desc: 'Bocallave tipo real, acabado bronceado pulido'
  },
  {
    id: 'BJ-2030', code: 'BJ-2030',
    name: 'Buje Bronce Ø20×30',
    material: 'Bronce', tipo: 'Buje', diametro: 'Ø20mm',
    ubicacion: 'A-01-03', estante: 'A', nivel: '01', caja: '03',
    stock: 150, minStock: 30,
    shape: 'ring', desc: 'Buje bronce macizo torneado de precisión'
  },
  {
    id: 'CT-001', code: 'CT-001',
    name: 'Cerradura Tubular Llave/Llave',
    material: 'Bronce', tipo: 'Cerradura', diametro: '—',
    ubicacion: 'A-02-01', estante: 'A', nivel: '02', caja: '01',
    stock: 18, minStock: 40,
    shape: 'box', desc: 'Cerradura tubular doble llave, bronce macizo'
  },
  {
    id: 'AO-001', code: 'AO-001',
    name: 'Asa Embutida Ovalada',
    material: 'Bronce', tipo: 'Asa', diametro: '100×50mm',
    ubicacion: 'B-01-02', estante: 'B', nivel: '01', caja: '02',
    stock: 280, minStock: 80,
    shape: 'oval', desc: 'Asa embutida ovalada, ideal para muebles y puertas'
  },
  {
    id: 'PM-M10', code: 'PM-M10',
    name: 'Perno Metálico M10',
    material: 'Fierro', tipo: 'Perno', diametro: 'M10',
    ubicacion: 'C-01-04', estante: 'C', nivel: '01', caja: '04',
    stock: 520, minStock: 200,
    shape: 'bolt', desc: 'Perno hexagonal galvanizado M10 × 40mm'
  },
  {
    id: 'AR-12', code: 'AR-12',
    name: 'Arandela Plana Ø12',
    material: 'Fierro', tipo: 'Arandela', diametro: 'Ø12mm',
    ubicacion: 'C-01-03', estante: 'C', nivel: '01', caja: '03',
    stock: 890, minStock: 300,
    shape: 'ring', desc: 'Arandela plana zincada Ø12mm, uso industrial'
  },
  {
    id: 'CA-15', code: 'CA-15',
    name: 'Casquillo Aluminio Ø15',
    material: 'Aluminio', tipo: 'Casquillo', diametro: 'Ø15mm',
    ubicacion: 'D-01-02', estante: 'D', nivel: '01', caja: '02',
    stock: 95, minStock: 25,
    shape: 'cylinder', desc: 'Casquillo mecanizado aluminio 6061, tolerancia h7'
  },
  {
    id: 'EZ-06', code: 'EZ-06',
    name: 'Engranaje Zamac #6',
    material: 'Zamac', tipo: 'Engranaje', diametro: 'Ø60mm',
    ubicacion: 'B-02-01', estante: 'B', nivel: '02', caja: '01',
    stock: 12, minStock: 20,
    shape: 'gear', desc: 'Engranaje recto inyección zamac, módulo 2, 30 dientes'
  },
];

const MOVIMIENTOS = [
  // ---- Mayo 2026 ----
  { pieza: 'BL-001', tipo: 'salida',  cantidad: 20,  responsable: 'Valentina Ruz',      fecha: '25/05/2026 10:23', observacion: 'Pedido cliente #1041' },
  { pieza: 'BJ-2030',tipo: 'entrada', cantidad: 50,  responsable: 'Anais Marschhausen', fecha: '24/05/2026 15:10', observacion: 'Reposición mensual' },
  { pieza: 'CT-001', tipo: 'salida',  cantidad: 30,  responsable: 'Sofía Cartes',        fecha: '24/05/2026 09:45', observacion: 'Orden producción #382' },
  { pieza: 'AO-001', tipo: 'entrada', cantidad: 100, responsable: 'Camila García',       fecha: '23/05/2026 11:30', observacion: 'Compra proveedor #22' },
  { pieza: 'EZ-06',  tipo: 'salida',  cantidad: 5,   responsable: 'Valentina Ruz',       fecha: '22/05/2026 14:20', observacion: 'Mantención maquinaria' },
  { pieza: 'PM-M10', tipo: 'entrada', cantidad: 200, responsable: 'Anais Marschhausen', fecha: '21/05/2026 09:00', observacion: 'Compra proveedor #23' },
  { pieza: 'AR-12',  tipo: 'salida',  cantidad: 80,  responsable: 'Sofía Cartes',        fecha: '20/05/2026 11:15', observacion: 'Pedido cliente #1039' },
  { pieza: 'CA-15',  tipo: 'entrada', cantidad: 40,  responsable: 'Camila García',       fecha: '19/05/2026 16:00', observacion: 'Reposición stock' },
  { pieza: 'BL-001', tipo: 'entrada', cantidad: 60,  responsable: 'Valentina Ruz',      fecha: '15/05/2026 09:30', observacion: 'Compra proveedor #21' },
  { pieza: 'AO-001', tipo: 'salida',  cantidad: 25,  responsable: 'Sofía Cartes',        fecha: '12/05/2026 14:00', observacion: 'Pedido cliente #1038' },
  { pieza: 'BJ-2030',tipo: 'salida',  cantidad: 15,  responsable: 'Anais Marschhausen', fecha: '10/05/2026 10:00', observacion: 'Orden producción #381' },
  { pieza: 'PM-M10', tipo: 'salida',  cantidad: 100, responsable: 'Valentina Ruz',      fecha: '08/05/2026 08:45', observacion: 'Pedido cliente #1037' },
  { pieza: 'AR-12',  tipo: 'entrada', cantidad: 300, responsable: 'Camila García',       fecha: '05/05/2026 13:20', observacion: 'Compra proveedor #20' },
  { pieza: 'EZ-06',  tipo: 'entrada', cantidad: 20,  responsable: 'Sofía Cartes',        fecha: '03/05/2026 11:00', observacion: 'Compra proveedor #19' },

  // ---- Abril 2026 ----
  { pieza: 'BL-001', tipo: 'salida',  cantidad: 35,  responsable: 'Valentina Ruz',      fecha: '29/04/2026 10:00', observacion: 'Pedido cliente #1036' },
  { pieza: 'CT-001', tipo: 'entrada', cantidad: 50,  responsable: 'Anais Marschhausen', fecha: '28/04/2026 14:30', observacion: 'Reposición mensual' },
  { pieza: 'AO-001', tipo: 'salida',  cantidad: 40,  responsable: 'Sofía Cartes',        fecha: '25/04/2026 09:15', observacion: 'Pedido cliente #1035' },
  { pieza: 'PM-M10', tipo: 'entrada', cantidad: 150, responsable: 'Camila García',       fecha: '22/04/2026 11:00', observacion: 'Compra proveedor #18' },
  { pieza: 'BJ-2030',tipo: 'salida',  cantidad: 20,  responsable: 'Valentina Ruz',      fecha: '20/04/2026 16:45', observacion: 'Orden producción #380' },
  { pieza: 'AR-12',  tipo: 'salida',  cantidad: 120, responsable: 'Anais Marschhausen', fecha: '18/04/2026 08:30', observacion: 'Pedido cliente #1034' },
  { pieza: 'CA-15',  tipo: 'salida',  cantidad: 15,  responsable: 'Sofía Cartes',        fecha: '15/04/2026 12:00', observacion: 'Mantención maquinaria' },
  { pieza: 'EZ-06',  tipo: 'salida',  cantidad: 8,   responsable: 'Valentina Ruz',      fecha: '12/04/2026 10:30', observacion: 'Pedido cliente #1033' },
  { pieza: 'BL-001', tipo: 'entrada', cantidad: 80,  responsable: 'Camila García',       fecha: '10/04/2026 09:00', observacion: 'Compra proveedor #17' },
  { pieza: 'AR-12',  tipo: 'entrada', cantidad: 200, responsable: 'Anais Marschhausen', fecha: '07/04/2026 14:15', observacion: 'Compra proveedor #16' },
  { pieza: 'CA-15',  tipo: 'entrada', cantidad: 30,  responsable: 'Valentina Ruz',      fecha: '04/04/2026 11:30', observacion: 'Reposición stock' },
  { pieza: 'CT-001', tipo: 'salida',  cantidad: 25,  responsable: 'Sofía Cartes',        fecha: '02/04/2026 08:00', observacion: 'Pedido cliente #1032' },

  // ---- Marzo 2026 ----
  { pieza: 'BL-001', tipo: 'salida',  cantidad: 50,  responsable: 'Valentina Ruz',      fecha: '28/03/2026 10:15', observacion: 'Pedido cliente #1031' },
  { pieza: 'PM-M10', tipo: 'entrada', cantidad: 180, responsable: 'Camila García',       fecha: '25/03/2026 13:00', observacion: 'Compra proveedor #15' },
  { pieza: 'AO-001', tipo: 'entrada', cantidad: 90,  responsable: 'Anais Marschhausen', fecha: '22/03/2026 09:45', observacion: 'Compra proveedor #14' },
  { pieza: 'BJ-2030',tipo: 'salida',  cantidad: 30,  responsable: 'Sofía Cartes',        fecha: '20/03/2026 14:30', observacion: 'Orden producción #379' },
  { pieza: 'AR-12',  tipo: 'salida',  cantidad: 150, responsable: 'Valentina Ruz',      fecha: '18/03/2026 11:00', observacion: 'Pedido cliente #1030' },
  { pieza: 'EZ-06',  tipo: 'entrada', cantidad: 15,  responsable: 'Camila García',       fecha: '15/03/2026 10:00', observacion: 'Reposición stock' },
  { pieza: 'CT-001', tipo: 'entrada', cantidad: 40,  responsable: 'Anais Marschhausen', fecha: '12/03/2026 08:30', observacion: 'Compra proveedor #13' },
  { pieza: 'CA-15',  tipo: 'salida',  cantidad: 20,  responsable: 'Sofía Cartes',        fecha: '10/03/2026 15:00', observacion: 'Pedido cliente #1029' },
  { pieza: 'BL-001', tipo: 'entrada', cantidad: 100, responsable: 'Valentina Ruz',      fecha: '07/03/2026 09:00', observacion: 'Compra proveedor #12' },
  { pieza: 'PM-M10', tipo: 'salida',  cantidad: 90,  responsable: 'Camila García',       fecha: '04/03/2026 14:00', observacion: 'Pedido cliente #1028' },
  { pieza: 'AO-001', tipo: 'salida',  cantidad: 35,  responsable: 'Anais Marschhausen', fecha: '02/03/2026 10:30', observacion: 'Orden producción #378' },

  // ---- Febrero 2026 ----
  { pieza: 'AR-12',  tipo: 'entrada', cantidad: 250, responsable: 'Camila García',       fecha: '26/02/2026 09:00', observacion: 'Compra proveedor #11' },
  { pieza: 'BL-001', tipo: 'salida',  cantidad: 45,  responsable: 'Valentina Ruz',      fecha: '24/02/2026 11:30', observacion: 'Pedido cliente #1027' },
  { pieza: 'BJ-2030',tipo: 'entrada', cantidad: 60,  responsable: 'Sofía Cartes',        fecha: '21/02/2026 14:00', observacion: 'Reposición mensual' },
  { pieza: 'CT-001', tipo: 'salida',  cantidad: 20,  responsable: 'Anais Marschhausen', fecha: '19/02/2026 09:45', observacion: 'Pedido cliente #1026' },
  { pieza: 'PM-M10', tipo: 'salida',  cantidad: 120, responsable: 'Valentina Ruz',      fecha: '17/02/2026 10:00', observacion: 'Pedido cliente #1025' },
  { pieza: 'EZ-06',  tipo: 'salida',  cantidad: 6,   responsable: 'Camila García',       fecha: '14/02/2026 15:30', observacion: 'Mantención maquinaria' },
  { pieza: 'AO-001', tipo: 'entrada', cantidad: 80,  responsable: 'Sofía Cartes',        fecha: '11/02/2026 08:30', observacion: 'Compra proveedor #10' },
  { pieza: 'CA-15',  tipo: 'entrada', cantidad: 35,  responsable: 'Anais Marschhausen', fecha: '07/02/2026 13:00', observacion: 'Reposición stock' },
  { pieza: 'AR-12',  tipo: 'salida',  cantidad: 100, responsable: 'Valentina Ruz',      fecha: '04/02/2026 11:00', observacion: 'Pedido cliente #1024' },
  { pieza: 'BL-001', tipo: 'entrada', cantidad: 70,  responsable: 'Camila García',       fecha: '02/02/2026 09:30', observacion: 'Compra proveedor #09' },
];
