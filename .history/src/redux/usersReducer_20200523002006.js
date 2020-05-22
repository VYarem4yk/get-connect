let initialState = {
  users: [
    {
      id: 1,
      userFirstName: "Katarzyna",
      userLastName: "Danilezka",
      followed: true,
      status: "To Cold for summer!!! B-r-r-r...",
      location: { city: "Minsk", country: "Belarus" },
      userAvatar:
        "https://sun9-2.userapi.com/c854224/v854224678/89482/cg3Pty7zkLE.jpg?ava=1",
    },
    {
      friendId: 2,
      userFirstName: "Igor",
      userLastName: "Yaremchuk",
      followed: false,
      status: "To Cold for summer!!! B-r-r-r...",
      location: { city: "Minsk", country: "Belarus" },
      userAvatar:
        "https://sun9-62.userapi.com/c855324/v855324226/e948c/A8UZ7fwcG-U.jpg?ava=1",
    },
    {
      friendId: 3,
      userFirstName: "Lesha",
      userLastName: "Parukov",
      followed: true,
      status: "To Cold for summer!!! B-r-r-r...",
      location: { city: "Minsk", country: "Belarus" },
      userAvatar:
        "https://sun9-8.userapi.com/c857424/v857424375/2b90e/cy94o_L6YnI.jpg?ava=1",
    },
    {
      friendId: 4,
      userFirstName: "Sasha",
      userLastName: "Heino",
      followed: true,
      status: "To Cold for summer!!! B-r-r-r...",
      location: { city: "Minsk", country: "Belarus" },
      userAvatar:
        "https://sun9-22.userapi.com/c855732/v855732265/14f14b/vpHKUsR2rGk.jpg?ava=1",
    },
    {
      friendId: 5,
      userFirstName: "Artem",
      userLastName: "Kyzmich",
      followed: true,
      status: "To Cold for summer!!! B-r-r-r...",
      location: { city: "Minsk", country: "Belarus" },
      userAvatar:
        "https://sun9-67.userapi.com/c845321/v845321504/8c50b/rOnA4_Nz6O4.jpg?ava=1",
    },
    {
      friendId: 6,
      userFirstName: "Zhenya",
      userLastName: "Korsunov",
      followed: false,
      status: "To Cold for summer!!! B-r-r-r...",
      location: { city: "Minsk", country: "Belarus" },
      userAvatar:
        "https://sun9-18.userapi.com/c836132/v836132471/47e58/PkltMDwUq9s.jpg?ava=1",
    },
  ],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const 

export default usersReducer;
