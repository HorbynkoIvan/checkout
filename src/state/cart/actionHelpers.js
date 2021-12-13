export const getActionWithContext = (context, dispatch, objectCreators) => {
  Object.keys(objectCreators).forEach((item) => {
    objectCreators[item].bind({ context, dispatch });
  });

  return objectCreators;
};
