const stateDefault = {
  arrStudent: [
    {
      userID: "1",
      fullName: "Nguyễn Văn A",
      tel: "99999999",
      email: "nguyenvana@gmail.com",
    },
    {
      userID: "2",
      fullName: "Nguyễn Văn B",
      tel: "88888888",
      email: "nguyenvanb@gmail.com",
    },
  ],
};

export const BTQLReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
