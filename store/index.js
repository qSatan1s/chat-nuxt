export const state = () => ({
  user: {},
  messages: [],
  users: []
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearData(state) {
    state.user = {};
    state.messages = [];
    state.users = [];
  },
  SOCKET_newMessage(state, messages) {
    state.messages.push(messages);
  },
  SOCKET_updateUsers(state, users) {
    state.users = users;
  }
};
