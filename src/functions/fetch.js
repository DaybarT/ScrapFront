async function fetchData(method, link, bodyData, token) {
  try {
    headers = {
      'Content-Type': 'application/json'
    }

    if (token) {
      headers.Authorization = 'Bearer ' + token
    }

    const requestBody = bodyData ? JSON.stringify(bodyData) : null

    // Configurando la solicitud con los encabezados
    const options = {
      method: method,
      headers: headers,
      body: requestBody
    }

    const response = await fetch(link, options)

    if (!response.ok) {
      throw new Error('Hubo un problema al hacer la solicitud: ' + response.status)
    }

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error)
  }
}
