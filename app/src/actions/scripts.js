import * as yaml from 'js-yaml'

export const INDEX_REQUEST = 'INDEX_REQUEST'
export const INDEX_SUCCESS = 'INDEX_SUCCESS'
export const INDEX_FAILURE = 'INDEX_FAILURE'

function fetchYAML(url) {
  return fetch(url)
    .catch(error => {
      return Promise.reject({
        kind: 'request',
        error: error,
      })
    })
    .then(response => {
      if (response.ok) {
        return response.text()
      }
      return Promise.reject({
        kind: 'response',
        error: response,
      })
    })
    .then(text => {
      let data
      try {
        data = yaml.safeLoad(text)
      } catch (e) {
        return Promise.reject({
          kind: 'parse',
          error: e,
        })
      }

      return data
    })
}

export function fetchIndex() {
  return dispatch => {
    dispatch({type: INDEX_REQUEST})
    return fetchYAML('/data/index.yaml')
      .then(data => dispatch({
        type: INDEX_SUCCESS,
        index: data,
      }))
      .catch(error => dispatch({type: INDEX_FAILURE, ...error}))
  }
}

export const SCRIPT_REQUEST = 'SCRIPT_REQUEST'
export const SCRIPT_SUCCESS = 'SCRIPT_SUCCESS'
export const SCRIPT_FAILURE = 'SCRIPT_FAILURE'

export function fetchScript(name) {
  return dispatch => {
    dispatch({
      type: SCRIPT_REQUEST,
      name,
    })
    return fetchYAML('/data/' + name + '/script.yaml')
      .then(data => dispatch({
        type: SCRIPT_SUCCESS,
        name,
        index: data,
      }))
      .catch(error => dispatch({
        type: SCRIPT_FAILURE,
        name,
        ...error,
      }))
  }
}
