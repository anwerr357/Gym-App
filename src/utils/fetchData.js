export const exerciceOptions = {
    method: 'GET',
   
    headers: {
      'x-rapidapi-key':  import.meta.env.VITE_REACT_APP_RAPID_KEY ,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }

  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9c28b4eb06msh11949ab2610b684p186ea5jsndfd0c490616f',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;

}