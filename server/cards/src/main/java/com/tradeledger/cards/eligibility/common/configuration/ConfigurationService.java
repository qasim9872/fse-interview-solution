package com.tradeledger.cards.eligibility.common.configuration;

import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfigurationService {

    public static final String THIRD_PARTY_ELIGIBILITY_CHECK_PATH = "/eligibility/check";

    public String getThirdPartyBaseUrl() {
        return "http://localhost:8080";
    }

    public String getThirdPartyEligibilityCheckUrl() {
        return getThirdPartyBaseUrl() + THIRD_PARTY_ELIGIBILITY_CHECK_PATH;
    }

}