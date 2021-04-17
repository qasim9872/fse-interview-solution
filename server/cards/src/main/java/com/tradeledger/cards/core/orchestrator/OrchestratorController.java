package com.tradeledger.cards.core.orchestrator;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeledger.cards.eligibility.common.domain.Applicant;

@RestController
@RequestMapping("orchestrate")
public class OrchestratorController {

	@Autowired
	private OrchestratorService service;

	@PostMapping(path = "eligibility-check", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	public String orchestrateEligibilityCheckRequest(@Valid @RequestBody Applicant applicant) throws Exception {

		return service.orchestrateEligibilityCheck(applicant);
	}

}
