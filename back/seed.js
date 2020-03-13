const { Producto } = require("./models/index")
const Categoria = require("./models/Categorias")
//-----------------------------CATEGORIAS-------------------------
const categoria1 = Categoria.create({

    nombre: "Espumantes"
})
const categoria2 = Categoria.create({

    nombre: "Dulce"
})
const categoria3 = Categoria.create({

    nombre: "Amargo"
})
const categoria4 = Categoria.create({

    nombre: "Carton"
})


//https://http2.mlstatic.com/espumante-eclat-reserva-extra-brut-bodega-caelum-y-la-maison-D_NQ_NP_640396-MLA31922573604_082019-O.webp
//---------------------------------------------TINTOS--------------------------------------------------
// MALBEC
const producto3 = Producto.create({
    nombre: " Eclat Reserva",
    descripcion: "Vino espumante de la casa",
    precio: 1050,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Atemporal_Extra_Brut_Rose_wrnoxf.jpg",
    tipo: "Tinto",
    cepa: "Extra Brut Bodega",
    stock: 5,
    bodega: "Caelum ",
    provincia: "Buenos Aires",
    alcohol: 5

})
const producto1 = Producto.create({
    nombre: "Termidor",
    descripcion: "Buen vino para acompañar en cenas",
    precio: 10,
    imagen: "https://walmartar.vteximg.com.br/arquivos/ids/835937-1000-1000/Snacks-Queso-Doritos-305gr-636.jpg?v=636687441232900000",
    tipo: "Tinto",
    cepa: "Popular",
    stock: 100,
    bodega: "De barrio",
    provincia: "Buenos Aires",
    alcohol: 80.1

})

Promise.all([producto1, categoria1, producto3, categoria2, categoria3, categoria4]).then(([producto1, categoria1, producto3, categoria2, categoria3, categoria4]) => {
    producto1.addCategoria([categoria4, categoria3])
    producto3.addCategoria([categoria1, categoria2])


})
Producto.create({
    nombre: "Catena Zapata Malbec Argentino 2017. 750 ml",
    descripcion: "No importa cuál sea la cosecha, en realidad este vino posee más de 100 años de antigüedad. Representa el trayecto emprendido por una familia para producir un Malbec argentino que pudiese competir con los mejores vinos del mundo. Malbec Argentino es un corte de uvas provenientes de dos viñedos históricos de Malbec de la familia Catena: el Viñedo “Adrianna” y el Viñedo “Nicasia”.",
    precio: 5203,
    imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-1000-1000/catena_zapata_nuevo.jpg?v=637158997628700000",
    tipo: "Tinto",
    cepa: "Malbec",
    stock: 5,
    bodega: "Catena Zapata",
    provincia: "Mendoza",
    alcohol: 14.5
})
Producto.create({
    nombre: "Love Malbec. 750 ml",
    descripcion: "Love Malbec de Fincas Las Moras es un 100% malbec. Presenta un color rojo intenso, tiene un paso por barrica de 9 meses le da aromas muy marcados a frutos rojos maduros con notas a vainilla y chocolate. En boca logra una gran equilibrio entre la fruta y la madera.",
    precio: 393,
    imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/172786-1000-1000/120075.jpg?v=636269061355170000",
    tipo: "Tinto",
    cepa: "Malbec",
    stock: 5,
    bodega: "Finca Las Moras",
    provincia: "Mendoza",
    alcohol: 14
})

Producto.create({
    nombre: "Alta Vista Single Vineyard Alizarine. 750 ml",
    descripcion: "Elaborado 100% con Malbec del viñedo que lleva su nombre, desde 2001 es la auténtica expresión del terroir de Las Compuertas. Con una crianza de 12 meses en barricas nuevas, es un tinto profundo, con aromática floral, buena acidez y taninos redondos. Alizarine es una palabra francesa que define un rojo sostenido.",
    precio: 1581,
    imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/171421-1000-1000/Alta-Vista-.-Single-Vineyard-Alizarin-2012-.-750-Ml-111589.jpg?v=636148997386070000",
    tipo: "Tinto",
    cepa: "Malbec",
    stock: 5,
    bodega: "Alta Vista",
    provincia: "Mendoza",
    alcohol: 14
})

Producto.create({
    nombre: "Don Malbec. 750 ml",
    descripcion: "Apto para guarda de unos 8 años. Decantar por espacio de una hora antes de beberlo. La temperatura adecuada para su consumo es entre 16º y 18º C. Maridar con un Lomo Welintong puré de papas y zanahorias glaseadas. ",
    precio: 3107,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Don_Miguel_Escorihuela_Gasc%C3%B3n_Malbec_mr8lbq.jpg",
    tipo: "Tinto",
    cepa: "Malbec",
    stock: 5,
    bodega: "Escorihuela Gascon",
    provincia: "Salta",
    alcohol: 14.5
})

Producto.create({
    nombre: "Hey Malbec. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 4 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Bife a la pimienta con aros de cebollas.",
    precio: 509,
    imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/heymalbec.jpg",
    tipo: "Tinto",
    cepa: "Malbec",
    stock: 5,
    bodega: "Matías Riccitelli Wines",
    provincia: "Mendoza",
    alcohol: 14
})

// Cabernet Sauvignon   
Producto.create({
    nombre: "Trumpeter Cabernet Sauvignon. 750 ml",
    descripcion: "Apto para guarda de unos 5 años. La temperatura adecuada para su consumo es entre 16º y 18º C. Decantar por espacio de una hora antes de beberlo. Este vino es ideal para combinarlo con carnes vacunas grilladas y horneadas, guisados, carne de caza.",
    precio: 408,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Cabernet_Sauvignon_ns62ut.jpg",
    tipo: "Tinto",
    cepa: "Cabernet Sauvignon",
    stock: 5,
    bodega: "La Rural",
    provincia: "Mendoza",
    alcohol: 13
})

