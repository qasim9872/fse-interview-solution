package com.tradeledger.cards.core.orchestrator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradeledger.cards.eligibility.common.domain.Applicant;

@Service
public class OrchestratorService {

	private static final String THIRD_PARTY_BASE_URL = "http://localhost:8080";
	public static final MediaType JSON = MediaType.get("application/json; charset=utf-8");
	private static final String THIRD_PARTY_ELIGIBILITY_CHECK_URL = THIRD_PARTY_BASE_URL + "/eligibility/check";

	@Autowired
	private OkHttpClient httpClient;

	@Autowired
	private ObjectMapper objMapper;

	public String orchestrateEligibilityCheck(Applicant applicant) throws Exception {

		RequestBody body = RequestBody.Companion.create(objMapper.writeValueAsString(applicant), JSON);
		Request request = new Request.Builder().url(THIRD_PARTY_ELIGIBILITY_CHECK_URL).post(body).build();

		Response response = httpClient.newCall(request).execute();

		return response.body().string();
	}

}
