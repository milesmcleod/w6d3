const FollowToggle = require ("./follow_toggle.js");

$(()=>{
  $("button.follow-toggle").each((idx,el) => {
    let button = new FollowToggle(el);
    console.log(button);
  });
});
