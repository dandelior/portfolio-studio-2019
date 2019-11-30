export default {
    title: "Trabajo",
    name: "trabajo",
    type: "document",
    fieldsets: [
      {
        name: "detalles",
        title: "Detalles del Proyecto"
      }
    ],
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
        fieldset: 'detalles'
      },
      {
        title: "Encargo",
        name: "encargo",
        type: "text",
        fieldset: 'detalles'
      },
      {
        title: "Agencia",
        name: "agencia",
        type: "string",
        fieldset: 'detalles'
      },
      {
        title: "Contenido",
        name: "contenido",
        type: "array",
        of: [{type: 'block'}]
      },
    ]
  }