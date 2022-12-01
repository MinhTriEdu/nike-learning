export const ACTION_STORE_PAGE = {
    SHOW_FILTER_NAV:'SHOW_FILTER_NAV'
  };
  
  export const initialState= {
    showFilterNav: true,
  };
  
  export const rootReducerStorePage = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_STORE_PAGE.SHOW_FILTER_NAV:
        return {
          ...state,
          showFilterNav:!state.showFilterNav
        };
      default:
        return {
          ...state,
        };
    }
  };
  