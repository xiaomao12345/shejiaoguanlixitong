//同步


export const setIsAuthenticated = (state,data) => {
	state.isAuthenticated = data;
};

export const setUser = (state,data) => {
  state.user = data;
  //console.log(state.user);
};

export const setProfile = (state,data) => {
  state.profile = data;
  //console.log(state.user);
};

export const setLoading = (state,data) => {
  state.loading = data;
  //console.log(state.user);
};

export const setProfiles = (state,data) => {
  state.profiles = data;
  //console.log(state.user);
};