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
    case "ADD_TO_LIST": {
      state.arrStudent = [...state.arrStudent, action.student];

      return { ...state };
    }
    case "REMOVE_STUDENT": {
      state.arrStudent = [
        ...state.arrStudent.filter(
          (student) => student.userID !== action.userID
        ),
      ];
      return {...state};
    }

    default:
      return state;
  }
};
