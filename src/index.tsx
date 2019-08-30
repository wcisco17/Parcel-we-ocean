import ApolloClient, { InMemoryCache } from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled, theme } from './assets/theme';
import { Home } from './modules/Home';

const client = new ApolloClient({
    uri: 'http://localhost:5555',
    headers: {
        // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJUdW5ndGllZC1hcGlAZGV2Iiwicm9sZXMiOlsiYWRtaW4iXX0sImlhdCI6MTU2MjMwMDk2NywiZXhwIjoxNTYyOTA1NzY3fQ.FzS1HTeXclp8IiN_gPr1d3SAhmsyg4Mc1haNJl3WMs8"
    },
    cache: new InMemoryCache(),
    // @ts-ignore
    fetch
});

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <ApolloHooksProvider client={client} >
                    <GlobalStyled />
                    <Home />
                </ApolloHooksProvider>
            </ApolloProvider>
        </ThemeProvider>
    );
};
