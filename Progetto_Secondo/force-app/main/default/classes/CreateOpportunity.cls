public with sharing class CreateOpportunity {
    @AuraEnabled
    public static void createOpp(String name, Date close, String stage) {
        Opportunity opp = new Opportunity(
            Name = name,    
            CloseDate = close,   
            StageName = stage
        );
        try {
            insert opp;
        } catch (Exception e) {
            System.debug('Insertion failed: ' + e.getMessage());
        }
    }
}
