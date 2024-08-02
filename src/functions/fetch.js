export default async function fetchData(method, link, bodyData = null, token = null) {
  try {
    // Configuración de los encabezados
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers.Authorization = 'Bearer ' + token;
    }

    const options = {
      method: method,
      headers: headers,
    };

    if (method === 'POST' || method === 'PUT') {
      if (bodyData) {
        options.body = JSON.stringify(bodyData);
      }
    } 

    // Realizar la solicitud
    const response = await fetch(link, options);

    if (!response.ok) {
      throw new Error('Hubo un problema al hacer la solicitud: ' + response.status);
    }

    // Intentar obtener datos en formato JSON
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}
/*
EJEMPLOS DE USO:

/GET
fetchData('GET', 'http://localhost:9000/api/users', null, 'your-jwt-token')
  .then(data => console.log('Datos obtenidos:', data))
  .catch(error => console.error('Error en la solicitud:', error));

/POST
fetchData('POST', 'http://localhost:9000/api/users', { name: 'John Doe', email: 'john.doe@example.com' }, 'your-jwt-token')
  .then(data => console.log('Datos enviados:', data))
  .catch(error => console.error('Error en la solicitud:', error));

/PUT
fetchData('PUT', 'http://localhost:9000/api/users/1', { name: 'John Doe Updated', email: 'john.doe.updated@example.com' }, 'your-jwt-token')
  .then(data => console.log('Datos actualizados:', data))
  .catch(error => console.error('Error en la solicitud:', error));

/DELETE
fetchData('DELETE', 'http://localhost:9000/api/users/1', null, 'your-jwt-token')
  .then(data => console.log('Usuario eliminado:', data))
  .catch(error => console.error('Error en la solicitud:', error));

*/