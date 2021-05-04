import * as actions from "../actions/type";

const initSate = {
  images : []
};

const ImagesReducer = (state = initSate, action) => {
  switch (action.type) {

    case actions.ALL_IMAGES: {

        return { ...state, images: action.payload };
    }

    case actions.GET_IMAGES: {

      return { ...state, images: action.payload };
    }

    case actions.CREATE_IMAGE: {
      return { ...state, images: [{...action.payload},...state.images] };
    }

    case actions.EDIT_IMAGE: {
      let image = action.payload;
      let images = state.images.map( u => {
        if(u.id === image.id){
          return {...image}
        }
        return {...u}
      });
      return { ...state, images: images};
    }
    case actions.IMAGE_DETAIL: {
      let images = state.images.filter( v => v.id !== action.payload);
      return { ...state, images: images };
    }

    case actions.DELETE_IMAGE: {
      let images = state.images.filter( v => v.id !== action.payload);
      return { ...state, images };
    }
    default:{
      return state;
    }
  }
};

export default ImagesReducer;
