async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      data.map(item => console.log(`Nama =  ${item.name}`));
    } catch (err) {
      console.log(err);
    }
  }

  fetchData();