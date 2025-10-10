// workshops.js
(function () {
  const today = new Date();
  const currentYear =
    (today.getMonth() <= 10) ? today.getFullYear() : today.getFullYear() + 1; // 10 = November

  // Workshops (edit as needed)
  const WORKSHOPS = [
    { id:'taal-tool', title:'Taaltool Sessie 1', date:`${currentYear}-11-05`, start:'09:30', end:'11:30', speaker:'Joan', banner:'pictures/taaltool.png', desc:'Verkenning van de taaltool', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'aftrap', title:'De Aftrap', date:`${currentYear}-11-11`, start:'09:00', end:'11:00', speaker:'Ergin', banner:'pictures/aftrap.png', desc:'We nemen jullie mee in het hele plaatje van innovatie.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'wrk-ai-beginner', title:'Werken met AI beginner', date:`${currentYear}-11-11`, start:'13:00', end:'15:00', speaker:'Job', banner:'pictures/werkenmetai.png', desc:'Een AI cursus voor beginners', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'goeie-buurtaal-ai', title:'Goeie Buur-taal met AI', date:`${currentYear}-11-13`, start:'09:00', end:'11:00', speaker:'Amy en Wendy', banner:'pictures/buurtaal.png', desc:'Gebruik AI om jouw goeie buurtaal te verbeteren.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'dwam', title:'Drone With A Mission', date:`${currentYear}-11-13`, start:'11:00', end:'13:00', speaker:'Ruud Janssen', banner:'pictures/dwam.png', desc:'Zie hoe drones in ons werkveld zorgen voor innovatie.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'taal-tool2', title:'Taaltool Sessie 2', date:`${currentYear}-11-13`, start:'10:00', end:'12:00', speaker:'Joan', banner:'pictures/taaltool.png', desc:'Verkenning van de taaltool.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'wrk-ai-intermediate', title:'Werken met AI Gevorderd', date:`${currentYear}-11-13`, start:'13:00', end:'15:00', speaker:'Job', banner:'pictures/werkenmetai.png', desc:'Werken met AI voor gevorderden.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'shortcut', title:'The Shortcut', date:`${currentYear}-11-17`, start:'09:00', end:'11:00', speaker:'Sanne Cornelissen', banner:'pictures/sanne.jpg', desc:'Leer AI toe te passen in jouw werk.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'agile-scrum', title:'Agile Scrum', date:`${currentYear}-11-18`, start:'13:00', end:'15:00', speaker:'Rogier', banner:'pictures/aftrap.png', desc:'Agile scrum.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'omaia', title:'OMAIA Sessie 1', date:`${currentYear}-11-20`, start:'09:00', end:'11:00', speaker:'Rogier', banner:'pictures/omaia.png', desc:'OMAIA.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'thuisapp', title:'Thuisapp Sessie 1', date:`${currentYear}-11-20`, start:'10:00', end:'12:00', speaker:'Tessa', banner:'pictures/thuisapp.png', desc:'Thuisapp.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'omaia2', title:'OMAIA Sessie 2', date:`${currentYear}-11-20`, start:'13:00', end:'15:00', speaker:'Tessa', banner:'pictures/omaia.png', desc:'OMAIA.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'thuisapp2', title:'Thuisapp Sessie 2', date:`${currentYear}-11-20`, start:'15:00', end:'17:00', speaker:'Tessa', banner:'pictures/thuisapp.png', desc:'Thuisapp.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'goeie-buurtaal', title:'Goeie Buurtaal', date:`${currentYear}-11-25`, start:'11:00', end:'13:00', speaker:'Amy en Wendy', banner:'pictures/buurtaal.png', desc:'Goeie buurtaal zonder AI.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` },
    { id:'taal-tool3', title:'Taaltool Sessie 3', date:`${currentYear}-11-27`, start:'12:30', end:'14:00', speaker:'Joan', banner:'pictures/taaltool.png', desc:'Taaltool.', status: "closed", // openAt: `${currentYear}-11-04T09:00:00+01:00` }
  ];

  // Map workshop IDs to Microsoft Forms embed URLs
  const formLinks = {
    "taal-tool": "https://forms.office.com/Pages/ResponsePage.aspx?id=0YvUK1a-i0OZ8wod-zrRqXmwJqIUyTxEgXwvF60HDQNUOEg2VE5CTTZBRlhUSkMwS0IxMlpRWURRUC4u&embed=true",
    "aftrap": "https://forms.office.com/Pages/ResponsePage.aspx?id=0YvUK1a-i0OZ8wod-zrRqXmwJqIUyTxEgXwvF60HDQNUQlNGQzM1NFNPRllUQTlOTUM4SDRENVI3Si4u&embed=true",
    "wrk-ai-beginner": "FORM_URL_AI_BEGINNER",
    "goeie-buurtaal-ai": "FORM_URL_BUURTAAL_AI",
    "dwam": "FORM_URL_DWAM",
    "taal-tool2": "FORM_URL_TAALTOOL2",
    "wrk-ai-intermediate": "FORM_URL_AI_ADVANCED",
    "shortcut": "FORM_URL_SHORTCUT",
    "agile-scrum": "FORM_URL_AGILE",
    "omaia": "FORM_URL_OMAIA1",
    "thuisapp": "FORM_URL_THUISAPP1",
    "omaia2": "FORM_URL_OMAIA2",
    "thuisapp2": "FORM_URL_THUISAPP2",
    "goeie-buurtaal": "FORM_URL_BUURTAAL",
    "taal-tool3": "FORM_URL_TAALTOOL3"
  };

  // Merge forms into workshops
  window.WORKSHOPS = WORKSHOPS.map(w => ({
    ...w,
    form: formLinks[w.id] || null
  }));
})();
