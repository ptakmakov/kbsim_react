async function JSONLoader(query) {
    let r = await fetch(query)
        .then(result => result.json())
        .then(
            (result) => {
                return {
                    isReady: true,
                    json: result,
                    exception: null
                }
            },
            (error) => {
                return {
                    isReady: true,
                    json: null,
                    exception: error
                }
            }
        );
    return r;
}

export default JSONLoader;