Producto.create({
    nombre: "Luigi Bosca Cabernet Sauvignon. 750 ml",
    descripcion: " Apto para guarda de unos 10 años. Decantar por espacio de una hora. La temperatura adecuada para disfrutar este vino es entre 18º y 20º C. Ideal para acompañar racks de Cordero asados con risotto de hongos.",
    precio: 583,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Luigi_Bosca_Cabernet_Sauvignon_qzcfcf.jpg",
    tipo: "Tinto",
    cepa: "Cabernet Sauvignon",
    stock: 5,
    bodega: "Luigi Bosca ",
    provincia: "Mendoza",
    alcohol: 14
})

Producto.create({
    nombre: "Salentein Reserve Cabernet Sauvignon. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 16º y 18º C. Potencial de guarda unos 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar con Mollejas glaceadas al Oporto.",
    precio: 407,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Salentein_Reserve_Cabernet_Sauvignon_cmnmwp.jpg",
    tipo: "Tinto",
    cepa: "Cabernet Sauvignon",
    stock: 5,
    bodega: "Salentein",
    provincia: "Mendoza,",
    alcohol: 14.5
})

Producto.create({
    nombre: "Altas Cumbres Cabernet Sauvignon. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Entrecot a las brasas con mil hojas de batatas.",
    precio: 328,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Altas_Cumbres_Cabernet_Sauvignon_enloja.jpg",
    tipo: "Tinto",
    cepa: "Cabernet Sauvignon",
    stock: 5,
    bodega: "Lagarde",
    provincia: "Mendoza",
    alcohol: 14.1
})

Producto.create({
    nombre: "Reto Cabernet Sauvignon. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Pulpo a la plancha con vegetales blanqueados. ",
    precio: 283,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Reto_Cabernet_Sauvignon_dpzhm1.jpg",
    tipo: "Tinto",
    cepa: "Cabernet Sauvignon",
    stock: 5,
    bodega: "Vicentin Family Wines",
    provincia: "Mendoza",
    alcohol: 13.90
})


// Merlot
Producto.create({
    nombre: "Salentein Reserve Merlot. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 16º y 18º C.Potencial de guarda unos 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar un Pulpo caramelizado a la plancha y polenta frita con salsa de tomates. ",
    precio: 407,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Reto_Cabernet_Sauvignon_dpzhm1.jpg",
    tipo: "Tinto",
    cepa: "Merlot",
    stock: 5,
    bodega: "Salentein",
    provincia: "Mendoza,",
    alcohol: 14
})

Producto.create({
    nombre: "Primogénito Merlot. 750 ml",
    descripcion: "Temperatura de servicio para este vino es de 18º C, Potencial de guarda 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. ideal para acompañar un Salmón con costra de hongos y penca de acelga con crema. ",
    precio: 578,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Primog%C3%A9nito_Merlot_z3augg.jpg",
    tipo: "Tinto",
    cepa: "Merlot",
    stock: 5,
    bodega: "Patritti",
    provincia: "Neuquén",
    alcohol: 14.2
})

Producto.create({
    nombre: "Angelica Zapata Merlot. 750 ml",
    descripcion: "Apto para guarda de unos 15 años, se aconseja decantar el vino por una hora antes ser degustado. La temperatura adecuada para su consumo es entre 16º y 18º C. Maridar con todo tipo de carnes rojas en distintas preparaciones, bien condimentadas. tipo goulash.  ",
    precio: 1129,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Angelica_Zapata_Merlot_bsaotr.jpg",
    tipo: "Tinto",
    cepa: "Merlot",
    stock: 5,
    bodega: "Catena Zapata",
    provincia: "Mendoza",
    alcohol: 14
})

Producto.create({
    nombre: "Fabre Montmayou Grand Vin. 750 ml",
    descripcion: "",
    precio: 1959,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Fabre_Montmayou_Grand_Vin_tb6uaf.jpg",
    tipo: "Tinto",
    cepa: "Merlot",
    stock: 5,
    bodega: "Fabre Montmayou",
    provincia: "Mendoza",
    alcohol: 14.9
})

Producto.create({
    nombre: "Trumpeter Merlot. 750 ml",
    descripcion: "Apto para guarda de unos 5 años. Decantar por espacio de una hora antes de beberlo. La temperatura adecuada para su consumo es entre 16º y 18º C. Este vino es ideal para combinarlo con carnes rojas grilladas y salseadas, risotto de hongos, carbonada, platos criollos.",
    precio: 408,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Merlot_gas74f.jpg",
    tipo: "Tinto",
    cepa: "Merlot",
    stock: 5,
    bodega: "Rutini Wines",
    provincia: "Mendoza",
    alcohol: 13.5
})

// Syrah
Producto.create({
    nombre: "Opalo Syrah. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 4 años. Decantar por esapcio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Muy versátil. Buen compañero de carnes blancas condimentadas y carnes rojas. Arroces, guisos y pastas. Ideal con chocolates, postres lácteos y frutas frescas.",
    precio: 295,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Opalo_Syrah_hqorvw.jpg",
    tipo: "Tinto",
    cepa: "Syrah",
    stock: 5,
    bodega: "Mauricio Lorca",
    provincia: "Mendoza",
    alcohol: 14.7
})

