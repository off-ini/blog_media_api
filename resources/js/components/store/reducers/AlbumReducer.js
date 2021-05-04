import * as actions from "../actions/type";

const initSate = {
  albums : []
};

const AlbumReducer = (state = initSate, action) => {
  switch (action.type) {

    case actions.ALL_ALBUMS: {

        return { ...state, albums: action.payload };
    }

    case actions.GET_ALBUMS: {

      return { ...state, albums: action.payload };
    }

    case actions.CREATE_ALBUM: {
      return { ...state, albums: [{...action.payload},...state.albums] };
    }

    case actions.EDIT_ALBUM: {
      let album = action.payload;
      let albums = state.albums.map( u => {
        if(u.id === album.id){
          return {...album}
        }
        return {...u}
      });
      return { ...state, albums: albums};
    }
    case actions.ALBUM_DETAIL: {
      let albums = state.albums.filter( v => v.id !== action.payload);
      return { ...state, albums: albums };
    }

    case actions.DELETE_ALBUM: {
      let albums = state.albums.filter( v => v.id !== action.payload);
      return { ...state, albums };
    }
    default:{
      return state;
    }
  }
};

export default AlbumReducer;
