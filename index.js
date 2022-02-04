
// const message = {
//     glossary: {
//       title: 'example glossary',
//       GlossDiv: {
//         title: 'S',
//         GlossList: {
//           GlossEntry: {
//             ID: 'SGML',
//             SortAs: 'SGML',
//             GlossTerm: 'Standard Generalized Markup Language',
//             Acronym: 'SGML',
//             Abbrev: 'ISO 8879:1986',
//             GlossDef: {
//               para: 'A meta-markup language, used to create markup languages such as DocBook.',
//               GlossSeeAlso: ['GML', 'XML'],
//             },
//             GlossSee: 'markup',
//           },
//         },
//       },
//     },
//   };

//   const latestMessage = JSON.parse(JSON.stringify(message));
//   latestMessage.glossary.GlossDiv.GlossList.GlossEntry.GlossSee = "Hypertextmarkup";
//   console.log(latestMessage);



  const fun = (data) => {
  for (const i in data) {
    if (typeof data[i] === 'object'){ 
      printAllValues(data[i]);
    } else {
      console.log(`key: ${i} : ${data[i]}`);
    }
  }
};

fun(data);