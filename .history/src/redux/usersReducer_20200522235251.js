let initialState = {
  users: [
    {
      userId: 1,
      userFir: "Katarzyna",
      friendLastName: "Danilezka",
      friendAvatar:
        "https://sun9-2.userapi.com/c854224/v854224678/89482/cg3Pty7zkLE.jpg?ava=1",
    },
    {
      friendId: 2,
      friendName: "Igor",
      friendLastName: "Yaremchuk",
      friendAvatar:
        "https://sun9-62.userapi.com/c855324/v855324226/e948c/A8UZ7fwcG-U.jpg?ava=1",
    },
    {
      friendId: 3,
      friendName: "Lesha",
      friendLastName: "Parukov",
      friendAvatar:
        "https://sun9-8.userapi.com/c857424/v857424375/2b90e/cy94o_L6YnI.jpg?ava=1",
    },
    {
      friendId: 4,
      friendName: "Sasha",
      friendLastName: "Heino",
      friendAvatar:
        "https://sun9-22.userapi.com/c855732/v855732265/14f14b/vpHKUsR2rGk.jpg?ava=1",
    },
    {
      friendId: 5,
      friendName: "Artem",
      friendLastName: "Kyzmich",
      friendAvatar:
        "https://sun9-67.userapi.com/c845321/v845321504/8c50b/rOnA4_Nz6O4.jpg?ava=1",
    },
    {
      friendId: 6,
      friendName: "Natasha",
      friendLastName: "Truhan",
      friendAvatar:
        "https://sun1.beltelecom-by-minsk.userapi.com/jAfPXNexKdF5JrShydoME16K-bcW6D80uphBug/LuiKmPUymTY.jpg?ava=1",
    },
  ],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
