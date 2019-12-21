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
        title: "Slug",
        name: "slug",
        type: "slug"
      },
      {
        title: "Imágen de Portada",
        name: "imagen_portada",
        type: "image",
      },
      {
        title: "Imágen de Grilla",
        name: "imagen_grilla",
        type: "image",
      },
      {
        title: "Descripción",
        name: "descripcion",
        type: "string"
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
        title: "Fecha",
        name: "fecha",
        type: "string",
        fieldset: 'detalles'
      },
      {
        title: "Contenido",
        name: "contenido",
        type: "array",
        of: [
          {type: 'block'},
          {type: 'image'}
        ]
      },
    ]
  }