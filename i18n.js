import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation:{
      "selector-title": "Select your experience",
      "selector-aeropuerto": "Airports",
      "selector-papel": "Paper and cardboard",
      "selector-logi": "Logistics",
      "loader-text": "Loading experience...",
      "header-home": "Home",
      "header-airport": "Airports",
      "airport-desliza": "Slide Down",
      "airport-driver1-title": "DRIVER #1: Efficient Check-In with a Smile",
      "airport-driver1-title2": "Airport Security",
      "airport-driver1-tab1-title": "CBRA: Efficiency and Safety. Passenger Comfort",
      "airport-driver1-tab1-text": "The CBRA (Claim-Based Reconciliation Area) process becomes transparent with our solutions. We add efficiency and comfort, allowing passengers to reunite with their luggage quickly. Human engineering is reflected in the effectiveness of our systems. Our team strives to achieve a seamless process, ensuring that every passenger has a positive experience when arriving at their destination.",
      "airport-driver1-tab2-title": "Real-Time On-Screen Resolution (OSR)",
      "airport-driver1-tab2-text": "In the BHS control room, our staff act as true guardian angels, using On-Screen Resolution (OSR) to address any issues in real time, ensuring a steady and safe flow of luggage. Behind this technology is a highly trained human team that responds effectively to unforeseen challenges. Human engineering stands out by making informed and quick decisions that keep the operation moving smoothly.",
      "airport-driver1-tab3-title": "Your Guardian Angel in the Airport Industry",
      "airport-driver1-tab3-text": "MATEC, your reliable partner in airport baggage handling systems, embraces its role as your Guardian Angel at every step of the airport process. From the moment passengers check in to picking up their luggage at the baggage claim area, we are committed to providing solutions that optimize efficiency, safety, and comfort while driving profitability and sustainability. Below, we explore how MATEC adds a human touch to processes such as Check-In, Security Screening, Baggage Sorting (Make Up), Baggage Claim, and more.",
      "airport-slidable-title1": "Guardian Angel in Security",
      "airport-slidable-texto1": "At the heart of airport security, MATEC ensures a safe and secure passage through the Security Feed and Security Shunt processes. Our cutting-edge technology combines with human surveillance to deliver robust security. Human engineering shines in interpreting the data collected by our systems. Our experts continually analyze luggage patterns and monitor any anomalies, acting immediately to ensure the safety of all passengers.",
      "airport-slidable-title3": "Worry-Free Travel",
      "airport-slidable-texto3": "MATEC ensures integration with inspection systems (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) in compliance with TSA and ECAC to perform luggage inspection at levels 1, 2, and 3, achieving the highest-level sorting accuracy, with capacities of up to 3600 UPH per line. For suspect/clean baggage sorting, MATEC has high-tech and robust solutions that guarantee the required reliability, as they have been tested in the most critical airport environments.",
      "airport-driver1-title-sidebar": "Driver #1",
      "airport-driver1-text-sidebar": "We start the journey with a smooth and friendly check-in. Our baggage handling solutions ensure a quick and seamless process, allowing passengers to begin their experience with a smile. Behind every efficient check-in system is meticulous human engineering. Our team of experts collaborates with airports to design custom solutions tailored to their unique needs, considering every detail from conveyor belt layouts to interaction with airline personnel. Technology may be advanced, but it's the human touch that perfects the process.",
      "airport-driver2-title": "Entry Baggage Claim: The Final Touch",
      "footer-credits": "Credits",
      "footer-privacy": "Privacy Policy",
      "footer-cookies": "Cookies"
    }    
  },
  de:{
    translation:{
      "selector-title": "Wählen Sie Ihr Erlebnis",
      "selector-aeropuerto": "Flughäfen",
      "selector-papel": "Papier und Pappe",
      "selector-logi": "Logistik",
      "loader-text": "Erlebnis wird geladen...",
      "header-home": "Startseite",
      "header-airport": "Flughäfen",
      "airport-desliza": "Nach unten wischen",
      "airport-driver1-title": "FAHRER #1: Effizientes Einchecken mit einem Lächeln",
      "airport-driver1-title2": "Flughafensicherheit",
      "airport-driver1-tab1-title": "CBRA: Effizienz und Sicherheit. Komfort für Passagiere",
      "airport-driver1-tab1-text": "Der CBRA-Prozess (Claim-Based Reconciliation Area) wird mit unseren Lösungen transparent. Wir steigern Effizienz und Komfort und ermöglichen es den Passagieren, schnell wieder mit ihrem Gepäck vereint zu werden. Die menschliche Ingenieurskunst spiegelt sich in der Effektivität unserer Systeme wider. Unser Team arbeitet daran, einen nahtlosen Ablauf sicherzustellen und sicherzustellen, dass jeder Passagier eine positive Erfahrung bei seiner Ankunft am Ziel hat.",
      "airport-driver1-tab2-title": "Echtzeit-Bildschirmauflösung (OSR)",
      "airport-driver1-tab2-text": "In der BHS-Kontrollraum agiert unser Personal wie wahre Schutzengel und verwendet die On-Screen Resolution (OSR), um Probleme in Echtzeit zu lösen und einen kontinuierlichen und sicheren Fluss des Gepäcks sicherzustellen. Hinter dieser Technologie steht ein hochqualifiziertes menschliches Team, das effektiv auf unerwartete Herausforderungen reagiert. Die menschliche Ingenieurskunst zeigt sich darin, informierte und schnelle Entscheidungen zu treffen, die den Betrieb reibungslos halten.",
      "airport-driver1-tab3-title": "Ihr Schutzengel in der Flughafenindustrie",
      "airport-driver1-tab3-text": "MATEC, Ihr vertrauenswürdiger Partner für Flughafen-Gepäckabfertigungssysteme, übernimmt bei jedem Schritt des Flughafenprozesses die Rolle Ihres Schutzengels. Von dem Moment an, in dem die Passagiere einchecken, bis sie ihr Gepäck im Gepäckausgabe-Bereich abholen, setzen wir uns für Lösungen ein, die die Effizienz, Sicherheit und den Komfort optimieren und gleichzeitig die Rentabilität und Nachhaltigkeit fördern. Im Folgenden erläutern wir, wie MATEC eine menschliche Note in Prozesse wie das Einchecken, die Sicherheitskontrolle, die Gepäcksortierung (Make Up), die Gepäckabholung und vieles mehr einbringt.",
      "airport-slidable-title1": "Schutzengel in Sicherheitsfragen",
      "airport-slidable-texto1": "Im Herzen der Flughafensicherheit stellt MATEC einen sicheren und geschützten Durchgang durch die Sicherheitsabläufe von Security Feed und Security Shunt sicher. Unsere Spitzenleistungstechnologie kombiniert sich mit menschlicher Überwachung, um eine solide Sicherheit zu gewährleisten. Die menschliche Ingenieurskunst zeigt sich in der Auswertung der von unseren Systemen gesammelten Daten. Unsere Experten analysieren kontinuierlich die Gepäckmuster und überwachen jegliche Abweichungen, um sofortige Maßnahmen zur Sicherheit aller Passagiere zu ergreifen.",
      "airport-slidable-title3": "Sorgloses Reisen",
      "airport-slidable-texto3": "MATEC gewährleistet die Integration mit Inspektionssystemen (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System), die den Vorschriften der TSA und ECAC entsprechen, um die Gepäckkontrolle auf den Ebenen 1, 2 und 3 durchzuführen und die höchste Genauigkeit bei der Sortierung mit Kapazitäten von bis zu 3600 UPH pro Linie zu erreichen. Für die Sortierung verdächtiger/saubere Gepäckstücke verfügt MATEC über hochtechnologische und robuste Lösungen, die die erforderliche Zuverlässigkeit gewährleisten, da sie in den anspruchsvollsten Umgebungen der Flughäfen getestet wurden.",
      "airport-driver1-title-sidebar": "Fahrer #1",
      "airport-driver1-text-sidebar": "Wir beginnen die Reise mit einem reibungslosen und freundlichen Einchecken. Unsere Gepäckabfertigungslösungen gewährleisten einen schnellen und nahtlosen Ablauf und ermöglichen es den Passagieren, ihre Erfahrung mit einem Lächeln zu beginnen. Hinter jedem effizienten Einchecksystem steckt eine sorgfältige menschliche Ingenieurskunst. Unser Expertenteam arbeitet mit Flughäfen zusammen, um maßgeschneiderte Lösungen zu entwerfen, die ihren einzigartigen Anforderungen gerecht werden und jedes Detail berücksichtigen, von der Anordnung der Förderbänder bis zur Interaktion mit dem Fluglinienpersonal. Die Technologie kann fortgeschritten sein, aber die menschliche Berührung perfektioniert den Prozess.",
      "airport-driver2-title": "Gepäckabholung am Eingang: Der letzte Schliff",
      "footer-credits": "Credits",
      "footer-privacy": "Datenschutzrichtlinie",
      "footer-cookies": "Cookies"
    }
  },
  cn:{
    translation:{
      "selector-title": "选择您的体验",
      "selector-aeropuerto": "机场",
      "selector-papel": "纸和纸板",
      "selector-logi": "物流",
      "loader-text": "正在加载体验...",
      "header-home": "主页",
      "header-airport": "机场",
      "airport-desliza": "向下滑动",
      "airport-driver1-title": "司机 #1：高效入住微笑服务",
      "airport-driver1-title2": "机场安全",
      "airport-driver1-tab1-title": "CBRA：效率与安全。为乘客提供舒适",
      "airport-driver1-tab1-text": "CBRA（基于索赔的调和区域）过程变得透明，借助我们的解决方案，我们增加了效率和舒适度，使乘客能够快速重新与他们的行李团聚。人类工程学体现在我们系统的效益中。我们的团队致力于实现无缝流程，确保每位乘客在抵达目的地时都有积极的体验。",
      "airport-driver1-tab2-title": "实时屏幕分辨率（OSR）",
      "airport-driver1-tab2-text": "在BHS控制室，我们的工作人员像真正的守护天使一样使用屏幕上的分辨率（OSR）实时解决任何问题，确保行李的稳定和安全流动。在这项技术的背后，是一支经验丰富的人力团队，可以对突发挑战作出高效的回应。人类工程学通过做出明智和迅速的决策，确保运作平稳。",
      "airport-driver1-tab3-title": "机场行业的守护天使",
      "airport-driver1-tab3-text": "MATEC，您在机场行李处理系统方面的可靠合作伙伴，接受了在机场流程的每一步中担任守护天使的角色。从乘客办理登机手续的那一刻起，到在行李提取区取回行李，我们致力于提供优化效率、安全和舒适度的解决方案，同时推动盈利能力和可持续性。下面，我们将探讨MATEC如何在登机、安检、行李分类（化妆）、行李提取等流程中添加了人性化的元素。",
      "airport-slidable-title1": "安全的守护天使",
      "airport-slidable-texto1": "在机场安全的核心，MATEC确保安全而可靠的通过Security Feed和Security Shunt流程。我们的尖端技术与人工监控相结合，提供了坚实的安全性。人类工程学在解释我们系统收集的数据方面表现出色。我们的专家持续分析行李的模式，并监测任何异常情况，立即采取行动，确保所有乘客的安全。",
      "airport-slidable-title3": "无忧旅行",
      "airport-slidable-texto3": "MATEC确保与TSA和ECAC合规的检查系统（HBS - 行李检查系统 | CBIS - 托运行李检查系统）实现集成，以在1级、2级和3级执行行李检查，实现了最高级别的分拣准确度，每条线的容量高达3600 UPH。对于可疑/干净的行李分类，MATEC拥有高科技和强大的解决方案，保证所需的可靠性，因为它们在机场可能遇到的最关键环境中经过了测试。",
      "airport-driver1-title-sidebar": "司机 #1",
      "airport-driver1-text-sidebar": "我们从顺畅友好的办理登机手续开始旅程。我们的行李处理解决方案确保快速而无缝的流程，使乘客能够微笑着开始他们的旅程。在每个高效的办理登机手续系统背后都有精心设计的人类工程。我们的专家团队与机场合作，设计出适应其独特需求的定制解决方案，考虑了从传送带布局到与航空公司工作人员互动的每一个细节。技术可能会很先进，但是人的触摸完善了流程。",
      "airport-driver2-title": "行李提取入口：最后的润色",
      "footer-credits": "制作者",
      "footer-privacy": "隐私政策",
      "footer-cookies": "Cookie"
    }
  },
  fr:{
    translation:{
      "selector-title": "Choisissez votre expérience",
      "selector-aeropuerto": "Aéroports",
      "selector-papel": "Papier et carton",
      "selector-logi": "Logistique",
      "loader-text": "Chargement de l'expérience...",
      "header-home": "Accueil",
      "header-airport": "Aéroports",
      "airport-desliza": "Faites glisser vers le bas",
      "airport-driver1-title": "CONDUCTEUR #1 : Enregistrement efficace avec le sourire",
      "airport-driver1-title2": "Sécurité de l'aéroport",
      "airport-driver1-tab1-title": "CBRA : Efficacité et sécurité. Confort des passagers",
      "airport-driver1-tab1-text": "Le processus CBRA (Claim-Based Reconciliation Area) devient transparent avec nos solutions. Nous ajoutons de l'efficacité et du confort, permettant aux passagers de retrouver rapidement leurs bagages. L'ingénierie humaine se reflète dans l'efficacité de nos systèmes. Notre équipe s'efforce d'obtenir un processus sans couture, garantissant que chaque passager ait une expérience positive en arrivant à sa destination.",
      "airport-driver1-tab2-title": "Résolution à l'écran en temps réel (OSR)",
      "airport-driver1-tab2-text": "Dans la salle de contrôle du BHS, notre personnel agit comme de véritables anges gardiens, utilisant la résolution à l'écran (OSR) pour résoudre tout problème en temps réel, assurant un flux constant et sûr des bagages. Derrière cette technologie se trouve une équipe humaine hautement qualifiée qui réagit efficacement aux défis imprévus. L'ingénierie humaine se distingue en prenant des décisions informées et rapides qui maintiennent le fonctionnement en douceur.",
      "airport-driver1-tab3-title": "Votre ange gardien dans l'industrie aéroportuaire",
      "airport-driver1-tab3-text": "MATEC, votre partenaire fiable dans les systèmes de gestion des bagages des aéroports, assume son rôle d'ange gardien à chaque étape du processus aéroportuaire. Dès l'instant où les passagers s'enregistrent jusqu'à la récupération de leurs bagages à la zone de réclamation des bagages, nous nous engageons à fournir des solutions qui optimisent l'efficacité, la sécurité et le confort tout en favorisant la rentabilité et la durabilité. Ci-dessous, nous explorons comment MATEC ajoute une touche humaine aux processus tels que l'enregistrement, le contrôle de sécurité, le tri des bagages (Make Up), la réclamation des bagages, et bien plus encore.",
      "airport-slidable-title1": "Ange gardien en matière de sécurité",
      "airport-slidable-texto1": "Au cœur de la sécurité aéroportuaire, MATEC garantit un passage sûr et sécurisé à travers les processus de Security Feed et Security Shunt. Notre technologie de pointe se combine à une surveillance humaine pour offrir une sécurité solide. L'ingénierie humaine se distingue dans l'interprétation des données collectées par nos systèmes. Nos experts analysent en permanence les modèles de bagages et surveillent toute anomalie, agissant immédiatement pour garantir la sécurité de tous les passagers.",
      "airport-slidable-title3": "Voyage sans soucis",
      "airport-slidable-texto3": "MATEC garantit une intégration avec les systèmes d'inspection (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) conformément à la TSA et à l'ECAC pour effectuer l'inspection des bagages aux niveaux 1, 2 et 3, atteignant la plus haute précision de tri, avec des capacités allant jusqu'à 3600 UPH par ligne. Pour le tri des bagages suspects/propres, MATEC dispose de solutions de haute technologie et robustes garantissant la fiabilité requise, car elles ont été testées dans les environnements aéroportuaires les plus critiques.",
      "airport-driver1-title-sidebar": "Conducteur #1",
      "airport-driver1-text-sidebar": "Nous commençons le voyage par un enregistrement fluide et convivial. Nos solutions de gestion des bagages garantissent un processus rapide et sans faille, permettant aux passagers de commencer leur expérience avec le sourire. Derrière chaque système d'enregistrement efficace se trouve une ingénierie humaine méticuleuse. Notre équipe d'experts collabore avec les aéroports pour concevoir des solutions sur mesure adaptées à leurs besoins uniques, en tenant compte de chaque détail, de la disposition des tapis roulants à l'interaction avec le personnel de la compagnie aérienne. La technologie peut être avancée, mais c'est la touche humaine qui perfectionne le processus.",
      "airport-driver2-title": "Réclamation des bagages d'entrée : La touche finale",
      "footer-credits": "Crédits",
      "footer-privacy": "Politique de confidentialité",
      "footer-cookies": "Cookies"
    }  
  },
  pt:{
    translation:{
      "selector-title": "Escolha sua experiência",
      "selector-aeropuerto": "Aeroportos",
      "selector-papel": "Papel e papelão",
      "selector-logi": "Logística",
      "loader-text": "Carregando experiência...",
      "header-home": "Início",
      "header-airport": "Aeroportos",
      "airport-desliza": "Deslize para baixo",
      "airport-driver1-title": "MOTORISTA #1: Check-in eficiente com um sorriso",
      "airport-driver1-title2": "Segurança do aeroporto",
      "airport-driver1-tab1-title": "CBRA: Eficiência e segurança. Conforto para passageiros",
      "airport-driver1-tab1-text": "O processo CBRA (Claim-Based Reconciliation Area) torna-se transparente com as nossas soluções. Acrescentamos eficiência e conforto, permitindo que os passageiros se reencontrem rapidamente com a sua bagagem. A engenharia humana reflete-se na eficácia dos nossos sistemas. A nossa equipa esforça-se por alcançar um processo contínuo, garantindo que cada passageiro tenha uma experiência positiva ao chegar ao seu destino.",
      "airport-driver1-tab2-title": "Resolução em tela (OSR) em tempo real",
      "airport-driver1-tab2-text": "Na sala de controlo do BHS, a nossa equipa age como verdadeiros anjos da guarda, utilizando a Resolução em Tela (OSR) para resolver quaisquer problemas em tempo real, garantindo um fluxo constante e seguro de bagagem. Por trás desta tecnologia está uma equipa humana altamente treinada que responde eficazmente a desafios inesperados. A engenharia humana destaca-se ao tomar decisões informadas e rápidas que mantêm a operação a funcionar sem problemas.",
      "airport-driver1-tab3-title": "Seu Anjo da Guarda na Indústria Aeroportuária",
      "airport-driver1-tab3-text": "A MATEC, seu parceiro confiável em sistemas de tratamento de bagagem de aeroporto, abraça o seu papel como seu Anjo da Guarda em cada etapa do processo aeroportuário. Desde o momento em que os passageiros fazem o check-in até pegar sua bagagem na área de reclamação de bagagem, estamos empenhados em fornecer soluções que otimizam a eficiência, a segurança e o conforto, ao mesmo tempo que impulsionam a rentabilidade e a sustentabilidade. A seguir, exploramos como a MATEC adiciona um toque humano a processos como Check-In, Inspeção de Segurança, Classificação de Bagagem (Make Up), Reclamação de Bagagem e muito mais.",
      "airport-slidable-title1": "Anjo da Guarda em Segurança",
      "airport-slidable-texto1": "No coração da segurança do aeroporto, a MATEC garante uma passagem segura e protegida através dos processos de Security Feed e Security Shunt. Nossa tecnologia de ponta combina-se com a vigilância humana para oferecer segurança sólida. A engenharia humana destaca-se na interpretação dos dados coletados pelos nossos sistemas. Nossos especialistas analisam continuamente os padrões de bagagem e monitoram qualquer anomalia, agindo imediatamente para garantir a segurança de todos os passageiros.",
      "airport-slidable-title3": "Viagem sem Preocupações",
      "airport-slidable-texto3": "A MATEC garante integração com sistemas de inspeção (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) em conformidade com a TSA e a ECAC para realizar inspeção de bagagem nos níveis 1, 2 e 3, alcançando a mais alta precisão de classificação, com capacidades de até 3600 UPH por linha. Para a classificação de bagagem suspeita/limpa, a MATEC possui soluções de alta tecnologia e robustez que garantem a confiabilidade necessária, pois foram testadas nos ambientes mais críticos dos aeroportos.",
      "airport-driver1-title-sidebar": "Motorista #1",
      "airport-driver1-text-sidebar": "Iniciamos a viagem com um check-in eficiente e amigável. Nossas soluções de tratamento de bagagem garantem um processo rápido e sem problemas, permitindo que os passageiros comecem sua experiência com um sorriso. Por trás de cada sistema de check-in eficiente está uma engenharia humana meticulosa. Nossa equipe de especialistas colabora com os aeroportos para projetar soluções personalizadas que atendam às suas necessidades únicas, considerando cada detalhe, desde o layout das esteiras transportadoras até a interação com a equipe da companhia aérea. A tecnologia pode ser avançada, mas é o toque humano que aperfeiçoa o processo.",
      "airport-driver2-title": "Reclamação de Bagagem de Entrada: O Toque Final",
      "footer-credits": "Créditos",
      "footer-privacy": "Política de Privacidade",
      "footer-cookies": "Cookies"
    }
  },
  es: {
    translation: {
      "selector-title": "Selecciona tu experiencia",
      "selector-aeropuerto": "Aeropuertos",
      "selector-papel": "Papel y carton",
      "selector-logi": "Logística",

      "loader-text": "Cargando experiencia...",

      "header-home": "Inicio",
      "header-airport": "Aeropuertos",
      "header-home": "Inicio",
      "airport-desliza": "Desliza hacia abajo",
      "airport-driver1-title": "DRIVER #1: Check-In Eficiente con una Sonrisa",
      "airport-driver1-title2": "Seguridad del aeropuerto",

      "airport-driver1-tab1-title": "CBRA: Eficiencia y seguridad.Comodidad para Pasajeros",
      "airport-driver1-tab1-text":"El proceso de CBRA (Claim-Based Reconciliation Area) se vuelve transparente con nuestras soluciones. Agregamos eficiencia y comodidad, permitiendo a los pasajeros reunirse con su equipaje rápidamente. La ingeniería humana se refleja en la eficacia de nuestros sistemas. Nuestro equipo se esfuerza por lograr un proceso sin fisuras, garantizando que cada pasajero tenga una experiencia positiva al llegar a su destino.",
      "airport-driver1-tab2-title": "Resolución en Pantalla (OSR) en Tiempo Real",
      "airport-driver1-tab2-text":"En la sala de control del BHS, nuestro personal actúa como verdaderos ángeles guardianes, utilizando el On-Screen Resolution (OSR) para abordar cualquier problema en tiempo real, garantizando un flujo constante y seguro de equipaje. Detrás de esta tecnología, hay un equipo humano altamente capacitado que responde de manera eficaz ante desafíos imprevistos. La ingeniería humana se destaca al tomar decisiones informadas y rápidas que mantienen la operación en movimiento sin problemas.",
      "airport-driver1-tab3-title": "Tu Ángel Guardián en la Industria Aeroportuaria",
      "airport-driver1-tab3-text":"MATEC, tu socio confiable en sistemas de manejo de equipaje para aeropuertos, abraza su papel como tu Ángel Guardián en cada paso del proceso aeroportuario. Desde el momento en que los pasajeros realizan el check-in hasta la recogida de su equipaje en el área de reclamo, estamos comprometidos en brindar soluciones que optimizan la eficiencia, la seguridad y la comodidad, al tiempo que impulsan la rentabilidad y la sostenibilidad. A continuación, exploramos cómo MATEC agrega un toque humano a procesos como Check-In, Inspección de Seguridad, Clasificación de equipaje (Make Up) Reclamo de equipaje y más.",
    
      "airport-slidable-title1":'Ángel Guardián en Seguridad',
      "airport-slidable-texto1":'En el corazón de la seguridad del aeropuerto, MATEC garantiza un paso seguro y protegido a través de los procesos de Security Feed y Security Shunt. Nuestra tecnología de vanguardia se combina con la vigilancia humana para ofrecer una seguridad sólida. La ingeniería humana se destaca en la interpretación de los datos recopilados por nuestros sistemas. Nuestros expertos analizan continuamente los patrones de equipaje y supervisan cualquier anomalía, actuando de inmediato para garantizar la seguridad de todos los pasajeros.',
      "airport-slidable-title3":'Viaje sin Preocupaciones',
      "airport-slidable-texto3":'MATEC garantiza la integración con los sistemas de inspección (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspecytion System) en cumplimiento con la TSA y ECAC, para hacer la inspección del equipaje en los niveles 1, 2 y 3, logrando precisión de clasificación del más alto nivel, con capacidades hasta de 3600 UPH por línea. Para la clasificación de equipaje sospechoso / limpio, MATEC cuenta con soluciones de alta tecnologíay robustez, que garantizan la confiabilidad requerida, gracias a que han sido probados en los ambientes más criticos a los que se puedan presentar en los aeropuertos.',

      "airport-driver1-title-sidebar": "Driver #1",
      "airport-driver1-text-sidebar": "Iniciamos el viaje con un check-in fluido y amigable. Nuestras soluciones de manejo de equipaje aseguran que el proceso sea rápido y sin complicaciones (seamless), permitiendo a los pasajeros comenzar su experiencia con una sonrisa. Detrás de cada sistema de check-in eficiente, hay una ingeniería humana meticulosa. Nuestro equipo de expertos colabora con los aeropuertos para diseñar soluciones personalizadas que se adapten a sus necesidades únicas, considerando cada detalle, desde la disposición de las cintas transportadoras hasta la interacción con el personal de la aerolínea. La tecnología puede ser avanzada, pero es la mano humana la que perfecciona el proceso.",

      "airport-driver2-title": "Reclamo de Equipaje de Entrada: El Toque Final",
      "footer-credits":"Creditos",
      "footer-privacy":"Política de privacidad",
      "footer-cookies":"Cookies",


    
    }
  } 
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;