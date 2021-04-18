package com.tradeledger.cards.eligibility.common.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import okhttp3.OkHttpClient;

@Configuration
public class HttpClientConfiguration {

    @Bean
    public OkHttpClient httpClient() {
        return new OkHttpClient();
    }
}