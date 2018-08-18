// @flow
import * as React from 'react';
import app from '../components/app/app';
import { graphql } from 'react-relay';
import Editor from '../components/Editor';
import AppPage from '../components/app/AppPage';

const Page = props => {
  return (
    <AppPage requireAuth withoutFooter data={props.data}>
      <Editor data={props.data} />
    </AppPage>
  );
};

export default app(Page, {
  query: graphql`
    query pageQuery($id: ID!, $isPage: Boolean!) {
      ...AppPage @arguments(isPage: $isPage)
      ...Editor @arguments(id: $id)
    }
  `,
  mapQueryVariables: variables => ({ ...variables, isPage: true }),
});