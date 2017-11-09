const APIUtil = require("./api_util.js");
class FollowToggle {

  constructor (el, options){
    this.$el = $(el);
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = this.$el.data("initial-follow-state") || options.followState;
    this.render();
    this.handleClick();
  }

  render () {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow!");
    }
    console.log(this.followState);
  }

  handleClick () {
    this.$el.on("click", (e) => {
      e.preventDefault();
      if (this.followState === "unfollowed") {
        const a = APIUtil.followUser(this.userId);
        a.then(this.followSuccess.bind(this));
      } else if (this.followState === "followed") {
        const b = APIUtil.unfollowUser(this.userId);
        b.then(this.unfollowSuccess.bind(this));
      }
    });
  }

  followSuccess (response) {
    this.followState = "followed";
    this.render();
  }

  unfollowSuccess (response) {
    this.followState = "unfollowed";
    this.render();
  }

}

module.exports = FollowToggle;
