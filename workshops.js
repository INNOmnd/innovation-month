// workshops.js
(function () {
  const today = new Date();
  const currentYear =
    (today.getMonth() <= 10) ? today.getFullYear() : today.getFullYear() + 1; // 10 = November

  const WORKSHOPS = [
    // Dinsdag 04-11
    { id:'ongemakkenjacht-1', title:'Ongemakken Jacht', date:`${currentYear}-11-04`, start:'13:00', end:'15:00', speaker:'Tessa', banner:'pictures/ongemakkenjacht.png', desc:'Ongemakkenjacht in het Werkhuis (10 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/ongemakkenjacht-1.html' },
    { id:'ongemakkenjacht-2', title:'Ongemakken Jacht', date:`${currentYear}-11-04`, start:'14:00', end:'15:30', speaker:'Ries & Rogier', banner:'pictures/ongemakkenjacht.png', desc:'Ongemakkenjacht in Huis vd Toekomst (10 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/ongemakkenjacht-2.html' },

    // Woensdag 05-11
    { id:'taal-tool', title:'Maak je persoonlijke AI assistent', date:`${currentYear}-11-05`, start:'09:00', end:'11:00', speaker:'Amy & Joan', banner:'pictures/taal-tool.png', desc:'Wil jij gepersonaliseerde antwoorden ontvangen van Copilot of ChatGPT? … (verkorte intro, volledige uitleg staat in het HTML-bestand).',bannerFit:'cover', status: "closed", descFile:'descriptions/taal-tool.html' },
    { id:'ongemakkenjacht-3', title:'Ongemakken Jacht', date:`${currentYear}-11-05`, start:'10:00', end:'12:00', speaker:'Rogier & Tessa', banner:'pictures/ongemakkenjacht.png', desc:'Ongemakkenjacht in het Werkhuis (10 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/ongemakkenjacht-4.html' },
  
    // Donderdag 06-11
    { id:'ongemakkenjacht-4', title:'Ongemakken Jacht', date:`${currentYear}-11-06`, start:'10:00', end:'12:00', speaker:'Amy & Wendy', banner:'pictures/ongemakkenjacht.png', desc:'Ongemakkenjacht in het Werkhuis (10 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/ongemakkenjacht-5.html' },
    { id:'bewonersteams', title:'Bewonersteams', date:`${currentYear}-11-06`, start:'13:00', end:'15:00', speaker:'Vincent & Reggie', banner:'pictures/bewonersteams.png', desc:'Workshop over bewonersparticipatie via BewonersTeams, met aanpak van SWA en praktijkvoorbeelden.',bannerFit:'cover', status: "closed", descFile:'descriptions/bewonersteams.html' },
  
    // Dinsdag 11-11
    { id:'aftrap', title:'De Aftrap', date:`${currentYear}-11-11`, start:'09:00', end:'11:00', speaker:'Ergin', banner:'pictures/aftrap.png', desc:'We nemen jullie mee in het hele plaatje van innovatie (Boomgaard, Heel Casade).',bannerFit:'', status: "closed", descFile:'descriptions/aftrap.html' },
    { id:'wrk-ai-beginner', title:'Werken met AI beginner', date:`${currentYear}-11-11`, start:'13:00', end:'15:00', speaker:'Job', banner:'pictures/werken-met-ai-beginner.jpg', desc:'Introductie Werken met AI (Lagerhuis, 15 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/wrk-ai-beginner.html' },
    { id:'taal-tool2', title:'Maak je persoonlijke AI assistent', date:`${currentYear}-11-11`, start:'15:00', end:'17:00', speaker:'Amy & Joan', banner:'pictures/taal-tool.png', desc:'Wil jij gepersonaliseerde antwoorden ontvangen van Copilot of ChatGPT? … (verkorte intro, volledige uitleg staat in het HTML-bestand).',bannerFit:'cover', status: "closed", descFile:'descriptions/taal-tool.html' },
    
    // Donderdag 13-11
    { id:'goeie-buurtaal-ai', title:'Goeie Buur-taal met AI', date:`${currentYear}-11-13`, start:'09:00', end:'11:00', speaker:'Amy & Wendy', banner:'pictures/goeie-buurtaal-ai.png', desc:'Goeie Buur-taal met AI (Lagerhuis, 15 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/goeie-buurtaal-ai.html' },
    { id:'dwam', title:'Drone With A Mission', date:`${currentYear}-11-13`, start:'11:00', end:'13:00', speaker:'Ruud Janssen', banner:'pictures/dwam.png', desc:'Inzet van drones voor inspecties, vastgoedbeheer en bouw – met demo’s en praktijkvoorbeelden.',bannerFit:'cover', status: "closed", descFile:'descriptions/dwam.html' },
    { id:'wrk-ai-intermediate', title:'Werken met AI Gevorderd', date:`${currentYear}-11-13`, start:'13:00', end:'15:00', speaker:'Job', banner:'pictures/werken-met-ai-gevorderd.jpg', desc:'Werken met AI in het Werkhuis (10 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/wrk-ai-intermediate.html' },
    { id:'digital-twin', title:'Digital Twin', date:`${currentYear}-11-13`, start:'15:00', end:'17:00', speaker:'Dirk Jan & Wouter', banner:'pictures/digital-twin.svg', desc:'Digital Twin',bannerFit:'cover', status: "closed", descFile:'descriptions/digital-twin.html' },
  
    // Maandag 17-11
    { id:'shortcut', title:'The Shortcut', date:`${currentYear}-11-17`, start:'13:00', end:'15:00', speaker:'Sanne Cornelissen', banner:'pictures/sanne.jpg', desc:'The Shortcut (Lagerhuis, 15 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/shortcut.html' },
  
    // Dinsdag 18-11
    { id:'agile-scrum', title:'Agile Scrum', date:`${currentYear}-11-18`, start:'13:00', end:'15:00', speaker:'Tessa', banner:'pictures/agile-scrum.webp', desc:'Agile-Scrum (Lagerhuis, 15 personen).',bannerFit:'', status: "closed", descFile:'descriptions/agile-scrum.html' },
  
    // Donderdag 20-11
    { id:'omaia', title:'OMAIA Sessie 1', date:`${currentYear}-11-20`, start:'09:00', end:'11:00', speaker:'Rogier', banner:'pictures/omaia.png', desc:'OMAIA in het Lagerhuis (15 personen).',bannerFit:'', status: "closed", descFile:'descriptions/omaia.html' },
    { id:'thuisapp', title:'Thuisapp Sessie 1', date:`${currentYear}-11-20`, start:'10:00', end:'12:00', speaker:'Tessa', banner:'pictures/thuisappwoonz.jpg', desc:'Thuisapp in het Werkhuis (10 personen).',bannerFit:'', status: "closed", descFile:'descriptions/thuisapp.html' },
    { id:'omaia2', title:'OMAIA Sessie 2', date:`${currentYear}-11-20`, start:'13:00', end:'15:00', speaker:'Tessa', banner:'pictures/omaia.png', desc:'OMAIA in het Werkhuis (10 personen).',bannerFit:'', status: "closed", descFile:'descriptions/omaia2.html' },
    { id:'thuisapp2', title:'Thuisapp Sessie 2', date:`${currentYear}-11-20`, start:'15:00', end:'17:00', speaker:'Tessa', banner:'pictures/thuisappwoonz.jpg', desc:'Thuisapp in het Werkhuis (10 personen).',bannerFit:'', status: "closed", descFile:'descriptions/thuisapp2.html' },
  
    // Dinsdag 25-11
    { id:'vr-x4-1', title:'VR beleving dementie Into D'mentia', date:`${currentYear}-11-25`, start:'08:30', end:'09:30', speaker:'Ideon', banner:'pictures/vr-x4.png', desc:'VR? x 4 in Huis vd Toekomst (6 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/vr-x4.html' },
    { id:'vr-x4-2', title:'VR beleving dementie Into D'mentia', date:`${currentYear}-11-25`, start:'09:30', end:'10:30', speaker:'Ideon', banner:'pictures/vr-x4.png', desc:'VR? x 4 in Huis vd Toekomst (6 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/vr-x4.html' },
    { id:'vr-x4-3', title:'VR beleving dementie Into D'mentia', date:`${currentYear}-11-25`, start:'10:45', end:'11:45', speaker:'Ideon', banner:'pictures/vr-x4.png', desc:'VR? x 4 in Huis vd Toekomst (6 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/vr-x4.html' },
    { id:'vr-x4-4', title:'VR beleving dementie Into D'mentia', date:`${currentYear}-11-25`, start:'11:45', end:'12:45', speaker:'Ideon', banner:'pictures/vr-x4.png', desc:'VR? x 4 in Huis vd Toekomst (6 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/vr-x4.html' },
    { id:'zig-ai', title:'ZIG & AI', date:`${currentYear}-11-25`, start:'09:00', end:'11:00', speaker:'', banner:'pictures/zig.gif', desc:'ZIG & AI in het Werkhuis (16 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/zig-ai.html' },
    { id:'goeie-buurtaal-ai2', title:'Goeie Buurtaal met AI', date:`${currentYear}-11-25`, start:'11:00', end:'13:00', speaker:'Amy en Wendy', banner:'pictures/goeie-buurtaal-ai.png', desc:'Goeie Buur-taal in het Werkhuis (10 personen).',bannerFit:'', status: "closed", descFile:'descriptions/goeie-buurtaal.html' },
  
    // Donderdag 27-11
    { id:'digitale-klantreis', title:'Digitale klantreis Carglass', date:`${currentYear}-11-27`, start:'09:30', end:'11:30', speaker:'Carglass', banner:'pictures/carglass.svg.png', desc:'Digitale klantreis Carglass in het Werkhuis (12 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/digitale-klantreis.html' },
    { id:'stem-henk', title:'De stem van HenK', date:`${currentYear}-11-27`, start:'12:30', end:'14:00', speaker:'Tessa', banner:'pictures/stem-henk.jpg', desc:'Digitale klantreis Carglass in het Werkhuis (12 personen).',bannerFit:'cover', status: "closed", descFile:'descriptions/stem-henk.html' },
  ];

  // Map workshop IDs to Microsoft Forms embed URLs
  const formLinks = {
    // 04-11
    "ongemakkenjacht-1": "FORM_URL_ONGEMAKKENJACHT1",
    "ongemakkenjacht-2": "FORM_URL_ONGEMAKKENJACHT2",
  
    // 05-11
    "taal-tool": "https://forms.office.com/Pages/ResponsePage.aspx?id=0YvUK1a-i0OZ8wod-zrRqXmwJqIUyTxEgXwvF60HDQNUOEg2VE5CTTZBRlhUSkMwS0IxMlpRWURRUC4u&embed=true",
    "ongemakkenjacht-3": "FORM_URL_ONGEMAKKENJACHT4",
  
    // 06-11
    "ongemakkenjacht-4": "FORM_URL_ONGEMAKKENJACHT5",
    "bewonersteams": "FORM_URL_BEWONERSTEAMS",
  
    // 11-11
    "aftrap": "https://forms.office.com/Pages/ResponsePage.aspx?id=0YvUK1a-i0OZ8wod-zrRqXmwJqIUyTxEgXwvF60HDQNUQlNGQzM1NFNPRllUQTlOTUM4SDRENVI3Si4u&embed=true",
    "wrk-ai-beginner": "FORM_URL_AI_BEGINNER",
    "taal-tool2": "FORM_URL_TAAL_TOOL2"
  
    // 13-11
    "goeie-buurtaal-ai": "FORM_URL_BUURTAAL_AI",
    "dwam": "FORM_URL_DWAM",
    "wrk-ai-intermediate": "FORM_URL_AI_ADVANCED",
    "digital-twin": "FORM_URL_TAALTOOL2",
  
    // 17-11
    "shortcut": "FORM_URL_SHORTCUT",
  
    // 18-11
    "agile-scrum": "FORM_URL_AGILE",
  
    // 20-11
    "omaia": "FORM_URL_OMAIA1",
    "thuisapp": "FORM_URL_THUISAPP1",
    "omaia2": "FORM_URL_OMAIA2",
    "thuisapp2": "FORM_URL_THUISAPP2",
  
    // 25-11
    "vr-x4-1": "FORM_URL_VR",
    "vr-x4-2": "FORM_URL_VR",
    "vr-x4-3": "FORM_URL_VR",
    "vr-x4-4": "FORM_URL_VR",
    "zig-ai": "FORM_URL_ZIGAI",
    "goeie-buurtaal-ai2": "FORM_URL_BUURTAAL",
  
    // 27-11
    "digitale-klantreis": "FORM_URL_KLANTREIS",
    "stem-henk": "FORM_URL_TAALTOOL3",
  };

  // Merge forms into workshops
  window.WORKSHOPS = WORKSHOPS.map(w => ({
    ...w,
    form: formLinks[w.id] || null
  }));
})();
