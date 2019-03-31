import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';



@NgModule({
  exports: [ApolloModule, HttpLinkModule],
})
export class GraphQLModule {
  constructor(httpLink: HttpLink, apollo: Apollo) {
    const uri = 'http://localhost:4000';
    const webSocket = new WebSocketLink({
      uri: `ws://localhost:4000/`,
      options: {
        reconnect: true
      }
    });
    const http = httpLink.create({ uri });

    const link = split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      webSocket,
      http,
    );

    apollo.create({
      link: link,
      cache: new InMemoryCache(),
    });
  }
}
