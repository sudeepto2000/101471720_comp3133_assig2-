import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom, inject } from '@angular/core';

import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';

const apolloProvider = provideApollo(() => {
  const httpLink = inject(HttpLink); 
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: 'http://localhost:4000/graphql',
    }),
  } as ApolloClientOptions<any>;
});

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    apolloProvider,
  ],
}).catch((err) => console.error(err));
