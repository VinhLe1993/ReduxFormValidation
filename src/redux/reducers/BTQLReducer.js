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
  editArrStudent: {
    userID: "1",
    fullName: "Nguyễn Văn A",
    tel: "99999999",
    email: "nguyenvana@gmail.com",
  },
  student: {
    values: {
      userID: "",
      fullName: "",
      tel: "",
      email: "",
    },
    errors: {
      userID: "",
      fullName: "",
      tel: "",
      email: "",
    },
  },
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
      return { ...state };
    }
    case "EDIT_LIST": {
      state.student.values = action.editArrStudent;
      state.student = { ...state.student };
      return { ...state };
    }
    case "HANDLE_CHANGE_INPUT": {
      state.student = action.student;
      return { ...state };
    }
    case "UPDATE_STUDENT": {
      const updateArrStudent = [ ...state.arrStudent ];

      let updateStudent = updateArrStudent.find(
        (student) => student.userID === action.updateStudent.userID
      );
      if (updateStudent) {
        updateStudent.fullName = action.updateStudent.fullName;
        updateStudent.tel = action.updateStudent.tel;
        updateStudent.email = action.updateStudent.email;
      }
      state.arrStudent = updateArrStudent;
      return { ...state };
    }

    default:
      return state;
  }
};
