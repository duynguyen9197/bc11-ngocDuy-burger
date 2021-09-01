const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: { salad: 10, cheese: 10, beef: 10 },
  total: 30,
};
const burgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "Increase": {
      const { burger, menu } = state;
      const food = action.payload.food;
      const newBurger = { ...burger };
      newBurger[food] += 1;
      const newMenu = { ...menu };
      newMenu[food] += 10;
      return {
        ...state,
        burger: newBurger,
        menu: newMenu,
        total: newMenu.salad + newMenu.beef + newMenu.cheese,
      };
    }
    case "Decrease": {
      const { burger, menu } = state;
      const food = action.payload.food;
      const newBurger = { ...burger };
      newBurger[food] -= 1;
      const newMenu = { ...menu };
      newMenu[food] -= 10;
      return {
        ...state,
        burger: newBurger,
        menu: newMenu,
        total: newMenu.salad + newMenu.beef + newMenu.cheese,
      };
    }
    default:
      return state;
  }
};
export default burgerReducer;
