package com.tradeledger.cards.core.orchestrator;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static com.tradeledger.cards.thirdparty.eligibility.Eligibility.newEligibility;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradeledger.cards.eligibility.common.domain.Applicant;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = OrchestratorController.class)
public class OrchestratorControllerTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private ObjectMapper objMapper;

	@MockBean
	private OrchestratorService service;

	@Test
	public void orchestrateEligibilityCheckRequest() throws Exception {

		Applicant applicant = new Applicant("Boris", "Boris@J.com", "143 Icy Road");

		when(service.orchestrateEligibilityCheck(applicant))
				.thenReturn(objMapper.writeValueAsString(newEligibility(2).addCard("C1").addCard("C2").build()));

		mvc.perform(post("/orchestrate/eligibility-check").contentType("application/json")
				.content(objMapper.writeValueAsString(applicant))).andExpect(status().isOk());
	}

	@Test
	public void orchestrateEligibilityCheckBadRequestError() throws Exception {
		mvc.perform(post("/orchestrate/eligibility-check").contentType("application/json"))
				.andExpect(status().isBadRequest());
	}

}
