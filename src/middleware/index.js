export const localStorageLoad = store => next => action => {
    const { type } = action;
    if (type === 'INIT_STATE') {
        try {
            const storedState = JSON.parse(
                localStorage.getItem('YOUR_APP_NAME')
            );
            if (storedState) {
                store.dispatch({
                    type: 'RESET_STATE',
                    payload: storedState
                });
            }
            return;
        } catch (e) {
            // Unable to load or parse stored state, proceed as usual
        }
    }

    console.log('localStorageload')
    next(action);
}

export const localStorageDump = store => next => action => {
    console.log('localStorageDump')
    let result = next(action);
    localStorage.setItem('routeTodos', JSON.stringify(store.getState().todos));
    return result
}


export const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}