Producto.create({
    nombre: "Escorihuela Gascón Syrah. 750 ml",
    descripcion: "Apto para guarda de unos 5 años. Decantar por espacio de una hora antes de beberlo. La temperatura adecuada para su consumo es entre 16º y 18º C. Maridar con perdiz asada al tomillo o una codorniz asada con papas bravas.",
    precio: 504,
    imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/escorihuela_syrah.jpg",
    tipo: "Tinto",
    cepa: "Syrah",
    stock: 5,
    bodega: "Escorihuela Gascon",
    provincia: "Mendoza",
    alcohol: 13
})

Producto.create({
    nombre: "Trumpeter Syrah. 750 ml",
    descripcion: " Apto para guarda de unos 5 años. Decantar por espacio de una hora antes de beberlo. La temperatura adecuada para su consumo es entre 16º y 18º C. Este vino es ideal para combinarlo con platos del Sudeste asiático, curry de pollo y hongos, pato, cocina china, cordero.",
    precio: 408,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Syrah_ndxubo.jpg",
    tipo: "Tinto",
    cepa: "Syrah",
    stock: 5,
    bodega: "Rutini Wines",
    provincia: "Mendoza",
    alcohol: 13
})

Producto.create({
    nombre: "Desierto Pampa Syrah. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 16º y 18º C, Potencial de guarda 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Perdiz Poele con salsa de uvas y guarnición de hongos salteados.",
    precio: 709,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Desierto_Pampa_Syrah_enzfym.jpg",
    tipo: "Tinto",
    cepa: "Syrah",
    stock: 5,
    bodega: "Desierto",
    provincia: "La Pampa",
    alcohol: 15.1
})

Producto.create({
    nombre: "San Felipe Roble Syrah. 750 ml",
    descripcion: "Apto para guarda de unos 4 años. Decantar por espacio de una hora antes de beberlo. La temperatura adecuada para su consumo es entre 16º y 18º C. Este vino es ideal para combinarlo con caviar de berenjenas, platos de Medio Oriente, estofado provenzal, cordero asado al romero, pollo al estragón, fajitas.",
    precio: 219,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/San_Felipe_Roble_Syrah_gwlz0s.jpg",
    tipo: "Tinto",
    cepa: "Syrah",
    stock: 5,
    bodega: "La Rural",
    provincia: "Mendoza",
    alcohol: 13.3
})

// tempranillo
Producto.create({
    nombre: "Trumpeter Reserve Tempranillo. 750 ml",
    descripcion: "  Apto para guarda de unos 4 años. Decantar por espacio de una hora antes de consumirlo. La temperatura adecuada para disfrutarlo es entre 16º y 18º C. Maridar con un tapeo, empanadas de pollo, puchero, chipá-guazú, pescado de río, pulpo a la gallega.",
    precio: 499,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Reserve_Tempranillo_svfxcb.jpg",
    tipo: "Tinto",
    cepa: "Tempranillo",
    stock: 5,
    bodega: "La Rural",
    provincia: "Mendoza",
    alcohol: 13.6
})

Producto.create({
    nombre: "Benjamín Nieto Tempranillo. 750 ml",
    descripcion: " Apto para guarda de unos 2 años. Decantar por espacio de una hora. La temperatura adecuada para disfrutar este vino es de 18º C. Ideal con carnes rojas asadas, embutidos y pastas rellenas como unos agnolottis caprese",
    precio: 152,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Benjam%C3%ADn_Nieto_Tempranillo_cdgis5.jpg",
    tipo: "Tinto",
    cepa: "Tempranillo",
    stock: 5,
    bodega: "Nieto Senetiner",
    provincia: "Mendoza",
    alcohol: 14
})

Producto.create({
    nombre: "Séptima Tempranillo. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 3 años. Dejar respirar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unos Riñonsitos a la parrilla a la provenzal. ",
    precio: 275,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/S%C3%A9ptima_Tempranillo_jskemd.jpg",
    tipo: "Tinto",
    cepa: "Tempranillo",
    stock: 5,
    bodega: "Septima",
    provincia: "Mendoza",
    alcohol: 14
})

Producto.create({
    nombre: "Portillo Tempranillo",
    descripcion: "Temperatura de servicio de este vino es entre 15º y 18º C. Potencial de guarda unos 2 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar un Bondiola de cerdo con salsa de soja y jengibre.",
    precio: 175,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Portillo_Tempranillo_nx8cju.jpg",
    tipo: "Tinto",
    cepa: "Tempranillo",
    stock: 5,
    bodega: "Salentein",
    provincia: "Mendoza",
    alcohol: 14
})

Producto.create({
    nombre: "Zuccardi Q Tempranillo",
    descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 8 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Colita de cuadril al horno con un salteado de hongos.",
    precio: 734,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Zuccardi_Q_Tempranillo_jxuakv.jpg",
    tipo: "Tinto",
    cepa: "Tempranillo",
    stock: 5,
    bodega: "Familia Zuccardi",
    provincia: "Mendoza",
    alcohol: 14.1
})

