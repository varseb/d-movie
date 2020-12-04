import api from 'redux/api'
import { success, failure } from 'redux/http'

import { MULTI_SEARCH_SUCCESS } from './search'

const GET_SERIE_REQUEST = 'serie/GET_SERIE_REQUEST'
const GET_SERIE_SUCCESS = 'serie/GET_SERIE_SUCCESS'
const GET_SERIE_FAILURE = 'serie/GET_SERIE_FAILURE'


const initialState = {
  list: [],
  series: {},
}

export default function serieReducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){

    case GET_SERIE_SUCCESS: {
      const { id, data: serie } = payload

      return {
        ...state,
        series: {
          ...state.series,
          [id]: {
            ...state.series[id],
            ...serieDTO(serie)
          }
        }
      }
    }

    case MULTI_SEARCH_SUCCESS: {
      const results = payload.data.results.filter(
        ({ media_type }) => media_type === 'tv'
      )

      return {
        ...state,
        series: storeSeries({ state, results })
      }
    }


    default:
      return state
  }
}


const serieDTO = serie => {
  const s = {
    id: serie.id,
    name: serie.name,
    poster_path: serie.poster_path,
    backdrop_path: serie.backdrop_path,
    original_language: serie.original_language,
    genre_ids: serie.genre_ids || (serie.genres || []).map(({ id }) => id),
    vote_average: serie.vote_average,
    overview: serie.overview,
    first_air_date: serie.first_air_date,
    popularity: serie.popularity,
    media_type: 'tv'
  }

  if( serie.status ){
    s.status = serie.status
  }

  if( serie.last_air_date ){
    s.last_air_date = serie.last_air_date
  }

  if( serie.number_of_seasons ){
    s.number_of_seasons = serie.number_of_seasons
  }

  return s
}

const storeSeries = ({ state, results }) =>
  results.reduce((series, serie) => ({
    ...series,
    [serie.id]: {
      ...(state.series[serie.id] || {}),
      ...serieDTO(serie)
    }
  }), {
    ...state.series
  }
)


export const getSerie = payload => dispatch => dispatch({
  type: GET_SERIE_REQUEST,
  meta: api.serie.getSerie(payload)
    .then(success(dispatch, GET_SERIE_SUCCESS, payload))
    .catch(failure(dispatch, GET_SERIE_FAILURE))
})

