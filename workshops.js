// workshops.js
(function () {
  const today = new Date();
  const currentYear = (today.getMonth() <= 10) ? today.getFullYear() : today.getFullYear() + 1; // 10 = Nov

  window.WORKSHOPS = [
    { id:'taal-tool', title:'Taaltool Sessie 1', date:`${currentYear}-11-05`, start:'09:30', end:'11:30', speaker:'Joan', banner:'pictures/taaltool.png',
      form:'https://forms.office.com/Pages/ResponsePage.aspx?id=0YvUK1a-i0OZ8wod-zrRqXmwJqIUyTxEgXwvF60HDQNUOEg2VE5CTTZBRlhUSkMwS0IxMlpRWURRUC4u&embed=true' },

    { id:'aftrap', title:'De Aftrap', date:`${currentYear}-11-11`, start:'09:00', end:'11:00', speaker:'Ergin', banner:'pictures/aftrap.png',
      form:'https://forms.office.com/Pages/ResponsePage.aspx?id=0YvUK1a-i0OZ8wod-zrRqXmwJqIUyTxEgXwvF60HDQNUQlNGQzM1NFNPRllUQTlOTUM4SDRENVI3Si4u&embed=true' },

    { id:'wrk-ai-beginner', title:'Werken met AI beginner', date:`${currentYear}-11-11`, start:'13:00', end:'15:00', speaker:'Job', banner:'pictures/werkenmetai.png', form:null },
    { id:'goeie-buurtaal-ai', title:'Goeie Buur-taal met AI', date:`${currentYear}-11-13`, start:'09:00', end:'11:00', speaker:'Amy en Wendy', banner:'pictures/buurtaal.png', form:null },
    { id:'dwam', title:'Drone With A Mission', date:`${currentYear}-11-13`, start:'11:00', end:'13:00', speaker:'Ruud Janssen', banner:'pictures/dwam.png', form:null },
    { id:'taal-tool2', title:'Taaltool Sessie 2', date:`${currentYear}-11-13`, start:'10:00', end:'12:00', speaker:'Joan', banner:'pictures/taaltool.png', form:null },
    { id:'wrk-ai-intermediate', title:'Werken met AI Gevorderd', date:`${currentYear}-11-13`, start:'13:00', end:'15:00', speaker:'Job', banner:'pictures/werkenmetai.png', form:null },
    { id:'shortcut', title:'The Shortcut', date:`${currentYear}-11-17`, start:'09:00', end:'11:00', speaker:'Sanne Cornelissen', banner:'pictures/sanne.jpg', form:null },
    { id:'agile-scrum', title:'Agile Scrum', date:`${currentYear}-11-18`, start:'13:00', end:'15:00', speaker:'Rogier', banner:'pictures/aftrap.png', form:null },
    { id:'omaia', title:'OMAIA Sessie 1', date:`${currentYear}-11-20`, start:'09:00', end:'11:00', speaker:'Rogier', banner:'pictures/omaia.png', form:null },
    { id:'thuisapp', title:'Thuisapp Sessie 1', date:`${currentYear}-11-20`, start:'10:00', end:'12:00', speaker:'Tessa', banner:'pictures/thuisapp.png', form:null },
    { id:'omaia2', title:'OMAIA Sessie 2', date:`${currentYear}-11-20`, start:'13:00', end:'15:00', speaker:'Tessa', banner:'pictures/omaia.png', form:null },
    { id:'thuisapp2', title:'Thuisapp Sessie 2', date:`${currentYear}-11-20`, start:'15:00', end:'17:00', speaker:'Tessa', banner:'pictures/thuisapp.png', form:null },
    { id:'goeie-buurtaal', title:'Goeie Buurtaal', date:`${currentYear}-11-25`, start:'11:00', end:'13:00', speaker:'Amy en Wendy', banner:'pictures/buurtaal.png', form:null },
    { id:'taal-tool3', title:'Taaltool Sessie 3', date:`${currentYear}-11-27`, start:'12:30', end:'14:00', speaker:'Joan', banner:'pictures/taaltool.png', form:null }
  ];
})();