// PINOT NOIR //
Producto.create({
    nombre: "Ocio Pinot Noir. 750 ml",
    descripcion: "Te invitamos a disfrutar de los aires frescos, aromas florales y frutados, colores intensos y sensaciones únicas de la Patagonia. Una experiencia en donde el ocio, se convierta en ese momento de encuentro con tu yo interno",
    precio: 650,
    imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/183024-1000-1000/237007.jpg?v=637081484047130000",
    tipo: "Tinto",
    cepa: "Pinot Noir",
    stock: 5,
    bodega: "Tonel Privado",
    provincia: "Neuquén",
    alcohol: 12.3
})
Producto.create({
    nombre: "Ocioso Pinot Noir. 750 ml",
    descripcion: "Te invitamos a disfrutar de este armonioso y sabroso vino, de gran cuerpo proveniente de la Patagonia Argentina.",
    precio: 650,
    imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/182885-1000-1000/237013.jpg?v=637050234105100000",
    tipo: "Tinto",
    cepa: "Pinot Noir",
    stock: 5,
    bodega: "Tonel Privado",
    provincia: "Rio Negro",
    alcohol: 11.1
})
Producto.create({
    nombre: "Fin Pinot Noir. 750 ml",
    descripcion: "Apto para guarda de unos 10 años. Decantar por espacio de una hora antes de beberlo. La temperatura adecuada para su consumo es de 15º C. Este vino es ideal para maridar con una paella, o una casuela de mariscos.",
    precio: 857,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Fin_Pinot_Noir_abcmlb.jpg",
    tipo: "Tinto",
    cepa: "Pinot Noir",
    stock: 5,
    bodega: "Del Fin del Mundo",
    provincia: "Neuquén",
    alcohol: 14.8
})
Producto.create({
    nombre: "Luca Pinot Noir. 750 ml",
    descripcion: "Apto para guarda de unos 5 años, La temperatura adecuada para su consumo es entre 16º y 18º C. Decantar por espacio de una hora ante del servicio. Combina muy bien con pescados grasos grillados, como el atún. Además, con carnes blancas logra expresarse deliciosamente bien.",
    precio: 1129,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Luca_Pinot_Noir_wnrpp5.jpg",
    tipo: "Tinto",
    cepa: "Pinot Noir",
    stock: 5,
    bodega: "Luca",
    provincia: "Mendoza",
    alcohol: 13.5
})
Producto.create({
    nombre: "Barda Pinot Noir. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 16º y 18º C. Potencial de guarda unos 5 años. Dejar respirar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones.Ideal para acompañar platos de carnes blancas con cremas, perdices y tablas de quesos blandos.",
    precio: 2052,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Barda_Pinot_Noir_vsgidl.jpg",
    tipo: "Tinto",
    cepa: "Pinot Noir",
    stock: 5,
    bodega: "Chacra Patagonica",
    provincia: "Rio Negro",
    alcohol: 14
})

