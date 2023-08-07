package com.quantum.onboarding.exception;

public class NotApprovedException extends Exception {

    public NotApprovedException() {
        super("This workflow isn't approved!");
    }

    public NotApprovedException(String message) {
        super(message);
    }
    
}
