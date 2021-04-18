package com.tradeledger.cards.core.orchestrator;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradeledger.cards.eligibility.common.domain.Applicant;
import com.tradeledger.cards.thirdparty.eligibility.Eligibility;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import okhttp3.OkHttpClient;
import okhttp3.Response;
import okhttp3.mockwebserver.MockWebServer;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.io.IOException;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = OrchestratorService.class)
public class OrchestratorServiceTest {

	private OrchestratorService service = new OrchestratorService();

	@Autowired
	private ObjectMapper objMapper;

	@MockBean
	private OkHttpClient okHttpClient;

	// Create a MockWebServer. These are lean enough that you can create a new
	// instance for every unit test.
	private MockWebServer server;

	@BeforeEach
	public void setupTest() throws IOException {
		server = new MockWebServer();
		// Start the server.
		server.start();
	}

	@AfterEach
	public void teardownTest() throws IOException {
		// Shut down the server. Instances cannot be reused.
		server.shutdown();
	}

	@Test
	public void testCheckBorisIsEligibleForCard1() {

		Applicant applicant = new Applicant("Boris", "Boris@J.com", "143 Icy Road");
		Eligibility eligibility = Eligibility.newEligibility(2).addCard("C1").build();

		Response mockResponse = new Response();

		when(okHttpClient.newCall(ArgumentMatchers.any()).execute())
				.thenReturn(objMapper.writeValueAsString(eligibility));

		String eligibilityResult = service.orchestrateEligibilityCheck(applicant);
	}

}
