import graphqlGot = require('graphql-got');

interface options {
  owner: string,
  repo: string,
  token: string
}

export default ({owner, repo, token}: options): Promise<any> => {
  return graphqlGot('https://api.github.com/graphql', {
    query: `query { repository(owner: "${owner}", name: "${repo}") { id } }`,
    token
  }).then(({ body: {repository} }) => repository && repository.id || null);
};

