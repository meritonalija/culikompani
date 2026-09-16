/**
 * CULI KOMPANI / CULI AUTOTRANSPORT — MODERN JAVASCRIPT
 * Full Multilingual (AL default, MK, EN, DE), Interactive Europe Map,
 * Fullscreen Gallery Lightbox with Touch Gestures, Quote & WhatsApp Generator.
 */

document.addEventListener('DOMContentLoaded', () => {

  // CULIAUTOTRANSPORT intro loader
  const ctLoader = document.getElementById('ctLoader');
  if (ctLoader) {
    const startedAt = performance.now();
    const minimumIntro = 3100;
    const finishLoader = () => {
      const elapsed = performance.now() - startedAt;
      window.setTimeout(() => {
        ctLoader.classList.add('ct-loader--hide');
        document.body.classList.remove('ct-loading');
        window.setTimeout(() => ctLoader.remove(), 500);
      }, Math.max(0, minimumIntro - elapsed));
    };
    if (document.readyState === 'complete') finishLoader();
    else window.addEventListener('load', finishLoader, { once: true });
    // Safety fallback so a failed external resource can never trap the visitor.
    window.setTimeout(finishLoader, 6000);
  }


  /* ========================================================================== 
     1. MULTILINGUAL DICTIONARY (AL, MK, EN, DE)
     Default Language: Albanian (AL)
     ========================================================================== */
  const translations = {
    al: {
      // Topbar & Nav
      topbar_status: "Linjat e rregullta javore: Gjermania dhe Zvicra ➔ Maqedonia e Veriut dhe Kosova",
      nav_home: "Kreu",
      nav_about: "Rreth Nesh",
      nav_services: "Shërbimet",
      nav_routes: "Rrugët Evropiane",
      nav_fleet: "Flota",
      nav_gallery: "Galeria",
      nav_contact: "Kontakti",
      nav_quote: "Kërko Ofertë",
      header_cta: "KËRKO OFERTË",

      // Hero
      hero_pill: "Lider në Logjistikën Automobilistike Që Nga 1999",
      hero_title: "AUTOMJETI JUAJ.<br><span class=\"text-gradient\">PËRGJEGJËSIA JONË.</span>",
      hero_subtitle: "Transport profesional dhe i sigurt automjetesh në të gjithë Evropën që nga viti 1999.",
      hero_desc: "Linja të rregullta dhe të besueshme javore nga Gjermania dhe Zvicra drejt Maqedonisë së Veriut, Kosovës dhe destinacioneve më të mëdha evropiane.",
      hero_cta_primary: "KËRKO OFERTË TRANSPORTI",
      hero_cta_secondary: "ZBULO MË SHUMË",
      stat_est: "Që nga viti",
      stat_car_trucks: "Kamionë transportues veturash",
      stat_routes_label: "Qendrat operative",

      // Trust Bar
      trust_item1_title: "VITE PËRVOJË",
      trust_item1_sub: "Përvojë solide dhe reputacion që nga 1999",
      trust_item2_title: "KAMIONË VETURASH",
      trust_item2_sub: "Rimorkio shumë-katëshe për automjete",
      trust_item4_title: "GJERMANI & ZVICËR",
      trust_item4_sub: "Prani dhe logjistikë direkte ndërkombëtare",
      trust_item5_title: "RRJETI EVROPIAN",
      trust_item5_sub: "Lidhje direkte me Austrinë dhe tregjet kryesore evropiane",

      // About
      about_tag: "RRETH CULI KOMPANI",
      about_title: "MË SHUMË SE NJË KOMPANI TRANSPORTI.",
      about_badge: "Mbi 25 vjet sukses të dëshmuar në Evropë",
      about_total_fleet: "Flota e përgjithshme e kamionëve",
      about_safety: "Siguri dhe përgjegjësi e garantuar",
      about_lead: "<strong>CULI KOMPANI</strong> vepron në fushën e transportit të automjeteve që nga viti <strong>1999</strong>. Gjatë më shumë se dy dekadave, kompania ka ndërtuar një rrjet të fuqishëm ndërkombëtar dhe një flotë moderne, të specializuar për transportin e automjeteve.",
      about_p1: "Me seli qendrore në Kumanovë, Maqedoni e Veriut, dhe me praninë aktive operative të lidhur drejtpërdrejt me Gjermaninë dhe Zvicrën, ne ofrojmë zgjidhje të plotë logjistike për individë, sallone automjetesh, tregtarë dhe korporata.",
      pillar_safety_title: "Siguri e plotë",
      pillar_safety_desc: "Çdo automjet trajtohet me kujdes maksimal gjatë gjithë tranzitit.",
      pillar_punctuality_title: "Përpikëri në kohë",
      pillar_punctuality_desc: "Nisje javore dhe mbërritje të planifikuara me saktësi zvicerane.",
      pillar_comm_title: "Komunikim i vazhdueshëm",
      pillar_comm_desc: "Informim transparent ndaj klientit nga ngarkimi deri te dorëzimi.",
      pillar_logistics_title: "Logjistikë profesionale",
      pillar_logistics_desc: "Procedura doganore dhe dokumentacion ndërkombëtar i rregullt.",
      about_cta: "MËSO MË SHUMË PËR CULI",

      // Timeline
      timeline_tag: "HISTORIA E SUKSESIT",
      timeline_title: "UDHËTIMI I CULI KOMPANI NGA VITI 1999",
      timeline_step1_title: "Themelimi në Kumanovë",
      timeline_step1_desc: "CULI KOMPANI nis rrugëtimin e saj me vizionin për shërbim elitar në transportin e automjeteve.",
      timeline_step2_title: "Zhvillimi Ndërkombëtar",
      timeline_step2_desc: "Krijimi i linjave të para të rregullta ndërkombëtare dhe zgjerimi i kapaciteteve transportuese.",
      timeline_step3_title: "Gjermania & Zvicra",
      timeline_step3_desc: "Përfaqësi të forta dhe logjistikë e vazhdueshme javore midis Gjermanisë, Zvicrës dhe Ballkanit.",
      timeline_step4_title: "Flotë Prej 31+ Kamionësh",
      timeline_step4_desc: "25+ kamionë për vetura me shtrirje të plotë evropiane.",

      // Services
      services_tag: "EKSPERTIZA JONË",
      services_title: "SHËRBIME LOGJISTIKE AUTOMOBILISTIKE",
      services_desc: "Zgjidhje të specializuara të transportit të përshtatura për çdo lloj automjeti, nga veturat familjare e luksoze deri te flotat e plota.",
      svc1_title: "Transport Veturash",
      svc1_desc: "Transport profesional i veturave të pasagjerëve, limuzinave, SUV-ve dhe veturave sportive/luksoze në rrugë ndërkombëtare me sigurim të plotë.",
      svc1_badge: "25+ Kamionë me Dy Nivele",
      svc3_title: "Transport Importi (DE • CH)",
      svc3_desc: "Transport i rregullt i automjeteve të blera në Gjermani dhe Zvicër drejt Maqedonisë së Veriut, Kosovës dhe vendeve të rajonit.",
      svc3_badge: "Linja Javore të Rregullta",
      svc4_title: "Transport Eksporti Evropian",
      svc4_desc: "Shpërndarje dhe transport i automjeteve të reja dhe të përdorura drejt Austrisë dhe tregjeve të tjera evropiane, me certifikime dhe dokumentacion evropian.",
      svc4_badge: "AT • DE • CH",
      svc5_title: "Flota & Auto-Sallone",
      svc5_desc: "Zgjidhje logjistike me kontratë për distributorët e automjeteve, autosallonet dhe kompanitë që kërkojnë zhvendosje të njëkohshme të shumë mjeteve.",
      svc5_badge: "Kapacitet të Plotë Kamioni",

      // Routes
      routes_tag: "RRJETI LOGJISTIK EVROPIAN",
      routes_title: "DUKE LIDHUR EVROPËN, NJË AUTOMJET NË ÇDO KOHË.",
      routes_desc: "Zbuloni rrugët tona ndërkombëtare. Klikoni mbi secilin shtet në hartë ose në shiritin e mëposhtëm për të parë detajet dhe linjat aktive.",
      route_all: "Të Gjitha Rrugët",
      route_frequency: "Frekuenca e Nisjeve",
      route_duration: "Koha Mesatare e Tranzitit",
      route_fleet_used: "Lloji i Kamionëve",
      route_tracking: "Ndjekja & Komunikimi",
      route_cta_btn: "Llogarit Ofertën për Këtë Rrugë",

      // Fleet
      fleet_tag: "FLOTA MODERNE",
      fleet_title: "FLOTA CULI AUTOTRANSPORT",
      fleet_desc: "31+ kamionë të dedikuar me teknologji bashkëkohore për transportin e sigurt të automjeteve të çdo madhësie.",
      fleet_all: "E Gjithë Flota (31+)",
      fleet_cars: "Kamionë Veturash (25+)",
      fleet_stat_car_title: "KAMIONË PËR TRANSPORT VETURASH",
      fleet_stat_car_desc: "Rimorkio të specializuara me kapacitet për 8 deri 10 vetura",
      fleet_item1_desc: "Kamion transportues modern me dy kate, i përshtatshëm për ngarkimin e sigurt të 8-10 veturave familjare dhe luksoze.",
      fleet_item3_desc: "Pika qendrore e mirëmbajtjes, kontrollit teknik dhe përgatitjes së flotës për nisjet e çdo jave drejt Evropës.",
      fleet_spec_cap: "Kapaciteti:",
      fleet_spec_route: "Rrugët:",
      fleet_spec_safety: "Sigurimi:",
      fleet_spec_loc: "Vendndodhja:",
      fleet_spec_maint: "Kontrolli:",
      fleet_spec_driver: "Shoferë:",

      // Process
      process_tag: "PROCESI I THJESHTË",
      process_title: "SI FUNKSIONON TRANSPORTI NË 4 HAPA",
      process_desc: "Një proces logjistik i qartë, transparent dhe i organizuar nga momenti i kërkesës suaj deri te dorëzimi në destinacion.",
      step1_title: "KËRKESA",
      step1_desc: "Klienti dërgon të dhënat e automjetit, vendndodhjen e marrjes (Gjermani, Zvicër, etj.) dhe destinacionin e dëshiruar.",
      step2_title: "ORGANIZIMI",
      step2_desc: "Ekipi logjistik i CULI cakton datën e marrjes, konfirmon itinerarin dhe përgatit të gjithë dokumentacionin e transportit.",
      step3_title: "TRANSPORTI",
      step3_desc: "Automjeti ngarkohet me kujdes profesional dhe transportohet nga shoferë me përvojë nëpër rrugët evropiane.",
      step4_title: "DORËZIMI",
      step4_desc: "Automjeti arrin i sigurt dhe në kohë në destinacionin përfundimtar, i gatshëm për pranim nga klienti.",

      // Why Culi
      why_tag: "BESUESHMËRIA JONË",
      why_title: "PSE TË NA BESONI?",
      why_desc: "Me mbi 25 vite përvojë, flotë prej 30+ kamionësh dhe linja të rregullta evropiane, CULI Autotransport ofron transport të sigurt, të saktë dhe transparent për çdo automjet.",
      why1_title: "PËRVOJË QË NGA 1999",
      why1_desc: "Mbi 25 vite përvojë të vazhdueshme dhe njohuri të thelluara të legjislacionit dhe rrugëve evropiane.",
      why2_title: "FLOTË E SPECIALIZUAR",
      why2_desc: "25 kamionë të dedikuar për autovetura.",
      why3_title: "RRJET NDËRKOMBËTAR",
      why3_desc: "Prani operacionale në Gjermani, Zvicër dhe Austri, si dhe rrjet i zgjeruar në tregjet kryesore evropiane.",
      why4_title: "LOGJISTIKË E SIGURT",
      why4_desc: "Organizim i saktë, orare të rregullta, sigurim i plotë CMR dhe përpikëri maksimale në dorëzim.",
      why5_title: "KUJDES PROFESIONAL",
      why5_desc: "Automjetet trajtohen me vëmendje dhe përkujdesje të lartë gjatë ngarkimit, rrugës dhe shkarkimit.",
      why6_title: "QASJE PERSONALE",
      why6_desc: "Zgjidhje të përshtatura me fleksibilitet si për klientët individualë, ashtu edhe për bizneset dhe sallonet.",

      // Gallery
      gallery_tag: "FOTOGRAFI REALE NGA FLOTA",
      gallery_title: "GALERIA CULI AUTOTRANSPORT",
      gallery_desc: "Shikoni kamionët tanë në veprim nëpër autostradat evropiane dhe qendrat logjistike. Klikoni mbi çdo foto për ta parë me ekran të plotë.",
      gal_all: "Të Gjitha",
      gal_trucks: "Kamionë",
      gal_cars: "Vetura",
      gal_europe: "Evropë",
      gal_more: "SHIKO MË SHUMË FOTO",

      // Social
      social_tag: "RRJETET SOCIALE",
      social_title: "NDIQNI UDHËTIMIN E CULI AUTOTRANSPORT",
      social_desc: "Shikoni çdo ditë në faqen tonë zyrtare në Facebook fotografitë më të fundit të kamionëve, veturave të transportuara dhe arritjeve të reja nëpër Evropë.",

      // Quote & Contact
      quote_tag: "OFERTË E SHPEJTË PA DETYRIME",
      quote_title: "KENI NEVOJË PËR TRANSPORTIN E NJË AUTOMJETI?",
      quote_desc: "Na tregoni vendndodhjen e automjetit tuaj dhe destinacionin ku dëshironi të shkojë. Ekipi ynë do t'ju kthejë përgjigje me të gjitha informacionet dhe çmimin më të favorshëm.",
      form_name: "Emri & Mbiemri *",
      form_phone: "Numri i Telefonit / WhatsApp *",
      form_email: "Email Adresa",
      form_vehicle_type: "Lloji i Automjetit *",
      form_pickup_country: "Shteti i Marrjes *",
      form_pickup_city: "Qyteti i Marrjes *",
      form_deliv_country: "Shteti i Dorëzimit *",
      form_deliv_city: "Qyteti i Dorëzimit *",
      form_date: "Koha e Preferuar e Transportit",
      form_notes: "Detaje Shtesë (Marka, Modeli, Gjendja)",
      form_submit: "DËRGO KËRKESËN",
      form_whatsapp: "DËRGO ME WHATSAPP",
      form_success_title: "Faleminderit! Kërkesa juaj u pranua me sukses.",
      form_success_desc: "Ekipi ynë logjistik do t'ju kontaktojë brenda një kohe shumë të shkurtër me ofertën e detajuar.",
      direct_contact_title: "KONTAKT I DREJTPËRDREJTË",
      direct_contact_sub: "Për pyetje urgjente ose rezervime të menjëhershme, na telefononi drejtpërdrejt në linjat tona zyrtare:",
      call_action: "Thirr Tani",
      email_action: "Dërgo Email",
      hq_title: "Selia Qendrore:",
      hq_hours: "Hënë – Shtunë: 08:00 – 19:00",

      // Map Section
      contact_tag: "VENDNDODHJA & BAZA OPERACIONALE",
      contact_title: "SELIA NË KUMANOVË, PRANI NË TË GJITHË EVROPËN",
      contact_desc: "Baza jonë logjistike dhe administrative në Kumanovë siguron koordinim të pandërprerë të të gjitha rrugëve ndërkombëtare.",

      // Footer
      footer_tagline: "Lider në logjistikën automobilistike dhe transportin ndërkombëtar të veturave që nga viti 1999.",
      footer_links: "Lidhje të Shpejta",
      footer_services: "Shërbimet Kryesore",
      footer_contacts: "Kontakti Zyrtar",

      // Mobile
      mob_call: "Thirr",
      mob_quote: "Ofertë"
    },

    mk: {
      topbar_status: "Редовни неделни линии: Германија & Швајцарија ➔ Северна Македонија & Косово",
      nav_home: "Почетна",
      nav_about: "За Нас",
      nav_services: "Услуги",
      nav_routes: "Европски Рути",
      nav_fleet: "Возен Парк",
      nav_gallery: "Галерија",
      nav_contact: "Контакт",
      nav_quote: "Побарај Понуда",
      header_cta: "ПОБАРАЈ ПОНУДА",
      hero_pill: "Лидер во Автомобилската Логистика Од 1999",
      hero_title: "ВАШЕТО ВОЗИЛО.<br><span class=\"text-gradient\">НАША ОДГОВОРНОСТ.</span>",
      hero_subtitle: "Професионален и сигурен транспорт на возила низ Европа од 1999 година.",
      hero_desc: "Редовни и доверливи неделни линии од Германија и Швајцарија кон Северна Македонија, Косово и европските дестинации.",
      hero_cta_primary: "ПОБАРАЈ ПОНУДА ЗА ТРАНСПОРТ",
      hero_cta_secondary: "ДОЗНАЈ ПОВЕЌЕ",
      stat_est: "Од Година",
      stat_car_trucks: "Камиони за Автомобили",
      stat_routes_label: "Оперативни Центри",
      trust_item1_title: "ГОДИНИ ИСКУСТВО",
      trust_item1_sub: "Солидно искуство и репутација од 1999",
      trust_item2_title: "КАМИОНИ ЗА КОЛИ",
      trust_item2_sub: "Повеќекатни специјални автовози",
      trust_item4_title: "ГЕРМАНИЈА & ШВАЈЦАРИЈА",
      trust_item4_sub: "Директно меѓународно присуство и логистика",
      trust_item5_title: "ЕВРОПСКА МРЕЖА",
      trust_item5_sub: "Директни врски со Австрија и главните европски пазари",
      about_tag: "ЗА CULI KOMPANI",
      about_title: "ПОВЕЌЕ ОД КОМПАНИЈА ЗА ТРАНСПОРТ.",
      about_badge: "Над 25 години докажан успех во Европа",
      about_total_fleet: "Вкупен Возен Парк на Камиони",
      about_safety: "Загарантирана Безбедност",
      about_lead: "<strong>CULI KOMPANI</strong> е активна во областа на транспортот на возила од <strong>1999</strong> година. Со повеќе од две децении, разви силна меѓународна мрежа и модерна флота за автомобили.",
      about_p1: "Со седиште во Куманово и активно оперативно присуство во Германија и Швајцарија, нудиме комплетни логистички решенија за поединци и автосалони.",
      pillar_safety_title: "Целосна Безбедност",
      pillar_safety_desc: "Секое возило се третира со максимално внимание за време на транзитот.",
      pillar_punctuality_title: "Точност во Време",
      pillar_punctuality_desc: "Неделни поаѓања и планирано пристигнување со швајцарска прецизност.",
      pillar_comm_title: "Секојдневна Комуникација",
      pillar_comm_desc: "Транспарентна информација од утовар до истовар.",
      pillar_logistics_title: "Професионална Логистика",
      pillar_logistics_desc: "Царински процедури и уредна меѓународна документација.",
      about_cta: "ДОЗНАЈ ПОВЕЌЕ ЗА CULI",
      timeline_tag: "ИСТОРИЈА НА УСПЕХОТ",
      timeline_title: "ПАТУВАЊЕТО НА CULI KOMPANI ОД 1999",
      timeline_step1_title: "Основање во Куманово",
      timeline_step1_desc: "CULI KOMPANI го започнува своето патување со визија за елитен автотранспорт.",
      timeline_step2_title: "Меѓународен Развој",
      timeline_step2_desc: "Создавање на првите редовни меѓународни релации.",
      timeline_step3_title: "Германија & Швајцарија",
      timeline_step3_desc: "Силни претставништва и постојана неделна логистика.",
      timeline_step4_title: "Флота од 31+ Камиони",
      timeline_step4_desc: "25+ камиони за автомобили со целосна европска покриеност.",
      services_tag: "НАШАТА ЕКСПЕРТИЗА",
      services_title: "АВТОМОБИЛСКИ ЛОГИСТИЧКИ УСЛУГИ",
      services_desc: "Специјализирани решенија за транспорт прилагодени за патнички и луксузни возила и цели возни паркови.",
      svc1_title: "Транспорт на Автомобили",
      svc1_desc: "Професионален транспорт на патнички возила, лимузини, SUV и спортски коли со целосно CMR осигурување.",
      svc1_badge: "25+ Двокатни Камиони",
      svc3_title: "Увозен Транспорт (DE • CH)",
      svc3_desc: "Редовен транспорт на возила купени во Германија и Швајцарија кон Северна Македонија и Косово.",
      svc3_badge: "Редовни Неделни Линии",
      svc4_title: "Европски Извозен Транспорт",
      svc4_desc: "Дистрибуција и транспорт на возила кон Австрија и други европски пазари со целосна документација.",
      svc4_badge: "AT • DE • CH",
      svc5_title: "Флоти & Автосалони",
      svc5_desc: "Договорна логистика за дистрибутери и автосалони со целосен капацитет.",
      svc5_badge: "Целосен Капацитет на Камион",
      routes_tag: "ЕВРОПСКА ЛОГИСТИЧКА МРЕЖА",
      routes_title: "ПОВРЗУВАЈЌИ ЈА ЕВРОПА, ЕДНО ВОЗИЛО ВО СЕКОЕ ВРЕМЕ.",
      routes_desc: "Истражете ги нашите меѓународни рути со клик на мапата или копчињата подолу.",
      route_all: "Сите Рути",
      route_frequency: "Фреквенција",
      route_duration: "Време на Транзит",
      route_fleet_used: "Тип на Камиони",
      route_tracking: "Следење",
      route_cta_btn: "Пресметај Понуда за Оваа Рута",
      fleet_tag: "МОДЕРЕН ВОЗЕН ПАРК",
      fleet_title: "ВОЗЕН ПАРК CULI AUTOTRANSPORT",
      fleet_desc: "31+ камиони со современа технологија за безбеден транспорт.",
      fleet_all: "Сите Возила (31+)",
      fleet_cars: "За Автомобили (25+)",
      fleet_stat_car_title: "КАМИОНИ ЗА ТРАНСПОРТ НА КОЛИ",
      fleet_stat_car_desc: "Специјални приколки за 8 до 10 возила",
      process_tag: "ЕДНОСТАВЕН ПРОЦЕС",
      process_title: "КАКО ФУНКЦИОНИРА ТРАНСПОРТОТ ВО 4 ЧЕКОРИ",
      process_desc: "Јасен и транспарентен логистички процес од барањето до доставата.",
      step1_title: "БАРАЊЕ",
      step1_desc: "Клиентот испраќа податоци за возилото и локацијата.",
      step2_title: "ОРГАНИЗАЦИЈА",
      step2_desc: "Логистичкиот тим го планира датумот и документацијата.",
      step3_title: "ТРАНСПОРТ",
      step3_desc: "Возилото внимателно се товари и превезува низ Европа.",
      step4_title: "ДОСТАВА",
      step4_desc: "Возилото безбедно и навреме пристигнува на дестинацијата.",
      why_tag: "НАШАТА ДОВЕРБА",
      why_title: "ЗОШТО ДА НИ ВЕРУВАТЕ?",
      why_desc: "Со повеќе од 25 години искуство, флота од 30+ камиони и редовни европски линии, CULI Autotransport нуди безбеден и транспарентен транспорт.",
      why1_title: "ИСКУСТВО ОД 1999",
      why1_desc: "Над 25 години искуство и познавање на европските патишта.",
      why2_title: "СПЕЦИЈАЛИЗИРАНА ФЛОТА",
      why2_desc: "25 камиони за коли.",
      why3_title: "МЕЃУНАРОДНА МРЕЖА",
      why3_desc: "Оперативно присуство во Германија, Швајцарија и регионот.",
      why4_title: "СИГУРНА ЛОГИСТИКА",
      why4_desc: "Редовни термини, целосно CMR осигурување и точност.",
      why5_title: "ПРОФЕСИОНАЛНА ГРИЖА",
      why5_desc: "Високо ниво на внимание при утовар и транспорт.",
      why6_title: "ЛИЧЕН ПРИСТАП",
      why6_desc: "Прилагодени решенија за индивидуални и бизнис клиенти.",
      gallery_tag: "РЕАЛНИ ФОТОГРАФИИ",
      gallery_title: "ГАЛЕРИЈА CULI AUTOTRANSPORT",
      gallery_desc: "Погледнете ги нашите камиони во акција на европските автопати.",
      gal_all: "Сите",
      gal_trucks: "Камиони",
      gal_cars: "Коли",
      gal_europe: "Европа",
      gal_more: "ПОКАЖИ ПОВЕЌЕ ФОТОГРАФИИ",
      social_tag: "СОЦИЈАЛНИ МРЕЖИ",
      social_title: "СЛЕДЕТЕ ГО ПАТУВАЊЕТО НА CULI",
      social_desc: "Следете ги секојдневно најновите фотографии и патувања на нашата официјална Facebook страница.",
      quote_tag: "БРЗА ПОНУДА",
      quote_title: "ВИ ТРЕБА ТРАНСПОРТ НА ВОЗИЛО?",
      quote_desc: "Кажете ни каде се наоѓа возилото и каде треба да пристигне.",
      form_name: "Име и Презиме *",
      form_phone: "Телефон / WhatsApp *",
      form_email: "Емаил Адреса",
      form_vehicle_type: "Тип на Возило *",
      form_pickup_country: "Земја на Подигнување *",
      form_pickup_city: "Град на Подигнување *",
      form_deliv_country: "Земја на Достава *",
      form_deliv_city: "Град на Достава *",
      form_date: "Префериран Датум",
      form_notes: "Дополнителни Детали",
      form_submit: "ИСПРАТИ БАРАЊЕ",
      form_whatsapp: "ИСПРАТИ ПРЕКУ WHATSAPP",
      form_success_title: "Ви благодариме! Барањето е успешно примено.",
      form_success_desc: "Нашиот логистички тим ќе ве контактира набрзо со понуда.",
      direct_contact_title: "ДИРЕКТЕН КОНТАКТ",
      direct_contact_sub: "Јавете ни се директно на нашите официјални телефонски броеви:",
      call_action: "Јави се",
      email_action: "Емаил",
      hq_title: "Седиште:",
      hq_hours: "Пон – Саб: 08:00 – 19:00",
      contact_tag: "ЛОКАЦИЈА",
      contact_title: "СЕДИШТЕ ВО КУМАНОВО, ПРИСУСТВО ВО ЦЕЛА ЕВРОПА",
      contact_desc: "Нашата логистичка база во Куманово обезбедува постојана координација.",
      footer_tagline: "Лидер во меѓународниот автомобилски транспорт од 1999 година.",
      footer_links: "Брзи Линкови",
      footer_services: "Главни Услуги",
      footer_contacts: "Официјален Контакт",
      mob_call: "Повик",
      mob_quote: "Понуда"
    },

    en: {
      topbar_status: "Regular weekly lines: Germany & Switzerland ➔ North Macedonia & Kosovo",
      nav_home: "Home",
      nav_about: "About Us",
      nav_services: "Services",
      nav_routes: "European Routes",
      nav_fleet: "Fleet",
      nav_gallery: "Gallery",
      nav_contact: "Contact",
      nav_quote: "Get Quote",
      header_cta: "REQUEST A QUOTE",
      hero_pill: "Automotive Logistics Leader Since 1999",
      hero_title: "YOUR VEHICLE.<br><span class=\"text-gradient\">OUR RESPONSIBILITY.</span>",
      hero_subtitle: "Professional and secure vehicle transportation across Europe since 1999.",
      hero_desc: "Reliable weekly lines connecting Germany and Switzerland with North Macedonia, Kosovo, and major European hubs.",
      hero_cta_primary: "REQUEST A TRANSPORT QUOTE",
      hero_cta_secondary: "LEARN MORE",
      stat_est: "Since Year",
      stat_car_trucks: "Car Transport Trucks",
      stat_routes_label: "Operating Hubs",
      trust_item1_title: "YEARS EXPERIENCE",
      trust_item1_sub: "Proven track record since 1999",
      trust_item2_title: "CAR TRANSPORTERS",
      trust_item2_sub: "Double-deck automotive carriers",
      trust_item4_title: "GERMANY & SWITZERLAND",
      trust_item4_sub: "Direct international representations",
      trust_item5_title: "EUROPEAN NETWORK",
      trust_item5_sub: "Direct connections to Austria and key European markets",
      about_tag: "ABOUT CULI KOMPANI",
      about_title: "MORE THAN A TRANSPORT COMPANY.",
      about_badge: "Over 25 years of excellence across Europe",
      about_total_fleet: "Total Fleet Strength",
      about_safety: "Guaranteed Safety & Liability",
      about_lead: "<strong>CULI KOMPANI</strong> has been active in vehicle logistics since <strong>1999</strong>. Over two decades, we have built a powerful European network and specialized modern fleet for cars.",
      about_p1: "Headquartered in Kumanovo, North Macedonia, with active operational presence in Germany and Switzerland, we deliver end-to-end automotive logistics for private clients, dealerships, and fleet managers.",
      pillar_safety_title: "Full Safety",
      pillar_safety_desc: "Every vehicle is handled with utmost precision throughout transit.",
      pillar_punctuality_title: "Punctual Deliveries",
      pillar_punctuality_desc: "Weekly departures and Swiss-timed arrival schedules.",
      pillar_comm_title: "Transparent Updates",
      pillar_comm_desc: "Clear updates with clients from loading to final handover.",
      pillar_logistics_title: "Professional Logistics",
      pillar_logistics_desc: "Complete customs support and international CMR documentation.",
      about_cta: "LEARN MORE ABOUT CULI",
      timeline_tag: "OUR JOURNEY",
      timeline_title: "CULI KOMPANI MILESTONES SINCE 1999",
      timeline_step1_title: "Founded in Kumanovo",
      timeline_step1_desc: "CULI KOMPANI started operations with a vision for premium automotive logistics.",
      timeline_step2_title: "International Growth",
      timeline_step2_desc: "Establishment of the first cross-border vehicle transport corridors.",
      timeline_step3_title: "Germany & Switzerland",
      timeline_step3_desc: "Dedicated representative offices and regular weekly lines.",
      timeline_step4_title: "Fleet of 31+ Trucks",
      timeline_step4_desc: "25+ car carriers serving all Europe.",
      services_tag: "OUR EXPERTISE",
      services_title: "AUTOMOTIVE LOGISTICS SERVICES",
      services_desc: "Specialized vehicle shipping solutions tailored for passenger vehicles and corporate fleets.",
      svc1_title: "Passenger Car Transport",
      svc1_desc: "Professional shipping of sedans, SUVs, luxury supercars and electric vehicles with full CMR coverage.",
      svc1_badge: "25+ Multi-Deck Carriers",
      svc3_title: "Import Transport (DE • CH)",
      svc3_desc: "Weekly vehicle transport from Germany and Switzerland to North Macedonia, Kosovo, and the Balkans.",
      svc3_badge: "Regular Weekly Schedules",
      svc4_title: "European Export Transport",
      svc4_desc: "Seamless vehicle distribution towards Austria and other European markets, with full European documentation.",
      svc4_badge: "AT • DE • CH",
      svc5_title: "Fleet & Dealership Logistics",
      svc5_desc: "Contract vehicle logistics for car manufacturers, dealerships, and bulk corporate buyers.",
      svc5_badge: "Full Truckload Capacity",
      routes_tag: "EUROPEAN LOGISTICS NETWORK",
      routes_title: "CONNECTING EUROPE, ONE VEHICLE AT A TIME.",
      routes_desc: "Explore our cross-border routes. Click on any country or tab below to inspect active lanes.",
      route_all: "All Routes",
      route_frequency: "Departure Frequency",
      route_duration: "Average Transit",
      route_fleet_used: "Truck Allocation",
      route_tracking: "Tracking & Contact",
      route_cta_btn: "Calculate Quote for this Route",
      fleet_tag: "MODERN FLEET",
      fleet_title: "THE CULI AUTOTRANSPORT FLEET",
      fleet_desc: "31+ specialized vehicles engineered for safe, high-capacity vehicle transportation.",
      fleet_all: "Entire Fleet (31+)",
      fleet_cars: "Car Carriers (25+)",
      fleet_stat_car_title: "CAR TRANSPORT TRUCKS",
      fleet_stat_car_desc: "Multi-deck trailers with 8 to 10 vehicle capacity",
      process_tag: "SIMPLE WORKFLOW",
      process_title: "HOW VEHICLE TRANSPORT WORKS IN 4 STEPS",
      process_desc: "A streamlined, transparent logistics process from your initial inquiry to final delivery.",
      step1_title: "REQUEST",
      step1_desc: "Customer submits vehicle specifications, pickup location, and destination.",
      step2_title: "ORGANIZE",
      step2_desc: "CULI logistics schedules pickup, confirms route, and prepares documentation.",
      step3_title: "TRANSPORT",
      step3_desc: "Vehicle is professionally strapped, secured, and driven by certified operators.",
      step4_title: "DELIVERY",
      step4_desc: "Vehicle arrives on schedule at the final destination, verified and in top condition.",
      why_tag: "OUR REPUTATION",
      why_title: "WHY TRUST US?",
      why_desc: "With over 25 years of experience, a fleet of 30+ transporters and regular European routes, CULI Autotransport delivers safe, reliable and transparent transport for every vehicle.",
      why1_title: "EXPERIENCE SINCE 1999",
      why1_desc: "25+ years of continuous operations and deep knowledge of European highways.",
      why2_title: "SPECIALIZED FLEET",
      why2_desc: "25 dedicated car transporters.",
      why3_title: "INTERNATIONAL NETWORK",
      why3_desc: "Operational presence in Germany, Switzerland, and the Balkans.",
      why4_title: "RELIABLE LOGISTICS",
      why4_desc: "Accurate timetables, comprehensive CMR insurance, and punctuality.",
      why5_title: "PROFESSIONAL CARE",
      why5_desc: "Top-tier vehicle handling during loading, transit, and unloading.",
      why6_title: "PERSONAL APPROACH",
      why6_desc: "Customized solutions for individual car buyers as well as enterprise dealers.",
      gallery_tag: "AUTHENTIC PHOTOGRAPHY",
      gallery_title: "CULI AUTOTRANSPORT GALLERY",
      gallery_desc: "View our real fleet in transit across European highways and logistics depots.",
      gal_all: "All Photos",
      gal_trucks: "Trucks",
      gal_cars: "Cars",
      gal_europe: "Europe",
      gal_more: "SHOW MORE PHOTOS",
      social_tag: "SOCIAL MEDIA",
      social_title: "FOLLOW THE CULI JOURNEY",
      social_desc: "Check our official Facebook page for daily updates, freshly transported vehicles, and new routes.",
      quote_tag: "INSTANT INQUIRY",
      quote_title: "NEED TO TRANSPORT A VEHICLE?",
      quote_desc: "Tell us where your car is and where it needs to go. Our team will get back to you with rates and dates.",
      form_name: "Full Name *",
      form_phone: "Phone / WhatsApp *",
      form_email: "Email Address",
      form_vehicle_type: "Vehicle Type *",
      form_pickup_country: "Pickup Country *",
      form_pickup_city: "Pickup City *",
      form_deliv_country: "Delivery Country *",
      form_deliv_city: "Delivery City *",
      form_date: "Preferred Date",
      form_notes: "Additional Notes (Make, Model, Condition)",
      form_submit: "SUBMIT REQUEST",
      form_whatsapp: "SEND VIA WHATSAPP",
      form_success_title: "Thank you! Your request was received.",
      form_success_desc: "Our dispatch team will contact you shortly with all transport details.",
      direct_contact_title: "DIRECT CONTACT",
      direct_contact_sub: "For urgent logistics requests or instant bookings, call our official lines directly:",
      call_action: "Call Now",
      email_action: "Email",
      hq_title: "Headquarters:",
      hq_hours: "Mon – Sat: 08:00 – 19:00",
      contact_tag: "HEADQUARTERS",
      contact_title: "HEADQUARTERS IN KUMANOVO, PRESENCE ACROSS EUROPE",
      contact_desc: "Our administrative and fleet depot in Kumanovo provides continuous fleet coordination.",
      footer_tagline: "European leader in automotive logistics and vehicle transport since 1999.",
      footer_links: "Quick Links",
      footer_services: "Main Services",
      footer_contacts: "Official Contacts",
      mob_call: "Call",
      mob_quote: "Quote"
    },

    de: {
      topbar_status: "Regelmäßige wöchentliche Linien: Deutschland & Schweiz ➔ Nordmazedonien & Kosovo",
      nav_home: "Startseite",
      nav_about: "Über Uns",
      nav_services: "Dienstleistungen",
      nav_routes: "Europa-Routen",
      nav_fleet: "Fuhrpark",
      nav_gallery: "Galerie",
      nav_contact: "Kontakt",
      nav_quote: "Angebot",
      header_cta: "ANGEBOT ANFORDERN",
      hero_pill: "Führend in der Automobillogistik seit 1999",
      hero_title: "IHR FAHRZEUG.<br><span class=\"text-gradient\">UNSERE VERANTWORTUNG.</span>",
      hero_subtitle: "Professioneller und sicherer Fahrzeugtransport in ganz Europa seit 1999.",
      hero_desc: "Zuverlässige wöchentliche Linien von Deutschland und der Schweiz nach Nordmazedonien, Kosovo und in weitere europäische Länder.",
      hero_cta_primary: "TRANSPORTANGEBOT ANFORDERN",
      hero_cta_secondary: "MEHR ERFAHREN",
      stat_est: "Gegründet im Jahr",
      stat_car_trucks: "Autotransporter-LKW",
      stat_routes_label: "Betriebszentren",
      trust_item1_title: "JAHRE ERFAHRUNG",
      trust_item1_sub: "Bewährte Zuverlässigkeit seit 1999",
      trust_item2_title: "AUTOTRANSPORTER",
      trust_item2_sub: "Moderne Doppelstock-Auflieger",
      trust_item4_title: "DEUTSCHLAND & SCHWEIZ",
      trust_item4_sub: "Direkte internationale Präsenz",
      trust_item5_title: "EUROPÄISCHES NETZWERK",
      trust_item5_sub: "Direkte Verbindungen nach Österreich und zu den wichtigsten europäischen Märkten",
      about_tag: "ÜBER CULI KOMPANI",
      about_title: "MEHR ALS NUR EIN TRANSPORTUNTERNEHMEN.",
      about_badge: "Über 25 Jahre Exzellenz in Europa",
      about_total_fleet: "Gesamte Fuhrparkstärke",
      about_safety: "Garantierte Sicherheit & CMR",
      about_lead: "<strong>CULI KOMPANI</strong> ist seit <strong>1999</strong> im Bereich des Fahrzeugtransports tätig. In über 25 Jahren haben wir ein starkes europäisches Netzwerk und einen modernen Spezialfuhrpark aufgebaut.",
      about_p1: "Mit Hauptsitz in Kumanovo und aktiver Präsenz in Deutschland und der Schweiz bieten wir umfassende Fahrzeuglogistik für Privatkunden, Autohäuser und Flottenbetreiber.",
      pillar_safety_title: "Höchste Sicherheit",
      pillar_safety_desc: "Jedes Fahrzeug wird während des gesamten Transports mit größter Sorgfalt behandelt.",
      pillar_punctuality_title: "Pünktlichkeit",
      pillar_punctuality_desc: "Wöchentliche Abfahrten mit schweizerischer Präzision.",
      pillar_comm_title: "Transparente Kommunikation",
      pillar_comm_desc: "Klarer Informationsfluss von der Beladung bis zur Übergabe.",
      pillar_logistics_title: "Professionelle Logistik",
      pillar_logistics_desc: "Komplette Zolldokumentation und vorschriftsmäßige CMR-Papiere.",
      about_cta: "MEHR ÜBER CULI ERFAHREN",
      timeline_tag: "UNSER WEG",
      timeline_title: "DIE GESCHICHTE VON CULI KOMPANI SEIT 1999",
      timeline_step1_title: "Gründung in Kumanovo",
      timeline_step1_desc: "CULI KOMPANI startet mit der Vision für erstklassigen Fahrzeugtransport.",
      timeline_step2_title: "Internationale Expansion",
      timeline_step2_desc: "Aufbau der ersten festen Routen durch Europa.",
      timeline_step3_title: "Deutschland & Schweiz",
      timeline_step3_desc: "Feste Repräsentanzen und regelmäßige Wochentouren.",
      timeline_step4_title: "Fuhrpark mit 31+ LKWs",
      timeline_step4_desc: "25+ Autotransporter für ganz Europa.",
      services_tag: "UNSERE EXPERTISE",
      services_title: "AUTOMOBIL-LOGISTIK-SERVICES",
      services_desc: "Spezialisierte Transportlösungen für PKWs, Luxuswagen und ganze Flotten.",
      svc1_title: "PKW-Transport",
      svc1_desc: "Sicherer Transport von Limousinen, SUVs, Sportwagen und Elektrofahrzeugen.",
      svc1_badge: "25+ Doppelstock-Transporter",
      svc3_title: "Import-Transport (DE • CH)",
      svc3_desc: "Regelmäßiger Fahrzeugtransport von Deutschland und der Schweiz nach Nordmazedonien und Kosovo.",
      svc3_badge: "Regelmäßige Wochenlinien",
      svc4_title: "Europäischer Export-Transport",
      svc4_desc: "Verlässliche Fahrzeugüberführung nach Österreich und in weitere europäische Märkte mit vollständiger Dokumentation.",
      svc4_badge: "AT • DE • CH",
      svc5_title: "Flotten & Autohäuser",
      svc5_desc: "Vertragslogistik für Autohändler, Importeure und Mehrfachtransporte.",
      svc5_badge: "Komplette LKW-Kapazität",
      routes_tag: "EUROPÄISCHES NETZWERK",
      routes_title: "EUROPA VERBINDEN, EIN FAHRZEUG NACH DEM ANDEREN.",
      routes_desc: "Entdecken Sie unsere Routen durch Klick auf die Karte oder die Buttons darunter.",
      route_all: "Alle Routen",
      route_frequency: "Frequenz",
      route_duration: "Transitzeit",
      route_fleet_used: "LKW-Einsatz",
      route_tracking: "Tracking & Betreuung",
      route_cta_btn: "Angebot für diese Route berechnen",
      fleet_tag: "MODERNER FUHRPARK",
      fleet_title: "DER CULI AUTOTRANSPORT FUHRPARK",
      fleet_desc: "31+ moderne LKWs für den sicheren Transport jeder Fahrzeugklasse.",
      fleet_all: "Gesamter Fuhrpark (31+)",
      fleet_cars: "Autotransporter (25+)",
      fleet_stat_car_title: "AUTOTRANSPORTER-LKWS",
      fleet_stat_car_desc: "Auflieger für 8 bis 10 Fahrzeuge",
      process_tag: "EINFACHER ABLAUF",
      process_title: "IN 4 SCHRITTEN ZUM FAHRZEUGTRANSPORT",
      process_desc: "Klar strukturierte Logistik von der Anfrage bis zur pünktlichen Ankunft.",
      step1_title: "ANFRAGE",
      step1_desc: "Sie übermitteln uns Fahrzeugtyp, Abhol- und Zielort.",
      step2_title: "ORGANISATION",
      step2_desc: "Unser Team plant die Route, Termine und Dokumente.",
      step3_title: "TRANSPORT",
      step3_desc: "Sichere Verladung und fachgerechter Transport durch erfahrene Fahrer.",
      step4_title: "LIEFERUNG",
      step4_desc: "Pünktliche Übergabe Ihres Fahrzeugs am Bestimmungsort.",
      why_tag: "UNSERE STÄRKEN",
      why_title: "WARUM UNS VERTRAUEN?",
      why_desc: "Mit über 25 Jahren Erfahrung, einer Flotte von mehr als 30 Transportern und regelmäßigen europäischen Routen bietet CULI Autotransport sicheren und transparenten Fahrzeugtransport.",
      why1_title: "ERFAHRUNG SEIT 1999",
      why1_desc: "Über 25 Jahre Praxis und detaillierte Kenntnis der europäischen Vorschriften.",
      why2_title: "SPEZIALISIERTER FUHRPARK",
      why2_desc: "25 Autotransporter.",
      why3_title: "INTERNATIONALES NETZWERK",
      why3_desc: "Feste Standorte in Deutschland, der Schweiz und Südosteuropa.",
      why4_title: "SICHERE LOGISTIK",
      why4_desc: "Zuverlässige Fahrpläne, volle CMR-Versicherung und Termintreue.",
      why5_title: "PROFESSIONELLE BEHANDLUNG",
      why5_desc: "Sorgfältige Handhabung bei Verladung und Fahrt.",
      why6_title: "PERSÖNLICHER SERVICE",
      why6_desc: "Maßgeschneiderte Lösungen für Privat- und Geschäftskunden.",
      gallery_tag: "ECHTE FOTOGRAFIEN",
      gallery_title: "CULI AUTOTRANSPORT GALERIE",
      gallery_desc: "Erleben Sie unsere Transporter auf europäischen Autobahnen und Logistikterminals.",
      gal_all: "Alle",
      gal_trucks: "LKWs",
      gal_cars: "Autos",
      gal_europe: "Europa",
      gal_more: "MEHR FOTOS ANZEIGEN",
      social_tag: "SOCIAL MEDIA",
      social_title: "FOLGEN SIE DER CULI REISE",
      social_desc: "Besuchen Sie unsere offizielle Facebook-Seite für aktuelle Transportfotos und Neuigkeiten.",
      quote_tag: "SCHNELLES ANGEBOT",
      quote_title: "BENÖTIGEN SIE EINEN FAHRZEUGTRANSPORT?",
      quote_desc: "Teilen Sie uns Abhol- und Zielort mit. Wir melden uns umgehend mit einem fairen Angebot.",
      form_name: "Name & Vorname *",
      form_phone: "Telefon / WhatsApp *",
      form_email: "E-Mail-Adresse",
      form_vehicle_type: "Fahrzeugtyp *",
      form_pickup_country: "Abholland *",
      form_pickup_city: "Abholstadt *",
      form_deliv_country: "Zielland *",
      form_deliv_city: "Zielstadt *",
      form_date: "Wunschdatum",
      form_notes: "Zusätzliche Angaben (Marke, Modell, Zustand)",
      form_submit: "ANFRAGE ABSENDEN",
      form_whatsapp: "ÜBER WHATSAPP SENDEN",
      form_success_title: "Vielen Dank! Ihre Anfrage wurde empfangen.",
      form_success_desc: "Unser Logistikteam wird sich in Kürze mit einem konkreten Angebot bei Ihnen melden.",
      direct_contact_title: "DIREKTER KONTAKT",
      direct_contact_sub: "Rufen Sie uns für dringende Anfragen direkt an unseren offiziellen Nummern an:",
      call_action: "Jetzt Anrufen",
      email_action: "E-Mail",
      hq_title: "Hauptsitz:",
      hq_hours: "Mo – Sa: 08:00 – 19:00",
      contact_tag: "STANDORT",
      contact_title: "HAUPTSITZ IN KUMANOVO, PRÄSENZ IN GANZ EUROPA",
      contact_desc: "Unser Logistikzentrum in Kumanovo steuert den gesamten internationalen Verkehr.",
      footer_tagline: "Führend in der Automobillogistik und im Fahrzeugtransport seit 1999.",
      footer_links: "Schnelllinks",
      footer_services: "Hauptleistungen",
      footer_contacts: "Offizieller Kontakt",
      mob_call: "Anrufen",
      mob_quote: "Angebot"
    }
  };

  let currentLang = 'al';

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update text content of data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (translations[lang][key]) {
        elem.innerHTML = translations[lang][key];
      }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Save language to localStorage
    try {
      localStorage.setItem('culi_lang', lang);
    } catch(e) {}
  }

  // Bind Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang');
      applyLanguage(selected);
    });
  });

  // Check saved language or default to 'al'
  const savedLang = localStorage.getItem('culi_lang');
  if (savedLang && translations[savedLang]) {
    applyLanguage(savedLang);
  } else {
    applyLanguage('al');
  }

  // Compact statistics ribbon: keep the numeric values separate from the labels.
  document.querySelectorAll('.trust-group:not([aria-hidden="true"]) .trust-card').forEach((card, index) => {
    const value = index === 0 ? '25+' : index === 1 ? '30+' : '';
    const info = card.querySelector('.trust-info');
    const oldDescription = info?.querySelector('p');
    if (oldDescription) oldDescription.remove();
    if (value && info && !info.querySelector('.trust-value')) {
      const number = document.createElement('span');
      number.className = 'trust-value';
      number.textContent = value;
      info.prepend(number);
    }
  });


  /* ==========================================================================
     2. STICKY HEADER & COMPACT ON SCROLL
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('compact');
    } else {
      siteHeader.classList.remove('compact');
    }
  }, { passive: true });


  /* ==========================================================================
     3. MOBILE DRAWER MENU
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });


  /* ==========================================================================
     4. INTERACTIVE EUROPE MAP & ROUTE CONTROLS
     ========================================================================== */
  const routeData = {
    all: {
      title: "Gjermani &bull; Zvicër ➔ Maqedoni &bull; Kosovë &bull; Evropë",
      heading: "Rrjeti Kryesor Ndërkombëtar",
      desc: "Linja të rregullta javore për të gjitha llojet e autoveturave dhe SUV-ve. Shërbim i garantuar me 31+ kamionë modernë shumë-katësh.",
      freq: "Javore (Çdo Javë)",
      time: "3 – 5 Ditë",
      trucks: "25+ Veturash (8-10 për Kamion)",
      tracking: "Përditësim i Vazhdueshëm"
    },
    de: {
      title: "Gjermani (Deutschland) ➔ Maqedoni e Veriut & Kosovë",
      heading: "Korridori Gjerman (München, Stuttgart, Frankfurt, Dortmund)",
      desc: "Lidhje direkte javore nga të gjitha landet e Gjermanisë drejt Kumanovës, Shkupit dhe Prishtinës. Ngarkim i sigurt i veturave të reja dhe të përdorura.",
      freq: "2–3 Herë në Javë",
      time: "3 – 4 Ditë",
      trucks: "Kamionë me Dy Nivele (8-10 Vetura)",
      tracking: "Telefonik & WhatsApp i Drejtpërdrejtë"
    },
    ch: {
      title: "Zvicër (Schweiz) ➔ Maqedoni e Veriut & Kosovë",
      heading: "Korridori Zviceran (Zürich, Basel, Bern, St. Gallen, Luzern)",
      desc: "Specialiteti ynë që nga viti 1999! Shërbim i përjavshëm për autovetura nga të gjitha kantonet e Zvicrës me asistencë doganore.",
      freq: "Çdo Javë (Të Premte / Të Shtunë)",
      time: "3 – 4 Ditë",
      trucks: "Kamionë Veturash (8-10 Vetura)",
      tracking: "Koordinim i Drejtpërdrejtë në Zvicër (+41 76 563 71 71)"
    },
    mk: {
      title: "Maqedonia e Veriut (Kumanovë / Selia Qendrore)",
      heading: "Baza Operacionale dhe Terminali Logjistik",
      desc: "Qendra administrative, mirëmbajtja teknike dhe shpërndarja lokale e të gjitha automjeteve që mbërrijnë nga Evropa Perëndimore.",
      freq: "Operim i Përditshëm",
      time: "Destinacion Përfundimtar",
      trucks: "Baza e 31+ Kamionëve",
      tracking: "Selia: +389 70 311 100 / 078 338 765"
    },
    xk: {
      title: "Kosovë (Prishtinë, Ferizaj, Gjilan, Prizren)",
      heading: "Linja e Drejtpërdrejtë për Kosovë",
      desc: "Dërgesa të pandërprera javore për klientët individualë dhe auto-sallonet në mbarë Kosovën me zbarkim të shpejtë dhe të sigurt.",
      freq: "Javore",
      time: "3 – 5 Ditë nga DE/CH",
      trucks: "Kamionë Veturash (8-10 Vetura)",
      tracking: "Dorëzim në Adresë ose Terminal"
    },
    at: {
      title: "Austri (Österreich) ➔ Ballkan",
      heading: "Tranziti dhe Destinacionet Austriake (Wien, Graz, Salzburg)",
      desc: "Pikë kyçe ndërlidhëse në rrugët tona nga Gjermania dhe Zvicra, si dhe shërbim transporti për automjete në Austri.",
      freq: "Çdo Javë",
      time: "2 – 3 Ditë",
      trucks: "Kamionë me Standarde Euro 6",
      tracking: "Koordinim i Vazhdueshëm"
    }
  };

  const routeCountryTitle = document.getElementById('routeCountryTitle');
  const routeMainHeading = document.getElementById('routeMainHeading');
  const routeDescription = document.getElementById('routeDescription');
  const routeFreq = document.getElementById('routeFreq');
  const routeTime = document.getElementById('routeTime');
  const routeTrucks = document.getElementById('routeTrucks');
  const routeTracking = document.getElementById('routeTracking');

  function updateRouteView(countryKey) {
    const data = routeData[countryKey] || routeData.all;
    routeCountryTitle.innerHTML = data.title;
    routeMainHeading.textContent = data.heading;
    routeDescription.textContent = data.desc;
    routeFreq.textContent = data.freq;
    routeTime.textContent = data.time;
    routeTrucks.textContent = data.trucks;
    routeTracking.textContent = data.tracking;

    // Update active pill button
    document.querySelectorAll('.pill-btn').forEach(btn => {
      if (btn.getAttribute('data-country') === countryKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update map SVG shapes
    document.querySelectorAll('.interactive-country').forEach(shape => {
      const shapeCountry = shape.getAttribute('data-country');
      if (countryKey === 'all' || shapeCountry === countryKey) {
        shape.classList.add('active');
      } else {
        shape.classList.remove('active');
      }
    });
  }

  // Pill button listeners
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const country = e.currentTarget.getAttribute('data-country');
      updateRouteView(country);
    });
  });

  // Map SVG country and city node click listeners
  document.querySelectorAll('.interactive-country, .city-node').forEach(elem => {
    elem.addEventListener('click', (e) => {
      const country = e.currentTarget.getAttribute('data-country');
      if (country) updateRouteView(country);
    });
  });


  /* ==========================================================================
     5. FLEET FILTER TABS
     ========================================================================== */
  const fleetFilterBtns = document.querySelectorAll('.fleet-btn');
  const fleetCards = document.querySelectorAll('.fleet-card');

  fleetFilterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.currentTarget.getAttribute('data-filter');

      fleetFilterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      fleetCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ==========================================================================
     6. GALLERY FILTER TABS & FULLSCREEN LIGHTBOX
     ========================================================================== */
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  let galleryItems = document.querySelectorAll('.gallery-item');

  const galleryPhotos = [
    {
      src: 'assets/images/gallery-1.jpeg',
      categories: 'trucks europe',
      title: 'Flota e Culi Autotransport ne terminal',
      alt: 'Flota e kamioneve transportuese Culi Autotransport',
      heading: 'Flota ne Terminal',
      caption: 'Kamione transportuese Culi Autotransport'
    },
    {
      src: 'assets/images/gallery-2.jpeg',
      categories: 'cars trucks',
      title: 'Ngarkimi i Lamborghini Urus',
      alt: 'Lamborghini Urus duke u ngarkuar ne transportues',
      heading: 'Ngarkimi i Automjetit',
      caption: 'Transport i sigurt i automjeteve luksoze'
    },
    {
      src: 'assets/images/gallery-3.jpeg',
      categories: 'cars europe',
      title: 'Ferrari ne dorezim',
      alt: 'Ferrari e kuqe ne dorezim',
      heading: 'Ferrari ne Dorezim',
      caption: 'Transport i kujdesshem ne cdo hap'
    },
    {
      src: 'assets/images/gallery-4.jpeg',
      categories: 'cars trucks',
      title: 'Mercedes G-Class ne transport',
      alt: 'Mercedes G-Class duke u pergatitur per transport',
      heading: 'Mercedes G-Class',
      caption: 'Pergatitur per nisje'
    },
    {
      src: 'assets/images/gallery-5.jpeg',
      categories: 'trucks cars',
      title: 'Kamione Culi ne pike karburanti',
      alt: 'Kamione Culi Autotransport me automjete ne transport',
      heading: 'Flota ne Rruge',
      caption: 'Transportuesit tane ne veprim'
    },
    {
      src: 'assets/images/gallery-6.jpeg',
      categories: 'trucks cars europe',
      title: 'Automjete premium ne transport',
      alt: 'Automjete premium duke u transportuar',
      heading: 'Automjete Premium',
      caption: 'Ngarkese e sigurt dhe profesionale'
    },
    {
      src: 'assets/images/gallery-7.jpeg',
      categories: 'trucks cars europe',
      title: 'Kolona e kamioneve Culi Autotransport',
      alt: 'Kamione transportues Culi Autotransport ne rruge',
      heading: 'Flota ne Konvoj',
      caption: 'Rrjeti yne ne levizje'
    },
    {
      src: 'assets/images/gallery-8.jpeg',
      categories: 'cars trucks europe',
      title: 'Lamborghini Revuelto ne transport',
      alt: 'Lamborghini Revuelto e kuqe ne transportues automjetesh',
      heading: 'Lamborghini Revuelto',
      caption: 'Transport i sigurt per automjete ekskluzive'
    },
    {
      src: 'assets/images/gallery-9.jpeg',
      categories: 'trucks cars europe',
      title: 'Transportues Culi me ngarkese te plote',
      alt: 'Kamion transportues me automjete ne terminal',
      heading: 'Ngarkese e Plote',
      caption: 'Flota jone ne veprim'
    },
    {
      src: 'assets/images/gallery-10.jpeg',
      categories: 'cars trucks',
      title: 'BMW M4 ne pergatitje per transport',
      alt: 'BMW M4 e gjelber duke u ngarkuar ne transportues',
      heading: 'BMW M4 ne Transport',
      caption: 'Kujdes maksimal ne cdo ngarkim'
    },
    {
      src: 'assets/images/gallery-11.jpeg',
      categories: 'cars trucks europe',
      title: 'Audi R8 ne destinacion',
      alt: 'Audi R8 e zeze prane transportuesit te automjeteve',
      heading: 'Audi R8 ne Dorezim',
      caption: 'Nga marrja deri te dorezimi'
    },
    {
      src: 'assets/images/gallery-12.jpeg',
      categories: 'trucks cars europe',
      title: 'Transportues Culi me automjete premium',
      alt: 'Kamion transportues Culi me automjete premium',
      heading: 'Automjete Premium',
      caption: 'Kapacitet dhe siguri ne cdo rruge'
    },
    {
      src: 'assets/images/gallery-13.jpeg',
      categories: 'trucks cars europe',
      title: 'Konvoj me automjete luksoze',
      alt: 'Kamion transportues me automjete luksoze',
      heading: 'Konvoj Premium',
      caption: 'Flota Culi ne rruget evropiane'
    },
    {
      src: 'assets/images/gallery-14.jpeg',
      categories: 'trucks cars europe',
      title: 'Transportues per dy automjete',
      alt: 'Kamion i kuq transportues me dy automjete',
      heading: 'Transport i Specializuar',
      caption: 'Zgjidhje fleksibile per cdo ngarkese'
    },
    {
      src: 'assets/images/gallery-15.jpeg',
      categories: 'cars trucks europe',
      title: 'Porsche ne transport nate',
      alt: 'Porsche e zeze dhe automjet sportiv ne transport',
      heading: 'Transport Dite e Nate',
      caption: 'Gjithmone ne levizje per klientet tane'
    },
    {
      src: 'assets/images/gallery-16.jpeg',
      categories: 'trucks cars europe',
      title: 'Ngarkese luksoze ne transportues',
      alt: 'Kamion transportues me automjete sportive ne mbremje',
      heading: 'Ngarkese Luksoze',
      caption: 'Mbrojtje profesionale per cdo automjet'
    },
    {
      src: 'assets/images/gallery-17.jpeg',
      categories: 'trucks cars europe',
      title: 'Flota Culi me automjete sportive',
      alt: 'Kamion Culi me automjete sportive ne transport',
      heading: 'Flota ne Veprim',
      caption: 'Eksperience e plote ne autotransport'
    },
    {
      src: 'assets/images/gallery-18.jpeg',
      categories: 'cars trucks europe',
      title: 'Ferrari ne ngarkim',
      alt: 'Ferrari e kuqe duke u ngarkuar ne transportues',
      heading: 'Ferrari ne Ngarkim',
      caption: 'Kujdes maksimal per automjetet ekskluzive'
    },
    {
      src: 'assets/images/gallery-19.jpeg',
      categories: 'trucks cars europe',
      title: 'Transportues Culi me flote luksoze',
      alt: 'Kamion Culi me automjete luksoze ne transport',
      heading: 'Transport me Kapacitet',
      caption: 'Rrjeti yne ne gjithe Evropen'
    },
    {
      src: 'assets/images/gallery-20.jpeg',
      categories: 'trucks cars europe',
      title: 'Transportues Culi ne perendim',
      alt: 'Kamion transportues Culi me automjete premium ne perendim',
      heading: 'Ne Rruge drejt Destinacionit',
      caption: 'Punctualitet ne cdo udhetim'
    },
    {
      src: 'assets/images/gallery-21.jpeg',
      categories: 'trucks cars europe',
      title: 'Flota Culi ne transport',
      alt: 'Kamion transportues Culi me automjete ne rruge',
      heading: 'Flota Culi',
      caption: 'Transport i sigurt ne gjithe Evropen'
    }
  ];

  galleryItems.forEach((item, index) => {
    const photo = galleryPhotos[index];
    if (!photo) return;

    item.dataset.category = photo.categories;
    item.dataset.img = photo.src;
    item.dataset.title = photo.title;
    const image = item.querySelector('img');
    if (image) {
      image.src = photo.src;
      image.alt = photo.alt;
    }
    const heading = item.querySelector('.gallery-item-caption h5');
    const caption = item.querySelector('.gallery-item-caption span');
    if (heading) heading.textContent = photo.heading;
    if (caption) caption.textContent = photo.caption;
  });

  const galleryGrid = document.getElementById('galleryGrid');
  galleryPhotos.slice(galleryItems.length).forEach(photo => {
    galleryGrid.insertAdjacentHTML('beforeend', `
      <div class="gallery-item" data-category="${photo.categories}" data-img="${photo.src}" data-title="${photo.title}">
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
        <div class="gallery-item-overlay">
          <span class="gallery-zoom-icon">+</span>
          <div class="gallery-item-caption">
            <h5>${photo.heading}</h5>
            <span>${photo.caption}</span>
          </div>
        </div>
      </div>
    `);
  });
  galleryItems = document.querySelectorAll('.gallery-item');
  const galleryMoreBtn = document.getElementById('galleryMoreBtn');
  const galleryPageSize = 2;
  let galleryVisibleLimit = galleryPageSize;
  let activeGalleryFilter = 'all';

  function renderGallery() {
    const matchingItems = Array.from(galleryItems).filter(item => {
      const categories = item.getAttribute('data-category') || '';
      return activeGalleryFilter === 'all' || categories.includes(activeGalleryFilter);
    });

    galleryItems.forEach(item => { item.style.display = 'none'; });
    matchingItems.slice(0, galleryVisibleLimit).forEach(item => { item.style.display = 'block'; });

    if (galleryMoreBtn) {
      galleryMoreBtn.hidden = matchingItems.length <= galleryVisibleLimit;
    }
  }

  renderGallery();

  // Filter functionality
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.getAttribute('data-tab');

      galleryTabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeGalleryFilter = targetTab;
      galleryVisibleLimit = galleryPageSize;
      renderGallery();
    });
  });

  if (galleryMoreBtn) {
    galleryMoreBtn.addEventListener('click', () => {
      galleryVisibleLimit += galleryPageSize;
      renderGallery();
    });
  }

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxIndex = document.getElementById('lightboxIndex');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  let activeGalleryList = [];

  function getVisibleGalleryItems() {
    return Array.from(galleryItems).filter(item => {
      const categories = item.getAttribute('data-category') || '';
      return activeGalleryFilter === 'all' || categories.includes(activeGalleryFilter);
    });
  }

  function openLightbox(index) {
    activeGalleryList = getVisibleGalleryItems();
    if (!activeGalleryList.length) activeGalleryList = Array.from(galleryItems);

    currentGalleryIndex = Math.max(0, Math.min(index, activeGalleryList.length - 1));
    const targetItem = activeGalleryList[currentGalleryIndex];

    const imgSrc = targetItem.getAttribute('data-img') || targetItem.querySelector('img').src;
    const titleText = targetItem.getAttribute('data-title') || 'CULI AUTOTRANSPORT';

    lightboxImg.src = imgSrc;
    lightboxTitle.textContent = titleText;
    lightboxIndex.textContent = `${currentGalleryIndex + 1} / ${activeGalleryList.length}`;

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showNextImage() {
    if (activeGalleryList.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryList.length;
    openLightbox(currentGalleryIndex);
  }

  function showPrevImage() {
    if (activeGalleryList.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryList.length) % activeGalleryList.length;
    openLightbox(currentGalleryIndex);
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeGalleryList = getVisibleGalleryItems();
      const currentPos = activeGalleryList.indexOf(item);
      openLightbox(currentPos !== -1 ? currentPos : index);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      showNextImage();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      showPrevImage();
    }
  }


  /* ==========================================================================
     7. QUOTE FORM & WHATSAPP GENERATOR
     ========================================================================== */
  const quoteForm = document.getElementById('quoteForm');
  const formSuccessBox = document.getElementById('formSuccessBox');
  const whatsappQuoteBtn = document.getElementById('whatsappQuoteBtn');

  function getFormDataSummary() {
    const name = document.getElementById('clientName').value.trim() || 'Klient';
    const phone = document.getElementById('clientPhone').value.trim() || 'I paspecifikuar';
    const email = document.getElementById('clientEmail').value.trim() || 'I paspecifikuar';
    const vehicle = document.getElementById('vehicleType').value;
    const fromCountry = document.getElementById('pickupCountry').value;
    const fromCity = document.getElementById('pickupCity').value.trim() || '';
    const toCountry = document.getElementById('deliveryCountry').value;
    const toCity = document.getElementById('deliveryCity').value.trim() || '';
    const date = document.getElementById('transportDate').value || 'Sa më shpejt';
    const notes = document.getElementById('transportNotes').value.trim() || 'Nuk ka shënime';

    return {
      name, phone, email, vehicle,
      from: `${fromCity ? fromCity + ', ' : ''}${fromCountry}`,
      to: `${toCity ? toCity + ', ' : ''}${toCountry}`,
      date, notes
    };
  }

  function generateWhatsAppURL() {
    const data = getFormDataSummary();
    const msg = 
`*KËRKESË PËR TRANSPORT AUTOMJETI — CULI AUTOTRANSPORT*
---------------------------------------
👤 *Emri:* ${data.name}
📞 *Telefoni:* ${data.phone}
✉️ *Email:* ${data.email}
🚗 *Automjeti:* ${data.vehicle}
📍 *Nga (Marrja):* ${data.from}
🏁 *Drejt (Dorëzimi):* ${data.to}
📅 *Data e Dëshiruar:* ${data.date}
📝 *Detaje Shtesë:* ${data.notes}
---------------------------------------
Dërguar nga uebsajti zyrtar: culi-autotransport.com`;

    // WhatsApp dispatch target: +41 76 563 71 71 (Switzerland & Dispatch line)
    return `https://wa.me/41765637171?text=${encodeURIComponent(msg)}`;
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show in-page confirmation
      if (formSuccessBox) {
        formSuccessBox.classList.add('show');
        formSuccessBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Auto-open WhatsApp with formatted details after 600ms
      setTimeout(() => {
        const waUrl = generateWhatsAppURL();
        window.open(waUrl, '_blank');
      }, 600);
    });
  }

  if (whatsappQuoteBtn) {
    whatsappQuoteBtn.addEventListener('click', () => {
      const waUrl = generateWhatsAppURL();
      window.open(waUrl, '_blank');
    });
  }

});
