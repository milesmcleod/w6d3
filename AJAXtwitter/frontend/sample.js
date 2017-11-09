const APIUtil = require("./api_util.js");

const FollowToggle = function(el){
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.render();
  this.handleClick();
};

FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed") {
    this.$el.text("Follow!");
  } else if (this.followState === "followed") {
    this.$el.text("Unfollow!");
  }
  console.log(this.followState);
};

FollowToggle.prototype.handleClick = function () {
  const follow = this;
  this.$el.on("click", (e) => {
    e.preventDefault();
    if (this.followState === "unfollowed") {
      // debugger
      const a = APIUtil.followUser(this.userId);
      a.then(this.followSuccess.bind(follow));
    } else if (this.followState === "followed") {
      // debugger
      const b = APIUtil.unfollowUser(this.userId);
      b.then(this.unfollowSuccess.bind(follow));
    }
  });
};

FollowToggle.prototype.followSuccess = function(response) {
  this.followState = "followed";
  this.render();
};



FollowToggle.prototype.unfollowSuccess = function(response) {
  this.followState = "unfollowed";
  this.render();
};


module.exports = FollowToggle;
