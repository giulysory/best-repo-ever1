public with sharing class ContactCreator {
    @AuraEnabled
    public static void createContact(String firstName, String lastName, String phone){
        Contact newContact = new Contact();
        
        newContact.firstName = firstName;
        newContact.lastName = lastName;
        newContact.phone = phone;

        insert newContact;
    }
    
}
