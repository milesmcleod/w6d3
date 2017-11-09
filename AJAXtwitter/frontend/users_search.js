const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');
class UsersSeach {

  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.children("input");
    this.ul = this.$el.children("ul");
    this.handleInput();
  }

  handleInput(){
    $(this.input).keyup( () => {
      APIUtil.searchUsers(this.input.val(), (response) => {
        this.renderResults(response);
      });
    });
  }

  renderResults(results){
    $(this.ul).empty();
    results.forEach((el) => {
      let $li = $("<li></li>");
      $li.append(`<a href="/users/${el.id}"> ${el.username}</a>`);
      let $button = $(`<button class="follow-toggle">Hello</button>`);
      // $button.text();
      let toggle = new FollowToggle($button, {userId: el.id, followState: el.followed} );
      $li.append($button);
      $(this.ul).append($li);
    });
  }
}

module.exports = UsersSeach;
