// Action creator for all events that might happen in app to cause state to be updated

export const addFeature = (feature) => {
    console.log(feature);
    return {
        type: 'ADD_FEATURE',
        payload: feature
    };
};


export const removeFeature = (feature) => {
    console.log(feature);
    return {
        type: 'REMOVE_FEATURE',
        payload: feature
    };
};