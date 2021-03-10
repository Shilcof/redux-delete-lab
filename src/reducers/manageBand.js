import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, {name: action.name, id: uuid()}] }

      case 'DELETE_BAND':
        const index = state.bands.findIndex(b=>b.id === action.id)
        return { ...state, bands: [...state.bands.slice(0, index), ...state.bands.slice(index + 1)]}
  
    default:
      return state;
  }
};
