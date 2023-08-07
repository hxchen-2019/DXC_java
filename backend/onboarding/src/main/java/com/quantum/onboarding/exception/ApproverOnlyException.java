package com.quantum.onboarding.exception;

public class ApproverOnlyException extends Exception{

    public ApproverOnlyException(String message) {
        super(message);
    }

    public ApproverOnlyException() {
        super("This feature is only for Approvers!");
    }
}
