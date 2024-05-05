module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['gex36xqLvZ8lQbgmwzqCTQ==,XHtoNPDDUzdZkeK0LlZljA==,4dDxfyonDsE2KaQvh9AEKQ==,SfYZtaxgsrZNr7E978w+6w==', '39HMD3SN5MghjKZVuo0jgQ=='], // Define your keys here
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