//----------------------------------------BLANCOS--------------------------------------------------
// CHARDONNAY //
Producto.create({
    nombre: "Luca Chardonnay. 750 ml",
    descripcion: "Apto para guarda de unos 5 años, La temperatura adecuada para su consumo es entre 10º y 12º C. Decantar por espacio de una hora antes de su servicio. Un maridaje especial seria chupe de camarones. Este plato arequipeño es un embajador de la comida peruana y lleva ingredientes como la leche, queso fresco y habas verdes que combinan perfecto con este vino.",
    precio: 1310,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Luca_Chardonnay_dvowii.jpg",
    tipo: "Blanco",
    cepa: "Chardonnay",
    stock: 5,
    bodega: "Luca",
    provincia: "Mendoza",
    alcohol: 14
})
Producto.create({
    nombre: "Reto Chardonnay. 750 ml",
    descripcion: "Amarillo pajico con ligeras tonalidades doradas y cotas verdosas, brillante limpido y homogenio. Buen intensidad aromatica recuerdan frutales, de los que se destacan manzanda verde, limon, pomelo y especies varias, muy fresco. Muy condesciente con los aromas que se presentan en la copa, se descaca una notable acidez muy bien lograda y equilibrada, no se presentan cotas amargas ni durezas. Muy buena persistencia, adorna la boca con descriptores citricos, pomelo, minerales en un excelente estado de equilibrio.",
    precio: 283,
    imagen: "https://cepadevinos.com/wp-content/uploads/2019/01/reto-chardonnay.jpg",
    tipo: "Blanco",
    cepa: "Chardonnay",
    stock: 5,
    bodega: "Vicentin Family Wines",
    provincia: "Mendoza",
    alcohol: 12.5
})
Producto.create({
    nombre: "Zolo Chardonnay. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 1 año. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Arroz con mejillones.",
    precio: 349,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Zolo_Chardonnay_cdnld5.jpg",
    tipo: "Blanco",
    cepa: "Chardonnay",
    stock: 5,
    bodega: "Vicentin Family Wines",
    provincia: "Mendoza",
    alcohol: 13.8
})
Producto.create({
    nombre: "Phebus Chardonnay. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 10º y 12º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unas Tapas de arrolladitos de hojaldre de calabaza y queso de cabra.",
    precio: 275,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Phebus_Chardonnay_xozmw0.jpg",
    tipo: "Blanco",
    cepa: "Chardonnay",
    stock: 5,
    bodega: "Fabre Montmayou",
    provincia: "Mendoza",
    alcohol: 14.5
})
Producto.create({
    nombre: "Animal Chardonnay. 750 ml",
    descripcion: "Apto para guarda de unos 3 años, La temperatura adecuada para su consumo es entre 10º y 12º C. Ideal para carnes blancas como el pavo, mariscos como la cigala y pescados como el pacu.",
    precio: 659,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Animal_Chardonny_illld0.jpg",
    tipo: "Blanco",
    cepa: "Chardonnay",
    stock: 5,
    bodega: "Ernesto Catena Vineyards",
    provincia: "Mendoza",
    alcohol: 13
})
// SAUVIGNON BLANC //
Producto.create({
    nombre: "RD Sauvignon Blanc. 750 ml",
    descripcion: "Apto para guarda de unos 2 años. La temperatura adecuada para su consumo es entre 8º y 10º C. Para estivarlos realizarlo en un lugar oscuro, fresco, sin vibraciones y acostado. Maridar este vino con carnes o pastas.",
    precio: 826,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/RD_Sauvignon_Blanc_dlnin1.jpg",
    tipo: "Blanco",
    cepa: "Sauvignon Blanc",
    stock: 5,
    bodega: "Tacuil",
    provincia: "Salta",
    alcohol: 13.5
})
Producto.create({
    nombre: "Serbal Sauvignon Blanc. 750 ml",
    descripcion: "La temperatura adecuada para su degustacion es de 11º C. Es un vino apto para guarda de 3 años. Maridaje, frutos de mar, fondue de queso, queso de cabra, ensaladas.",
    precio: 354,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Serbal_Sauvignon_Blanc_h6sp0a.jpg",
    tipo: "Blanco",
    cepa: "Sauvignon Blanc",
    stock: 5,
    bodega: "Atamisque",
    provincia: "Mendoza",
    alcohol: 13.2
})
Producto.create({
    nombre: "Killka Sauvignon Blanc. 750 ml",
    descripcion: "La temperatura adecuada para su degustacion es de 11º C. Es un vino apto para guarda de 3 años. Maridaje, frutos de mar, fondue de queso, queso de cabra, ensaladas.",
    precio: 241,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/02/Killka-Sauvignon-Blanc.jpg",
    tipo: "Blanco",
    cepa: "Sauvignon Blanc",
    stock: 5,
    bodega: "Salentein",
    provincia: "Mendoza",
    alcohol: 14
})
Producto.create({
    nombre: "Rutini Sauvignon Blanc. 750 ml",
    descripcion: "Apto para guarda de unos 4 años. La temperatura adecuada para disfrutar este vino es entre 10º y 12º C. Este vino es ideal para combinarlo con carpaccio, tartas de verdura y hortalizas, frutos del mar, pescados, alcauciles, queso de cabra.",
    precio: 614,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Rutini_Sauvignon_Blanc_v0ejxc.jpg",
    tipo: "Blanco",
    cepa: "Sauvignon Blanc",
    stock: 5,
    bodega: "Rutini Wines",
    provincia: "Mendoza",
    alcohol: 13.4
})
Producto.create({
    nombre: "Lagarde Sauvignon Blanc. 750 ml",
    descripcion: "Temperatura de servicio para este vino es de 8º  C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unas Rica Gambas a la cerveza.",
    precio: 650,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Lagarde_Sauvignon_Blanc_iu2mbi.jpg",
    tipo: "Blanco",
    cepa: "Sauvignon Blanc",
    stock: 5,
    bodega: "Lagarde",
    provincia: "Mendoza",
    alcohol: 12
})
// TARDIO //
Producto.create({
    nombre: "Séptima Tardío. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 10º y 12º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un hojaldre de manzana con praline de nueces.",
    precio: 275,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/S%C3%A9ptima_Tard%C3%ADo_aqjod8.jpg",
    tipo: "Blanco",
    cepa: "Tardio",
    stock: 5,
    bodega: "Septima",
    provincia: "Mendoza",
    alcohol: 15.3
})
Producto.create({
    nombre: "Finca Sophenia Tardío. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unos Farfalle con pesto y verduras campestres.",
    precio: 720,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Finca_Sophenia_Tard%C3%ADo_b7la4d.jpg",
    tipo: "Blanco",
    cepa: "Tardio",
    stock: 5,
    bodega: "Finca Sophenia",
    provincia: "Mendoza",
    alcohol: 12
})
Producto.create({
    nombre: "Cafayate Tardío. 750 ml",
    descripcion: "Temperatura de servicio para este espumante es entre 6º y 8º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Lemon Pie o Tarta de frutas.",
    precio: 480,
    imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/160105-1000-1000/CafayateTorrontes-113036.jpg?v=635501056031970000",
    tipo: "Blanco",
    cepa: "Tardio",
    stock: 5,
    bodega: "Bodegas Etchart",
    provincia: "Mendoza",
    alcohol: 12.1
})

