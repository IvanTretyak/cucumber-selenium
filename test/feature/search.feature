Feature: search with google
  Scenario: search with google
    Given i visit google homepage
    When i search with fine
    Then i should to see results
