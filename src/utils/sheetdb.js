// // src/utils/sheetdb.js

// const SHEETDB_URL = 'https://sheetdb.io/api/v1/4s3lw1hpj6ncf';
// const SHEETDB_TOKEN = 'SEU_TOKEN_AQUI';

// // export async function getRecords() {
// //   const response = await fetch(SHEETDB_URL, {
// //     headers: {
// //       Authorization: `Bearer ${SHEETDB_TOKEN}`
// //     }
// //   });

// //   if (!response.ok) {
// //     throw new Error('Erro ao buscar registros');
// //   }

// //   return response.json();
// // }

// export async function getRecords() {
//   const response = await fetch(
//     'https://sheetdb.io/api/v1/4s3lw1hpj6ncf'
//   );

//   return response.json();
// }

// export async function createRecord(data) {
//   const response = await fetch(SHEETDB_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${SHEETDB_TOKEN}`
//     },
//     body: JSON.stringify({
//       data: [data]
//     })
//   });

//   if (!response.ok) {
//     throw new Error('Erro ao salvar registro');
//   }

//   return response.json();
// }

// export async function deleteRecord(id) {
//   const response = await fetch(
//     `${SHEETDB_URL}/id/${id}`,
//     {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${SHEETDB_TOKEN}`
//       }
//     }
//   );

//   if (!response.ok) {
//     throw new Error('Erro ao excluir registro');
//   }

//   return response.json();
// }



const SHEETDB_URL = 'https://sheetdb.io/api/v1/4s3lw1hpj6ncf';

export async function getRecords() {
  const response = await fetch(SHEETDB_URL);

  if (!response.ok) {
    throw new Error(`Erro ${response.status}`);
  }

  return response.json();
}

export async function createRecord(data) {
  const response = await fetch(SHEETDB_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: [data]
    })
  });

  if (!response.ok) {
    throw new Error(`Erro ${response.status}`);
  }

  return response.json();
}

export async function deleteRecord(id) {
  const response = await fetch(
    `${SHEETDB_URL}/id/${id}`,
    {
      method: 'DELETE'
    }
  );

  if (!response.ok) {
    throw new Error(`Erro ${response.status}`);
  }

  return response.json();
}