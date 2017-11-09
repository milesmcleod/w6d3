const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url:`/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON'
    });
  },

  searchUsers(queryVal, success){
      $.ajax({
          url:`/users/search`,
          method: 'GET',
          dataType: 'JSON',
          data: { query: queryVal },
          success: (response) => {
            success(response);
          }
        }
      );
    }
  };

module.exports = APIUtil;
