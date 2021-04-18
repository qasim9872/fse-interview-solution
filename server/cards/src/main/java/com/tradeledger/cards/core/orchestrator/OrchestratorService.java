package com.tradeledger.cards.core.orchestrator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradeledger.cards.eligibility.common.configuration.ConfigurationService;
import com.tradeledger.cards.eligibility.common.domain.Applicant;

@Service
public class OrchestratorService {

	public static final MediaType JSON = MediaType.get("application/json; charset=utf-8");

	public String FullEligibilityCheckUrl;

	@Autowired
	private OkHttpClient httpClient;

	@Autowired
	private ObjectMapper objMapper;

	@Autowired
	private ConfigurationService configurationService;

	public String orchestrateEligibilityCheck(Applicant applicant) throws Exception {

		RequestBody body = RequestBody.Companion.create(objMapper.writeValueAsString(applicant), JSON);
		String eligibilityCheckUrl = configurationService.getThirdPartyEligibilityCheckUrl();
		Request request = new Request.Builder().url(eligibilityCheckUrl).post(body).build();

		Response response = httpClient.newCall(request).execute();

		return response.body().string();
	}

}
