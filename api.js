const getRouteData = async () => {
    try {
    const response = await fetch("http://data.itsfactory.fi/journeys/api/1/routes/", {
      method: 'GET'
    })

    const data = await response.json();
    return data

  } catch(err) {
    console.log(err)
  }
};
