const FollowToggle = require ("./follow_toggle.js");
const UsersSeach = require('./users_search.js');

$(()=>{
  $("button.follow-toggle").each((idx,el) => {
    let button = new FollowToggle(el);
    console.log(button);
  });

  $('.users-search').each((idx, el) => {
    let search = new UsersSeach(el);
    console.log(search);
  });

});