//Semillon
Producto.create({
    nombre: "Nieto Senetiner Semillon DOC. 750 ml",
    descripcion: "Apto para guarda de unos 3 años. La temperatura adecuada para disfrutar este vino es entre 10º y 12º C. Ideal para acompañar cócteles de frutos de mar y otros mariscos. Quesos suaves y fondues de queso, pastas con salsas cremosas y a base de tomates. Carnes blancas, risottos, y platos sutiles a base de carne de conejo. ",
    precio: 480,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Nieto_Senetiner_Semillon_DOC_a1orfl.jpg",
    tipo: 'Blanco',
    cepa: "Semillón",
    stock: 5,
    bodega: "A Nieto Senetiner",
    provincia: "Mendoza",
    alcohol: 14.1
})
Producto.create({
    nombre: "Tomero Reserva Semillon. 750 ml",
    descripcion: "Protectiva evitando la pérdida de sus componentes aromáticos. Fermentación: Fermentado a 15º C con levaduras seleccionadas.",
    precio: 870,
    imagen: "https://cepadevinos.com/wp-content/uploads/2018/10/vistalba-tomero-reserva-semillon_iZ768566281XvZcXpZ1XfZ272770397-24667509153-2.jpgXsZ272770397xIM.jpg",
    tipo: 'Blanco',
    cepa: "Semillón",
    stock: 5,
    bodega: "Vistalba",
    provincia: "Mendoza",
    alcohol: 14
})
Producto.create({
    nombre: "Mendel Semillon. 750 ml",
    descripcion: "Fresco e intenso. Principalmente se destacan en la primera olfación aromas de hierbas frescas, frutas tropicales como el ananá y cítricos, también encontramos los descriptores típicos del semillon como flores blancas y miel. Luego aparecen algunas notas de caramelo y una vainilla muy suave proveniente de la fermentación en barricas nuevas. Es un vino muy fresco, mineral y elegante.",
    precio: 850,
    imagen: "https://cepadevinos.com/wp-content/uploads/2018/08/mendel-semillon.jpg",
    tipo: 'Blanco',
    cepa: "Semillón",
    stock: 5,
    bodega: "Mendel",
    provincia: "Mendoza",
    alcohol: 12
})
Producto.create({
    nombre: "Saint Felicien Semillon Doux. 750 ml",
    descripcion: "La temperatura adecuada para su degustacion es de 8º C. Es un vino apto para guarda de 3 años. Ideal para acompañando foie gras, quesos azules y postres.",
    precio: 999,
    imagen: "https://cepadevinos.com/wp-content/uploads/2018/01/saint-felicien-semillon-duox.jpg",
    tipo: 'Blanco',
    cepa: "Semillón",
    stock: 5,
    bodega: "Catena Zapata",
    provincia: "Mendoza",
    alcohol: 13.9
})
Producto.create({
    nombre: "Marcelo Pelleriti Signature Semillón. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 7 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Pez espada con vegetales grillados.",
    precio: 870,
    imagen: "https://cepadevinos.com/wp-content/uploads/2020/01/semilon-sg1-0caf6fe82d8650c0a515126758216306-640-0.jpg",
    tipo: 'Blanco',
    cepa: "Semillón",
    stock: 5,
    bodega: "Marcelo Pelleriti Wines",
    provincia: "Mendoza",
    alcohol: 14.5
})
//Torrontés
Producto.create({
    nombre: "Laborum Torrontés Oak Fermented. 750 ml",
    descripcion: "Apto para guarda de unos 3 años. La temperatura adecuada para disfrutar este vino es entre 10º y 12º C. Ideal para acompañar cócteles de frutos de mar y otros mariscos. Quesos suaves y fondues de queso, pastas con salsas cremosas y a base de tomates. Carnes blancas, risottos, y platos sutiles a base de carne de conejo.",
    precio: 750,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Laborum_Torront%C3%A9s_Oak_Fermented_sowhtb.jpg",
    tipo: 'Blanco',
    cepa: "Torrontés",
    stock: 5,
    bodega: "El Porvenir de Cafayate",
    provincia: "Salta",
    alcohol: 13.5
})
Producto.create({
    nombre: "Gauchezco Clasico Torrontes. 750 ml",
    descripcion: "Apto para guarda de 2 años. La temperatura adecuada para su consumo es entre 10º y 12º C. Mantener en lugar fresco y sin luz ni vibraciones. Ideal para acompañas, Ensaladas de diversas  combinación y  elaborada con diferentes productos.",
    precio: 370,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Gauchezco_Clasico_Torrontes_f2dfdr.jpg",
    tipo: 'Blanco',
    cepa: "Torrontés",
    stock: 5,
    bodega: "Gauchezco Vineyards",
    provincia: "Salta",
    alcohol: 14
})
Producto.create({
    nombre: "Lunta Torrontes. 750 ml",
    descripcion: "Método de cosecha: manual en cajas de 18 kg. Prensa neumática, evitando cualquier contacto con el oxígeno. Los sulfitos y enzimas añadidos para separar el jugo de las lías. La maceración se realiza en depósitos de acero inoxidable. Fermentación durante 20 días. Uso de levaduras autóctonas a una temperatura entre 15° C y 20° C. Sin fermentación malo láctica.",
    precio: 550,
    imagen: "https://cepadevinos.com/wp-content/uploads/2018/08/vino-lunta-torrontes-mendel-wines-6x750ml-D_NQ_NP_518801-MLA20417253405_092015-F.jpg",
    tipo: 'Blanco',
    cepa: "Torrontés",
    stock: 5,
    bodega: "Mendel",
    provincia: "Salta",
    alcohol: 14.5
})
Producto.create({
    nombre: "Altaland Torrontes. 750 ml",
    descripcion: "Apto para guarda de unos 3 años, La temperatura de consumo que se recomienda es cercano a los 10 grados. Ideal para combinar con la comida étnica, como el mexicano, el peruano y el marisco.",
    precio: 595,
    imagen: "https://cepadevinos.com/wp-content/uploads/2018/01/altaland-torrontes.jpg",
    tipo: 'Blanco',
    cepa: "Torrontés",
    stock: 5,
    bodega: " La Libertad",
    provincia: "Salta",
    alcohol: 14
})
Producto.create({
    nombre: "Pasarisa Torrontes. 750 ml",
    descripcion: "Torrontes que puede guardase 2 años sin problemas, conservar en un espacio fresco, sin luz y sin vibraciones, ideal para servir entre los 10 y 12 grados, Complementa muy bien con pescados no muy grasos.",
    precio: 570,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Pasarisa_Torrontes_qjfvjk.jpg",
    tipo: 'Blanco',
    cepa: "Torrontés",
    stock: 5,
    bodega: "Altaland Wines",
    provincia: "Salta",
    alcohol: 14
})
//Viognier
Producto.create({
    nombre: "Alma 4 Viognier. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Brochetes de cordero con ensalada de repollo colorado y choclo y papas.",
    precio: 725,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Alma_4_Viognier_hbpwhr.jpg",
    tipo: 'Blanco',
    cepa: "Viognier",
    stock: 5,
    bodega: "Familia Zuccardi",
    provincia: "Mendoza",
    alcohol: 12
})
Producto.create({
    nombre: "Trumpeter Reserve Viognier. 750 ml",
    descripcion: " Apto para guarda de unos 5 años. La temperatura adecuada para su consumo es entre 10º y 12º C. Este vino es ideal para acompañar  entradas con palta, pavita, crêpes de verdura, platos de cerdo, quesos semiduros grasos (tipo Parmesano), raclette.",
    precio: 599,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Reserve_Viognier_texo1y.jpg",
    tipo: 'Blanco',
    cepa: "Viognier",
    stock: 5,
    bodega: "La Rural",
    provincia: "Mendoza",
    alcohol: 13
})
Producto.create({
    nombre: "Las Perdices Viognier Late Harvest. 750 ml",
    descripcion: "Apto para guarda de unos 5 años. La temperatura adecuada para su consumo es entre 10º y 12º C. Este vino es ideal para acompañar  entradas con palta, pavita, crêpes de verdura, platos de cerdo, quesos semiduros grasos (tipo Parmesano), raclette.",
    precio: 660,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Las_Perdices_Viognier_Late_Harvest_rx394t.jpg",
    tipo: 'Blanco',
    cepa: "Viognier",
    stock: 5,
    bodega: "Las Perdices",
    provincia: "Mendoza",
    alcohol: 13
})
Producto.create({
    nombre: "Escorihuela Gascón Viognier. 750 ml",
    descripcion: "Apto para guarda de unos 5 años. La temperatura adecuada para su consumo es entre 10º y 12º C. Este vino es ideal para acompañar  entradas con palta, pavita, crêpes de verdura, platos de cerdo, quesos semiduros grasos (tipo Parmesano), raclette.",
    precio: 640,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Escorihuela_Gasc%C3%B3n_Viognier_nkljtp.jpg",
    tipo: 'Blanco',
    cepa: "Viognier",
    stock: 5,
    bodega: "Escorihuela Gascon",
    provincia: "Mendoza",
    alcohol: 13
})
Producto.create({
    nombre: "Diamandes Viognier. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 10º y 12º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unos Calamarettis fritos, o una galea peruana.",
    precio: 640,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Diamandes_Viognier_rdivci.jpg",
    tipo: 'Blanco',
    cepa: "Viognier",
    stock: 5,
    bodega: "Diamandes",
    provincia: "Mendoza",
    alcohol: 13
})
//--------------------------------------------- ROSADOS -------------------------------------------------------
//Malbec Rosé
Producto.create({
    nombre: "Trumpeter Reserve Rosé de Malbec. 750 ml",
    descripcion: "Apto para guarda de unos 3 años. La temperatura adecuada para su consumo es entre 6º y 8º C. Este vino es ideal para maridar con guacamole, fiambres (jamón cocido, salame de Milán) arroces marineros y paella valenciana, centolla, carpaccio clásico, sardinas y anchoas a la plancha, risotto de langostinos.",
    precio: 599,
    imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/Trumpeter-Reserve-Ros%C3%A9-de-Malbec.jpg",
    tipo: 'Rosado',
    cepa: "Malbec Rosé",
    stock: 5,
    bodega: "La Rural",
    provincia: "Mendoza",
    alcohol: 13.2
})
Producto.create({
    nombre: "Emilia Nieto Senetiner Malbec Rosé. 750 ml",
    descripcion: "Apto para guarda de unos 1 años. La temperatura adecuada para disfrutar este vino es de 10º C. Ideal para beber solo como vino de postre o también con frutos del mar, ensaladas de verano, tunas asadas, embutidos ibéricos y quesos livianos.",
    precio: 315,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Emilia_Nieto_Senetiner_Malbec_Ros%C3%A9_gto0qk.jpg",
    tipo: 'Rosado',
    cepa: "Malbec Rosé",
    stock: 5,
    bodega: "Nieto Senetiner",
    provincia: "Mendoza",
    alcohol: 13
})
Producto.create({
    nombre: "Cuvelier Los Andes Malbec Rosé. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 8º  y 12º C,  2 años en botella. Ideal para acompañar ensaladas, frutos de mar y pescado.",
    precio: 315,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Cuvelier_Los_Andes_Malbec_Ros%C3%A9_qjfj9p.jpg",
    tipo: 'Rosado',
    cepa: "Malbec Rosé",
    stock: 5,
    bodega: "Cuvelier Los Andes",
    provincia: "Mendoza",
    alcohol: 12.5
})
Producto.create({
    nombre: "Coquena Rosado de Malbec. 750 ml",
    descripcion: "Apto para guarda de unos 3 años. La temperatura adecuada para su consumo es entre 8º y 12º C. Este vino se puede maridar con con una buena ensalada de maricos.",
    precio: 495,
    imagen: "https://cepadevinos.com/wp-content/uploads/2018/04/Coquena-Rosado-de-Malbec.jpg",
    tipo: 'Rosado',
    cepa: "Malbec Rosé",
    stock: 5,
    bodega: "San Pedro de Yacochuya",
    provincia: "Salta",
    alcohol: 14.7
})
Producto.create({
    nombre: "Piattelli Reserva Rosé de Malbec. 750 ml",
    descripcion: "Apto para guarda de 2 años. La temperatura adecuada para su consumo es entre 10º y 12º C. Mantener en lugar fresco y sin luz ni vibraciones. Ideal para acompañas, Carnes blancas, pescados, quesos, ensaladas. ",
    precio: 599,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Piattelli_Premium_Ros%C3%A9_de_Malbec_xgrfvg.jpg",
    tipo: 'Rosado',
    cepa: "Malbec Rosé",
    stock: 5,
    bodega: "Piattelli Vineyards",
    provincia: "Mendoza",
    alcohol: 14
})

