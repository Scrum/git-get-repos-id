# git-get-repos-id
> A tiny helper to get github repository `id`

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-get-repos-id/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-get-repos-id)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-get-repos-id.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-get-repos-id)

## Install
```bash
npm install git-get-repos-id
```

## Usage
```js
import gitGetReposId from 'git-get-repos-id';

gitGetReposId({owner: 'scrum', repo: 'slims', token: '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f'});
//=> MDEwOlJlcG9zaXRvcnkxOTc3MjY4NTY=
```

## API
### gitGetReposId({owner, repo, token})
 - **owner** - Github owner or organization name.
 - **repo** - Repository name.
 - **token** - You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)