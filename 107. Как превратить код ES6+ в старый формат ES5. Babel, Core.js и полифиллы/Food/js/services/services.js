const postData = async (url, data) => { // async преврощает в асинхронный код
    const res = await fetch(url,{ // юзаются в паре
      method:"Post",
      headers:{
        'Content-type':'application/json'
      },
        body:data 
    });

    return await res.json();
};

async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}


export {postData};
export {getResource};
