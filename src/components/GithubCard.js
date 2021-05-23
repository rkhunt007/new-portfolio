import React from 'react';
import { Card } from 'react-github-stats-card-v2';

class GithubCard extends React.Component {
  render() {
      return <Card
        username="rkhunt007"
        theme={true}
        accessToken="e1f384d871511d298b181d462f67ced898500af3"
        />
   }
}

export default GithubCard;