Producto.create({
    nombre: "L'Argentin de Malartic Rosado. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 7º y 9º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Tarta invertida de mozzarella, tomate y albahaca con ensalada de rucula.",
    precio: 415,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/L_Argentin_de_Malartic_Rosado_genqmm.jpg",
    tipo: "Rosado",
    cepa: "Rosado",
    stock: 5,
    bodega: "Diamantes",
    provincia: "Mendoza",
    alcohol: 12.2
})
Producto.create({
    nombre: "Alamos Malbec Maceracion Rose. 750 ml",
    descripcion: "Recomendamos decantar este vino al menos una hora antes de beberse. Temperatura de servicio entre 9° y 11° C. Este vino permite guarda de 2 años. Es ideal para acompañar diferentes tipos de carnes,como un Curry de Cordero o Moqueca de pescado.",
    precio: 399,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/alamosrose_ithizp.jpg",
    tipo: "Rosado",
    cepa: "Rosado",
    stock: 5,
    bodega: "Catena Zapata",
    provincia: "Mendoza",
    alcohol: 11.5
})
Producto.create({
    nombre: "Amalaya Rosé. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 8º y 10º C. Potencial de guarda unos 1 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un tapeo o tortas chocolatozas.",
    precio: 280,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Amalaya_Ros%C3%A9_xvdl2x.jpg",
    tipo: "Rosado",
    cepa: "Rosado",
    stock: 5,
    bodega: "Amalaya",
    provincia: "Salta",
    alcohol: 12.8
})
Producto.create({
    nombre: "Rincón Famoso Rosado. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Souffle de queso o una quiche de camarones.",
    precio: 190,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Rinc%C3%B3n_Famoso_Rosado_rdbjk6.jpg",
    tipo: "Rosado",
    cepa: "Rosado",
    stock: 5,
    bodega: "Lopez",
    provincia: "Mendoza",
    alcohol: 13.1
})
Producto.create({
    nombre: "Lagarde Blanc de Noir. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 5º y 7º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Ensalada de rucula, pomelo y parmesano.",
    precio: 450,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Lagarde_Blanc_de_Noir_ibavjw.jpg",
    tipo: "Rosado",
    cepa: "Rosado",
    stock: 5,
    bodega: "Lagarde",
    provincia: "Mendoza",
    alcohol: 13.2
})
// ROSE //
Producto.create({
    nombre: "Carmela Benegas Cabernet Franc Rose. 750 ml",
    descripcion: "La temperatura adecuada para su degustacion es entre 8º y 10º C. Es un vino apto para guarda de 2 años. Acompaña muy bien los pescados de carne fina asado como abadejo, trillas o truchas o las ensaladas con mariscos.",
    precio: 390,
    imagen: "https://cepadevinos.com/wp-content/uploads/2018/08/Carmela_Benegas_Cabernet_Franc_Rose_c10hyg.jpg",
    tipo: "Rosado",
    cepa: "Rose",
    stock: 5,
    bodega: "Banegas",
    provincia: "Mendoza",
    alcohol: 13.5
})
Producto.create({
    nombre: "Foster Pink. 750 ml",
    descripcion: "Temperatura de servicio de este vino es entre 10º y 12º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unos Langostinos con crema de papa y ajos dulces.",
    precio: 330,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Foster_Pink_ozyhws.jpg",
    tipo: "Rosado",
    cepa: "Rose",
    stock: 5,
    bodega: "Enrique Foster",
    provincia: "Mendoza",
    alcohol: 13.3
})
Producto.create({
    nombre: "Hey Rose. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Se recomienda servir como aperitivo o con toda clase de carnes blancas.",
    precio: 650,
    imagen: "https://cepadevinos.com/wp-content/uploads/2018/02/Hey-Rose.jpg",
    tipo: "Rosado",
    cepa: "Rose",
    stock: 5,
    bodega: "Matías Riccitelli Wines",
    provincia: "Mendoza",
    alcohol: 13
})
Producto.create({
    nombre: "Sylvestra Pinot Noir Rose. 750 ml",
    descripcion: "Apto para guarda de 2 año. La temperatura adecuada para su consumo es entre 7º y 9º C. Mantener en lugar fresco y sin luz ni vibraciones.  Ideal para acompañas copas de camarones o ensaladas de frutos de mar.",
    precio: 555,
    imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Sylvestra_Pinot_Noir_Rose_t8y3rq.jpg",
    tipo: "Rosado",
    cepa: "Rose",
    stock: 5,
    bodega: "Bressia",
    provincia: "Mendoza",
    alcohol: 12
})
Producto.create({
    nombre: "Desquiciado Rose. 750 ml",
    descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Souffle de queso o una quiche de camarones.",
    precio: 495,
    imagen: "https://cepadevinos.com/wp-content/uploads/2019/01/desquiciado-rose-1.jpeg",
    tipo: "Rosado",
    cepa: "Rose",
    stock: 5,
    bodega: "Desquiciado Wines",
    provincia: "Mendoza",
    alcohol: 12
})
