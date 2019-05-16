import { useCallback, useEffect, useReducer, useRef } from 'react';

let effectCapture: any = null;

export function useReducerWithEmitEffect<R extends React.Reducer<any, any>>(
  reducer: R,
  initialArg: any,
  init?: any
) {
  let updateCounter = useRef(0);
  let wrappedReducer = useCallback(
    function(oldWrappedState, action) {
      effectCapture = [];
      try {
        let newState = reducer(oldWrappedState.state, action.action);
        let lastAppliedContiguousUpdate =
          oldWrappedState.lastAppliedContiguousUpdate;
        let effects = oldWrappedState.effects || [];
        if (lastAppliedContiguousUpdate + 1 === action.updateCount) {
          lastAppliedContiguousUpdate++;
          effects.push(...effectCapture);
        }
        return {
          state: newState,
          lastAppliedContiguousUpdate,
          effects,
        };
      } finally {
        effectCapture = null;
      }
    },
    [reducer]
  );
  let [wrappedState, rawDispatch] = useReducer(
    wrappedReducer,
    undefined,
    function() {
      let initialState;
      if (init !== undefined) {
        initialState = init(initialArg);
      } else {
        initialState = initialArg;
      }
      return {
        state: initialState,
        lastAppliedContiguousUpdate: 0,
        effects: null,
      };
    }
  );
  let dispatch = useCallback(function(action) {
    updateCounter.current++;
    rawDispatch({ updateCount: updateCounter.current, action });
  }, []);
  useEffect(function() {
    if (wrappedState.effects) {
      wrappedState.effects.forEach(function(eff: Function) {
        eff();
      });
    }
    wrappedState.effects = null;
  });
  return [wrappedState.state, dispatch];
}

export function emitEffect(fn: Function) {
  if (!effectCapture) {
    throw new Error(
      'emitEffect can only be called from a useReducerWithEmitEffect reducer'
    );
  }
  effectCapture.push(fn);
}
