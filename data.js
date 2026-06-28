// Banco de preguntas — Anatomía (Tórax, Abdomen, Pelvis)
// Cada pregunta incluye: enunciado, opciones, índice correcto, y feedback explicativo

const QUESTION_BANK = {
  cardiovascular: {
    label: "Sistema Cardiovascular",
    short: "Corazón",
    icon: "heart",
    questions: [
      {
        q: "¿Hacia dónde se dirige el eje mayor del corazón y qué forma tiene?",
        options: [
          "De derecha a izquierda, de adelante atrás, ligeramente de arriba abajo; forma asimétrica",
          "De derecha a izquierda, de atrás hacia delante, ligeramente de arriba abajo; forma de pirámide triangular",
          "De izquierda a derecha, de atrás hacia delante, ligeramente de arriba abajo; forma ovoidal"
        ],
        correct: 1,
        feedback: "El corazón está orientado en sentido oblicuo: de derecha a izquierda, de atrás hacia delante y ligeramente de arriba hacia abajo. Su forma de pirámide triangular se debe a que posee una base (posterior), un vértice (anteroinferior, hacia la izquierda) y tres caras."
      },
      {
        q: "¿Cuál es la función principal de las válvulas cardíacas?",
        options: ["Proteger al corazón de infecciones", "Evitar el reflujo de la sangre", "Regular la frecuencia cardíaca", "Producir glóbulos rojos"],
        correct: 1,
        feedback: "Las válvulas (tricúspide, mitral, pulmonar y aórtica) actúan como compuertas unidireccionales: se abren para permitir el flujo anterógrado y se cierran para impedir el reflujo (regurgitación) cuando la cámara siguiente se contrae."
      },
      {
        q: "Durante la contracción ventricular izquierda (sístole), ¿cuál válvula se abre y cuál se cierra?",
        options: [
          "Se abre la mitral y se cierra la aórtica",
          "Se abre la aórtica y se cierra la mitral",
          "Ambas se abren simultáneamente",
          "Ambas permanecen cerradas"
        ],
        correct: 1,
        feedback: "En sístole ventricular, la presión intraventricular supera la presión auricular y la aórtica: esto cierra la válvula mitral (evita reflujo hacia la aurícula) y abre la válvula aórtica (permite la eyección hacia la aorta)."
      },
      {
        q: "Indique el camino que recorre la sangre comenzando y regresando a la aurícula derecha.",
        options: [
          "AD → Mitral → VI → Aórtica → Aorta → Tejidos → VCI → AD",
          "AD → Tricúspide → VD → Pulmonar → A. pulmonar → Pulmón → V. pulmonar → AI → Mitral → VI → Aórtica → Aorta → Tejidos → Vena cava → AD",
          "AD → VD → AI → VI → Aorta → AD",
          "AD → Pulmonar → VD → Tricúspide → Pulmón → AD"
        ],
        correct: 1,
        feedback: "Este es el circuito completo: la sangre venosa entra a la AD, pasa por la tricúspide al VD, sale por la pulmonar hacia el pulmón (circulación menor) para oxigenarse, regresa por las venas pulmonares a la AI, cruza la mitral al VI, y es eyectada por la aórtica hacia la circulación sistémica (mayor), retornando finalmente por las venas cavas a la AD."
      },
      {
        q: "¿Cuál elemento del sistema nodal permite retrasar el impulso cardiovascular?",
        options: ["Haz de His", "Red de Purkinje", "Nodo sinusal", "Nodo aurículoventricular"],
        correct: 3,
        feedback: "El nodo AV introduce un retraso fisiológico (~0.1 seg) en la conducción del impulso. Este retraso es clave: permite que las aurículas terminen de contraerse y vaciar su contenido en los ventrículos antes de que estos se contraigan."
      },
      {
        q: "Nombre 4 componentes del sistema de conducción del corazón (sistema cardionector).",
        options: [
          "Nodo sinusal, nodo aurículoventricular, haz de His, red de Purkinje",
          "Aurícula, ventrículo, tabique, pericardio",
          "Válvula mitral, tricúspide, aórtica, pulmonar",
          "Vena cava, aorta, arteria pulmonar, vena pulmonar"
        ],
        correct: 0,
        feedback: "El sistema cardionector genera y conduce el impulso eléctrico en esta secuencia: nodo sinusal (marcapasos natural) → nodo AV (retraso) → haz de His → red de Purkinje (distribuye el impulso a todo el miocardio ventricular)."
      },
      {
        q: "¿Qué estructura forma parte del mediastino medio?",
        options: ["Esófago", "Corazón y pericardio", "Tráquea", "Timo"],
        correct: 1,
        feedback: "El mediastino medio contiene el corazón envuelto por el pericardio, además de los grandes vasos que entran y salen de él (raíces de la aorta, vena cava, arteria y venas pulmonares)."
      },
      {
        q: "El pericardio, para su estudio, se divide en:",
        options: ["Visceral y parietal", "Fibroso y seroso", "Anterior y posterior", "Superior e inferior"],
        correct: 1,
        feedback: "El pericardio fibroso es la capa externa resistente que fija el corazón al diafragma y grandes vasos; el pericardio seroso (a su vez con hoja parietal y visceral/epicardio) permite el deslizamiento sin friccion del corazón al latir."
      },
      {
        q: "Las paredes del ventrículo izquierdo son:",
        options: ["Anterior y posterior", "Medial y lateral", "Superior e inferior", "Septal y libre solamente"],
        correct: 1,
        feedback: "El ventrículo izquierdo, de morfología cónica, se describe clásicamente con una pared medial (septal, compartida con el VD) y una pared lateral (libre)."
      },
      {
        q: "¿Cómo se llama el abultamiento fibroso en el borde libre de la válvula semilunar aórtica?",
        options: ["Cuerdas tendinosas", "Nódulos (cuerpos) de Arancio", "Músculos pectíneos", "Trabéculas carnosas"],
        correct: 1,
        feedback: "Los nódulos de Arancio son pequeños engrosamientos fibrosos en el punto medio del borde libre de cada valva semilunar (aórtica y pulmonar) que mejoran el cierre o coaptación de las cúspides durante la diástole."
      },
      {
        q: "Músculos en las paredes internas del ventrículo izquierdo cuyos dos extremos se insertan en la pared ventricular:",
        options: ["Cuerdas tendinosas de 1er orden", "Músculo papilar", "Músculo pectíneo (trabécula) de 2º orden", "Banda moderadora"],
        correct: 2,
        feedback: "Las trabéculas carnosas de 2º orden (puentes musculares) tienen ambos extremos fijos a la pared ventricular, a diferencia de las de 1er orden (músculos papilares, libres en un extremo) y las de 3er orden (adheridas en toda su longitud)."
      },
      {
        q: "En la cara visceral de las valvas se insertan las cuerdas tendinosas de:",
        options: ["2º orden", "1er orden", "3er orden", "Ninguna de las anteriores"],
        correct: 1,
        feedback: "Las cuerdas tendinosas de 1er orden nacen de los músculos papilares y se insertan directamente en el borde libre y la cara ventricular (visceral) de las valvas, evitando su prolapso hacia la aurícula durante la sístole."
      },
      {
        q: "El orificio aurículoventricular izquierdo en la mujer tiene un diámetro de:",
        options: ["5 cm", "7 cm", "9 cm", "11 cm"],
        correct: 2,
        feedback: "Según los valores de referencia usados en esta cátedra, el diámetro del anillo mitral en la mujer es de aproximadamente 9 cm. (Nota: distintos textos reportan la circunferencia en vez del diámetro, por lo que conviene verificar la cifra exacta con tu apostila/Rouvière si aparece de otra forma)."
      },
      {
        q: "El orificio aórtico tiene un diámetro de:",
        options: ["2 cm", "4 cm", "7 cm", "9 cm"],
        correct: 0,
        feedback: "El anillo valvular aórtico mide normalmente alrededor de 2 cm de diámetro, considerablemente menor que el orificio AV izquierdo, lo cual es coherente con su función de tracto de salida de alta presión."
      },
      {
        q: "Identifique la rama colateral de la aorta abdominal:",
        options: ["Arteria testicular izquierda y derecha", "Arteria bronquial derecha", "Nervios mesentéricos", "Arteria frénica superior derecha"],
        correct: 0,
        feedback: "Las arterias testiculares (u ováricas) son ramas colaterales pares de la aorta abdominal que descienden retroperitonealmente hasta las gónadas. Las bronquiales y frénicas superiores derivan de la aorta torácica, no de la abdominal."
      }
    ]
  },

  respiratorio: {
    label: "Sistema Respiratorio y Tórax",
    short: "Pulmón / Tórax",
    icon: "lungs",
    questions: [
      {
        q: "¿Cuál es el único músculo de la laringe encargado de la abducción (apertura) de los pliegues vocales?",
        options: ["Cricotiroideo", "Cricoaritenoideo posterior", "Tiroaritenoideo", "Aritenoideo transverso"],
        correct: 1,
        feedback: "El cricoaritenoideo posterior es el único músculo abductor de la laringe: rota los aritenoides lateralmente, separando los pliegues vocales y abriendo la glotis. Todos los demás músculos intrínsecos son aductores o tensores."
      },
      {
        q: "¿Cuál es la función del músculo cricotiroideo?",
        options: ["Abductor de los pliegues vocales", "Tensor (aductor) de los pliegues vocales", "Constrictor faríngeo", "Elevador de la laringe"],
        correct: 1,
        feedback: "El cricotiroideo inclina el cartílago tiroides hacia adelante respecto al cricoides, estirando y tensando los pliegues vocales — es clave para elevar el tono de la voz."
      },
      {
        q: "En laringoscopia directa se observa un par de pliegues superiores a los pliegues vocales. Se llaman:",
        options: ["Pliegues ariepiglóticos", "Pliegues vestibulares", "Bandas ventriculares falsas únicamente", "Cuerdas falsas inferiores"],
        correct: 1,
        feedback: "Los pliegues vestibulares (cuerdas vocales falsas) están por encima de los pliegues vocales verdaderos, separados de ellos por el ventrículo laríngeo, y no participan directamente en la fonación."
      },
      {
        q: "La tráquea se bifurca en los bronquios principales a nivel de un ángulo proyectado en el tórax conocido como:",
        options: ["Ángulo de Louis", "Vértebra C6", "Cartílago cricoides", "Apófisis xifoides"],
        correct: 0,
        feedback: "El ángulo esternal (ángulo de Louis), entre el manubrio y el cuerpo del esternón, se proyecta a nivel de T4-T5, justo donde la tráquea se bifurca en los bronquios principales (carina)."
      },
      {
        q: "¿En una persona viva, a qué nivel vertebral se divide la tráquea?",
        options: ["C6-C7", "T2-T3", "T4-T5", "T8-T9"],
        correct: 2,
        feedback: "En el sujeto vivo (en inspiración), la carina traqueal se ubica a nivel de T4-T5, correspondiendo externamente al ángulo esternal. En el cadáver (sin tono muscular) puede aparecer algo más alta."
      },
      {
        q: "¿Dónde está ubicada la tráquea torácica?",
        options: [
          "Mediastino inferior hasta el arco aórtico",
          "Mediastino superior hasta el tronco braquiocefálico",
          "Mediastino inferior hasta el arco de la vena ácigos",
          "Mediastino superior hasta debajo del arco aórtico"
        ],
        correct: 3,
        feedback: "La porción torácica de la tráquea ocupa el mediastino superior y continúa descendiendo hasta justo debajo del arco aórtico, donde se bifurca en los bronquios principales."
      },
      {
        q: "¿Cuál es la función de los anillos de la tráquea?",
        options: [
          "Permitir distensibilidad y contracción activa",
          "Constituyen el sostén exclusivo de la mucosa",
          "Impiden el colapso de la vía aérea durante la respiración",
          "Producen moco protector"
        ],
        correct: 2,
        feedback: "Los anillos cartilaginosos en forma de 'C' (incompletos posteriormente) dan rigidez estructural a la tráquea, evitando que se colapse durante los cambios de presión negativa en la inspiración."
      },
      {
        q: "La ventilación se conoce también como:",
        options: ["Respiración", "Inspiración", "Espiración", "Conducción de aire"],
        correct: 0,
        feedback: "Ventilación es sinónimo de respiración en su sentido mecánico: el proceso de entrada y salida de aire de los pulmones (inspiración + espiración), distinto de la respiración celular."
      },
      {
        q: "Los pulmones están localizados en la cavidad:",
        options: ["Mediastínica", "Pulmonar", "Pleural", "Torácica"],
        correct: 3,
        feedback: "Los pulmones ocupan las cavidades pleurales, que a su vez forman parte de la cavidad torácica general (el mediastino es el compartimento central entre ambos pulmones, no donde residen estos)."
      },
      {
        q: "¿Qué elemento NO pasa por el hilio pulmonar?",
        options: ["Vasos bronquiales", "Arteria aorta", "Linfáticos", "Bronquios"],
        correct: 1,
        feedback: "El hilio pulmonar es atravesado por el bronquio principal, la arteria y venas pulmonares, vasos y nervios bronquiales, y linfáticos. La aorta no entra al hilio: solo se relaciona externamente con la cara mediastínica del pulmón izquierdo."
      },
      {
        q: "En el pulmón izquierdo, ¿qué estructura arterial se sitúa superior y anterior al bronquio principal en el hilio?",
        options: ["Arteria bronquial", "Arteria pulmonar izquierda", "Aorta descendente", "Arteria subclavia"],
        correct: 1,
        feedback: "En el hilio izquierdo, la disposición típica de arriba a abajo es: arteria pulmonar (superior), bronquio principal (medio) y venas pulmonares (inferior) — a diferencia del hilio derecho, donde el bronquio suele ser la estructura más superior."
      },
      {
        q: "En la cara mediastínica del pulmón izquierdo, ¿qué estructura provoca el surco cóncavo retrohiliar?",
        options: ["Vena ácigos", "Esófago solamente", "Arteria aorta (arco y descendente)", "Vena cava superior"],
        correct: 2,
        feedback: "El cayado aórtico y la aorta torácica descendente se amoldan a la cara mediastínica izquierda, dejando una impresión cóncava característica por detrás del hilio pulmonar izquierdo."
      },
      {
        q: "La língula del pulmón izquierdo se encuentra en el:",
        options: ["Borde anterior", "Borde posterior", "Borde costal", "Borde inferior"],
        correct: 0,
        feedback: "La língula es una prolongación del lóbulo superior izquierdo que ocupa el borde anterior del pulmón, siendo el equivalente anatómico-funcional del lóbulo medio derecho (que el pulmón izquierdo no posee)."
      },
      {
        q: "La vena pulmonar superior derecha se encuentra en el hilio:",
        options: [
          "Anterior e inferior al bronquio principal derecho",
          "Superior al bronquio principal derecho",
          "Posterior y superior al bronquio lobar superior",
          "Inferior a la arteria pulmonar"
        ],
        correct: 0,
        feedback: "En el hilio derecho, la vena pulmonar superior ocupa la posición más anteroinferior respecto al bronquio principal, mientras que la arteria pulmonar suele situarse más anterosuperior."
      },
      {
        q: "El bronquio terciario o segmentario da origen a:",
        options: ["Conducto alveolar", "Bronquiolo de conducción", "Bronquiolo respiratorio", "Saco alveolar"],
        correct: 1,
        feedback: "La secuencia de ramificación es: bronquio principal → lobar → segmentario (terciario) → bronquiolo de conducción → bronquiolo terminal → bronquiolo respiratorio → conducto alveolar → saco alveolar → alvéolos."
      },
      {
        q: "¿Cuál ordenación sigue el aire inspirado?",
        options: [
          "Faringe → laringe → bronquios → bronquiolos → alvéolos",
          "Faringe → laringe → esófago → tráquea → bronquios",
          "Laringe → faringe → esófago → tráquea → bronquios",
          "Fosas nasales → faringe → laringe → tráquea → bronquios"
        ],
        correct: 3,
        feedback: "La vía aérea completa comienza en las fosas nasales (o boca), continúa por la faringe, laringe, tráquea, y se ramifica en los bronquios — el esófago nunca forma parte del trayecto del aire."
      },
      {
        q: "Especie de tapón que evita que los alimentos pasen por las vías respiratorias:",
        options: ["Glotis", "Faringe", "Laringe", "Epíglotis"],
        correct: 3,
        feedback: "La epiglotis es un cartílago elástico que, durante la deglución, se inclina hacia atrás cubriendo la entrada de la laringe, dirigiendo el bolo alimenticio hacia el esófago y protegiendo la vía aérea."
      },
      {
        q: "¿Qué estructura NO se relaciona con el vértice del pulmón izquierdo?",
        options: ["Arteria subclavia", "Esófago", "Vena braquiocefálica derecha", "Carótida común izquierda"],
        correct: 2,
        feedback: "El vértice del pulmón izquierdo se relaciona con estructuras del lado izquierdo y mediales (subclavia izquierda, carótida común izquierda, esófago). La vena braquiocefálica derecha pertenece al lado contralateral y no se relaciona con el vértice izquierdo."
      },
      {
        q: "Respecto de la vía respiratoria alta, señale la alternativa INCORRECTA:",
        options: [
          "La trompa de Eustaquio comunica la nasofaringe con el oído externo",
          "Las coanas comunican naso y bucofaringe",
          "Las coanas comunican las fosas nasales con la nasofaringe",
          "Todas son correctas"
        ],
        correct: 0,
        feedback: "Es incorrecta porque la trompa de Eustaquio (tuba auditiva) comunica la nasofaringe con el oído MEDIO, no con el oído externo. Su función es igualar la presión del oído medio con la atmosférica."
      },
      {
        q: "¿Cuántas pleuras parietales hay y cuáles son?",
        options: [
          "Dos: visceral y parietal",
          "Tres: diafragmática, costal y mediastínica",
          "Cuatro: costal, cardiaca, diafragmática y cervical",
          "Una sola, continua"
        ],
        correct: 1,
        feedback: "La pleura parietal, aunque anatómicamente continua, se describe en tres porciones según la estructura que recubre: costal, mediastínica y diafragmática (más la cúpula pleural o pleura cervical como extensión de la costal)."
      },
      {
        q: "¿Cómo se denomina la porción de pleura parietal que sobresale por encima de la 1ª costilla hacia la fosa supraclavicular?",
        options: ["Receso costodiafragmático", "Pleura costal", "Cúpula pleural (pleura cervical)", "Ligamento pulmonar"],
        correct: 2,
        feedback: "La cúpula pleural (pleura cervical) es la extensión de la pleura parietal que asciende por encima de la primera costilla hacia la base del cuello, reforzada por la fascia suprapleural (membrana de Sibson)."
      },
      {
        q: "Entre la pleura costal y la mediastínica se forma el:",
        options: ["Receso costodiafragmático", "Receso frenicomediastínico", "Receso costomediastínico", "Fosita supraretropleural"],
        correct: 2,
        feedback: "El receso costomediastínico es el espacio virtual de reserva pleural formado en la unión anterior entre la pleura costal y la mediastínica, particularmente prominente en el lado izquierdo por la escotadura cardíaca."
      },
      {
        q: "En una toracocentesis, la aguja se introduce en el borde superior de la costilla inferior. ¿Qué estructura se busca proteger?",
        options: [
          "El nervio frénico",
          "La arteria torácica interna",
          "El ligamento pulmonar",
          "El paquete vasculonervioso intercostal (vena, arteria, nervio)"
        ],
        correct: 3,
        feedback: "El paquete vasculonervioso intercostal corre protegido en el surco costal, en el borde inferior de cada costilla. Por eso se punciona pegado al borde superior de la costilla inferior del espacio, evitando lesionarlo."
      },
      {
        q: "¿Qué músculos accesorios ayudan a elevar las costillas en inspiración profunda y forzada?",
        options: ["Pectoral mayor/menor y escalenos", "Solo pectoral menor", "Serrato posteroinferior", "Solo el subclavio"],
        correct: 0,
        feedback: "En inspiración forzada se reclutan músculos accesorios que fijan la cintura escapular o el cuello como punto fijo para elevar las costillas: escalenos, pectoral mayor y menor, esternocleidomastoideo, entre otros."
      },
      {
        q: "¿Cuál de estos músculos se inserta en la 2ª costilla?",
        options: ["Subclavio", "Escaleno medio", "Escaleno posterior", "Escaleno anterior"],
        correct: 2,
        feedback: "El escaleno posterior se inserta en la 2ª costilla; el escaleno anterior y medio se insertan típicamente en la 1ª costilla, y el subclavio en la cara inferior de la clavícula."
      },
      {
        q: "¿Qué estructura ósea protege normalmente a la 1ª costilla, haciendo que su fractura sea marcador de trauma grave?",
        options: ["El esternón", "La escápula", "La clavícula", "La vértebra T1"],
        correct: 2,
        feedback: "La clavícula se ubica anterior y superior a la primera costilla, protegiéndola de traumatismos directos. Por ello, una fractura de la 1ª costilla sugiere un mecanismo de alta energía y obliga a buscar lesiones vasculares o neurológicas asociadas."
      },
      {
        q: "¿Cuál es la relación de la vena subclavia respecto al músculo escaleno anterior?",
        options: [
          "Pasa por detrás (posterior)",
          "Pasa por delante (anterior)",
          "Lo atraviesa",
          "No se relaciona con él"
        ],
        correct: 1,
        feedback: "La vena subclavia discurre anterior al escaleno anterior, mientras que la arteria subclavia y el plexo braquial pasan posteriores a este músculo, en el espacio interescalénico — una relación clave en accesos venosos centrales."
      }
    ]
  },

  abdomen: {
    label: "Pared Abdominal y Peritoneo",
    short: "Abdomen / Peritoneo",
    icon: "torso",
    questions: [
      {
        q: "El abdomen incluye todos, excepto:",
        options: ["Pared anterolateral", "Cavidad abdominal", "Piso pélvico", "Pared posterior"],
        correct: 2,
        feedback: "El piso pélvico pertenece a la región pelviana, no a la abdominal propiamente dicha. El abdomen se describe con pared anterolateral, pared posterior y la cavidad que ambas delimitan."
      },
      {
        q: "El límite horizontal inferior de los 9 cuadrantes abdominales se traza a nivel de:",
        options: ["Borde superior del coxis", "Borde de la última costilla", "Crestas ilíacas (línea interespinosa)", "Reborde costal"],
        correct: 2,
        feedback: "La línea interespinosa (o intertubercular), que une las espinas ilíacas anterosuperiores, constituye el límite horizontal inferior en la división clásica del abdomen en 9 cuadrantes."
      },
      {
        q: "Músculos de la pared anterolateral del abdomen:",
        options: [
          "Diafragma, recto anterior, oblicuos",
          "Recto anterior, oblicuos, psoas ilíaco",
          "Recto anterior, oblicuo mayor y menor, transverso y piramidal",
          "Recto anterior, oblicuos, cuadrado y piramidal"
        ],
        correct: 2,
        feedback: "La pared anterolateral está formada por 5 músculos pares: recto del abdomen, oblicuo externo (mayor), oblicuo interno (menor), transverso del abdomen, y el pequeño piramidal (presente de forma variable)."
      },
      {
        q: "La contracción de los músculos anchos del abdomen cumple la función de:",
        options: [
          "Compresión de las vísceras abdominales",
          "Elongación de las vísceras",
          "Elongación del bolo alimenticio",
          "Permitir la digestión adecuada"
        ],
        correct: 0,
        feedback: "Los músculos anchos (oblicuos y transverso), al contraerse, comprimen el contenido abdominal, lo que contribuye a funciones como la espiración forzada, la defecación, el parto y el vómito (prensa abdominal)."
      },
      {
        q: "El diafragma tiene un centro tendinoso en forma de trébol con tres hojas que son:",
        options: ["Superior, media e inferior", "Anterior, derecha e izquierda", "Medial, lateral y posterior", "Costal, lumbar y esternal"],
        correct: 1,
        feedback: "El centro frénico (tendinoso) del diafragma tiene morfología trifoliada con una hoja anterior y dos laterales (derecha e izquierda), siendo la hoja derecha la de mayor tamaño."
      },
      {
        q: "Los mesos son:",
        options: [
          "Tejidos que recubren las paredes del abdomen",
          "Repliegues peritoneales que unen órganos del tubo digestivo a la pared abdominal posterior",
          "Tejidos no relacionados con el tubo digestivo",
          "Estructuras exclusivas del colon"
        ],
        correct: 1,
        feedback: "Los mesos son repliegues de peritoneo doble (dos hojas) que conectan órganos intraperitoneales móviles del tubo digestivo con la pared abdominal posterior, y a través de ellos transcurren los vasos y nervios del órgano."
      },
      {
        q: "El mesocolon transverso divide la cavidad peritoneal en:",
        options: [
          "Compartimientos derecho e izquierdo",
          "Compartimientos supramesocólico e inframesocólico",
          "Espacios paracólicos y retroperitoneales",
          "Ninguno de los anteriores"
        ],
        correct: 1,
        feedback: "El mesocolon transverso actúa como un tabique horizontal que separa el compartimiento supramesocólico (estómago, hígado, bazo) del inframesocólico (intestino delgado, colon ascendente/descendente)."
      },
      {
        q: "El colon transverso y el estómago están unidos por un repliegue peritoneal llamado:",
        options: ["Omento menor", "Ligamento falciforme", "Omento mayor (ligamento gastrocólico)", "Mesenterio"],
        correct: 2,
        feedback: "El omento mayor (epiplón mayor) cuelga de la curvatura mayor del estómago y se une al colon transverso a través de su porción conocida como ligamento gastrocólico."
      },
      {
        q: "Respecto al epiplón menor (omento menor), es correcto que:",
        options: [
          "Une el hígado con la curvatura menor del estómago, esófago abdominal y 1ª porción del duodeno",
          "Une el hígado con la curvatura mayor del estómago",
          "Une el hígado con el colon transverso",
          "Une el estómago con el colon transverso"
        ],
        correct: 0,
        feedback: "El omento menor se extiende desde la porta hepatis hasta la curvatura menor gástrica, el esófago abdominal y la primera porción del duodeno, dividiéndose en ligamento hepatogástrico y hepatoduodenal."
      },
      {
        q: "Las prolongaciones peritoneales llenas de grasa en el intestino grueso se llaman:",
        options: ["Tenias", "Haustras", "Apéndices epiploicos (omentales)", "Vasos rectos"],
        correct: 2,
        feedback: "Los apéndices epiploicos (omentales) son pequeñas evaginaciones de grasa cubiertas por serosa, características del colon, útiles para identificarlo en cirugía y diferenciarlo del intestino delgado."
      },
      {
        q: "Órgano que NO es retroperitoneal:",
        options: ["3ª porción del duodeno", "Vena cava inferior", "Aorta abdominal", "Bazo"],
        correct: 3,
        feedback: "El bazo es un órgano intraperitoneal, totalmente rodeado por peritoneo visceral excepto en su hilio. En cambio, duodeno (2ª-4ª porción), vena cava, aorta y riñones son estructuras retroperitoneales."
      }
    ]
  },

  digestivo: {
    label: "Tubo Digestivo",
    short: "Esófago / Estómago / Intestinos",
    icon: "intestine",
    questions: [
      {
        q: "Respecto al esófago, indique la opción INCORRECTA:",
        options: [
          "Es musculomembranoso y comunica faringe con estómago",
          "Presenta movimientos peristálticos en una sola dirección",
          "Mide aproximadamente 20 cm de longitud",
          "Presenta 4 estrechamientos"
        ],
        correct: 2,
        feedback: "Es incorrecta porque el esófago mide en promedio 25 cm, no 20 cm. Las demás afirmaciones (estructura musculomembranosa, peristaltismo unidireccional, y los 4 estrechamientos anatómicos) son correctas."
      },
      {
        q: "¿Cuál de las siguientes estructuras NO comprime al esófago en su recorrido?",
        options: ["Cayado de la aorta", "Arteria subclavia izquierda", "Bronquio principal izquierdo", "Diafragma (hiato esofágico)"],
        correct: 1,
        feedback: "Los 4 estrechamientos clásicos del esófago son por: cartílago cricoides (cervical), cayado aórtico, bronquio principal izquierdo, y el hiato esofágico del diafragma. La arteria subclavia izquierda no genera compresión esofágica."
      },
      {
        q: "¿En qué punto del esófago es más probable que se alojen cuerpos extraños?",
        options: [
          "A nivel del cartílago cricoides",
          "A nivel del cayado de la aorta",
          "A nivel del cruce con el bronquio izquierdo",
          "Todas las anteriores son igualmente probables"
        ],
        correct: 0,
        feedback: "El estrechamiento cricoideo (esfínter esofágico superior, a nivel de C6) es el más estrecho de todo el esófago y el sitio más frecuente de impactación de cuerpos extraños."
      },
      {
        q: "La aurícula izquierda se relaciona posteriormente con:",
        options: ["El esófago", "La tráquea", "El timo", "El nervio frénico"],
        correct: 0,
        feedback: "La aurícula izquierda es la cámara cardíaca más posterior, y se relaciona íntimamente por detrás con el esófago — relación clave en ecocardiografía transesofágica y en la fibrilación auricular asociada a patología esofágica."
      },
      {
        q: "Las arterias que irrigan el estómago provienen de:",
        options: ["Mesentérica inferior", "Vena gastroepiploica (no es arteria)", "Mesentérica superior", "Tronco celíaco"],
        correct: 3,
        feedback: "Todas las arterias gástricas (izquierda, derecha, gastroomentales y cortas) derivan, directa o indirectamente, del tronco celíaco a través de sus tres ramas: gástrica izquierda, esplénica y hepática común."
      },
      {
        q: "¿Cuáles son las medidas normales aproximadas del estómago?",
        options: [
          "Longitud 25 cm, transverso 12 cm, grosor 8 cm",
          "Longitud 15 cm, transverso 5 cm, grosor 3 cm",
          "Longitud 40 cm, transverso 20 cm, grosor 15 cm",
          "Longitud 10 cm, transverso 8 cm, grosor 4 cm"
        ],
        correct: 0,
        feedback: "Estas son las dimensiones de referencia usadas en la cátedra para el estómago distendido en condiciones normales: aproximadamente 25 cm de longitud, 12 cm transverso y 8 cm de grosor anteroposterior."
      },
      {
        q: "El estómago NO realiza una de las siguientes funciones:",
        options: ["Conducción", "Reservorio", "Mezcla", "Absorción"],
        correct: 3,
        feedback: "El estómago tiene funciones de reservorio, mezcla mecánica/química y conducción del quimo hacia el duodeno, pero la absorción de nutrientes es mínima (solo algunas sustancias como alcohol o ciertos fármacos); ocurre principalmente en el intestino delgado."
      },
      {
        q: "¿Qué células del estómago secretan ácido clorhídrico y factor intrínseco?",
        options: ["Células principales", "Células parietales (oxínticas)", "Células mucosas", "Células G"],
        correct: 1,
        feedback: "Las células parietales (oxínticas), ubicadas en las glándulas gástricas del cuerpo y fondo, secretan tanto ácido clorhídrico como factor intrínseco (esencial para la absorción de vitamina B12 en el íleon)."
      },
      {
        q: "¿Cómo está irrigada la curvatura menor y mayor del estómago?",
        options: [
          "Menor: gástricas izq/der; Mayor: gastroomentales izq/der",
          "Ambas por la arteria esplénica exclusivamente",
          "Menor: mesentérica superior; Mayor: mesentérica inferior",
          "Ambas por la arteria hepática común"
        ],
        correct: 0,
        feedback: "La curvatura menor recibe la anastomosis de las arterias gástricas izquierda (del tronco celíaco) y derecha (de la hepática propia); la curvatura mayor, la de las gastroomentales (gastroepiploicas) izquierda (de la esplénica) y derecha (de la gastroduodenal)."
      },
      {
        q: "¿Qué vasos discurren entre las dos hojas del ligamento gastroesplénico?",
        options: [
          "Arterias gástricas cortas y gastroomental izquierda",
          "Arteria hepática común",
          "Arteria mesentérica inferior",
          "Vena porta"
        ],
        correct: 0,
        feedback: "El ligamento gastroesplénico conecta la curvatura mayor del estómago con el hilio esplénico, y entre sus dos hojas transcurren las arterias gástricas cortas y la arteria gastroomental (gastroepiploica) izquierda, ambas ramas de la esplénica."
      },
      {
        q: "No forma parte de las descripciones correctas del duodeno:",
        options: [
          "Tiene 4 porciones y forma de 'C' que abraza la cabeza del páncreas",
          "Se extiende desde el píloro hasta el ángulo de Treitz",
          "En la 1ª porción desemboca el colédoco con el conducto de Santorini",
          "Todas son correctas"
        ],
        correct: 2,
        feedback: "Es incorrecta porque el colédoco y el conducto de Santorini (accesorio pancreático) desembocan en la 2ª porción (descendente) del duodeno, a nivel de la ampolla de Vater y la papila menor respectivamente — no en la 1ª porción."
      },
      {
        q: "¿Cuál porción del duodeno es la más corta e intraperitoneal?",
        options: ["1ª porción (superior)", "2ª porción (descendente)", "3ª porción (horizontal)", "4ª porción (ascendente)"],
        correct: 0,
        feedback: "La primera porción (superior o bulbo duodenal) es la más corta de las cuatro y la única con un mesenterio propio que le da movilidad intraperitoneal; el resto del duodeno es retroperitoneal fijo."
      },
      {
        q: "La vena cava inferior y la aorta abdominal se relacionan con la cara posterior de la:",
        options: ["2ª porción del duodeno", "3ª porción del duodeno (horizontal)", "3ª porción, cara anterior", "4ª porción del duodeno"],
        correct: 1,
        feedback: "La 3ª porción (horizontal) del duodeno cruza por delante de la columna vertebral, y en su cara posterior se relaciona directamente con la vena cava inferior y la aorta abdominal."
      },
      {
        q: "¿Qué estructuras se relacionan con la cara posterior de la porción descendente del duodeno, a través de la fascia de Treitz?",
        options: [
          "Vena cava inferior, arteria testicular derecha, uréter derecho y pedículo renal derecho",
          "Solo el riñón izquierdo",
          "Bazo y cola del páncreas",
          "Arteria mesentérica superior únicamente"
        ],
        correct: 0,
        feedback: "La fascia de Treitz (fusión del mesoduodeno con el peritoneo parietal posterior) separa la 2ª porción del duodeno de estructuras retroperitoneales derechas: VCI, arteria testicular/ovárica derecha, uréter derecho y el pedículo renal derecho."
      },
      {
        q: "¿A qué nivel vertebral se encuentra el ángulo de Treitz (flexura duodenoyeyunal)?",
        options: ["L1", "L2", "L3", "L4"],
        correct: 1,
        feedback: "El ángulo de Treitz, sostenido por el músculo suspensorio del duodeno (ligamento de Treitz), se ubica aproximadamente a la altura de L2, marcando el límite entre el duodeno (retroperitoneal) y el yeyuno (intraperitoneal)."
      },
      {
        q: "El mesenterio del intestino delgado forma una raíz que se extiende desde:",
        options: [
          "La flexura duodenoyeyunal hasta la unión ileocecal",
          "Justo a la derecha de L2 hasta la cresta ilíaca",
          "Desde el duodeno proximal a la fosa ilíaca izquierda",
          "Desde la base del mesocolon transverso a la pelvis"
        ],
        correct: 0,
        feedback: "La raíz del mesenterio se extiende oblicuamente desde la flexura duodenoyeyunal (cerca de L2, izquierda) hasta la unión ileocecal (fosa ilíaca derecha), cruzando estructuras retroperitoneales en su trayecto."
      },
      {
        q: "¿Qué elemento NO es contenido del mesenterio?",
        options: ["Arterias yeyunales/ileales", "Arteria mesentérica inferior", "Plexo nervioso mesentérico", "Vasos linfáticos"],
        correct: 1,
        feedback: "El mesenterio contiene ramas de la arteria mesentérica SUPERIOR (arterias yeyunales e ileales), sus venas correspondientes, linfáticos y plexos nerviosos. La arteria mesentérica inferior irriga el colon distal, no el intestino delgado."
      },
      {
        q: "Las placas de Peyer y los divertículos de Meckel se encuentran en la mucosa de:",
        options: ["Intestino delgado (íleon)", "Intestino grueso", "Recto y ano", "Estómago"],
        correct: 0,
        feedback: "Las placas de Peyer (tejido linfoide agregado) son características del íleon distal, y el divertículo de Meckel —remanente embriológico del conducto onfalomesentérico— también se localiza en el íleon."
      },
      {
        q: "¿Qué estructura separa el intestino delgado del grueso?",
        options: ["Esfínter pilórico", "Válvula ileocecal", "Ángulo hepático", "Válvula de Gerlach"],
        correct: 1,
        feedback: "La válvula ileocecal marca la unión entre el íleon terminal y el ciego, regulando el paso del contenido intestinal y evitando el reflujo retrógrado de materia fecal hacia el íleon."
      },
      {
        q: "¿En qué porción del colon se encuentra el apéndice vermiforme?",
        options: ["Ciego", "Colon ascendente", "Colon sigmoide", "Recto"],
        correct: 0,
        feedback: "El apéndice vermiforme nace de la cara posteromedial del ciego, la primera porción (más proximal) del intestino grueso, generalmente por debajo de la válvula ileocecal."
      },
      {
        q: "¿Dónde se localiza la válvula de Gerlach?",
        options: [
          "En la unión ileocecal",
          "En el orificio de implantación del apéndice vermiforme",
          "En el ángulo esplénico del colon",
          "En la unión rectosigmoidea"
        ],
        correct: 1,
        feedback: "La válvula (pliegue) de Gerlach es un repliegue mucoso variable situado en el orificio donde el apéndice vermiforme se implanta en el ciego."
      },
      {
        q: "¿Cuál es el límite anatómico donde las tres tenias del colon se fusionan formando la capa muscular continua del recto?",
        options: [
          "A nivel de la flexura sacra, frente a S3",
          "A nivel de la línea pectínea",
          "En la unión de la flexura esplénica con el descendente",
          "En el vértice de la fosa isquioanal"
        ],
        correct: 0,
        feedback: "Las tres tenias longitudinales del colon (libre, mesocólica y omental) convergen y se fusionan en una capa muscular longitudinal continua a nivel de la flexura sacra del recto, frente a la 3ª vértebra sacra (S3) — este es el límite quirúrgico entre colon sigmoide y recto."
      },
      {
        q: "¿Cómo está formado el arco de Riolano?",
        options: [
          "Anastomosis entre cólica media (mesentérica superior) y cólica izquierda (mesentérica inferior)",
          "Anastomosis entre las dos arterias ileocólicas",
          "Anastomosis entre gástrica izquierda y esplénica",
          "Rama directa única de la aorta"
        ],
        correct: 0,
        feedback: "El arco de Riolano es una anastomosis (variable, no siempre presente) entre la arteria cólica media —rama de la mesentérica superior— y la cólica izquierda —rama de la mesentérica inferior—, importante como vía colateral en isquemia mesentérica."
      },
      {
        q: "¿Cómo está dado el flujo vascular del colon transverso?",
        options: [
          "Cólica media para los 2/3 proximales; cólica izquierda para el 1/3 distal",
          "Exclusivamente por la cólica media",
          "Exclusivamente por la mesentérica inferior",
          "Por la arteria esplénica"
        ],
        correct: 0,
        feedback: "El colon transverso recibe irrigación dual: sus dos tercios proximales (derechos) por la arteria cólica media (de la mesentérica superior), y su tercio distal (izquierdo) por la cólica izquierda (de la mesentérica inferior) — esta zona de transición es la 'zona de Griffith', vulnerable a isquemia."
      },
      {
        q: "¿Cuáles son las ramas terminales de la mesentérica inferior y de la aorta abdominal?",
        options: [
          "Mesentérica inferior → rectal superior; Aorta → ilíacas comunes y sacra media",
          "Mesentérica inferior → cólica media; Aorta → renales",
          "Mesentérica inferior → ileocólica; Aorta → testiculares",
          "Mesentérica inferior → esplénica; Aorta → frénicas"
        ],
        correct: 0,
        feedback: "La arteria mesentérica inferior termina como arteria rectal superior (irrigando el recto proximal). La aorta abdominal, a nivel de L4, termina bifurcándose en las arterias ilíacas comunes derecha e izquierda, además de dar la pequeña arteria sacra media."
      },
      {
        q: "Proceso mecánico que moviliza el alimento a través de las vías gastrointestinales:",
        options: ["Masticación", "Deglución", "Ingestión", "Peristalsis"],
        correct: 3,
        feedback: "La peristalsis son ondas de contracción muscular coordinadas (circular y longitudinal) que impulsan el contenido a lo largo de todo el tubo digestivo, desde el esófago hasta el recto."
      }
    ]
  },

  hepatobiliar: {
    label: "Hígado, Vías Biliares, Páncreas y Bazo",
    short: "Hígado / Páncreas / Bazo",
    icon: "liver",
    questions: [
      {
        q: "¿Cuáles son las ramas del tronco celíaco y a qué nivel vertebral se origina?",
        options: [
          "Gástrica izq., esplénica y hepática común; nivel T12",
          "Mesentérica superior, esplénica y renal; nivel L1",
          "Hepática propia, gastroduodenal y cística; nivel T10",
          "Gástrica derecha, cólica media y rectal; nivel L2"
        ],
        correct: 0,
        feedback: "El tronco celíaco nace de la aorta abdominal a nivel de T12 (justo debajo del hiato aórtico diafragmático) y se trifurca clásicamente en arteria gástrica izquierda, arteria esplénica y arteria hepática común."
      },
      {
        q: "¿Cuáles son las medidas de longitud promedio del hígado?",
        options: [
          "28 cm transversal, 16 cm anteroposterior, 8 cm de espesor",
          "15 cm transversal, 8 cm anteroposterior, 4 cm de espesor",
          "40 cm transversal, 25 cm anteroposterior, 15 cm de espesor",
          "20 cm transversal, 10 cm anteroposterior, 6 cm de espesor"
        ],
        correct: 0,
        feedback: "Estas son las medidas de referencia clásicas del hígado en su lóbulo derecho: aproximadamente 28 cm en sentido transversal, 16 cm anteroposterior y 8 cm de espesor."
      },
      {
        q: "¿Qué zona hepática se relaciona directamente con el diafragma y la vena cava inferior en el espacio retroperitoneal?",
        options: ["Lóbulo cuadrado", "Área desnuda del hígado", "Lóbulo caudado solamente", "Porta hepatis"],
        correct: 1,
        feedback: "El área desnuda (area nuda) del hígado es la porción posterior carente de revestimiento peritoneal, donde el hígado se adhiere directamente al diafragma y se relaciona con la vena cava inferior."
      },
      {
        q: "¿Cuáles son las dimensiones promedio (longitud y diámetro) del conducto cístico?",
        options: ["Longitud 3-4 cm; diámetro 3 mm", "Longitud 10 cm; diámetro 1 cm", "Longitud 1 cm; diámetro 5 mm", "Longitud 6-8 cm; diámetro 8 mm"],
        correct: 0,
        feedback: "El conducto cístico, que conecta la vesícula biliar con el conducto hepático común (formando el colédoco), mide en promedio 3 a 4 cm de longitud con un diámetro estrecho de unos 3 mm, característico por sus pliegues mucosos en espiral (válvulas de Heister)."
      },
      {
        q: "Ante un paciente con ictericia, ¿qué estructura del árbol biliar debe evaluarse primero?",
        options: ["Vesícula biliar exclusivamente", "Conducto colédoco y hepático común", "Conducto cístico", "Conducto pancreático principal"],
        correct: 1,
        feedback: "En la evaluación de ictericia (especialmente obstructiva), el colédoco y el conducto hepático común son las estructuras clave a estudiar por imagen, ya que su obstrucción (cálculos, tumores) es la causa más frecuente de colestasis extrahepática."
      },
      {
        q: "En el colédoco, ¿qué porción es la más larga de todas sus partes?",
        options: ["Supraduodenal", "Intraduodenal", "Pancreática (retropancreática)", "Intramural"],
        correct: 2,
        feedback: "El colédoco se divide en 4 porciones (supraduodenal, retroduodenal, pancreática e intramural/duodenal); la porción pancreática, que discurre por detrás o dentro del parénquima de la cabeza pancreática, es la más larga de las cuatro."
      },
      {
        q: "Al explorar la vía biliar en el pedículo hepático, ¿qué vaso arterial debe protegerse?",
        options: ["Vena porta", "Arteria hepática propia", "Arteria gastroduodenal", "Vena esplénica"],
        correct: 1,
        feedback: "La arteria hepática propia transcurre dentro del pedículo hepático (ligamento hepatoduodenal) junto al colédoco y la vena porta, en la disposición clásica: colédoco a la derecha, arteria hepática a la izquierda, y porta posterior a ambos — su lesión iatrogénica es una complicación grave de la cirugía biliar."
      },
      {
        q: "¿Qué estructura comprime un tumor en la cabeza del páncreas, causando ictericia obstructiva?",
        options: ["La vena porta", "El conducto colédoco", "La arteria mesentérica superior", "El duodeno completo"],
        correct: 1,
        feedback: "Dado que el colédoco transcurre por o cerca de la cabeza pancreática en su porción pancreática, un tumor en esta localización (frecuentemente adenocarcinoma de páncreas) puede comprimirlo y producir ictericia obstructiva — un signo clínico clásico."
      },
      {
        q: "¿De dónde proviene la irrigación principal de la cabeza del páncreas?",
        options: [
          "Arcos pancreatoduodenales superior (gastroduodenal) e inferior (mesentérica superior)",
          "Exclusivamente de la arteria esplénica",
          "Exclusivamente de la arteria hepática común",
          "De la arteria mesentérica inferior"
        ],
        correct: 0,
        feedback: "La cabeza pancreática recibe doble irrigación por arcos anastomóticos: las arterias pancreatoduodenales superiores (ramas de la gastroduodenal) y las inferiores (ramas de la mesentérica superior), que se anastomosan rodeando la cabeza."
      },
      {
        q: "La irrigación del cuerpo y la cola del páncreas depende principalmente de:",
        options: ["Arteria esplénica", "Arteria gastroduodenal", "Arteria mesentérica inferior", "Arteria hepática común"],
        correct: 0,
        feedback: "La arteria esplénica, que discurre a lo largo del borde superior del páncreas hacia el bazo, da múltiples ramas pancreáticas que irrigan principalmente el cuerpo y la cola del órgano."
      },
      {
        q: "¿Qué vaso venoso emerge por delante de la 3ª porción del duodeno y corre riesgo en la resección de cabeza pancreática?",
        options: ["Vena esplénica", "Vena mesentérica superior", "Vena porta", "Vena cava inferior"],
        correct: 1,
        feedback: "La vena mesentérica superior asciende por delante de la 3ª porción duodenal y por detrás del cuello pancreático, siendo una estructura de alto riesgo quirúrgico durante una pancreatoduodenectomía (cirugía de Whipple)."
      },
      {
        q: "¿Qué estructura discurre paralela a la arteria pancreatoduodenal superior posterior, por la cara posterior de la cabeza pancreática?",
        options: ["La vena esplénica", "El conducto colédoco", "El conducto torácico", "El uréter derecho"],
        correct: 1,
        feedback: "El conducto colédoco discurre inmediatamente paralelo y posterior a la arteria pancreatoduodenal superior posterior en su trayecto por la cara posterior de la cabeza del páncreas."
      },
      {
        q: "¿Qué estructura vascular discurre adosada a la pared posterior de la bolsa omental (transcavidad de los epiplones)?",
        options: ["Vena cava inferior", "Arteria y vena esplénica (vasos esplénicos)", "Vena porta", "Aorta abdominal"],
        correct: 1,
        feedback: "Los vasos esplénicos (arteria y vena) discurren sinuosamente por el borde superior del páncreas, formando parte de la pared posterior de la bolsa omental, justo detrás del estómago."
      },
      {
        q: "¿Cómo está unida la cola del páncreas al hilio del bazo?",
        options: [
          "Por contacto directo, sin ligamento",
          "Mediante el epiplón (ligamento) pancreaticoesplénico, que contiene los vasos esplénicos",
          "Mediante el ligamento gastroesplénico únicamente",
          "Mediante el ligamento frenocólico"
        ],
        correct: 1,
        feedback: "El ligamento (epiplón) pancreaticoesplénico conecta la cola del páncreas con el hilio del bazo, y dentro de él transcurren los vasos esplénicos en su tramo final."
      },
      {
        q: "¿Qué estructuras se encuentran en la cara visceral del bazo?",
        options: [
          "Impresión gástrica, renal y cólica",
          "Impresión hepática y duodenal",
          "Impresión pulmonar exclusivamente",
          "Solo impresión diafragmática"
        ],
        correct: 0,
        feedback: "La cara visceral (medial) del bazo presenta impresiones por contacto con órganos vecinos: gástrica (anterosuperior), renal (posteroinferior) y cólica (anteroinferior, por el ángulo esplénico del colon)."
      },
      {
        q: "¿Qué secretan las células delta del páncreas?",
        options: ["Insulina", "Glucagón", "Somatostatina", "Polipéptido pancreático"],
        correct: 2,
        feedback: "Las células delta de los islotes pancreáticos (de Langerhans) secretan somatostatina, hormona que inhibe la liberación de insulina, glucagón y otras secreciones digestivas, regulando así el sistema de forma paracrina."
      },
      {
        q: "Uno de los siguientes enunciados NO es verdadero respecto al páncreas:",
        options: [
          "Produce insulina y glucagón",
          "Se relaciona con la arteria mesentérica superior",
          "Se inserta en el mesocolon transverso",
          "Forma parte de la transcavidad de los epiplones"
        ],
        correct: 2,
        feedback: "Es falsa porque el páncreas no se inserta en el mesocolon transverso, sino que es cruzado por su raíz (el mesocolon transverso se fija sobre la superficie anterior del páncreas, sin que este forme parte estructural del meso)."
      }
    ]
  },

  renal: {
    label: "Sistema Renal y Aparato Urinario",
    short: "Riñón / Uréteres",
    icon: "kidney",
    questions: [
      {
        q: "¿Qué estructuras forman el seno renal?",
        options: [
          "Solo la pelvis renal",
          "Ramas de los vasos renales, cálices mayores/menores y pelvis renal, rodeados de grasa",
          "Solo la cápsula renal",
          "Glomérulos y túbulos contorneados"
        ],
        correct: 1,
        feedback: "El seno renal es la cavidad central del riñón que alberga las ramas intrarrenales de los vasos renales, el sistema colector (cálices menores, mayores y pelvis renal), todo rodeado de tejido adiposo."
      },
      {
        q: "¿Qué parte del riñón contiene las pirámides de Malpighi?",
        options: ["Corteza", "Médula", "Cápsula", "Pelvis renal"],
        correct: 1,
        feedback: "Las pirámides renales (de Malpighi) son estructuras cónicas características de la médula renal, compuestas por los túbulos colectores que convergen hacia la papila renal, donde drenan en los cálices menores."
      },
      {
        q: "¿Cuál es la disposición de las estructuras en el pedículo renal de adelante hacia atrás?",
        options: [
          "Arteria renal, vena renal, pelvis renal",
          "Vena renal, arteria renal, pelvis renal (V.A.P.)",
          "Pelvis renal, arteria renal, vena renal",
          "Vena renal, pelvis renal, arteria renal"
        ],
        correct: 1,
        feedback: "La regla mnemotécnica V.A.P. resume el orden anteroposterior en el pedículo renal: Vena renal (más anterior), Arteria renal (en medio), Pelvis renal (más posterior)."
      },
      {
        q: "¿Cuál de los siguientes NO es un medio de fijación de los riñones?",
        options: ["Vasos renales", "Peritoneo parietal", "Cápsula adiposa renal", "Peritoneo visceral"],
        correct: 3,
        feedback: "El riñón es un órgano retroperitoneal cubierto solo por peritoneo PARIETAL en su cara anterior (no por peritoneo visceral, ya que no está suspendido por un meso). Sus medios de fijación reales incluyen los vasos renales, la fascia renal, la cápsula adiposa y el peritoneo parietal adyacente."
      },
      {
        q: "¿Cuál de las siguientes porciones NO pertenece a los uréteres?",
        options: ["Abdominal", "Ilíaca sacra", "Pelviana", "Vesical (yuxtavesical/intramural)"],
        correct: 1,
        feedback: "El uréter se divide clásicamente en porciones abdominal, pelviana (ilíaca/pélvica) y vesical (intramural). 'Ilíaca sacra' no es una de las porciones descriptivas estándar del uréter."
      }
    ]
  },

  clinicos: {
    label: "Casos Clínicos Integradores",
    short: "Correlación clínica",
    icon: "stethoscope",
    questions: [
      {
        q: "Paciente con disfagia y otalgia refleja (dolor referido al oído derecho). ¿Qué nervio y músculos están implicados?",
        options: [
          "Nervio facial y músculos de la masticación",
          "Nervio vago (vía laríngeo recurrente) y músculos constrictores de la faringe/laríngeos",
          "Nervio trigémino y músculos suprahioideos",
          "Nervio hipogloso y músculos linguales"
        ],
        correct: 1,
        feedback: "La otalgia referida en patología faringolaríngea se explica por la inervación sensitiva compartida: el nervio vago (a través de su rama laríngea recurrente y auricular) inerva tanto los músculos constrictores faríngeos/laríngeos como ramas sensitivas que llegan al conducto auditivo — de ahí el dolor referido al oído ante disfagia."
      },
      {
        q: "Paciente con dolor postprandial por estenosis del tronco celíaco. ¿A través de qué arco recibe flujo colateral el estómago y duodeno desde la mesentérica superior?",
        options: [
          "Arco de Riolano",
          "Arcos de las arterias pancreatoduodenales",
          "Arco de Treitz",
          "Arcadas yeyunales"
        ],
        correct: 1,
        feedback: "Ante una estenosis del tronco celíaco, los arcos pancreatoduodenales (anastomosis entre ramas de la gastroduodenal —celíaca— y de la mesentérica superior) permiten flujo colateral retrógrado, perfundiendo el territorio celíaco isquémico — esto explica el dolor postprandial (isquemia relativa al aumentar la demanda digestiva)."
      },
      {
        q: "Si el cirujano explora la arteria hepática común, ¿en qué dos ramas terminales se divide al borde superior del duodeno?",
        options: [
          "Hepática propia y gastroduodenal",
          "Gástrica izquierda y esplénica",
          "Cística y hepática derecha",
          "Gastroduodenal y pancreatoduodenal superior"
        ],
        correct: 0,
        feedback: "La arteria hepática común, rama del tronco celíaco, se bifurca al llegar al borde superior del duodeno (cerca del píloro) en arteria hepática propia (que sigue hacia el hígado dentro del pedículo hepático) y arteria gastroduodenal (que desciende por detrás del duodeno)."
      },
      {
        q: "¿Cuál es el origen de la arteria apendicular?",
        options: [
          "Arteria ileocólica (rama de la mesentérica superior)",
          "Arteria cólica derecha",
          "Arteria mesentérica inferior",
          "Arteria cólica media"
        ],
        correct: 0,
        feedback: "La arteria apendicular nace como rama de la arteria ileocólica (que a su vez es rama terminal de la mesentérica superior), discurriendo dentro del mesoapéndice hasta la punta del apéndice — su trombosis o compresión es relevante en la fisiopatología de la apendicitis."
      },
      {
        q: "¿Qué relación anatómica mantiene la arteria esplénica con la cara posterior del estómago antes de llegar al bazo?",
        options: [
          "No tiene relación con el estómago",
          "Discurre sinuosa por el borde superior del páncreas, en la pared posterior de la bolsa omental, detrás del estómago",
          "Atraviesa el estómago directamente",
          "Se relaciona solo con la curvatura menor"
        ],
        correct: 1,
        feedback: "La arteria esplénica tiene un trayecto característicamente sinuoso (tortuoso) a lo largo del borde superior del páncreas, formando parte de la pared posterior de la bolsa omental, situada por detrás del estómago — relación clave en cirugía gástrica y esplénica."
      },
      {
        q: "¿Cómo se forma el arco vascular de Treitz?",
        options: [
          "Por anastomosis entre la arteria cólica izquierda (mesentérica inferior) y la vena mesentérica inferior",
          "Por anastomosis entre dos arterias mesentéricas superiores",
          "Es una rama directa de la aorta",
          "Por anastomosis entre la esplénica y la gástrica izquierda"
        ],
        correct: 0,
        feedback: "El arco de Treitz se forma por la relación anastomótica entre la arteria cólica izquierda (rama de la mesentérica inferior) y la vena mesentérica inferior en la región de la flexura duodenoyeyunal, sirviendo de referencia quirúrgica en esa zona."
      }
    ]
  }
};

// Aplanar para utilidades globales
const ALL_TOPIC_KEYS = Object.keys(QUESTION_BANK);
