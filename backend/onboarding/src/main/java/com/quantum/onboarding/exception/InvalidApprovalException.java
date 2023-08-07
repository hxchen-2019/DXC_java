package com.quantum.onboarding.exception;

public class InvalidApprovalException extends Exception{
    public InvalidApprovalException() {
        super("This workflow is not ready for approval!");
    }
}
