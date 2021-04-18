package com.tradeledger.cards.core.orchestrator;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradeledger.cards.eligibility.common.configuration.ConfigurationService;
import com.tradeledger.cards.eligibility.common.domain.Applicant;
import com.tradeledger.cards.thirdparty.eligibility.Eligibility;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import okhttp3.HttpUrl;
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.io.IOException;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = OrchestratorService.class)
public class OrchestratorServiceTest {

	@MockBean
	private ConfigurationService configurationService;

	@Autowired
	private ObjectMapper objMapper;

	@Autowired
	private OrchestratorService orchestratorService;

	// Create a MockWebServer. These are lean enough that you can create a new
	// instance for every unit test.
	private MockWebServer mockServer;

	@BeforeEach
	public void setupTest() throws IOException {
		mockServer = new MockWebServer();
		mockServer.start();

		// Ask the server for its URL. You'll need this to make HTTP requests.
		HttpUrl MOCK_SERVER_BASE_URL = mockServer.url(ConfigurationService.THIRD_PARTY_ELIGIBILITY_CHECK_PATH);
		String MOCK_SERVER_BASE_URL_WITH_HTTP_SCHEME = "http://" + MOCK_SERVER_BASE_URL.toString();

		// mock the url
		when(configurationService.getThirdPartyEligibilityCheckUrl()).thenReturn(MOCK_SERVER_BASE_URL_WITH_HTTP_SCHEME);
	}

	@AfterEach
	void afterAll() throws IOException {
		mockServer.shutdown();
	}

	private void mockBackendEndpoint(int responseCode, String body) {
		MockResponse mockResponse = new MockResponse().setResponseCode(responseCode).setBody(body)
				.addHeader("Content-Type", "application/json");
		mockServer.enqueue(mockResponse);
	}

	@Test
	public void testIfBorisIsEligibleForCard1() throws Exception {

		Applicant applicant = new Applicant("Boris", "Boris@J.com", "143 Icy Road");
		Eligibility eligibility = Eligibility.newEligibility(1).addCard("C1").build();

		mockBackendEndpoint(200, objMapper.writeValueAsString(eligibility));

		// String eligibilityResult =
		// orchestratorService.orchestrateEligibilityCheck(applicant);
		// assertEquals(orchestratorService.FullEligibilityCheckUrl, "");
	}

}
