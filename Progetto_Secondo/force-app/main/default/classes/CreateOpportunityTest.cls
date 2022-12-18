@isTest
private class CreateOpportunityTest {
    @isTest static void test() {
        String name = 'The greatest opportunity ever';
        Date closeDate = Date.newInstance(2023, 2, 28);
        String stageName = 'Prospecting';
        Test.startTest();
        CreateOpportunity.createOpp(name, closeDate, stageName);
        Test.stopTest();
        Opportunity opp = [SELECT Name, CloseDate, StageName 
            FROM Opportunity 
            WHERE Name = :name AND CloseDate = :closeDate AND StageName = :stageName
        ];
        System.assert(opp != null);
    }
}
