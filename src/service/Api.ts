export const getBodies = async () => {
    const res = await fetch('https://api.le-systeme-solaire.net/rest/');
    if (!res.ok) throw new Error('Error fetching data');
    return res.json();
  };

  