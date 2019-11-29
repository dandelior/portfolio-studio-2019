export default {
    title: "Trabajos",
    name: "trabajo",
    type: "document",
    fields: [
      {
        title: "Nombre",
        name: "nombre",
        type: "string",
      },
      {
        title: "Imágen de Portada",
        name: "imagen_portada",
        type: "image",
      },
      {
        title: "Cliente",
        name: "cliente",
        type: "string",
      },
      {
        title: "Encargo",
        name: "encargo",
        type: "text",
      },
      {
        title: "Agencia",
        name: "agencia",
        type: "string",
      },
      {
        title: "Contenido",
        name: "contenido",
        type: "array",
        of: [{type: 'block'}]
      },
    ]
  }